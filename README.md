# ⚡ PrismForge | Indie Game Collective Portfolio

![Status](https://img.shields.io/badge/status-Active-success.svg)
![Tech Stack](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-ff2e4c.svg)
![Design](https://img.shields.io/badge/design-Responsive%20%7C%20Dark%20Theme-blue.svg)

**PrismForge** is a responsive multi-page web portfolio and showcase gallery built for an indie video game collective. The platform highlights eighteen distinct game worlds spanning three specialized development studios—ranging from dark survival horror to tactical sci-fi and high-speed arcade adventures.

---

## ✨ Key Features

* **Multi-Page Architecture:** Clean navigation across three core sections: the **Home** 18-game grid, the **About/Studios** breakdown, and a functional **Contact** hub.
* **Custom Dynamic Lightbox:** A lightweight vanilla JavaScript modal system. Clicking any gallery image automatically intercepts default link behavior, swaps to high-resolution portfolio renders (`-p` asset suffix, e.g., `terralis-p.png`), and displays them in a responsive, glassmorphic overlay without opening raw image files in a new browser tab.
* **Dual-Format Grid Layouts:**
  * **Portrait Showcase:** A responsive 3-column CSS Grid displaying **2:3 vertical game box art** with glowing neon border highlights, scale animations, and instant opacity rendering.
  * **Widescreen Landscape Key Art:** Dedicated **16:9 panoramic display sections** (featuring custom hero banners like *Outbreak: Last Stand*) with integrated UI co-op badges and feature callouts.
* **Modern Cyberpunk / Sci-Fi UI:** A dark-mode aesthetic built with custom typography (`Rajdhani` for technical headings, `Inter` for clean body readability), neon crimson accents (`#ff2e4c`), and smooth CSS cubic-bezier micro-interactions.

---

## 🏛️ Studio Ecosystem

The portfolio is structured around three distinct internal development houses:
* **🌙 Nightfall Studios:** Horror and survival specialists behind titles like *Exodus*, *Red Signal*, *Outbreak: Last Stand*, *Inward Descent*, *Hollowmere*, and *Last Frontier*.
* **🌌 Voidreach Interactive:** Sci-fi and tactical strategists powering *Astral Frontier*, *Iron Horizon*, *Ironwatch: Tower Defense*, *Chrono Veil*, *Shadow of Veil*, and *Shattered Realms*.
* **☀️ Sunspire Games:** Adventure and arcade craftsmen behind *Terralis*, *Echoes of Elysium*, *Beat Wave*, *Rise Above*, *Hopper*, and *Velocity Horizon*.

---

## 🛠️ Technology Stack

* **Markup:** Semantic HTML5
* **Styling:** Custom CSS3 (Flexbox, CSS Grid, Media Queries, Backdrop Filters, Custom Gradients)
* **Scripting:** Vanilla JavaScript (ES6+ DOM Manipulation, Event Listeners, Keyboard Navigation)
* **Icons & Fonts:** FontAwesome 6.5, Google Fonts (*Inter* & *Rajdhani*)

---

## 📂 Project Structure

```text
prismforge/
│
├── css/
│   └── style.css            # Core stylesheet, grid systems, and responsive layouts
│
├── images/                  # Gallery assets, studio logos, and key art
│   ├── prismforge.png       # Primary brand logo
│   ├── outbreak.png         # Vertical game box art
│   ├── outbreak-p.png       # High-res Lightbox portfolio version
│   ├── outbreak-landscape.png # 16:9 widescreen hero banner
│   └── ...
│
├── index.html               # Main landing page & 18-game showcase grid
├── about.html               # Studio breakdowns & landscape gallery
├── contact.html             # Direct messaging form & social links
└── README.md                # Project documentation
