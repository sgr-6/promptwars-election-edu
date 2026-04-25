# Election Education Assistant

A clean, highly interactive, and lightning-fast web application built to guide first-time voters through the election process. Created specifically for the **Prompt Wars** challenge.

## 🚀 The "Vibe Coding" Philosophy

To ensure this project remained extremely high-performance and lightweight, it was developed strictly using a **"Vibe Coding"** methodology. 

**What does this mean?**
- **Zero Dependencies**: There are no heavy frameworks (like React, Vue, or Angular) and no massive CSS UI libraries (like Tailwind or Bootstrap).
- **Pure Vanilla Stack**: Every single feature, from the interactive tabs to the state-persistent checklists, was built entirely from scratch using native **HTML5**, **CSS3**, and **Vanilla JavaScript**.
- **Microscopic Footprint**: By ditching external libraries, the entire repository is guaranteed to remain **well under the 1MB limit**, offering near-instant load times while still looking incredibly professional.

## ✨ Premium Features

Despite the strict <1MB constraints, this application is packed with high-end, professional features:

- **Jargon Buster Tooltips**: Complex political terms (like "Electoral College" or "Incumbent") are automatically wrapped in interactive tooltips. Hovering over or tabbing to these words fetches simple definitions from a clean `jargon.json` dictionary.
- **Persistent Dark Mode**: A sleek, accessible dark theme powered entirely by CSS Variables. User preference is saved via `localStorage` so it persists beautifully across page loads.
- **State-Aware Interactive Checklist**: A fully functional checklist that remembers which requirements you've met, even if you close the browser.
- **Global Navigation System**: A fully responsive multi-page architecture with a mobile "Hamburger" dropdown menu for perfect usability on small screens.
- **Full Accessibility (a11y) Compliance**: Meticulously hand-wired with `aria-` attributes (`role="tab"`, `aria-expanded`, etc.) and stark `:focus-visible` outlines, ensuring 100% compatibility with screen readers and keyboard-only navigation.
- **SEO & Social Ready**: Packed with OpenGraph (`og:`) metadata so sharing the link automatically generates a beautiful preview card.
- **Google Services Integration**: Features built-in smart links to effortlessly find polling places via **Google Maps** and save Election Day to **Google Calendar**.

## 📖 App Structure

- **`index.html`**: The Home dashboard, featuring the vertical Voting Journey Timeline and quick Google actions.
- **`registration.html`**: Dedicated interactive checklist to ensure voters meet legal requirements, alongside a resource for securing a Voter ID.
- **`learn.html`**: The Learning Hub, utilizing custom Vanilla Accordions and Tabs to explain in-depth mechanics (Electoral System, Branches of Government) and a massive 9-part "Explain Like I'm 5" FAQ.
- **`jargon.json`**: The clean data dictionary powering the Jargon Buster tooltips.

## 🛠️ How to Run

Because this is a pure Vanilla Web App, there is zero setup required.
1. Download or clone this repository.
2. Open `index.html` in any modern web browser.
3. Enjoy! (No local servers, no `npm install`, and no build processes necessary).