/**
 * ==========================================================================
 * 🎂 CINEMATIC BIRTHDAY SURPRISE WEBSITE FOR NATHIYA
 * Interactive short film storytelling experience
 * ==========================================================================
 */

// ⚙️ CENTRAL CONFIGURATION — Customize all personal elements here
const CONFIG = {
  recipientName: "Nathiya",
  birthday: "18-September",
  password: "CHANGE_PASSWORD", // Also accepts "10August", "Nathiya", or custom password
  secretPassword: "CHANGE_SECRET", // Also accepts "Nathiya", "magic", or custom password
  birthdayPhoto: "assets/images/birthday-photo.png ",
  
  // Envelopes inside the Secret Vault
  vaultLetters: [
    {
      tag: "Cute 🎀",
      title: "Little Things",
      body: "The way you smile without even noticing... honestly, that's my favorite piece of art in this entire universe."
    },
    {
      tag: "Funny 😂",
      title: "Scientific Fact",
      body: "Science says gravity pulls everything toward the ground ..., somehow, you keep pulling my attention toward you.😂"
    },
    {
      tag: "Emotional 🥺",
      title: "A Gentle Reminder",
      body: "No matter how many people come and go in life, some quietly become a part of your heart, you're one of those people for me.🥺"
    },
    {
      tag: "Appreciation 🌸",
      title: "Gratitude",
      body: "I may not say it often, but I'm genuinely grateful for you. Thank you for being someone who makes my life feel a little warmer, happier and more meaningfull.🌸"
    },
    {
      tag: "Playful 💫",
      title: "Birthday Rule #1",
      body: "I have a Little complaint about you..., You keep showing up in my mind without permission.💫"
    }
  ],
  
  // 21 Thanglish Lines for the Galaxy of Stars
  thanglishLines: [
    "Enna magic panniyo theriyala... aana unna paatha odane smile vandhuduchu.",
    "Google la search pannalum, unna maari oruthanga kidaikkala.",
    "Un smile-ku brightness adjust panna sun-kooda yosikanum.",
    "Nee siricha... indha galaxy-ku innum konjam light vandhuruchu.",
    "En playlist-la favourite song iruku... aana adha vida favourite smile onnu iruku.",
    "Konjam careful-ah iru... romba cute-ah irukradhu legal-ah irukuma-nu doubt.",
    "Indha star-a click pannadhu vida... un presence dhaan lucky click.",
    "Moon-ku night shift... aana un smile-ku full-time fan.",
    "Screenshot edukka mudiyum... aana indha moment save panna mudiyadhu.",
    "Nee pesama irundhalum... silence kooda azhaga feel aagudhu.",
    "Unna paatha apram dhaan... beautiful-na definition update panniten.",
    "Life oru movie-na... heroine already cast aayitaanga.",
    "Un smile-ku like button irundha... infinity click panniruppen.",
    "Indha star glow pannudhu... aana un eyes-kitta competition illa.",
    "Nee happy-ah irundha podhum... adhuve innaiku biggest celebration.",
    "Universe romba perusu... aana en attention ellam orae direction.",
    "Next star click pannradhukku munadi... konjam smile pannalama?",
    "Romba yosikadhe..., Nathiya! Innum konjam explore pannina... heart full-a surprise waiting."
  ]
};

// ==========================================================================
// 🎵 CINEMATIC WEB AUDIO SYNTHESIZER (Guaranteed 100% offline & reliable)
// ==========================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ambientInterval = null;
    this.pianoNotes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]; // C major
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    const hudBtn = document.getElementById('audio-toggle-btn');
    if (hudBtn) {
      if (this.isMuted) {
        hudBtn.classList.add('muted');
        const text = hudBtn.querySelector('.hud-label');
        if (text) text.textContent = 'Muted';
      } else {
        hudBtn.classList.remove('muted');
        const text = hudBtn.querySelector('.hud-label');
        if (text) text.textContent = 'Sound ON';
        this.playStarChime();
      }
    }
  }

  playDoorCreak() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(65, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 1.2);
      osc.frequency.exponentialRampToValueAtTime(75, now + 2.5);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 2.8);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playStarChime(freq = 880) {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.1);
      osc.frequency.exponentialRampToValueAtTime(freq * 2, now + 0.35);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.2);
    } catch (e) {}
  }

  playHeartbeat(intensity = 1) {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.25);

      gain.gain.setValueAtTime(0.35 * intensity, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);

      // Second beat in lub-dub
      setTimeout(() => {
        if (this.isMuted || !this.ctx) return;
        const now2 = this.ctx.currentTime;
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(65, now2);
        osc2.frequency.exponentialRampToValueAtTime(38, now2 + 0.2);

        gain2.gain.setValueAtTime(0.4 * intensity, now2);
        gain2.gain.exponentialRampToValueAtTime(0.001, now2 + 0.25);

        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.start(now2);
        osc2.stop(now2 + 0.25);
      }, 140);
    } catch (e) {}
  }

  playClockTick(isReverse = true) {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(isReverse ? 1200 : 900, now);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {}
  }

  playVaultClank() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.4);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.7);
    } catch (e) {}
  }

  playPaperRustle() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch (e) {}
  }

  playCameraShutter() {
    if (this.isMuted || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Mechanical snap
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(2200, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);

      // Motor wind sound
      setTimeout(() => {
        if (this.isMuted || !this.ctx) return;
        const now2 = this.ctx.currentTime;
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(180, now2);
        osc2.frequency.linearRampToValueAtTime(240, now2 + 1.2);

        gain2.gain.setValueAtTime(0.08, now2);
        gain2.gain.exponentialRampToValueAtTime(0.001, now2 + 1.4);

        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.start(now2);
        osc2.stop(now2 + 1.4);
      }, 150);
    } catch (e) {}
  }

  startPianoArpeggio() {
    if (this.ambientInterval) return;
    let noteIdx = 0;
    this.ambientInterval = setInterval(() => {
      if (this.isMuted || !this.ctx) return;
      const note = this.pianoNotes[noteIdx % this.pianoNotes.length];
      noteIdx++;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note, now);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 2.6);
    }, 1800);
  }

  stopPianoArpeggio() {
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }
}

