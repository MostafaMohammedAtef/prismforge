# PrismForge

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

**One spark of creativity, refracted into eighteen worlds.**

PrismForge is a fictional game-publisher portfolio website developed as a frontend engineering exercise, with an emphasis on responsive layout, motion design, and interactive UI patterns. The site presents three fictional in-house studios and their combined catalog of eighteen titles across a fully responsive, multi-page experience, including a functional, backend-integrated contact form.

**Live Site:** [prism-forge.netlify.app](https://prism-forge.netlify.app/)

> **Note:** If the live site fails to load, try accessing it through a VPN. This behavior appears to stem from an ISP or regional network restriction on the `netlify.app` domain rather than an issue with the deployment itself, which has been verified as fully functional.

---

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Demo Video](#demo-video)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contact](#contact)

---

## Overview

PrismForge simulates the promotional website of a game publisher overseeing three fictional studios:

| Studio                    | Focus                      | Titles                                                                                                 |
| ------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Nightfall Studios**     | Horror & survival          | Exodus, Red Signal, Outbreak: Last Stand, Inward Descent, Hollowmere, Last Frontier                    |
| **Voidreach Interactive** | Sci-fi & tactical strategy | Astral Frontier, Iron Horizon, Ironwatch: Tower Defense, Chrono Veil, Shadow of Veil, Shattered Realms |
| **Sunspire Games**        | Adventure & arcade         | Terralis, Echoes of Elysium, Beat Wave, Rise Above, Hopper, Velocity Horizon                           |

The project was built to practice structuring a multi-page static site, implementing custom interactive components (an image lightbox, animated page transitions), and integrating serverless form handling.

---

## Screenshots

**Home — Hero Section**
![Home Hero](docs/hero-home.png)

**Home — Games Gallery (18 Titles)**
![Games Grid](docs/games-grid.png)

**About Page — Studio Overview**
![About Page](docs/about-page.png)

**Contact Page**
![Contact Page](docs/contact-page.png)

**Contact — Confirmation State**
![Contact Success](docs/contact-success.png)

---

## Demo Video

https://github.com/user-attachments/assets/f763fd7e-31dd-4591-90dc-d2f22b268d4f

_A full walkthrough of the site's pages, gallery interactions, and contact flow._

---

## Features

- **Responsive multi-page architecture** — Home, About, Contact, and a dedicated Thank You confirmation page
- **Animated hero sections** with smooth entrance transitions on page load
- **Interactive game gallery** featuring a hover-dim effect across the grid and a custom lightbox modal for viewing high-resolution game posters (dismissible via overlay click, close button, or `Esc`)
- **Studio showcase** detailing each fictional studio's identity and game roster
- **Functional contact form** powered by Netlify Forms, with server-side handling and a custom post-submission confirmation page
- **Custom typography system** using Google Fonts (`Inter`, `Rajdhani`) paired with Font Awesome iconography
- **Fully responsive layout**, optimized down to mobile breakpoints (768px)

---

## Tech Stack

| Category        | Technology                                                                  |
| --------------- | --------------------------------------------------------------------------- |
| Markup          | HTML5 (semantic, multi-page)                                                |
| Styling         | CSS3 (Grid, Flexbox, custom properties, keyframe animations, media queries) |
| Scripting       | Vanilla JavaScript (lightbox logic)                                         |
| Hosting & Forms | Netlify (static hosting + `data-netlify` form handling)                     |
| Fonts           | Google Fonts — Inter, Rajdhani                                              |
| Icons           | Font Awesome 6 (via CDN)                                                    |

---

## Design System

| Token            | Value      | Usage                                  |
| ---------------- | ---------- | -------------------------------------- |
| Background       | `#0c0e14`  | Page background                        |
| Surface          | `#15171f`  | Cards, form panels, gallery tiles      |
| Border           | `#333d4b`  | Card and input borders                 |
| Primary Accent   | `#ff2e4c`  | Highlights, buttons, active nav states |
| Text — Primary   | `#f1f5f9`  | Body copy, headings                    |
| Text — Secondary | `#94a3b8`  | Muted/supporting copy                  |
| Heading Font     | `Rajdhani` | All headings (h1–h4)                   |
| Body Font        | `Inter`    | Paragraph and UI text                  |

---

## Project Structure

```
prism-forge/
├── index.html          # Home page — hero section and 18-game gallery
├── about.html          # About page — studio breakdown
├── contact.html         # Contact form page
├── thank-you.html        # Post-submission confirmation page
├── css/
│   └── style.css         # Site-wide styling
├── js/
│   └── script.js         # Lightbox gallery logic
├── images/               # Game posters, studio logos, site branding
└── docs/                  # README assets (screenshots)
```

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/MostafaMohammedAtef/prism-forge.git
cd prism-forge
```

Run locally with a static server:

```bash
npx serve .
```

Then open `http://localhost:3000` (or the port shown in your terminal).

> **Note:** The contact form depends on Netlify's server-side form handling (`data-netlify="true"`). Submissions will only work when the site is deployed on Netlify — they will not function when run locally or hosted elsewhere.

---

## Contact

**Mostafa Mohammed Atef**

- Email: [mostafamohammedcs@gmail.com](mailto:mostafamohammedcs@gmail.com)
- LinkedIn: [linkedin.com/in/mostafa-m-atef](https://linkedin.com/in/mostafa-m-atef)
- GitHub: [github.com/MostafaMohammedAtef](https://github.com/MostafaMohammedAtef/)
