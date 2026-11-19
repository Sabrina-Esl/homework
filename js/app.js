/**
 * MSI School - Interactive Mobile Web Application
 * Handles glass UI interactions, modals for all 4 activities & vocabulary rounds.
 */

document.addEventListener('DOMContentLoaded', () => {
  const modalBackdrop = document.getElementById('appModalBackdrop');
  const modalBody = document.getElementById('modalDynamicBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const toast = document.getElementById('appToast');
  const toastMessage = document.getElementById('toastMessage');

  // Rich standalone 3D SVGs for Modals
  const MODAL_ICONS = {
    reading: `
      <svg class="modal-header-icon" viewBox="0 0 100 100" style="width:72px; height:72px;">
        <defs>
          <linearGradient id="m-book-spine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffe685"/><stop offset="50%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#b45309"/>
          </linearGradient>
          <linearGradient id="m-page-l" x1="0%" y1="0%" x2="100%" y2="30%">
            <stop offset="0%" stop-color="#ffffff"/><stop offset="70%" stop-color="#f1f5f9"/><stop offset="100%" stop-color="#cbd5e1"/>
          </linearGradient>
          <linearGradient id="m-page-r" x1="100%" y1="0%" x2="0%" y2="30%">
            <stop offset="0%" stop-color="#ffffff"/><stop offset="70%" stop-color="#f1f5f9"/><stop offset="100%" stop-color="#cbd5e1"/>
          </linearGradient>
          <linearGradient id="m-cover" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#7c5cfa"/><stop offset="100%" stop-color="#5534d4"/>
          </linearGradient>
        </defs>
        <ellipse cx="50" cy="82" rx="38" ry="9" fill="#4c3d82" opacity="0.22"/>
        <path d="M 12 64 C 26 67 42 66 50 71 C 58 66 74 67 88 64 L 86 68 C 72 71 58 70 50 75 C 42 70 28 71 14 68 Z" fill="url(#m-cover)"/>
        <path d="M 48 69 L 46 80 L 50 83 L 54 80 L 52 69 Z" fill="url(#m-book-spine)"/>
        <path d="M 14 36 C 28 30 40 37 49 42 L 49 70 C 40 65 28 61 14 65 Z" fill="url(#m-page-l)"/>
        <path d="M 14 65 C 28 61 40 65 49 70 L 49 72 C 40 67 28 63 14 67 Z" fill="#94a3b8"/>
        <path d="M 20 44 C 29 40 37 44 43 47" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M 20 50 C 29 46 37 50 43 53" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M 20 56 C 29 52 37 56 43 59" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M 86 36 C 72 30 60 37 51 42 L 51 70 C 60 65 72 61 86 65 Z" fill="url(#m-page-r)"/>
        <path d="M 86 65 C 72 61 60 65 51 70 L 51 72 C 60 67 72 63 86 67 Z" fill="#94a3b8"/>
        <path d="M 80 44 C 71 40 63 44 57 47" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M 80 50 C 71 46 63 50 57 53" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M 80 56 C 71 52 63 56 57 59" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M 48 42 L 50 44 L 52 42 L 52 70 L 50 72 L 48 70 Z" fill="#64748b" opacity="0.4"/>
        <path d="M 48.5 43 L 48.5 76 L 50 78 L 51.5 76 L 51.5 43 Z" fill="url(#m-book-spine)"/>
        <polygon points="48,76 50,73 52,76 52,79 50,76.5 48,79" fill="#f59e0b"/>
        <polygon points="80,26 82,31 87,33 82,35 80,40 78,35 73,33 78,31" fill="#fbbf24"/>
      </svg>`,

    listening: `
      <svg class="modal-header-icon" viewBox="0 0 100 100" style="width:72px; height:72px;">
        <defs>
          <linearGradient id="m-hp-band" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/><stop offset="40%" stop-color="#e2e8f0"/><stop offset="100%" stop-color="#94a3b8"/>
          </linearGradient>
          <linearGradient id="m-hp-cushion" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6"/><stop offset="50%" stop-color="#6d28d9"/><stop offset="100%" stop-color="#4c1d95"/>
          </linearGradient>
          <linearGradient id="m-wave-gold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#fde047"/><stop offset="60%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/>
          </linearGradient>
        </defs>
        <ellipse cx="50" cy="84" rx="36" ry="8" fill="#4c3d82" opacity="0.22"/>
        <path d="M 22 55 C 20 25 34 14 50 14 C 66 14 80 25 78 55" stroke="url(#m-hp-band)" stroke-width="8" stroke-linecap="round" fill="none"/>
        <path d="M 25 50 C 24 28 35 17 50 17 C 65 17 76 28 75 50" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.9"/>
        <rect x="34" y="52" width="5" height="15" rx="2.5" fill="#a78bfa"/>
        <rect x="42" y="42" width="5.5" height="26" rx="2.75" fill="url(#m-wave-gold)"/>
        <rect x="50" y="34" width="6" height="34" rx="3" fill="url(#m-wave-gold)"/>
        <rect x="58" y="44" width="5.5" height="24" rx="2.75" fill="url(#m-wave-gold)"/>
        <rect x="66" y="54" width="5" height="13" rx="2.5" fill="#a78bfa"/>
        <g transform="translate(13, 44) rotate(-6)">
          <rect x="0" y="0" width="14" height="29" rx="7" fill="url(#m-hp-band)"/>
          <rect x="2" y="2" width="4" height="25" rx="2" fill="#ffffff" opacity="0.8"/>
          <rect x="9" y="3" width="7.5" height="23" rx="3.75" fill="url(#m-hp-cushion)"/>
        </g>
        <g transform="translate(73, 43) rotate(6)">
          <rect x="-2.5" y="3" width="7.5" height="23" rx="3.75" fill="url(#m-hp-cushion)"/>
          <rect x="0" y="0" width="14" height="29" rx="7" fill="url(#m-hp-band)"/>
          <rect x="8" y="2" width="4" height="25" rx="2" fill="#ffffff" opacity="0.8"/>
        </g>
        <polygon points="26,20 27.5,23.5 31,25 27.5,26.5 26,30 24.5,26.5 21,25 24.5,23.5" fill="#ffffff"/>
      </svg>`,

    writing: `
      <svg class="modal-header-icon" viewBox="0 0 100 100" style="width:72px; height:72px;">
        <defs>
          <linearGradient id="m-tile-face" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#b197ff"/><stop offset="45%" stop-color="#8f6cf8"/><stop offset="100%" stop-color="#7048f5"/>
          </linearGradient>
          <linearGradient id="m-tile-side-l" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#6741dc"/><stop offset="100%" stop-color="#4924b8"/>
          </linearGradient>
          <linearGradient id="m-tile-side-r" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#552ec7"/><stop offset="100%" stop-color="#3b17a1"/>
          </linearGradient>
        </defs>
        <path d="M 16 62 L 50 82 L 84 62 L 50 45 Z" fill="#4c3d82" opacity="0.25"/>
        <path d="M 14 50 L 50 71 L 50 80 L 14 59 Z" fill="url(#m-tile-side-l)"/>
        <path d="M 50 71 L 86 50 L 86 59 L 50 80 Z" fill="url(#m-tile-side-r)"/>
        <path d="M 50 22 C 53 20 57 20 60 22 L 84 39 C 87 41 87 45 84 48 L 60 65 C 57 67 53 67 50 65 L 16 48 C 13 45 13 41 16 39 Z" fill="url(#m-tile-face)"/>
        <path d="M 18 40 L 50 23 L 82 40" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.95"/>
        <text x="32" y="52" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="28" font-weight="900" fill="#361794" opacity="0.5">A</text>
        <text x="31" y="50" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="28" font-weight="900" fill="#ffffff">A</text>
        <text x="56" y="52" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="22" font-weight="900" fill="#361794" opacity="0.5">a</text>
        <text x="55" y="50" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="22" font-weight="900" fill="#ffffff">a</text>
        <polygon points="76,19 77.5,22.5 81,24 77.5,25.5 76,29 74.5,25.5 71,24 74.5,22.5" fill="#ffffff"/>
        <polygon points="84,27 85,29.5 88,31 85,32.5 84,35 83,32.5 80,31 83,29.5" fill="#fbbf24"/>
      </svg>`,

    speaking: `
      <svg class="modal-header-icon" viewBox="0 0 100 100" style="width:72px; height:72px;">
        <defs>
          <linearGradient id="m-mic-head" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/><stop offset="45%" stop-color="#cbd5e1"/><stop offset="100%" stop-color="#94a3b8"/>
          </linearGradient>
          <linearGradient id="m-mic-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#9d7eff"/><stop offset="45%" stop-color="#7c5cfa"/><stop offset="100%" stop-color="#5a38db"/>
          </linearGradient>
          <linearGradient id="m-mic-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/><stop offset="50%" stop-color="#e2e8f0"/><stop offset="100%" stop-color="#94a3b8"/>
          </linearGradient>
        </defs>
        <ellipse cx="44" cy="85" rx="26" ry="7" fill="#4c3d82" opacity="0.22"/>
        <ellipse cx="42" cy="81" rx="18" ry="5.5" fill="url(#m-mic-metal)"/>
        <ellipse cx="42" cy="79" rx="16" ry="4" fill="#f1f5f9"/>
        <rect x="40" y="60" width="4.5" height="20" rx="2.25" fill="url(#m-mic-metal)"/>
        <path d="M 27 45 C 27 63 57 63 57 45" stroke="url(#m-mic-metal)" stroke-width="4" stroke-linecap="round" fill="none"/>
        <circle cx="27" cy="45" r="3" fill="#7c5cfa"/>
        <circle cx="57" cy="45" r="3" fill="#7c5cfa"/>
        <rect x="32" y="20" width="20" height="36" rx="10" fill="url(#m-mic-body)"/>
        <path d="M 32 32 C 32 22 36 20 42 20 C 48 20 52 22 52 32 Z" fill="url(#m-mic-head)"/>
        <line x1="33" y1="25" x2="51" y2="25" stroke="#94a3b8" stroke-width="1.2"/>
        <line x1="32.5" y1="29" x2="51.5" y2="29" stroke="#94a3b8" stroke-width="1.2"/>
        <line x1="32" y1="33" x2="52" y2="33" stroke="#ffffff" stroke-width="1.6"/>
        <rect x="34" y="22" width="2.2" height="30" rx="1.1" fill="#ffffff" opacity="0.6"/>
        <path d="M 64 36 C 68 40 68 46 64 50" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M 72 31 C 78 37 78 49 72 55" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M 80 26 C 88 34 88 52 80 60" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <polygon points="23,19 24.5,22.5 28,24 24.5,25.5 23,29 21.5,25.5 18,24 21.5,22.5" fill="#fbbf24"/>
      </svg>`,

    medal: `
      <svg class="modal-header-icon" viewBox="0 0 100 100" style="width:72px; height:72px;">
        <defs>
          <linearGradient id="m-medal-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fff5cc"/><stop offset="30%" stop-color="#fbbf24"/><stop offset="80%" stop-color="#d97706"/><stop offset="100%" stop-color="#92400e"/>
          </linearGradient>
          <linearGradient id="m-ribbon-p" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#9c7eff"/><stop offset="50%" stop-color="#7c5cfa"/><stop offset="100%" stop-color="#5533d6"/>
          </linearGradient>
        </defs>
        <path d="M 37 46 L 26 84 L 38 75 L 47 84 L 44 48 Z" fill="url(#m-ribbon-p)"/>
        <path d="M 63 46 L 74 84 L 62 75 L 53 84 L 56 48 Z" fill="url(#m-ribbon-p)" opacity="0.9"/>
        <circle cx="50" cy="46" r="24" fill="url(#m-medal-gold)"/>
        <circle cx="50" cy="46" r="20" fill="none" stroke="#fff4cf" stroke-width="2" opacity="0.9"/>
        <polygon points="50,32 54,42 64,43 56,50 59,60 50,54 41,60 44,50 36,43 46,42" fill="#fff9db"/>
        <polygon points="50,32 54,42 64,43 56,50 59,60 50,54 50,32" fill="#d97706" opacity="0.4"/>
      </svg>`
  };

  // Helper: Show Glass Toast
  function showToast(msg) {
    if (toastMessage && toast) {
      toastMessage.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2600);
    }
  }

  // Helper: Open Modal with custom HTML
  function openModal(htmlContent) {
    if (modalBody && modalBackdrop) {
      modalBody.innerHTML = htmlContent;
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.soundFx) window.soundFx.tap();
    }
  }

  // Close Modal
  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
      if (window.soundFx) window.soundFx.tap();
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // =========================================================================
  // HEADER ACTIONS
  // =========================================================================
  const backNavBtn = document.getElementById('backNavBtn');
  if (backNavBtn) {
    backNavBtn.addEventListener('click', () => {
      showToast('Navigating back to Courses list');
      if (window.soundFx) window.soundFx.tap();
    });
  }

  const keyBtn = document.getElementById('keyBtn');
  if (keyBtn) {
    keyBtn.addEventListener('click', () => {
      openModal(`
        <svg class="modal-header-icon" viewBox="0 0 100 100" style="width:72px; height:72px;">
          <polygon points="50,10 78,35 68,85 50,95 32,85 22,35" fill="#a78bfa"/>
          <polygon points="50,10 78,35 50,55 22,35" fill="#e0e7ff"/>
          <polygon points="50,55 78,35 68,85" fill="#818cf8"/>
          <polygon points="50,55 68,85 50,95" fill="#6366f1"/>
          <polygon points="50,55 50,95 32,85" fill="#4f46e5"/>
          <polygon points="50,55 32,85 22,35" fill="#a5b4fc"/>
          <polygon points="50,10 50,55 22,35" fill="#ffffff" opacity="0.8"/>
        </svg>
        <h2 class="modal-title">Unit 7.1 Mastery</h2>
        <p class="modal-desc">Track your progress, unlock keys & earn rewards</p>
        <div class="interactive-content-box">
          <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
            <span>🗝️ Keys Unlocked:</span>
            <strong>3 / 5 Keys</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
            <span>⚡ Unit XP:</span>
            <strong style="color:var(--purple-primary);">+280 XP</strong>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span>🔥 Daily Streak:</span>
            <strong>7 Days</strong>
          </div>
        </div>
        <button class="glass-action-btn" onclick="document.getElementById('modalCloseBtn').click();">
          Keep Learning
        </button>
      `);
    });
  }

  const bookmarkBtn = document.getElementById('bookmarkBtn');
  if (bookmarkBtn) {
    let bookmarked = false;
    bookmarkBtn.addEventListener('click', () => {
      bookmarked = !bookmarked;
      bookmarkBtn.classList.toggle('bookmarked', bookmarked);
      showToast(bookmarked ? 'Unit 7.1 saved to your bookmarks!' : 'Bookmark removed');
      if (window.soundFx) window.soundFx.tap();
    });
  }

  // Device view toggle button (Mobile frame vs wider view)
  const toggleViewBtn = document.getElementById('toggleViewBtn');
  const viewBtnText = document.getElementById('viewBtnText');
  if (toggleViewBtn) {
    toggleViewBtn.addEventListener('click', () => {
      document.body.classList.toggle('full-width-mode');
      const isWide = document.body.classList.contains('full-width-mode');
      if (viewBtnText) {
        viewBtnText.textContent = isWide ? 'Full View' : 'Phone Frame';
      }
      if (window.soundFx) window.soundFx.tap();
    });
  }

  // =========================================================================
  // CAROUSEL & VIEW SWITCHER
  // =========================================================================
  const activitiesCarousel = document.getElementById('activitiesCarousel');
  const activityDots = document.querySelectorAll('#activityDots .carousel-dot');

  // Activities View Mode Switcher (Carousel vs 2x2 Grid)
  const pillModeCarousel = document.getElementById('pillModeCarousel');
  const pillModeGrid = document.getElementById('pillModeGrid');

  if (pillModeCarousel && pillModeGrid && activitiesCarousel) {
    function setViewMode(mode) {
      if (mode === 'grid') {
        activitiesCarousel.classList.add('grid-view-mode');
        pillModeGrid.classList.add('active');
        pillModeCarousel.classList.remove('active');
      } else {
        activitiesCarousel.classList.remove('grid-view-mode');
        pillModeCarousel.classList.add('active');
        pillModeGrid.classList.remove('active');
      }
    }

    pillModeGrid.addEventListener('click', () => {
      setViewMode('grid');
      if (window.soundFx) window.soundFx.tap();
    });

    pillModeCarousel.addEventListener('click', () => {
      setViewMode('carousel');
      if (window.soundFx) window.soundFx.tap();
    });

    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'grid') {
      setViewMode('grid');
    }
  }

  if (activitiesCarousel && activityDots.length > 0) {
    activitiesCarousel.addEventListener('scroll', () => {
      const scrollLeft = activitiesCarousel.scrollLeft;
      const cardWidth = activitiesCarousel.querySelector('.glass-carousel-card')?.offsetWidth || 180;
      const activeIndex = Math.min(
        activityDots.length - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );

      activityDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    });

    activityDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        const cardWidth = activitiesCarousel.querySelector('.glass-carousel-card')?.offsetWidth || 180;
        activitiesCarousel.scrollTo({
          left: idx * cardWidth,
          behavior: 'smooth'
        });
      });
    });
  }

  // =========================================================================
  // VOCABULARY ROUND CARDS (With Purple Badges as specified)
  // =========================================================================
  const vocabCards = document.querySelectorAll('[data-vocab-round]');
  const sampleWords = {
    1: [
      { word: "Perseverance", type: "noun", def: "Persistence in doing something despite difficulty." },
      { word: "Resilient", type: "adj", def: "Able to withstand or recover quickly from difficult conditions." },
      { word: "Ingenuity", type: "noun", def: "The quality of being clever, original, and inventive." }
    ],
    2: [
      { word: "Articulate", type: "verb", def: "Express an idea or feeling fluently and coherently." },
      { word: "Nuance", type: "noun", def: "A subtle difference in or shade of meaning, expression, or sound." }
    ],
    3: [
      { word: "Cohesive", type: "adj", def: "Characterized by being united or forming a whole." },
      { word: "Pragmatic", type: "adj", def: "Dealing with things sensibly and realistically." }
    ],
    4: [
      { word: "Eloquent", type: "adj", def: "Fluent or persuasive in speaking or writing." },
      { word: "Synthesize", type: "verb", def: "Combine a number of things into a coherent whole." }
    ]
  };

  vocabCards.forEach(card => {
    card.addEventListener('click', () => {
      const roundNum = card.getAttribute('data-vocab-round');
      const wordsCount = card.getAttribute('data-words');
      const roundList = sampleWords[roundNum] || sampleWords[1];
      const currentWord = roundList[0];

      openModal(`
        <div style="text-align:center;">
          <span class="glass-pill purple-badge" style="margin-bottom:12px;">Round ${roundNum} Practice</span>
          ${MODAL_ICONS.medal}
          <h2 class="modal-title">${currentWord.word}</h2>
          <span style="font-size:0.8rem; font-weight:700; color:var(--purple-primary); display:block; margin-bottom:10px;">
            [${currentWord.type}]
          </span>
          <p class="modal-desc" style="font-size:0.95rem; color:var(--text-primary); margin-bottom:16px;">
            "${currentWord.def}"
          </p>
        </div>

        <div class="interactive-content-box" style="text-align:center;">
          <button class="glass-circle-btn" id="listenWordBtn" style="margin:0 auto 8px;" title="Listen pronunciation">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>
          <span style="font-size:0.75rem; color:var(--text-muted); display:block;">Tap to hear pronunciation</span>
        </div>

        <div style="display:flex; gap:10px;">
          <button class="glass-action-btn" id="markKnownBtn" style="flex:1;">
            Mark as Learned ✓
          </button>
        </div>
      `);

      const listenBtn = document.getElementById('listenWordBtn');
      if (listenBtn && window.soundFx) {
        listenBtn.addEventListener('click', () => {
          window.soundFx.tap();
          window.soundFx.speakWord(currentWord.word);
        });
      }

      const markKnownBtn = document.getElementById('markKnownBtn');
      if (markKnownBtn) {
        markKnownBtn.addEventListener('click', () => {
          if (window.soundFx) window.soundFx.success();
          showToast(`"${currentWord.word}" added to mastered vocabulary! (+10 XP)`);
          closeModal();
          const fill = card.querySelector('.glass-progress-fill');
          const percent = card.querySelector('.glass-progress-percent');
          if (fill && percent) {
            fill.style.width = '100%';
            percent.textContent = '100%';
          }
        });
      }
    });
  });

  // =========================================================================
  // VIDEO LESSON / THEORY (Placement from Picture 2)
  // =========================================================================
  const videoCard = document.getElementById('videoLessonTrigger');
  if (videoCard) {
    videoCard.addEventListener('click', () => {
      openModal(`
        <div style="position:relative; width:100%; height:190px; border-radius:18px; overflow:hidden; margin-bottom:14px; background:#0f172a; border:1px solid rgba(255,255,255,0.4);">
          <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg, #1e3a8a, #0f172a);">
            <div style="text-align:center;">
              <button class="video-play-btn" id="modalPlayToggle" style="margin:0 auto 10px; width:52px; height:52px;">
                <svg viewBox="0 0 24 24" style="width:22px; height:22px; fill:#fff;"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
              </button>
              <span style="color:#ffffff; font-size:0.82rem; font-weight:700;">Unit 7.1 Theory • 14:20</span>
            </div>
          </div>
        </div>
        <h2 class="modal-title">Advanced Vocabulary in Context</h2>
        <p class="modal-desc">Learn how to use nuanced vocabulary across reading, listening, writing and speaking tasks.</p>
        
        <div class="interactive-content-box">
          <strong>Key Lecture Topics:</strong>
          <ul style="margin:8px 0 0 18px; font-size:0.84rem; line-height:1.6; color:var(--text-secondary);">
            <li>Forming high-level idiomatic expressions</li>
            <li>Collocations for business and academic contexts</li>
            <li>Avoiding common false friends in English</li>
          </ul>
        </div>

        <button class="glass-action-btn" id="finishVideoBtn">
          Complete Lesson (+50 XP)
        </button>
      `);

      const finishBtn = document.getElementById('finishVideoBtn');
      if (finishBtn) {
        finishBtn.addEventListener('click', () => {
          if (window.soundFx) window.soundFx.success();
          showToast('Video lesson completed! +50 XP earned');
          const badge = document.querySelector('.video-status-badge');
          if (badge) {
            badge.textContent = 'Watched';
            badge.style.background = 'linear-gradient(135deg, #10b981, #059669)';
          }
          const testPercent = document.querySelector('.test-dock-percent');
          if (testPercent) testPercent.textContent = '100%';
          closeModal();
        });
      }
    });
  }

  // =========================================================================
  // ALL FOUR ACTIVITY CARDS (Reading, Listening, Writing, Speaking)
  // With exact 3D icons from Picture 1 (Writing using Vocabulary "Aa" tile!)
  // =========================================================================
  const activityCards = document.querySelectorAll('[data-activity-type]');

  activityCards.forEach(card => {
    card.addEventListener('click', () => {
      const type = card.getAttribute('data-activity-type');

      // 1. READING
      if (type === 'reading') {
        openModal(`
          ${MODAL_ICONS.reading}
          <span class="glass-pill purple-badge badge-skill-reading" style="display:table; margin:0 auto 8px;">Reading Activity</span>
          <h2 class="modal-title">Architectural Wonders</h2>
          <p class="modal-desc">Read the excerpt and choose the correct conclusion.</p>

          <div class="interactive-content-box" style="font-size:0.86rem; max-height:120px; overflow-y:auto; line-height:1.6;">
            "The new cathedral design incorporates sustainable light-filtering glass domes that adjust transparency with ambient solar intensity. Engineers combined aesthetic grace with environmental efficiency..."
          </div>

          <div class="quiz-options">
            <button class="quiz-option-btn" data-correct="false">
              <span>A. The cathedral relies solely on artificial lights.</span>
            </button>
            <button class="quiz-option-btn" data-correct="true">
              <span>B. The domes harmonize beauty with eco-friendly utility.</span>
            </button>
            <button class="quiz-option-btn" data-correct="false">
              <span>C. The design was abandoned due to sunlight heat.</span>
            </button>
          </div>

          <button class="glass-action-btn" id="readingSubmitBtn" disabled style="opacity:0.6;">
            Submit Reading Task
          </button>
        `);

        setupQuizHandlers(card);
      }

      // 2. LISTENING
      else if (type === 'listening') {
        openModal(`
          ${MODAL_ICONS.listening}
          <span class="glass-pill purple-badge badge-skill-listening" style="display:table; margin:0 auto 8px;">Listening Activity</span>
          <h2 class="modal-title">Audio Dialogue: Innovation</h2>
          <p class="modal-desc">Listen to the clip and identify the speaker's main intent.</p>

          <div class="audio-player-box" id="modalAudioBox">
            <button class="audio-play-trigger" id="audioToggleBtn" title="Play audio">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
            </button>
            <div class="audio-wave-bars">
              <div class="wave-bar" style="animation-delay: 0.1s;"></div>
              <div class="wave-bar" style="animation-delay: 0.3s;"></div>
              <div class="wave-bar" style="animation-delay: 0.2s;"></div>
              <div class="wave-bar" style="animation-delay: 0.4s;"></div>
              <div class="wave-bar" style="animation-delay: 0.15s;"></div>
              <div class="wave-bar" style="animation-delay: 0.35s;"></div>
              <div class="wave-bar" style="animation-delay: 0.25s;"></div>
            </div>
            <span style="font-size:0.75rem; font-weight:700; color:var(--purple-primary);">0:18</span>
          </div>

          <div class="quiz-options">
            <button class="quiz-option-btn" data-correct="true">
              <span>A. Proposing a collaborative research venture.</span>
            </button>
            <button class="quiz-option-btn" data-correct="false">
              <span>B. Rejecting the proposal due to financial constraints.</span>
            </button>
          </div>

          <button class="glass-action-btn" id="listeningSubmitBtn" disabled style="opacity:0.6;">
            Submit Listening Task
          </button>
        `);

        const audioToggleBtn = document.getElementById('audioToggleBtn');
        const modalAudioBox = document.getElementById('modalAudioBox');
        if (audioToggleBtn && modalAudioBox) {
          let isPlaying = false;
          audioToggleBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            modalAudioBox.classList.toggle('playing', isPlaying);
            if (window.soundFx) {
              window.soundFx.tap();
              if (isPlaying) {
                window.soundFx.speakWord("We are eager to establish a collaborative venture that bridges modern architecture and environmental technology.");
              }
            }
          });
        }

        setupQuizHandlers(card);
      }

      // 3. WRITING (With Vocabulary "Aa" Tile from Picture 1!)
      else if (type === 'writing') {
        openModal(`
          ${MODAL_ICONS.writing}
          <span class="glass-pill purple-badge badge-skill-writing" style="display:table; margin:0 auto 8px;">Writing Activity</span>
          <h2 class="modal-title">Vocabulary & Essay Task</h2>
          <p class="modal-desc">Write 2–3 sentences incorporating at least one suggested vocabulary word.</p>

          <div class="vocab-chips">
            <span class="vocab-chip" onclick="insertVocab('perseverance')">+ perseverance</span>
            <span class="vocab-chip" onclick="insertVocab('innovative')">+ innovative</span>
            <span class="vocab-chip" onclick="insertVocab('sustainable')">+ sustainable</span>
          </div>

          <textarea class="writing-textarea" id="writingInput" placeholder="Start typing your sentences here..."></textarea>
          <div class="word-count-badge" id="wordCountBadge">0 words • Min 10 words</div>

          <button class="glass-action-btn" id="writingSubmitBtn">
            Submit Writing Response
          </button>
        `);

        const writingInput = document.getElementById('writingInput');
        const wordCountBadge = document.getElementById('wordCountBadge');
        const writingSubmitBtn = document.getElementById('writingSubmitBtn');

        window.insertVocab = (word) => {
          if (writingInput) {
            writingInput.value += (writingInput.value ? ' ' : '') + word;
            writingInput.dispatchEvent(new Event('input'));
            writingInput.focus();
            if (window.soundFx) window.soundFx.tap();
          }
        };

        if (writingInput && wordCountBadge) {
          writingInput.addEventListener('input', () => {
            const words = writingInput.value.trim().split(/\s+/).filter(Boolean);
            const count = words.length;
            wordCountBadge.textContent = `${count} word${count === 1 ? '' : 's'} • ${count >= 10 ? '✓ Ready to submit' : 'Min 10 words'}`;
            if (count >= 10) {
              wordCountBadge.style.color = '#10b981';
            } else {
              wordCountBadge.style.color = 'var(--text-muted)';
            }
          });
        }

        if (writingSubmitBtn) {
          writingSubmitBtn.addEventListener('click', () => {
            const count = writingInput.value.trim().split(/\s+/).filter(Boolean).length;
            if (count < 5) {
              showToast('Please write a bit more to complete the task!');
              return;
            }
            if (window.soundFx) window.soundFx.success();
            showToast('Writing response submitted! Score: 98% (+30 XP)');
            updateCardProgress(card, 100);
            closeModal();
          });
        }
      }

      // 4. SPEAKING
      else if (type === 'speaking') {
        openModal(`
          ${MODAL_ICONS.speaking}
          <span class="glass-pill purple-badge badge-skill-speaking" style="display:table; margin:0 auto 8px;">Speaking Activity</span>
          <h2 class="modal-title">Pronunciation & Accent</h2>
          <p class="modal-desc">Press the microphone and read the target phrase aloud.</p>

          <div class="interactive-content-box" style="text-align:center;">
            <p style="font-size:1.02rem; font-weight:700; color:var(--text-primary); margin-bottom:6px;">
              "The innovative architecture of the cathedral is breathtaking."
            </p>
            <span style="font-size:0.75rem; color:var(--text-muted);">Pay attention to the stress in <em>in•no•va•tive</em></span>
          </div>

          <div class="mic-action-container">
            <button class="speaking-mic-button" id="recordMicBtn" title="Tap to record voice">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
            </button>
            <span id="micStatusText" style="font-size:0.82rem; font-weight:600; color:var(--text-secondary);">
              Tap mic to speak
            </span>
          </div>

          <button class="glass-action-btn" id="speakingDoneBtn" style="display:none;">
            Finish Speaking Task
          </button>
        `);

        const recordMicBtn = document.getElementById('recordMicBtn');
        const micStatusText = document.getElementById('micStatusText');
        const speakingDoneBtn = document.getElementById('speakingDoneBtn');

        if (recordMicBtn) {
          let recording = false;
          recordMicBtn.addEventListener('click', () => {
            recording = !recording;
            recordMicBtn.classList.toggle('recording', recording);
            if (window.soundFx) window.soundFx.tap();

            if (recording) {
              micStatusText.textContent = "Listening... Speak now!";
              micStatusText.style.color = "#ef4444";
              setTimeout(() => {
                if (recording) {
                  recordMicBtn.classList.remove('recording');
                  micStatusText.innerHTML = "🎉 <strong>Score: 96%</strong> • Flawless pronunciation!";
                  micStatusText.style.color = "#10b981";
                  if (speakingDoneBtn) speakingDoneBtn.style.display = 'flex';
                  if (window.soundFx) window.soundFx.success();
                }
              }, 3200);
            } else {
              micStatusText.textContent = "Tap mic to speak";
              micStatusText.style.color = "var(--text-secondary)";
            }
          });
        }

        if (speakingDoneBtn) {
          speakingDoneBtn.addEventListener('click', () => {
            showToast('Speaking task recorded! +25 XP');
            updateCardProgress(card, 100);
            closeModal();
          });
        }
      }
    });
  });

  // Helper for Quiz radio buttons
  function setupQuizHandlers(card) {
    const options = document.querySelectorAll('.quiz-option-btn');
    const submitBtn = document.querySelector('.glass-action-btn[disabled]');
    let selectedOption = null;

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        options.forEach(o => {
          o.classList.remove('selected-correct', 'selected-wrong');
          o.style.borderColor = 'rgba(210, 220, 250, 0.8)';
        });

        const isCorrect = opt.getAttribute('data-correct') === 'true';
        if (isCorrect) {
          opt.classList.add('selected-correct');
        } else {
          opt.classList.add('selected-wrong');
        }
        selectedOption = opt;

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
        if (window.soundFx) window.soundFx.tap();
      });
    });

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        if (!selectedOption) return;
        const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
        if (isCorrect) {
          if (window.soundFx) window.soundFx.success();
          showToast('Correct answer! +20 XP earned');
          updateCardProgress(card, 100);
          closeModal();
        } else {
          showToast('Not quite right. Try again!');
        }
      });
    }
  }

  // Update card progress bar and label
  function updateCardProgress(card, pct) {
    const fill = card.querySelector('.glass-progress-fill');
    const label = card.querySelector('.glass-progress-percent');
    if (fill) fill.style.width = `${pct}%`;
    if (label) label.textContent = `${pct}%`;

    const allActivityCards = document.querySelectorAll('#activitiesCarousel .glass-carousel-card');
    let totalPct = 0;
    allActivityCards.forEach(c => {
      const p = parseInt(c.querySelector('.glass-progress-percent')?.textContent || '0', 10);
      totalPct += p;
    });
    const avg = Math.round(totalPct / allActivityCards.length);
    const overallFill = document.querySelector('#activitiesBannerCard .glass-progress-fill');
    const overallPct = document.querySelector('#activitiesBannerCard .glass-progress-percent');
    if (overallFill) overallFill.style.width = `${avg}%`;
    if (overallPct) overallPct.textContent = `${avg}%`;
  }
});
