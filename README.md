# SubSync Pro 🎬

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](#)

> An elegant, robust, browser-based subtitle editor that allows you to effortlessly view, edit, shift timings, and export subtitle files in various formats. Built entirely with plain HTML, CSS, and vanilla JavaScript. No complex build pipelines required!

![SubSync Pro Screenshot Placeholder](https://via.placeholder.com/800x450.png?text=SubSync+Pro+Screenshot+Placeholder)

---

## 🌟 Features

*   **🌓 Dark/Light Mode:** Seamlessly toggle between a sleek dark theme for low-light environments and a clean light theme, with your preference saved locally.
*   **⏱️ Time Shifting:** Easily sync out-of-sync subtitles by shifting timings forwards or backwards in precise seconds (e.g., `-1.5` or `2.05`).
*   **💾 Multiple Export Formats:** Convert and download your edited subtitles into universally supported formats:
    *   `SRT` (SubRip Text)
    *   `VTT` (WebVTT)
    *   `TXT` (Raw Text Only - strips all timestamps)
*   **🔔 Toast Notifications:** Enjoy real-time, non-intrusive feedback when loading files, encountering errors, processing, and downloading.
*   **🖱️ Drag & Drop / Paste:** Easily upload `.srt`, `.vtt`, or `.txt` files directly via the file picker, or simply paste your raw subtitle text directly into the main editor window.
*   **⚡ Blazing Fast:** Entirely client-side processing means zero server wait times. Your subtitle data never leaves your browser, ensuring complete privacy.

---

## 🚀 Getting Started

Since SubSync Pro is a static web application, absolutely no build tools (like Webpack or Vite) or complex dependencies (like Node.js) are required to run it locally.

### Prerequisites
A modern web browser (Chrome, Firefox, Safari, Edge).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-repo-name>
    ```

2.  **Run locally:**
    You can simply double-click the `index.html` file to open it directly in your default browser.

    Alternatively, for a more authentic web-server experience (which prevents strict CORS issues with certain local files), run a local python server:
    ```bash
    python3 -m http.server 3000 --bind 0.0.0.0
    ```
    Then, open your browser and navigate to `http://localhost:3000`.

---

## 🛠️ Usage Guide

1.  **Upload Content:** Click the **"Upload File"** button to select a subtitle file from your computer, or copy/paste raw text directly into the main editor area.
2.  **Edit Text:** You can modify the subtitle text directly in the editor window if you spot typos or translation errors.
3.  **Adjust Timing:** Enter the number of seconds in the **"Time Shift (sec)"** box.
    *   *Negative numbers* (e.g., `-2.5`) will make subtitles appear earlier.
    *   *Positive numbers* (e.g., `1.5`) will make subtitles appear later.
4.  **Select Format:** Choose your desired output format (`SRT`, `VTT`, or `TXT`) from the "Export As" dropdown menu.
5.  **Export:** Click the **"Process & Download"** button. The app will recalculate all timings and prompt you to save the newly generated file.

---

## 💻 Technologies Used

*   **HTML5** - Semantic structure and layout.
*   **CSS3** - Custom styling, flexbox/grid layouts, CSS variables for theming, and smooth transitions/animations.
*   **Vanilla JavaScript (ES6+)** - Core logic for time parsing, string manipulation, DOM updates, and file generation using Blob APIs.
*   **Font Awesome** - Beautiful, scalable icons for the UI.
*   **Google Fonts** - Utilizing the 'Poppins' font family for a modern typographic feel.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