const sound = new SoundEngine();

// ==========================================================================
// 🎵 BIRTHDAY SONG — Autoplay Background Music (no button)
// ==========================================================================
class SongPlayer {
  constructor(audioId) {
    this.audio = document.getElementById(audioId);
    this.started = false;
    this.unlockHandler = () => this.start();
    if (this.audio) {
      this.audio.loop = true;
      this.bindUnlock();
    }
  }

  bindUnlock() {
    ['pointerdown', 'touchstart', 'click', 'keydown'].forEach((evt) => {
      window.addEventListener(evt, this.unlockHandler, { passive: true });
    });
  }

  unbindUnlock() {
    ['pointerdown', 'touchstart', 'click', 'keydown'].forEach((evt) => {
      window.removeEventListener(evt, this.unlockHandler);
    });
  }

  start() {
    if (this.started || !this.audio) return;
    this.started = true;
    this.audio.play().then(() => this.unbindUnlock()).catch(() => {
      this.started = false;
      this.bindUnlock();
    });
  }
}

const song = new SongPlayer('birthday-song');

// Attempt autoplay immediately, and fall back to the first user interaction
window.addEventListener('load', () => song.start());

// ==========================================================================
// 🌌 BACKGROUND PARTICLE & STARFIELD ENGINE
// ==========================================================================
class StarfieldEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.shootingStars = [];
    this.fireflies = [];
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.mode = 'opening'; // 'opening', 'door', 'grandwish', 'galaxy', 'heart', 'time', 'vault', 'camera', 'goodbye'
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    this.createStars(140);
    this.createFireflies(30);
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createStars(count) {
    this.stars = [];
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 0.6,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.02 + 0.005,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        color: Math.random() > 0.8 ? '#f6d365' : '#ffffff'
      });
    }
  }

  createFireflies(count) {
    this.fireflies = [];
    for (let i = 0; i < count; i++) {
      this.fireflies.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.7 + 0.3,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        glow: Math.random() * 12 + 6
      });
    }
  }

  spawnShootingStar() {
    this.shootingStars.push({
      x: Math.random() * this.canvas.width,
      y: Math.random() * (this.canvas.height * 0.4),
      length: Math.random() * 80 + 50,
      speed: Math.random() * 10 + 8,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      opacity: 1
    });
  }

  triggerMeteorShower() {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        this.spawnShootingStar();
      }, i * 180);
    }
  }

  setMode(mode) {
    this.mode = mode;
    if (mode === 'galaxy') {
      this.createStars(220);
    } else if (mode === 'goodbye') {
      // Stars will be faded out
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Occasional shooting star in galaxy mode
    if (this.mode === 'galaxy' && Math.random() < 0.012) {
      this.spawnShootingStar();
    }

    // Render & update ambient stars
    const parallaxX = (this.mouse.x - this.canvas.width / 2) * 0.02;
    const parallaxY = (this.mouse.y - this.canvas.height / 2) * 0.02;

    for (let star of this.stars) {
      star.alpha += Math.sin(Date.now() * star.twinkleSpeed) * 0.02;
      star.alpha = Math.max(0.1, Math.min(1, star.alpha));

      this.ctx.beginPath();
      this.ctx.arc(star.x + parallaxX, star.y + parallaxY, star.size, 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = star.alpha;
      this.ctx.fill();
    }

    // Render & update fireflies in door mode
    if (this.mode === 'door') {
      for (let f of this.fireflies) {
        f.x += f.dx;
        f.y += f.dy;
        if (f.x < 0) f.x = this.canvas.width;
        if (f.x > this.canvas.width) f.x = 0;
        if (f.y < 0) f.y = this.canvas.height;
        if (f.y > this.canvas.height) f.y = 0;

        this.ctx.beginPath();
        this.ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffea79';
        this.ctx.shadowColor = '#ffd700';
        this.ctx.shadowBlur = f.glow;
        this.ctx.globalAlpha = f.alpha * (0.6 + Math.sin(Date.now() * 0.003) * 0.4);
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      }
    }

    // Render shooting stars
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const s = this.shootingStars[i];
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.opacity -= 0.02;

      if (s.opacity <= 0 || s.x > this.canvas.width || s.y > this.canvas.height) {
        this.shootingStars.splice(i, 1);
        continue;
      }

      this.ctx.beginPath();
      this.ctx.moveTo(s.x, s.y);
      this.ctx.lineTo(
        s.x - Math.cos(s.angle) * s.length,
        s.y - Math.sin(s.angle) * s.length
      );
      this.ctx.strokeStyle = `rgba(255, 235, 150, ${s.opacity})`;
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    }

    this.ctx.globalAlpha = 1;
  }
}

// ==========================================================================
// 📖 STORY MANAGER & CHAPTER TRANSITIONS
// ==========================================================================
class StoryManager {
  constructor() {
    this.currentChapter = 0;
    this.totalChapters = 8;
    this.chapters = [
      'chapter-opening',
      'chapter-door',
      'chapter-grand-wish',
      'chapter-galaxy',
      'chapter-heart',
      'chapter-time',
      'chapter-vault',
      'chapter-camera',
      'chapter-goodbye'
    ];
    this.discoveredStars = new Set();
    this.heartPercentage = 0;
    this.clockRewindCount = 0;
    this.moonClickCount = 0;
    this.starfield = null;
  }

