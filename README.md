# ✨ JustUs — Our Private Corner

> **A private, cozy table for two. No coins, no accounts, leaves no trace once you leave.**

![JustUs Preview](public/favicon.svg)

---

## 🌟 Why JustUs?
Traditional dating apps (like FRND, Tinder, etc.) often trap users behind steep paywalls, charging ₹200+ just to send a few messages. 

**JustUs** was engineered to solve this problem completely:
* **Zero Paywalls:** Unlimited, free, real-time messaging with no subscriptions or coin limits.
* **100% Ephemeral (RAM Only):** No MongoDB, no SQL, no disks. All messages, voice notes, photos, and videos stream directly through in-memory WebSockets and disappear forever.
* **Strict 2-Person Lock:** The moment 2 people enter a room, it locks automatically. No third party or eavesdropper can ever enter.
* **Fairy World Aesthetic:** Enchanted twilight theme with floating stardust fireflies, crystal glassmorphism, and gentle ambient auroras.
* **Clean Vector Iconography:** Zero cheesy system emojis. Every badge, reaction, and control uses modern, crisp vector SVG icons.
* **Voice Notes & Media:** Record voice notes with the built-in audio recorder and share photos/videos up to 30MB with a full-screen lightbox.
* **Icebreaker Starters:** Tap the lightbulb icon anytime for effortless conversation starters.
* **Peaceful Vanish (Self-Destruct):** Tap **"Vanish Table"** at any moment to gently close the room and erase all traces permanently.
* **99.9% Mobile Optimized:** Designed for mobile phones with Dynamic Viewport Height (`100dvh`), safe-area inset protection, and no iOS auto-zoom glitches.

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/pranav-gujar/JustUs.git
cd JustUs

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit: `http://localhost:3000`

---

## 🌐 Deploy Free on Render.com in 2 Minutes

To host this 24/7 for ₹0 with a free secure HTTPS link (`https://your-name.onrender.com`):

1. Go to **[Render.com](https://render.com)** and sign in with your GitHub account.
2. Click **New +** $\rightarrow$ **Web Service**.
3. Select your **`JustUs`** repository.
4. Configure settings:
   * **Name:** `justus` (or whatever you prefer)
   * **Region:** Any (Singapore or Frankfurt is great for India/Asia)
   * **Runtime:** `Node`
   * **Build Command:** `npm install`
   * **Start Command:** `npm start`
   * **Instance Type:** `Free`
5. Click **Deploy Web Service**!

Render will build and give you a live URL like:  
`https://justus-chat.onrender.com`

> **💡 Pro-Tip to keep it awake 24/7:**  
> Free Render servers go to sleep after 15 minutes of inactivity. Set up a free monitor on [UptimeRobot.com](https://uptimerobot.com) to ping your link every 10 minutes. This ensures the server stays awake and opens instantly when shared!

---

## 🛠️ Tech Stack
* **Backend:** Node.js, Express, Socket.IO (In-Memory Relay, 30MB buffer)
* **Frontend:** Vanilla HTML5, Modern CSS (Glassmorphism, CSS Animations, `100dvh`), Vanilla JavaScript
* **Audio:** Web Audio API & MediaRecorder API for native voice notes
* **Icons:** Custom Inline Vector SVGs

---

## 🔒 Privacy & Security Architecture
* **0-Persistence:** No databases, no file system writes.
* **Session Lifecycle:** Active rooms live only in a JavaScript `Map()` in memory.
* When either user taps "Vanish Table" or all participants disconnect, the room is instantly purged from server memory (`rooms.delete(roomId)`).

---

Crafted with care ✨
