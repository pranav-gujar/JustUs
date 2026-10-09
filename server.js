const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const crypto = require('crypto');

const app = express();
const server = http.createServer(app);

// In-memory media transfer buffer (supports voice notes, photos, video clips up to 30MB)
const io = new Server(server, {
  maxHttpBufferSize: 30 * 1024 * 1024,
  cors: {
    origin: '*',
  }
});

const PORT = process.env.PORT || 3000;

// In-Memory store ONLY - zero disk storage, zero database
// roomId -> { id, hostName, users: Map<socketId, { name, joinedAt }>, createdAt }
const activeRooms = new Map();

// Generate warm, cute room codes (e.g. "coffee-421", "starlight-805", "sunset-219")
function generateRoomId() {
  const vibes = [
    'coffee', 'chai', 'sunset', 'starlight', 'breeze', 'cloud', 'velvet',
    'honey', 'peaches', 'latte', 'cozy', 'whisper', 'spark', 'hazel'
  ];
  const vibe = vibes[Math.floor(Math.random() * vibes.length)];
  const num = Math.floor(100 + Math.random() * 900);
  return `${vibe}-${num}`;
}

// Static assets
app.use(express.static(path.join(__dirname, 'public')));

// Clean routing for room links
app.get('/r/:roomId', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
  let currentRoomId = null;
  let currentUsername = null;

  // 1. Create a table
  socket.on('create-room', ({ username }, callback) => {
    let roomId = generateRoomId();
    while (activeRooms.has(roomId)) {
      roomId = generateRoomId();
    }

    activeRooms.set(roomId, {
      id: roomId,
      hostName: (username || '').trim() || 'Someone special',
      users: new Map(),
      createdAt: Date.now()
    });

    if (typeof callback === 'function') {
      callback({ success: true, roomId });
    }
  });

  // 2. Query room info (to show cute "Pranav invited you" greeting)
  socket.on('get-room-info', ({ roomId }, callback) => {
    const cleanRoomId = (roomId || '').trim().toLowerCase();
    const room = activeRooms.get(cleanRoomId);
    if (room && typeof callback === 'function') {
      callback({
        exists: true,
        hostName: room.hostName,
        userCount: room.users.size
      });
    } else if (typeof callback === 'function') {
      callback({ exists: false });
    }
  });

  // 3. Join a table (strict 2-person limit)
  socket.on('join-room', ({ roomId, username }, callback) => {
    const cleanRoomId = (roomId || '').trim().toLowerCase();
    const cleanUsername = (username || '').trim() || 'Guest';

    if (!cleanRoomId) {
      return callback && callback({ success: false, reason: 'Invalid room link' });
    }

    let room = activeRooms.get(cleanRoomId);

    // Auto-create room if accessed via direct custom code
    if (!room) {
      room = {
        id: cleanRoomId,
        hostName: cleanUsername,
        users: new Map(),
        createdAt: Date.now()
      };
      activeRooms.set(cleanRoomId, room);
    }

    // Strict 2-person table cap
    if (room.users.size >= 2 && !room.users.has(socket.id)) {
      return callback && callback({
        success: false,
        reason: 'This table is already occupied by two people ✨'
      });
    }

    currentRoomId = cleanRoomId;
    currentUsername = cleanUsername;
    socket.join(cleanRoomId);

    room.users.set(socket.id, {
      name: cleanUsername,
      joinedAt: Date.now()
    });

    // Detect if partner is already sitting at the table
    let partner = null;
    for (const [id, user] of room.users.entries()) {
      if (id !== socket.id) {
        partner = user;
        break;
      }
    }

    // Notify the other person
    socket.to(cleanRoomId).emit('partner-joined', {
      name: cleanUsername,
      timestamp: Date.now()
    });

    if (typeof callback === 'function') {
      callback({
        success: true,
        roomId: cleanRoomId,
        partner: partner ? { name: partner.name } : null
      });
    }
  });

  // 4. Send message, voice note, or media
  socket.on('send-message', (data, callback) => {
    if (!currentRoomId || !activeRooms.has(currentRoomId)) {
      return callback && callback({ success: false, reason: 'Room is no longer active' });
    }

    const payload = {
      id: crypto.randomUUID(),
      senderName: currentUsername || 'Guest',
      senderId: socket.id,
      text: data.text || '',
      media: data.media || null,          // Base64 voice note or photo/video
      mediaType: data.mediaType || null,  // 'audio', 'image', 'video'
      mediaName: data.mediaName || null,
      timestamp: Date.now()
    };

    // Forward instantly to partner in RAM only (0 disk writes)
    socket.to(currentRoomId).emit('receive-message', payload);

    if (typeof callback === 'function') {
      callback({ success: true, messageId: payload.id, timestamp: payload.timestamp });
    }
  });

  // 5. Typing indicator
  socket.on('typing', ({ isTyping }) => {
    if (currentRoomId) {
      socket.to(currentRoomId).emit('partner-typing', {
        isTyping: !!isTyping,
        name: currentUsername
      });
    }
  });

  // 6. Vanish / Leave Table
  socket.on('vanish-room', () => {
    if (currentRoomId && activeRooms.has(currentRoomId)) {
      io.to(currentRoomId).emit('room-vanished', {
        by: currentUsername,
        reason: `${currentUsername} left the table. The conversation has gently faded away.`
      });

      activeRooms.delete(currentRoomId);
      currentRoomId = null;
    }
  });

  // 7. Disconnection
  socket.on('disconnect', () => {
    if (currentRoomId && activeRooms.has(currentRoomId)) {
      const room = activeRooms.get(currentRoomId);
      room.users.delete(socket.id);

      socket.to(currentRoomId).emit('partner-left', {
        name: currentUsername,
        timestamp: Date.now()
      });

      // When everyone leaves, delete table from memory
      if (room.users.size === 0) {
        activeRooms.delete(currentRoomId);
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`✨ JustUs is running live at http://localhost:${PORT}`);
});
