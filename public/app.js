/* ==========================================================================
   JustUs — Client Application Engine
   Boutique Aesthetic • Vector Iconography • Voice Notes • 0-Storage
   ========================================================================== */

(() => {
  // --- Vector SVG Reactions Library (Zero Old-Fashioned Emojis) ---
  const VECTOR_REACTIONS = [
    {
      id: 'heart',
      name: 'Heart',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" style="color:#fb7185"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
    },
    {
      id: 'sparkle',
      name: 'Sparkle',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" style="color:#fde047"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>`
    },
    {
      id: 'flame',
      name: 'Flame',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" style="color:#f97316"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`
    },
    {
      id: 'star',
      name: 'Star',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" style="color:#facc15"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
    },
    {
      id: 'moon',
      name: 'Moon',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" style="color:#a78bfa"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
    },
    {
      id: 'coffee',
      name: 'Coffee',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#fdba74"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`
    },
    {
      id: 'wine',
      name: 'Wine',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#f43f5e"><path d="M8 22h8"/><path d="M12 11v11"/><path d="m19 3-4 8H9L5 3z"/></svg>`
    },
    {
      id: 'smile',
      name: 'Smile',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#34d399"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`
    },
    {
      id: 'wink',
      name: 'Wink',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#38bdf8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M14 9a2 2 0 0 1 2 2"/></svg>`
    },
    {
      id: 'rose',
      name: 'Flower',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#ec4899"><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"/></svg>`
    },
    {
      id: 'wave',
      name: 'Wave',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#fde047"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`
    },
    {
      id: 'gem',
      name: 'Gem',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:#60a5fa"><polygon points="6 3 18 3 22 9 12 22 2 9 6 3"/></svg>`
    }
  ];

  // --- State Variables ---
  let socket = null;
  let currentRoomId = null;
  let myUsername = '';
  let partnerUsername = null;
  let typingTimer = null;
  let pendingAttachment = null;

  // Voice recording state
  let mediaRecorder = null;
  let audioChunks = [];
  let recordingInterval = null;
  let recordingSeconds = 0;

  // --- DOM Elements ---
  const views = {
    lobby: document.getElementById('lobby-view'),
    chat: document.getElementById('chat-view'),
    vanished: document.getElementById('vanished-view')
  };

  const shareModal = document.getElementById('share-modal');
  const vanishConfirmModal = document.getElementById('vanish-confirm-modal');
  const mediaLightbox = document.getElementById('media-lightbox');
  const toastHub = document.getElementById('toast-hub');

  // Lobby elements
  const hostCard = document.getElementById('host-card');
  const inviteCard = document.getElementById('invite-card');
  const inviterGreeting = document.getElementById('inviter-greeting');
  const hostNameInput = document.getElementById('host-name-input');
  const inviteeNameInput = document.getElementById('invitee-name-input');
  const btnCreateTable = document.getElementById('btn-create-table');
  const btnPullChair = document.getElementById('btn-pull-chair');
  const manualCodeInput = document.getElementById('manual-code-input');
  const btnManualJoin = document.getElementById('btn-manual-join');

  // Share modal elements
  const shareLinkInput = document.getElementById('share-link-input');
  const btnCopyLink = document.getElementById('btn-copy-link');
  const shareCodeChip = document.getElementById('share-code-chip');
  const btnCopyCode = document.getElementById('btn-copy-code');
  const btnEnterTableNow = document.getElementById('btn-enter-table-now');

  // Chat Topbar
  const partnerInitial = document.getElementById('partner-initial');
  const onlineGlowDot = document.getElementById('online-glow-dot');
  const partnerDisplayName = document.getElementById('partner-display-name');
  const partnerSubtext = document.getElementById('partner-subtext');
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const themeMenu = document.getElementById('theme-menu');
  const themeOptions = document.querySelectorAll('.theme-opt');
  const btnReopenShare = document.getElementById('btn-reopen-share');
  const btnOpenVanish = document.getElementById('btn-open-vanish');

  // Chat Message elements
  const messagesContainer = document.getElementById('messages-container');
  const typingPill = document.getElementById('typing-pill');
  const typingText = document.getElementById('typing-text');

  // Drawers & Trays
  const icebreakerDrawer = document.getElementById('icebreaker-drawer');
  const btnToggleIcebreakers = document.getElementById('btn-toggle-icebreakers');
  const btnCloseIcebreakers = document.getElementById('btn-close-icebreakers');
  const icebreakerChips = document.querySelectorAll('.icebreaker-chip');

  const mediaPreviewTray = document.getElementById('media-preview-tray');
  const trayImage = document.getElementById('tray-image');
  const trayVideo = document.getElementById('tray-video');
  const trayAudioIcon = document.getElementById('tray-audio-icon');
  const trayFilename = document.getElementById('tray-filename');
  const trayFilesize = document.getElementById('tray-filesize');
  const btnRemoveAttachment = document.getElementById('btn-remove-attachment');

  const voiceRecordingBar = document.getElementById('voice-recording-bar');
  const recTimer = document.getElementById('rec-timer');
  const btnCancelVoice = document.getElementById('btn-cancel-voice');
  const btnSendVoice = document.getElementById('btn-send-voice');
  const btnRecordVoice = document.getElementById('btn-record-voice');

  const reactionDrawer = document.getElementById('reaction-drawer');
  const btnToggleReactions = document.getElementById('btn-toggle-reactions');
  const reactionGrid = document.getElementById('reaction-grid');

  // Composer
  const messageInput = document.getElementById('message-input');
  const btnSubmitMessage = document.getElementById('btn-submit-message');
  const mediaFileInput = document.getElementById('media-file-input');
  const btnPickAttachment = document.getElementById('btn-pick-attachment');

  // Lightbox & Confirm
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');
  const btnCloseLightbox = document.getElementById('btn-close-lightbox');
  const btnStayChatting = document.getElementById('btn-stay-chatting');
  const btnConfirmVanish = document.getElementById('btn-confirm-vanish');
  const btnNewTable = document.getElementById('btn-new-table');

  // --- Switch View Helper ---
  function showView(viewKey) {
    Object.keys(views).forEach(key => {
      if (key === viewKey) {
        views[key].classList.remove('hidden');
      } else {
        views[key].classList.add('hidden');
      }
    });
  }

  // --- Clean Vector Toast ---
  function notify(text) {
    const toast = document.createElement('div');
    toast.className = 'toast-pill';
    toast.innerHTML = `
      <svg class="ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${escapeHtml(text)}</span>
    `;
    toastHub.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 260);
    }, 2600);
  }

  // --- Initialize Socket ---
  function getSocket() {
    if (!socket) {
      socket = io();

      socket.on('partner-joined', (data) => {
        partnerUsername = data.name;
        updatePresence(true, data.name);
        appendNotice(`<strong>${escapeHtml(data.name)}</strong> pulled up a chair.`);
        notify(`${data.name} connected`);
        shareModal.classList.add('hidden');
      });

      socket.on('partner-left', (data) => {
        updatePresence(false, data.name);
        appendNotice(`<strong>${escapeHtml(data.name || 'Your partner')}</strong> stepped away.`);
      });

      socket.on('receive-message', (data) => {
        renderReceivedMessage(data);
      });

      socket.on('partner-typing', ({ isTyping, name }) => {
        if (isTyping) {
          typingText.textContent = `${name || 'Partner'} is typing...`;
          typingPill.classList.remove('hidden');
        } else {
          typingPill.classList.add('hidden');
        }
      });

      socket.on('room-vanished', (data) => {
        handleRoomVanished(data);
      });
    }
    return socket;
  }

  // --- Check URL Invite ---
  function checkUrlInvite() {
    const parts = window.location.pathname.split('/').filter(Boolean);
    const params = new URLSearchParams(window.location.search);
    let code = null;

    if (parts[0] === 'r' && parts[1]) code = parts[1].toLowerCase();
    else if (params.get('room')) code = params.get('room').toLowerCase();

    if (code) {
      currentRoomId = code;
      hostCard.classList.add('hidden');
      inviteCard.classList.remove('hidden');

      const s = getSocket();
      s.emit('get-room-info', { roomId: code }, (info) => {
        if (info && info.exists && info.hostName) {
          inviterGreeting.textContent = `${info.hostName} saved a table for you`;
        }
      });
    }
  }

  // --- Presence UI ---
  function updatePresence(isOnline, name) {
    if (isOnline) {
      partnerDisplayName.textContent = name || 'Partner';
      partnerInitial.textContent = (name || 'P')[0].toUpperCase();
      onlineGlowDot.classList.add('online');
      partnerSubtext.textContent = 'Active now';
    } else {
      onlineGlowDot.classList.remove('online');
      partnerSubtext.textContent = 'Stepped away';
    }
  }

  // --- Create Table ---
  btnCreateTable.addEventListener('click', () => {
    myUsername = hostNameInput.value.trim() || 'Host';
    const s = getSocket();

    s.emit('create-room', { username: myUsername }, (res) => {
      if (res && res.success) {
        currentRoomId = res.roomId;
        joinTable(currentRoomId, myUsername, true);
      }
    });
  });

  // --- Pull up Chair (Invitee) ---
  btnPullChair.addEventListener('click', () => {
    myUsername = inviteeNameInput.value.trim() || 'Guest';
    if (!currentRoomId) return;
    joinTable(currentRoomId, myUsername, false);
  });

  // --- Manual Code Join ---
  btnManualJoin.addEventListener('click', () => {
    const code = manualCodeInput.value.trim().toLowerCase();
    if (!code) {
      notify('Please enter a room code');
      return;
    }
    myUsername = hostNameInput.value.trim() || 'Guest';
    currentRoomId = code;
    joinTable(currentRoomId, myUsername, false);
  });

  // --- Join Table Core ---
  function joinTable(roomId, username, isCreator) {
    const s = getSocket();
    s.emit('join-room', { roomId, username }, (res) => {
      if (res && res.success) {
        showView('chat');
        window.history.replaceState(null, '', `/r/${roomId}`);

        if (res.partner) {
          partnerUsername = res.partner.name;
          updatePresence(true, res.partner.name);
          appendNotice(`Sitting with <strong>${escapeHtml(res.partner.name)}</strong>.`);
        } else {
          updatePresence(false, null);
          if (isCreator) {
            setupShareModal(roomId);
            shareModal.classList.remove('hidden');
          }
        }
      } else {
        notify(res ? res.reason : 'Table is unavailable');
      }
    });
  }

  // --- Share Modal ---
  function setupShareModal(roomId) {
    const link = `${window.location.origin}/r/${roomId}`;
    shareLinkInput.value = link;
    shareCodeChip.textContent = roomId;
  }

  btnCopyLink.addEventListener('click', () => {
    navigator.clipboard.writeText(shareLinkInput.value).then(() => {
      notify('Invite link copied');
      btnCopyLink.querySelector('span').textContent = 'Copied!';
      setTimeout(() => btnCopyLink.querySelector('span').textContent = 'Copy Link', 2000);
    });
  });

  btnCopyCode.addEventListener('click', () => {
    navigator.clipboard.writeText(shareCodeChip.textContent).then(() => {
      notify('Code copied');
      btnCopyCode.querySelector('span').textContent = 'Copied!';
      setTimeout(() => btnCopyCode.querySelector('span').textContent = 'Copy Code', 2000);
    });
  });

  btnEnterTableNow.addEventListener('click', () => {
    shareModal.classList.add('hidden');
  });

  btnReopenShare.addEventListener('click', () => {
    if (currentRoomId) {
      setupShareModal(currentRoomId);
      shareModal.classList.remove('hidden');
    }
  });

  // --- Mood Themes ---
  btnThemeToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    themeMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    themeMenu.classList.add('hidden');
  });

  themeOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const theme = opt.dataset.theme;
      document.documentElement.setAttribute('data-theme', theme);
      themeOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      notify(`Theme switched to ${opt.textContent}`);
    });
  });

  // --- Icebreakers ---
  btnToggleIcebreakers.addEventListener('click', () => {
    icebreakerDrawer.classList.toggle('hidden');
  });

  btnCloseIcebreakers.addEventListener('click', () => {
    icebreakerDrawer.classList.add('hidden');
  });

  icebreakerChips.forEach(chip => {
    chip.addEventListener('click', () => {
      messageInput.value = chip.textContent;
      messageInput.focus();
      icebreakerDrawer.classList.add('hidden');
    });
  });

  // --- Vector Reaction Drawer Setup ---
  function initReactionGrid() {
    reactionGrid.innerHTML = '';
    VECTOR_REACTIONS.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'vector-reaction-btn';
      btn.title = item.name;
      btn.innerHTML = item.svg;
      btn.addEventListener('click', () => {
        // Send as a dedicated reaction sticker
        sendVectorReaction(item);
        reactionDrawer.classList.add('hidden');
      });
      reactionGrid.appendChild(btn);
    });
  }

  btnToggleReactions.addEventListener('click', (e) => {
    e.stopPropagation();
    reactionDrawer.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!reactionDrawer.contains(e.target) && !btnToggleReactions.contains(e.target)) {
      reactionDrawer.classList.add('hidden');
    }
  });

  function sendVectorReaction(item) {
    const payload = {
      text: '',
      media: item.svg,
      mediaType: 'reaction',
      mediaName: item.name
    };

    const s = getSocket();
    s.emit('send-message', payload, (res) => {
      if (res && res.success) {
        renderMyMessage({
          id: res.messageId,
          text: '',
          media: payload.media,
          mediaType: 'reaction',
          mediaName: item.name,
          timestamp: res.timestamp
        });
      }
    });
  }

  // --- Voice Notes (Record & Send) ---
  btnRecordVoice.addEventListener('click', async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunks = [];
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = () => {
          pendingAttachment = {
            dataUrl: reader.result,
            type: 'audio',
            name: 'Voice Note',
            size: `${recordingSeconds}s`
          };
          showAttachmentTray(pendingAttachment);
        };
        reader.readAsDataURL(audioBlob);
        stream.getTracks().forEach(t => t.stop());
      };

      mediaRecorder.start();
      recordingSeconds = 0;
      recTimer.textContent = '0:00';
      voiceRecordingBar.classList.remove('hidden');

      recordingInterval = setInterval(() => {
        recordingSeconds++;
        const mins = Math.floor(recordingSeconds / 60);
        const secs = recordingSeconds % 60;
        recTimer.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      }, 1000);

    } catch (err) {
      notify('Microphone access is needed for voice notes');
    }
  });

  btnCancelVoice.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    clearInterval(recordingInterval);
    voiceRecordingBar.classList.add('hidden');
    pendingAttachment = null;
  });

  btnSendVoice.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    clearInterval(recordingInterval);
    voiceRecordingBar.classList.add('hidden');
    setTimeout(() => {
      handleSendMessage();
    }, 200);
  });

  // --- Attachments ---
  btnPickAttachment.addEventListener('click', () => {
    mediaFileInput.click();
  });

  mediaFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 30 * 1024 * 1024) {
      notify('Please select media under 30MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      let type = 'file';
      if (file.type.startsWith('image/')) type = 'image';
      else if (file.type.startsWith('video/')) type = 'video';
      else if (file.type.startsWith('audio/')) type = 'audio';

      pendingAttachment = {
        dataUrl: event.target.result,
        type: type,
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(1) + ' MB'
      };

      showAttachmentTray(pendingAttachment);
    };

    reader.readAsDataURL(file);
    mediaFileInput.value = '';
  });

  function showAttachmentTray(att) {
    trayFilename.textContent = att.name;
    trayFilesize.textContent = att.size;

    trayImage.classList.add('hidden');
    trayVideo.classList.add('hidden');
    trayAudioIcon.classList.add('hidden');

    if (att.type === 'image') {
      trayImage.src = att.dataUrl;
      trayImage.classList.remove('hidden');
    } else if (att.type === 'video') {
      trayVideo.src = att.dataUrl;
      trayVideo.classList.remove('hidden');
    } else if (att.type === 'audio') {
      trayAudioIcon.classList.remove('hidden');
    }

    mediaPreviewTray.classList.remove('hidden');
  }

  btnRemoveAttachment.addEventListener('click', () => {
    pendingAttachment = null;
    mediaPreviewTray.classList.add('hidden');
    trayImage.src = '';
    trayVideo.src = '';
  });

  // --- Send Message ---
  function handleSendMessage() {
    const text = messageInput.value.trim();
    if (!text && !pendingAttachment) return;

    const payload = {
      text: text,
      media: pendingAttachment ? pendingAttachment.dataUrl : null,
      mediaType: pendingAttachment ? pendingAttachment.type : null,
      mediaName: pendingAttachment ? pendingAttachment.name : null
    };

    const s = getSocket();
    s.emit('send-message', payload, (res) => {
      if (res && res.success) {
        renderMyMessage({
          id: res.messageId,
          text: payload.text,
          media: payload.media,
          mediaType: payload.mediaType,
          mediaName: payload.mediaName,
          timestamp: res.timestamp
        });

        messageInput.value = '';
        messageInput.style.height = '24px';
        pendingAttachment = null;
        mediaPreviewTray.classList.add('hidden');
        s.emit('typing', { isTyping: false });
      }
    });
  }

  btnSubmitMessage.addEventListener('click', handleSendMessage);

  messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  });

  messageInput.addEventListener('input', () => {
    messageInput.style.height = '24px';
    messageInput.style.height = Math.min(messageInput.scrollHeight, 100) + 'px';

    if (socket && currentRoomId) {
      socket.emit('typing', { isTyping: true });
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        socket.emit('typing', { isTyping: false });
      }, 1500);
    }
  });

  // --- Message Renderers ---
  function renderMyMessage(msg) {
    const row = document.createElement('div');
    row.className = 'chat-row me';

    let mediaHtml = '';
    if (msg.media) {
      if (msg.mediaType === 'reaction') {
        mediaHtml = `<div class="reaction-sticker">${msg.media}</div>`;
      } else if (msg.mediaType === 'image') {
        mediaHtml = `<div class="chat-media-wrap" onclick="viewFullMedia('${msg.media}', 'image')">
          <img src="${msg.media}" alt="photo">
        </div>`;
      } else if (msg.mediaType === 'video') {
        mediaHtml = `<div class="chat-media-wrap" onclick="viewFullMedia('${msg.media}', 'video')">
          <video src="${msg.media}" controls></video>
        </div>`;
      } else if (msg.mediaType === 'audio') {
        mediaHtml = `<div class="voice-bubble-player">
          <audio src="${msg.media}" controls></audio>
        </div>`;
      }
    }

    const textHtml = msg.text ? `<div>${escapeHtml(msg.text)}</div>` : '';
    const timeStr = formatClock(msg.timestamp);

    row.innerHTML = `
      <div class="chat-bubble">
        ${mediaHtml}
        ${textHtml}
        <div class="chat-meta">
          <span>${timeStr}</span>
          <svg class="ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      </div>
    `;

    messagesContainer.appendChild(row);
    scrollToEnd();
  }

  function renderReceivedMessage(msg) {
    const row = document.createElement('div');
    row.className = 'chat-row partner';

    let mediaHtml = '';
    if (msg.media) {
      if (msg.mediaType === 'reaction') {
        mediaHtml = `<div class="reaction-sticker">${msg.media}</div>`;
      } else if (msg.mediaType === 'image') {
        mediaHtml = `<div class="chat-media-wrap" onclick="viewFullMedia('${msg.media}', 'image')">
          <img src="${msg.media}" alt="photo">
        </div>`;
      } else if (msg.mediaType === 'video') {
        mediaHtml = `<div class="chat-media-wrap" onclick="viewFullMedia('${msg.media}', 'video')">
          <video src="${msg.media}" controls></video>
        </div>`;
      } else if (msg.mediaType === 'audio') {
        mediaHtml = `<div class="voice-bubble-player">
          <audio src="${msg.media}" controls></audio>
        </div>`;
      }
    }

    const textHtml = msg.text ? `<div>${escapeHtml(msg.text)}</div>` : '';
    const timeStr = formatClock(msg.timestamp);

    row.innerHTML = `
      <div class="chat-bubble">
        ${mediaHtml}
        ${textHtml}
        <div class="chat-meta">
          <span>${timeStr}</span>
        </div>
      </div>
    `;

    messagesContainer.appendChild(row);
    scrollToEnd();
  }

  function appendNotice(html) {
    const div = document.createElement('div');
    div.className = 'welcome-whisper';
    div.innerHTML = html;
    messagesContainer.appendChild(div);
    scrollToEnd();
  }

  function scrollToEnd() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function formatClock(timestamp) {
    const d = new Date(timestamp || Date.now());
    let h = d.getHours();
    let m = d.getMinutes();
    const ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    m = m < 10 ? '0' + m : m;
    return `${h}:${m} ${ampm}`;
  }

  function escapeHtml(str) {
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
  }

  // --- Lightbox ---
  window.viewFullMedia = (src, type) => {
    lightboxImg.classList.add('hidden');
    lightboxVideo.classList.add('hidden');

    if (type === 'image') {
      lightboxImg.src = src;
      lightboxImg.classList.remove('hidden');
    } else if (type === 'video') {
      lightboxVideo.src = src;
      lightboxVideo.classList.remove('hidden');
    }

    mediaLightbox.classList.remove('hidden');
  };

  btnCloseLightbox.addEventListener('click', () => {
    mediaLightbox.classList.add('hidden');
    lightboxImg.src = '';
    lightboxVideo.src = '';
  });

  // --- Vanish Table Logic ---
  btnOpenVanish.addEventListener('click', () => {
    vanishConfirmModal.classList.remove('hidden');
  });

  btnStayChatting.addEventListener('click', () => {
    vanishConfirmModal.classList.add('hidden');
  });

  btnConfirmVanish.addEventListener('click', () => {
    vanishConfirmModal.classList.add('hidden');
    if (socket && currentRoomId) {
      socket.emit('vanish-room');
    }
  });

  function handleRoomVanished(data) {
    messagesContainer.innerHTML = '';
    pendingAttachment = null;
    currentRoomId = null;

    if (socket) {
      socket.disconnect();
      socket = null;
    }

    showView('vanished');
    window.history.replaceState(null, '', '/');
  }

  btnNewTable.addEventListener('click', () => {
    window.location.href = '/';
  });

  // --- Boot Logic ---
  initReactionGrid();
  checkUrlInvite();

})();