  init() {
    this.starfield = new StarfieldEngine('ambient-canvas');
    this.setupGlobalControls();
    this.setupOpeningChapter();
    this.setupChapterDoor();
    this.setupChapterGrandWish();
    this.setupChapterGalaxy();
    this.setupChapterHeart();
    this.setupChapterTime();
    this.setupChapterVault();
    this.setupChapterCamera();
    this.setupChapterGoodbye();
    this.setupEasterEggs();
    
    // Apply personalized name to dynamic spans
    document.querySelectorAll('.recipient-name-dynamic').forEach(el => {
      el.textContent = CONFIG.recipientName;
    });

    document.querySelectorAll('.recipient-birthday-dynamic').forEach(el => {
      el.textContent = CONFIG.birthday;
    });

    const photoEl = document.getElementById('polaroid-real-photo');
    if (photoEl) {
      photoEl.src = CONFIG.birthdayPhoto;
    }
  }

  showChapter(index) {
    if (index < 0 || index >= this.chapters.length) return;
    this.currentChapter = index;

    // Transition screens
    this.chapters.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) {
        if (i === index) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      }
    });

    // Update dots indicator
    document.querySelectorAll('.dot-item').forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Mode-specific audio and background adjustment
    switch (index) {
      case 0:
        this.starfield.setMode('opening');
        break;
      case 1:
        this.starfield.setMode('door');
        break;
      case 2:
        this.starfield.setMode('grandwish');
        break;
      case 3:
        this.starfield.setMode('galaxy');
        break;
      case 4:
        this.starfield.setMode('heart');
        break;
      case 5:
        this.starfield.setMode('time');
        break;
      case 6:
        this.starfield.setMode('vault');
        break;
      case 7:
        this.starfield.setMode('camera');
        break;
      case 8:
        this.starfield.setMode('goodbye');
        break;
    }
  }

  setupGlobalControls() {
    // Interactive navigation dots
    document.querySelectorAll('.dot-item').forEach((dot) => {
      dot.addEventListener('click', () => {
        const target = parseInt(dot.getAttribute('data-chapter'), 10);
        sound.init();
        this.showChapter(target);
      });
    });
  }

  // ========================================================================
  // CHAPTER 0: OPENING / SECRET ACCESS
  // ========================================================================
  setupOpeningChapter() {
    const line1 = document.getElementById('opening-line-1');
    const line2 = document.getElementById('opening-line-2');
    const passBox = document.getElementById('opening-password-box');
    const unlockBtn = document.getElementById('btn-unlock-opening');
    const passInput = document.getElementById('opening-password-input');
    const errorMsg = document.getElementById('opening-error-msg');
    const grantedBanner = document.getElementById('opening-granted-banner');
    const hintPill = document.getElementById('opening-hint-pill');

    // Sequence timing
    setTimeout(() => {
      if (line1) line1.classList.add('visible');
    }, 1000);

    setTimeout(() => {
      if (line1) line1.classList.remove('visible');
      if (line2) line2.classList.add('visible');
    }, 3600);

    setTimeout(() => {
      if (line2) line2.classList.remove('visible');
      if (passBox) passBox.classList.add('visible');
      if (passInput) passInput.focus();
    }, 6200);

    if (hintPill) {
      hintPill.addEventListener('click', () => {
        passInput.value = CONFIG.birthday.replace(/\s+/g, '');
        passInput.focus();
      });
    }

    const verifyOpeningPassword = () => {
      sound.init();
      const entered = passInput.value.trim().toLowerCase();
      const target1 = CONFIG.password.toLowerCase();
      const fallbackTarget = CONFIG.recipientName.toLowerCase();
      const bdayTarget = CONFIG.birthday.toLowerCase().replace(/\s+/g, '');

      // Friendly validation: config match, recipient name, or birthday date
      const isCorrect = (
        entered === target1 ||
        target1 === "change_password" ||
        entered === fallbackTarget ||
        entered === bdayTarget ||
        entered === "10august" ||
        entered === "magic" ||
        entered === "love"
      );

      if (isCorrect) {
        sound.playStarChime(950);
        errorMsg.classList.remove('visible');
        passBox.classList.remove('visible');
        grantedBanner.classList.add('show');

        // Confetti golden burst
        if (window.confetti) {
          window.confetti({
            particleCount: 80,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#ffd700', '#f6d365', '#ffffff']
          });
        }

        setTimeout(() => {
          this.showChapter(1); // Transition to Door
        }, 2000);
      } else {
        sound.playClockTick(false);
        errorMsg.textContent = "Nice try 👀... but the universe knows the secret.";
        errorMsg.classList.add('visible');
        passBox.classList.add('shake');
        setTimeout(() => passBox.classList.remove('shake'), 600);
      }
    };

    if (unlockBtn) {
      unlockBtn.addEventListener('click', verifyOpeningPassword);
    }
    if (passInput) {
      passInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verifyOpeningPassword();
      });
    }
  }

  // ========================================================================
  // CHAPTER 1: THE MYSTERIOUS DOOR
  // ========================================================================
  setupChapterDoor() {
    const doorLeaf = document.getElementById('main-door-leaf');
    const lightBeam = document.getElementById('door-light-beam');
    const delivery = document.getElementById('hand-cake-delivery');
    const revealText = document.getElementById('door-reveal-text');
    const acceptCakeBtn = document.getElementById('btn-accept-cake');
    const candlesRow = document.getElementById('candles-row');
    let isDoorOpen = false;

    // Generate glowing candles with flames
    if (candlesRow) {
      candlesRow.innerHTML = '';
      for (let i = 0; i < 5; i++) {
        const c = document.createElement('div');
        c.className = 'candle';
        c.innerHTML = '<div class="candle-flame"></div>';
        candlesRow.appendChild(c);
      }
    }

    const openDoorSequence = () => {
      if (isDoorOpen) return;
      isDoorOpen = true;
      sound.init();
      sound.playDoorCreak();

      // Swing door open
      doorLeaf.classList.add('open');
      lightBeam.classList.add('open');

      // Hand extends with cake holding forward
      setTimeout(() => {
        sound.playStarChime(780);
        delivery.classList.add('presented');
      }, 1600);

      // Display "It's yours ✨"
      setTimeout(() => {
        revealText.classList.add('visible');
      }, 3400);
    };

    if (doorLeaf) {
      doorLeaf.addEventListener('click', openDoorSequence);
    }

    if (acceptCakeBtn) {
      acceptCakeBtn.addEventListener('click', () => {
        sound.init();
        sound.playStarChime(1100);
        
        // Extinguish candle flames with sparkle
        document.querySelectorAll('.candle-flame').forEach(f => {
          f.style.transition = 'all 0.5s ease';
          f.style.opacity = '0';
          f.style.transform = 'scale(0)';
        });

        if (window.confetti) {
          window.confetti({
            particleCount: 70,
            spread: 70,
            origin: { y: 0.5 },
            colors: ['#fbc2eb', '#ffd1dc', '#ffd700']
          });
        }

        setTimeout(() => {
          this.showChapter(2); // Grand Wish (Cinematic Blast)
        }, 1200);
      });
    }
  }

  // ========================================================================
  // CHAPTER 2: GRAND WISH (CINEMATIC BLAST)
  // ========================================================================
  setupChapterGrandWish() {
    const chapterEl = document.getElementById('chapter-grand-wish');
    if (!chapterEl) return;
    let launched = false;

    const spawnParticles = () => {
      const container = document.getElementById('gw-particles');
      if (!container) return;
      container.innerHTML = '';
      const isMobile = window.innerWidth < 640;
      const count = isMobile ? 34 : 64;
      for (let i = 0; i < count; i++) {
        const p = document.createElement('span');
        p.className = 'grand-wish-particle';
        const angle = Math.random() * Math.PI * 2;
        const dist = 90 + Math.random() * (isMobile ? 130 : 280);
        p.style.setProperty('--px', `${Math.cos(angle) * dist}px`);
        p.style.setProperty('--py', `${Math.sin(angle) * dist}px`);
        p.style.animationDelay = `${(Math.random() * 0.9).toFixed(2)}s`;
        container.appendChild(p);
      }
    };

    const runSequence = () => {
      if (launched) return;
      launched = true;
      sound.init();
      sound.playStarChime(650);

      const happy = document.getElementById('gw-happy');
      const nameEl = document.getElementById('gw-name');
      const caption = document.getElementById('gw-caption');
      const burst = document.getElementById('gw-burst');
      const rays = document.getElementById('gw-rays');
      const rings = chapterEl.querySelectorAll('.grand-wish-shockwave');

      // Shockwave rings ripple outward with the blast
      rings.forEach((ring, i) => {
        setTimeout(() => ring.classList.add('play'), 60 + i * 240);
      });

      setTimeout(() => {
        if (burst) burst.classList.add('play');
      }, 100);

      setTimeout(() => {
        if (rays) rays.classList.add('play');
      }, 160);

      setTimeout(() => sound.playStarChime(880), 520);

      // "Happy Birthday" slams in
      setTimeout(() => {
        if (happy) happy.classList.add('play');
      }, 680);

      // "Nathiya" bursts in with screen shake + particles + confetti
      setTimeout(() => {
        if (nameEl) nameEl.classList.add('play');
        sound.playStarChime(1320);
        document.body.classList.add('screen-shake');
        setTimeout(() => document.body.classList.remove('screen-shake'), 700);
        spawnParticles();

        if (window.confetti) {
          window.confetti({
            particleCount: window.innerWidth < 640 ? 120 : 240,
            spread: 120,
            origin: { y: 0.55 },
            colors: ['#ffd700', '#fff7d6', '#ffb347', '#ff7eb3', '#ffffff']
          });
        }
      }, 1750);

      setTimeout(() => {
        if (caption) caption.classList.add('play');
      }, 2900);

      // Cinematic pause, then carry into the Galaxy of Stars
      setTimeout(() => {
        this.showChapter(3); // Galaxy of Stars
      }, 6400);
    };

    const observer = new MutationObserver(() => {
      if (chapterEl.classList.contains('active')) {
        runSequence();
      }
    });
    observer.observe(chapterEl, { attributes: true, attributeFilter: ['class'] });
  }

  // ========================================================================
  // CHAPTER 3: GALAXY OF STARS (21 Special Stars + Legendary Star)
  // ========================================================================
  setupChapterGalaxy() {
    const chapterEl = document.getElementById('chapter-galaxy');
    const stageEl = document.getElementById('galaxy-stage');
    const field = document.getElementById('constellation-field');
    const counterBadge = document.getElementById('stars-counter-badge');
    const modal = document.getElementById('star-modal-overlay');
    const starNumTag = document.getElementById('star-number-tag');
    const quoteText = document.getElementById('star-quote-text');
    const closeBtn = document.getElementById('btn-close-star-modal');
    const legendaryStar = document.getElementById('legendary-star');
    const legendaryModal = document.getElementById('legendary-modal-overlay');
    const legendaryLine1 = document.getElementById('legendary-line-1');
    const legendaryLine2 = document.getElementById('legendary-line-2');
    const sparklesBox = document.getElementById('galaxy-sparkles');

    if (!field) return;
    field.innerHTML = '';

    const starCount = CONFIG.thanglishLines.length;
    const starEls = [];
    let introPlayed = false;
    let legendaryRevealed = false;

    // Scatter the 21 stars evenly across the sky (previous model)
    for (let i = 0; i < starCount; i++) {
      const xPercent = 14 + Math.random() * 72;
      const yPercent = 22 + Math.random() * 66;

      const starEl = document.createElement('div');
      starEl.className = 'clickable-star';
      starEl.setAttribute('data-index', i);
      starEl.style.left = `${xPercent}%`;
      starEl.style.top = `${yPercent}%`;
      starEl.innerHTML = '<div class="star-core"></div>';

      starEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleStarClick(i, starEl);
      });

      field.appendChild(starEl);
      starEls.push(starEl);
    }

    // Organic twinkle stagger on each star core
    starEls.forEach((el, i) => {
      const core = el.querySelector('.star-core');
      if (core) core.style.animationDelay = `${((i * 0.11) % 2.6 - 1.3).toFixed(2)}s`;
    });

    // Ambient drifting golden sparkles across the night sky
    const spawnSparkles = () => {
      if (!sparklesBox) return;
      sparklesBox.innerHTML = '';
      const isSmall = window.innerWidth < 640;
      const count = isSmall ? 18 : 32;
      for (let i = 0; i < count; i++) {
        const s = document.createElement('span');
        s.className = 'galaxy-spark';
        const angle = Math.random() * Math.PI * 2;
        const dist = 60 + Math.random() * (isSmall ? 140 : 280);
        s.style.setProperty('--sx', `${Math.cos(angle) * dist}px`);
        s.style.setProperty('--sy', `${Math.sin(angle) * dist}px`);
        s.style.animationDelay = `${(Math.random() * 6).toFixed(1)}s`;
        sparklesBox.appendChild(s);
      }
    };
    spawnSparkles();

    // Cinematic blast-open: burst + shockwaves + sweeping star ignition
    const runGalaxyIntro = () => {
      if (introPlayed) return;
      introPlayed = true;
      sound.init();
      sound.playStarChime(760);

      const burst = document.getElementById('galaxy-burst');
      const rays = document.getElementById('galaxy-rays');
      const rings = chapterEl ? chapterEl.querySelectorAll('.galaxy-shockwave') : [];
      const header = chapterEl ? chapterEl.querySelector('.galaxy-header') : null;

      rings.forEach((ring, i) => {
        setTimeout(() => ring.classList.add('play'), 60 + i * 220);
      });
      setTimeout(() => { if (burst) burst.classList.add('play'); }, 90);
      setTimeout(() => { if (rays) rays.classList.add('play'); }, 150);
      setTimeout(() => sound.playStarChime(990), 460);

      // Stage zooms into place, then the stars ignite in a sweeping wave
      setTimeout(() => { if (stageEl) stageEl.classList.add('visible'); }, 200);
      setTimeout(() => { if (header) header.classList.add('visible'); }, 1050);

      starEls.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('ignited');
        }, 300 + i * 62);
      });
    };

    if (chapterEl) {
      const observer = new MutationObserver(() => {
        if (chapterEl.classList.contains('active')) {
          runGalaxyIntro();
        }
      });
      observer.observe(chapterEl, { attributes: true, attributeFilter: ['class'] });
    }

    // Legendary star erupts into view and cascades open every remaining star
    const revealLegendary = () => {
      if (legendaryRevealed || !legendaryStar) return;
      legendaryRevealed = true;

      legendaryStar.classList.add('revealed');
      sound.init();
      sound.playStarChime(1450);
      document.body.classList.add('screen-shake');
      setTimeout(() => document.body.classList.remove('screen-shake'), 700);

      if (window.confetti) {
        window.confetti({
          particleCount: 170,
          spread: 160,
          origin: { y: 0.5 },
          colors: ['#ffd700', '#fff7d6', '#ffaa00', '#ffffff']
        });
      }

      setTimeout(() => legendaryStar.classList.add('float-mode'), 1700);

      // All remaining stars open one by one with a golden cascade wave
      const remaining = starEls.filter((el) => !el.classList.contains('discovered'));
      remaining.forEach((el, i) => {
        setTimeout(() => {
          const idx = parseInt(el.getAttribute('data-index'), 10);
          el.classList.add('discovered');
          this.discoveredStars.add(idx);
          if (counterBadge) {
            counterBadge.textContent = `🌟 Stars Discovered: ${this.discoveredStars.size} / ${starCount}`;
          }
          if (i % 3 === 0) sound.playStarChime(700);
        }, 250 + i * 95);
      });
    };

    // Legendary Star Interaction
    if (legendaryStar) {
      legendaryStar.addEventListener('click', () => {
        sound.init();
        sound.playStarChime(1500);
        legendaryStar.classList.add('float-mode');

        if (window.confetti) {
          window.confetti({
            particleCount: 160,
            spread: 120,
            origin: { y: 0.5 },
            colors: ['#ffd700', '#ffffff', '#ffaa00', '#ff7eb3']
          });
        }

        legendaryModal.classList.add('open');
        legendaryLine1.style.opacity = '0';
        legendaryLine2.style.opacity = '0';

        setTimeout(() => {
          legendaryLine1.style.transition = 'opacity 1s ease';
          legendaryLine1.style.opacity = '1';
        }, 500);

        setTimeout(() => {
          legendaryLine2.style.transition = 'opacity 1s ease';
          legendaryLine2.style.opacity = '1';
        }, 3200);

        setTimeout(() => {
          legendaryModal.classList.remove('open');
          legendaryStar.style.opacity = '0';
          this.animateButterflyTransition();
        }, 7000);
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    }

    // Expose helpers for handleStarClick
    this._galaxyStarCount = starCount;
    this._revealGalaxyLegendary = revealLegendary;
  }

  handleStarClick(index, element) {
    sound.init();
    sound.playStarChime(700 + index * 30);

    element.classList.add('discovered');
    this.discoveredStars.add(index);

    // Update counter
    const counterBadge = document.getElementById('stars-counter-badge');
    if (counterBadge) {
      counterBadge.textContent = `🌟 Stars Discovered: ${this.discoveredStars.size} / ${CONFIG.thanglishLines.length}`;
    }

    // Typewriter message modal
    const modal = document.getElementById('star-modal-overlay');
    const starNumTag = document.getElementById('star-number-tag');
    const quoteText = document.getElementById('star-quote-text');

    if (starNumTag) starNumTag.textContent = `Star #${index + 1} of ${CONFIG.thanglishLines.length}`;
    if (quoteText) {
      quoteText.textContent = '';
      const textToType = CONFIG.thanglishLines[index];
      let charIdx = 0;
      modal.classList.add('open');

      const interval = setInterval(() => {
        quoteText.textContent += textToType[charIdx];
        charIdx++;
        if (charIdx >= textToType.length) {
          clearInterval(interval);
        }
      }, 30);
    }

    // Mini star sparkles
    if (window.confetti) {
      const rect = element.getBoundingClientRect();
      window.confetti({
        particleCount: 20,
        spread: 45,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight
        },
        colors: ['#ffd700', '#ffffff', '#ff99bb']
      });
    }

    // Reveal Legendary Star after 5 discovered — it opens all remaining stars
    if (this.discoveredStars.size >= 5 && this._revealGalaxyLegendary) {
      this._revealGalaxyLegendary();
    }
  }

  animateButterflyTransition() {
    const butterfly = document.getElementById('flying-butterfly');
    if (!butterfly) {
      this.showChapter(4);
      return;
    }

    butterfly.classList.add('active');
    let posX = window.innerWidth / 2;
    let posY = window.innerHeight / 2;
    let targetX = window.innerWidth * 0.8;
    let targetY = window.innerHeight * 0.3;

    if (window.gsap) {
      gsap.to(butterfly, {
        x: targetX,
        y: targetY,
        scale: 1.5,
        duration: 2.2,
        ease: 'power2.inOut',
        onComplete: () => {
          butterfly.classList.remove('active');
          this.showChapter(4); // Heart Machine
        }
      });
    } else {
      setTimeout(() => {
        butterfly.classList.remove('active');
        this.showChapter(4);
      }, 2000);
    }
  }

  // ========================================================================
  // CHAPTER 4: HEART MACHINE
  // ========================================================================
  setupChapterHeart() {
    const heartBox = document.getElementById('giant-heart-box');
    const percentEl = document.getElementById('heart-percentage-val');
    const progressFill = document.getElementById('heart-progress-fill');
    const completionBox = document.getElementById('heart-completion-box');
    const nextBtn = document.getElementById('btn-heart-continue');
    let heartCompleted = false;

    const pumpHeart = () => {
      if (heartCompleted) return;
      sound.init();

      this.heartPercentage += 12;
      if (this.heartPercentage > 100) this.heartPercentage = 100;

      sound.playHeartbeat(0.8 + (this.heartPercentage / 100) * 0.7);

      if (percentEl) percentEl.textContent = `${this.heartPercentage}%`;
      if (progressFill) progressFill.style.width = `${this.heartPercentage}%`;

      // Scale bounce
      heartBox.style.transform = 'scale(1.18)';
      setTimeout(() => {
        heartBox.style.transform = 'scale(1)';
      }, 150);

      // Particles on each beat
      if (window.confetti && this.heartPercentage < 100) {
        window.confetti({
          particleCount: 15,
          spread: 50,
          origin: { y: 0.5 },
          colors: ['#ff6b8b', '#fbc2eb', '#ffffff']
        });
      }

      if (this.heartPercentage >= 100) {
        heartCompleted = true;
        document.body.classList.add('screen-shake');
        setTimeout(() => document.body.classList.remove('screen-shake'), 600);

        sound.playStarChime(1400);

        // Huge confetti burst
        if (window.confetti) {
          window.confetti({
            particleCount: 150,
            spread: 120,
            origin: { y: 0.5 },
            colors: ['#ff4081', '#f6d365', '#ffffff', '#e040fb']
          });
        }

        setTimeout(() => {
          if (completionBox) completionBox.classList.add('show');
        }, 800);
      }
    };

    if (heartBox) {
      heartBox.addEventListener('click', pumpHeart);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        sound.init();
        this.showChapter(5); // Time Machine
      });
    }
  }

  // ========================================================================
  // CHAPTER 5: TIME MACHINE
  // ========================================================================
  setupChapterTime() {
    const rewindBtn = document.getElementById('btn-rewind-time');
    const hourHand = document.getElementById('clock-hour-hand');
    const minHand = document.getElementById('clock-min-hand');
    const storyText = document.getElementById('time-story-text');
    const timeContinueBtn = document.getElementById('btn-time-continue');
    let currentHourRot = 120;
    let currentMinRot = 280;

    const phrases = [
      "If I had met you earlier...",
      "...I would've still wanted to know you.",
      "Some moments arrive at exactly the right time.",
      "Some days deserve to be remembered."
    ];

    if (rewindBtn) {
      rewindBtn.addEventListener('click', () => {
        sound.init();
        sound.playClockTick(true);

        this.clockRewindCount++;
        currentHourRot -= 90;
        currentMinRot -= 360;

        if (hourHand) hourHand.style.transform = `rotate(${currentHourRot}deg)`;
        if (minHand) minHand.style.transform = `rotate(${currentMinRot}deg)`;

        // Update phrase with fade
        if (storyText) {
          storyText.style.opacity = '0';
          setTimeout(() => {
            const phraseIdx = Math.min(this.clockRewindCount - 1, phrases.length - 1);
            storyText.textContent = phrases[phraseIdx];
            storyText.style.opacity = '1';
          }, 400);
        }

        // When clock reaches final stop
        if (this.clockRewindCount >= 3) {
          rewindBtn.style.display = 'none';
          sound.playStarChime(850);
          setTimeout(() => {
            if (timeContinueBtn) timeContinueBtn.style.display = 'inline-flex';
          }, 1000);
        }
      });
    }

    if (timeContinueBtn) {
      timeContinueBtn.addEventListener('click', () => {
        sound.init();
        this.showChapter(6); // Secret Vault
      });
    }
  }

  // ========================================================================
  // CHAPTER 6: SECRET VAULT
  // ========================================================================
  setupChapterVault() {
    const vaultInput = document.getElementById('vault-password-input');
    const vaultUnlockBtn = document.getElementById('btn-unlock-vault');
    const vaultError = document.getElementById('vault-error-msg');
    const vaultWheel = document.getElementById('vault-wheel');
    const vaultBulkhead = document.getElementById('vault-bulkhead');
    const envelopesGrid = document.getElementById('envelopes-grid');
    const modal = document.getElementById('letter-modal-overlay');
    const modalTitle = document.getElementById('letter-modal-title');
    const modalBody = document.getElementById('letter-modal-body');
    const closeLetterBtn = document.getElementById('btn-close-letter');
    const hintPill = document.getElementById('vault-hint-pill');

    if (hintPill) {
      hintPill.addEventListener('click', () => {
        vaultInput.value = CONFIG.recipientName;
        vaultInput.focus();
      });
    }

    const openVaultDoor = () => {
      sound.init();
      const entered = vaultInput.value.trim().toLowerCase();
      const target = CONFIG.secretPassword.toLowerCase();
      const recipientTarget = CONFIG.recipientName.toLowerCase();

      // Check second secret password
      const isCorrect = (
        entered === target ||
        target === "change_secret" ||
        entered === recipientTarget ||
        entered === "nathiya" ||
        entered === "magic" ||
        entered === "secret"
      );

      if (isCorrect) {
        sound.playVaultClank();
        vaultError.classList.remove('visible');

        // Spin wheel and open bulkhead
        if (vaultWheel) vaultWheel.style.transform = 'rotate(720deg)';

        setTimeout(() => {
          if (vaultBulkhead) vaultBulkhead.classList.add('open');
          document.getElementById('vault-lock-controls').style.display = 'none';
          if (envelopesGrid) envelopesGrid.classList.add('show');
          sound.playStarChime(1050);

          if (window.confetti) {
            window.confetti({
              particleCount: 100,
              spread: 90,
              origin: { y: 0.6 },
              colors: ['#ffd700', '#fbc2eb', '#ffffff']
            });
          }
        }, 1500);
      } else {
        sound.playClockTick(false);
        vaultError.textContent = "Hmm... the vault isn't convinced yet 👀";
        vaultError.classList.add('visible');
        const box = document.getElementById('vault-input-box');
        if (box) {
          box.classList.add('shake');
          setTimeout(() => box.classList.remove('shake'), 600);
        }
      }
    };

    if (vaultUnlockBtn) vaultUnlockBtn.addEventListener('click', openVaultDoor);
    if (vaultInput) {
      vaultInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') openVaultDoor();
      });
    }

    // Populate Envelopes
    if (envelopesGrid) {
      envelopesGrid.innerHTML = '';

      CONFIG.vaultLetters.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'envelope-card';
        card.innerHTML = `
          <div class="envelope-icon">💌</div>
          <div class="envelope-tag">${item.tag}</div>
        `;
        card.addEventListener('click', () => {
          sound.init();
          sound.playPaperRustle();
          if (modalTitle) modalTitle.textContent = item.title;
          if (modalBody) modalBody.textContent = item.body;
          if (modal) modal.classList.add('open');
        });
        envelopesGrid.appendChild(card);
      });

      // Special Golden Envelope
      const specialCard = document.createElement('div');
      specialCard.className = 'envelope-card special';
      specialCard.innerHTML = `
        <div class="envelope-icon">✨</div>
        <div class="envelope-tag">The Special Letter</div>
        <div style="font-size: 13px; font-style: italic; color: #ffd700; margin-top: 4px;">
          "This isn't even the final surprise..."
        </div>
      `;

      specialCard.addEventListener('click', () => {
        sound.init();
        sound.playPaperRustle();
        sound.playStarChime(1200);

        // Fade to black and transition to Camera
        const overlay = document.getElementById('screen-flash-overlay');
        if (overlay) {
          overlay.style.backgroundColor = '#000000';
          overlay.classList.add('flashing');
        }

        setTimeout(() => {
          this.showChapter(7); // Memory Camera
          if (overlay) {
            overlay.classList.remove('flashing');
            overlay.style.backgroundColor = '#ffffff';
          }
        }, 1600);
      });

      envelopesGrid.appendChild(specialCard);
    }

    if (closeLetterBtn) {
      closeLetterBtn.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    }
  }

  // ========================================================================
  // CHAPTER 7: MEMORY CAMERA
  // ========================================================================
  setupChapterCamera() {
    const cameraBody = document.getElementById('polaroid-camera-body');
    const shutterBtn = document.getElementById('camera-shutter-btn');
    const countdownEl = document.getElementById('camera-countdown');
    const photoFrame = document.getElementById('polaroid-photo-frame');
    const realPhoto = document.getElementById('polaroid-real-photo');
    const captionEl = document.getElementById('polaroid-caption');
    const flashOverlay = document.getElementById('screen-flash-overlay');
    const releaseBtn = document.getElementById('btn-release-photo');
    let hasCaptured = false;
    let hasReleased = false;

    const releasePhoto = () => {
      if (hasReleased) return;
      hasReleased = true;
      sound.init();
      sound.playStarChime(1150);

      // Polaroid floats upward into the night sky
      if (photoFrame) photoFrame.classList.add('floating-away');
      if (releaseBtn) releaseBtn.style.display = 'none';

      setTimeout(() => {
        this.showChapter(8); // Final Goodbye
      }, 3500);
    };

    const takePhotoSequence = () => {
      if (hasCaptured) return;
      hasCaptured = true;
      sound.init();

      if (countdownEl) {
        countdownEl.textContent = '3...';
        countdownEl.style.opacity = '1';

        setTimeout(() => {
          countdownEl.textContent = '2...';
          sound.playClockTick();
        }, 1000);

        setTimeout(() => {
          countdownEl.textContent = '1...';
          sound.playClockTick();
        }, 2000);

        setTimeout(() => {
          countdownEl.textContent = '';
          countdownEl.style.opacity = '0';

          // FLASH & SHUTTER
          sound.playCameraShutter();
          if (flashOverlay) {
            flashOverlay.classList.add('flashing');
            setTimeout(() => flashOverlay.classList.remove('flashing'), 250);
          }

          // Slide out photo
          setTimeout(() => {
            if (photoFrame) photoFrame.classList.add('ejected');
          }, 300);

          // Realistic photo developing from white
          setTimeout(() => {
            if (realPhoto) realPhoto.classList.add('developed');
            if (captionEl) captionEl.classList.add('show');
            if (releaseBtn) releaseBtn.style.display = 'inline-flex';
            sound.playStarChime(1000);

            // Show the picture for 5 seconds, then let it disappear
            setTimeout(() => releasePhoto(), 5000);
          }, 1400);

        }, 3000);
      }
    };

    if (cameraBody) cameraBody.addEventListener('click', takePhotoSequence);
    if (shutterBtn) shutterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      takePhotoSequence();
    });

    if (releaseBtn) {
      releaseBtn.addEventListener('click', releasePhoto);
    }
  }

  // ========================================================================
  // CHAPTER 8: FINAL GOODBYE
  // ========================================================================
  setupChapterGoodbye() {
    const typewriterEl = document.getElementById('goodbye-typewriter');
    const solitaryStar = document.getElementById('solitary-star');
    const finalMemory = document.getElementById('final-memory-line');
    const replayBtn = document.getElementById('btn-replay-story');

    const runGoodbyeSequence = () => {
      sound.stopPianoArpeggio();

      if (typewriterEl) {
        typewriterEl.textContent = '';
        const msg1 = "Bye, see you soon...";
        let i = 0;
        const t1 = setInterval(() => {
          typewriterEl.textContent += msg1[i];
          i++;
          if (i >= msg1.length) {
            clearInterval(t1);

            // Wait 3 seconds
            setTimeout(() => {
              typewriterEl.textContent = '';
              const msg2 = `Good Night, ${CONFIG.recipientName} 🌙`;
              let j = 0;
              const t2 = setInterval(() => {
                typewriterEl.textContent += msg2[j];
                j++;
                if (j >= msg2.length) {
                  clearInterval(t2);

                  // Star morphs & particles
                  setTimeout(() => {
                    sound.playStarChime(950);
                    if (solitaryStar) {
                      solitaryStar.style.transform = 'scale(2.2)';
                      solitaryStar.style.boxShadow = '0 0 50px #ff4081';
                    }

                    if (window.confetti) {
                      window.confetti({
                        particleCount: 50,
                        spread: 80,
                        origin: { y: 0.4 },
                        colors: ['#ffd700', '#fbc2eb', '#ffffff']
                      });
                    }

                    // Reveal final poetry
                    setTimeout(() => {
                      if (finalMemory) finalMemory.classList.add('show');
                      if (replayBtn) replayBtn.classList.add('show');
                    }, 2000);

                  }, 2500);
                }
              }, 60);
            }, 3000);
          }
        }, 60);
      }
    };

    // Watch for Chapter 7 becoming active
    const observer = new MutationObserver(() => {
      const chapterEl = document.getElementById('chapter-goodbye');
      if (chapterEl && chapterEl.classList.contains('active')) {
        runGoodbyeSequence();
      }
    });

    const ch7 = document.getElementById('chapter-goodbye');
    if (ch7) {
      observer.observe(ch7, { attributes: true, attributeFilter: ['class'] });
    }

    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        sound.init();
        this.showChapter(1); // Jump back to Door
      });
    }
  }

  // ========================================================================
  // 🥚 SECRET EASTER EGGS
  // ========================================================================
  setupEasterEggs() {
    // 1. Moon clicked 3 times -> Meteor shower
    const moon = document.getElementById('interactive-moon');
    if (moon) {
      moon.addEventListener('click', () => {
        sound.init();
        this.moonClickCount++;
        sound.playStarChime(600 + this.moonClickCount * 120);

        this.showFloatingWish("🌙 The moon smiles upon you...");

        if (this.moonClickCount >= 3) {
          this.moonClickCount = 0;
          this.starfield.triggerMeteorShower();
          this.showFloatingWish("🌠 Meteor Shower Triggered!");
        }
      });
    }

    // 2. Clicking flying butterfly -> random sweet wish
    const butterfly = document.getElementById('flying-butterfly');
    if (butterfly) {
      butterfly.addEventListener('click', () => {
        const wishes = [
          "May all your quiet dreams blossom this year 🌸",
          "You deserve every bit of sunshine that finds you ✨",
          "Never stop wearing that luminous smile 💫"
        ];
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        this.showFloatingWish(randomWish);
      });
    }

    // 3. Konami Code (Up Up Down Down Left Right Left Right B A)
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          konamiIndex = 0;
          sound.init();
          sound.playStarChime(1500);
          this.showFloatingWish("🎉 Secret Universe Code Unlocked!");
          if (window.confetti) {
            window.confetti({
              particleCount: 200,
              spread: 160,
              origin: { y: 0.4 },
              colors: ['#ffd700', '#ff4081', '#00e5ff', '#ffffff']
            });
          }
        }
      } else {
        konamiIndex = 0;
      }
    });

    // 4. Long press on viewport -> gentle 3D tilt
    let pressTimer;
    const viewport = document.getElementById('story-viewport');
    if (viewport) {
      viewport.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
          this.showFloatingWish("🌌 Cosmic Perspective Activated");
          viewport.style.transition = 'transform 1s ease';
          viewport.style.transform = 'perspective(1000px) rotateX(8deg) rotateY(-6deg) scale(0.96)';
          setTimeout(() => {
            viewport.style.transform = 'none';
          }, 3000);
        }, 1200);
      });

      viewport.addEventListener('mouseup', () => clearTimeout(pressTimer));
      viewport.addEventListener('touchstart', () => {
        pressTimer = setTimeout(() => {
          this.showFloatingWish("🌌 Cosmic Perspective Activated");
        }, 1200);
      });
      viewport.addEventListener('touchend', () => clearTimeout(pressTimer));
    }
  }

  showFloatingWish(text) {
    const bubble = document.createElement('div');
    bubble.className = 'floating-wish-bubble';
    bubble.textContent = text;
    bubble.style.left = `${Math.random() * 50 + 25}%`;
    bubble.style.top = `${Math.random() * 40 + 30}%`;
    document.body.appendChild(bubble);

    setTimeout(() => {
      if (bubble.parentNode) bubble.parentNode.removeChild(bubble);
    }, 3600);
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const story = new StoryManager();
  story.init();
});
