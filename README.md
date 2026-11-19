# MSI School — Unit 7.1 Mobile Learning Hub

A modern, glassmorphic mobile learning web application for **MSI School (Unit 7.1)**. Designed with an ethereal pastel glass transparent aesthetic, responsive mobile carousel navigation, and four distinct skill activity modules.

## Features

- **Liquid Glassmorphism Aesthetic**:
  - Soft pastel lavender, periwinkle, and sky blue background with ambient glowing orbs.
  - Multi-layered frosted glass surfaces (`backdrop-filter: blur(20px) saturate(170%)`).
  - Specular light reflection highlights and glowing borders.
- **Top Vocabulary Section**:
  - Hero banner card with twilight mountain landscape, white gloss disc with 3D golden star badge, word count (`42 words`), and capsule progress bar.
  - Horizontal carousel with **Purple Badges** (`Active`) and 3D golden ribbon medals.
  - Interactive flashcard practice with pronunciation via the Web Speech API.
- **Middle Theory / Video Lesson**:
  - Video preview with lesson teacher visual in dark twilight glass.
  - Pulsing `Not watched` badge and glass play button.
  - Docked `Test` action tab with glowing arrow button.
- **Bottom Activity Cards (All 4 Skill Types)**:
  - **Reading (`Task 1`)**: 3D Open Book icon with fanning pages and golden bookmark ribbon.
  - **Listening (`Task 2`)**: 3D Headphones icon with vertical equalizer sound bars.
  - **Writing (`Task 3`)**: 3D Vocabulary "Aa" Tile icon with embossed typography and star sparkles.
  - **Speaking (`Task 4`)**: 3D Studio Capsule Microphone with radiating golden sound waves.
  - Interactive view mode toggle: `⇄ Carousel` (swipeable horizontal cards) and `⊞ Grid` (2×2 overview).
- **Interactive Modals**:
  - Reading comprehension quiz with live scoring.
  - Listening dialogue player with animated audio equalizer.
  - Writing editor with prompt, vocabulary suggestion chips, and live word counter.
  - Speaking practice with simulated voice recording and accent scoring.
- **Haptic Audio Feedback**:
  - Tactile glass clicks and success chimes synthesized via the Web Audio API (zero external asset dependencies).

## Project Structure

```
├── index.html              # Main mobile application markup & inline 3D SVGs
├── css/
│   ├── glassmorphism.css   # Glass tokens, reflections, and ambient mesh
│   └── style.css           # Mobile layout, carousel, cards, and modal styles
├── js/
│   ├── app.js              # Interactivity, quizzes, flashcards, view toggles
│   └── audio.js            # Web Audio API sound synthesizer
├── assets/
│   └── icons.svg           # Scalable SVG symbol definitions
├── test_activities.html    # Standalone showcase for all 4 activity cards
├── test_icons.html         # Standalone icon library showcase
└── test_modal_writing.html # Standalone modal showcase
```

## Running the Project

Open `index.html` directly in any modern browser, or run a local server:

```bash
# Python
python3 -m http.server 3000

# Node / npx
npx serve .
```

Navigate to `http://localhost:3000`.
