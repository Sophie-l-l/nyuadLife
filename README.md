# nyuadLife — Interactive Student Life Showcase

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Live](https://img.shields.io/badge/Live-GitHub%20Pages-00C853?style=for-the-badge)](https://sophie-l-l.github.io/nyuadLife/)

**nyuadLife** is an interactive website exploring NYUAD student life through three themes: **Campus Cats**, **Weather & Environment** (UAE climate), and **Cultural Experience**. Features scroll-triggered animations, video integration, and a CI/CD deployment pipeline.

**Live Demo:** [https://sophie-l-l.github.io/nyuadLife/](https://sophie-l-l.github.io/nyuadLife/)

---

## Key Achievements

- **Situation**: Incoming NYUAD students lack an engaging, interactive way to preview campus life before arriving in Abu Dhabi
- **Task**: Build an interactive web experience showcasing the unique elements of student life at NYU Abu Dhabi
- **Action**:
  - Built a **horizontal scrollable cat gallery** featuring 13 named campus cats with hover overlay effects
  - Created a **2x2 CSS Grid layout** with interactive circular cards using hover image-to-text transitions
  - Implemented an **animated scroll mascot** (bunny) with scroll-direction awareness that follows the user
  - Integrated **background video** (autoplay, looped) for immersive visual storytelling
  - Set up **GitHub Actions CI/CD pipeline** for automated deployment to GitHub Pages
- **Result**: A fully deployed, interactive website that captures the NYUAD experience across three thematic sections with smooth animations and automated deployment

---

## Features

- **Campus Cats Gallery** — Horizontal scrollable gallery with 13 named cats and hover overlay descriptions
- **Interactive Grid Cards** — 2x2 CSS Grid with circular cards that transition from image to text on hover
- **Scroll Mascot** — Animated bunny character with scroll-direction awareness
- **Video Integration** — Background video with autoplay and loop for immersive sections
- **Responsive Navigation** — Fixed header with section links (Home, Cats, Weather, Video)
- **CI/CD Deployment** — Automated GitHub Actions workflow for GitHub Pages

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Structure** | HTML5, semantic elements |
| **Styling** | CSS3 (Grid, Flexbox, animations, hover transitions) |
| **Interactivity** | Vanilla JavaScript (scroll detection, DOM manipulation) |
| **Media** | HTML5 Video (autoplay, loop), image galleries |
| **CI/CD** | GitHub Actions → GitHub Pages |

---

## Project Structure

```
nyuadLife/
├── index.html              # Main page (3 themed sections)
├── position1.css           # All styling (animations, grid, gallery)
├── scripts/
│   └── script.js           # Scroll detection, mascot animation
├── img/                    # Cat photos, grid images, backgrounds
├── video/                  # Background video assets
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipeline
└── README.md
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Sophie-l-l/nyuadLife.git
cd nyuadLife

# Open in browser (no build step required)
open index.html
```

No dependencies — pure HTML/CSS/JavaScript.

---

## Skills Demonstrated

Web development fundamentals (HTML5/CSS3/JS), CSS Grid and Flexbox layouts, CSS animations and transitions, DOM manipulation, scroll-based interactivity, responsive design, CI/CD with GitHub Actions, media integration (video/images)

---

## License

This project is licensed under the Unlicense. See the [LICENSE](LICENSE) file for details.
