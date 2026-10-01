# SubSync Pro 🎬

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](#)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](#)

> An elegant, robust, and lightning-fast browser-based subtitle editor. SubSync Pro allows you to effortlessly view, edit, shift timings, and export subtitle files in various universally-supported formats. Built entirely with plain HTML, CSS, and Vanilla JavaScript, it offers a purely client-side experience with zero server wait times.

![SubSync Pro Screenshot Placeholder](https://via.placeholder.com/800x450.png?text=SubSync+Pro+Screenshot+Placeholder)

---

## 📖 Table of Contents
1. [Motivation & Philosophy](#-motivation--philosophy)
2. [Key Features in Detail](#-key-features-in-detail)
3. [Architecture & Project Structure](#-architecture--project-structure)
4. [Getting Started (Installation)](#-getting-started)
5. [Comprehensive Usage Guide](#-comprehensive-usage-guide)
6. [Roadmap & Future Features](#-roadmap--future-features)
7. [Frequently Asked Questions (FAQ)](#-frequently-asked-questions-faq)
8. [Technologies Used](#-technologies-used)
9. [Contributing](#-contributing)
10. [License & Acknowledgements](#-license--acknowledgements)

---

## 🎯 Motivation & Philosophy

Managing out-of-sync subtitles has always been a cumbersome process for video editors and casual viewers alike. Many existing tools are either clunky desktop applications that require installation or online tools crammed with advertisements that send your files to a remote server.

**SubSync Pro was built with three core philosophies:**
1. **Absolute Privacy:** Everything happens in your browser using modern Web APIs. Your subtitles are never uploaded to any server.
2. **Zero Dependencies:** No Node.js, no Webpack, no React. Just raw, optimized HTML, CSS, and JS. Anyone can open `index.html` and start working immediately.
3. **Beautiful UI/UX:** A tool should be a joy to use. SubSync Pro features fluid animations, clear toast notifications, and a responsive design that respects your system's light/dark mode preferences.

---

## 🌟 Key Features in Detail

*   **🌓 Adaptive Theming (Dark/Light Mode):**
    *   Toggle seamlessly between a sleek dark theme ideal for late-night editing sessions and a clean, high-contrast light theme.
    *   Your preference is saved locally using `localStorage`, ensuring the app remembers your choice on subsequent visits.
*   **⏱️ Precision Time Shifting Engine:**
    *   The core calculation engine parses complex timecodes flawlessly.
    *   Easily sync out-of-sync subtitles by shifting timings forwards or backwards in precise seconds and milliseconds (e.g., `-1.5` or `2.05`).
*   **💾 Versatile Export Formats:** Convert and download your edited subtitles into formats universally supported by video players (VLC, Media Player Classic) and web standards (HTML5 Video):
    *   `SRT` (SubRip Text) - The industry standard.
    *   `VTT` (WebVTT) - The modern standard for HTML5 `<track>` tags.
    *   `TXT` (Raw Text) - Strips all timestamps and sequence numbers, perfect for extracting dialogue transcripts.
*   **🔔 Intelligent Toast Notifications:**
    *   Enjoy real-time, non-intrusive feedback when loading files, encountering formatting errors, successfully processing, and initiating downloads.
*   **🖱️ Frictionless Input (Drag & Drop / Paste):**
    *   Upload `.srt`, `.vtt`, or `.txt` files directly via the native file picker.
    *   Alternatively, bypass files entirely and simply paste your raw subtitle text directly into the main editor window.
*   **⚡ Blazing Fast Client-Side Processing:**
    *   Utilizing modern JavaScript `Blob` and `URL.createObjectURL` APIs, file generation is instantaneous and strictly local.

---

## 🏗️ Architecture & Project Structure

The project is structured to be as flat and approachable as possible:

```text
subsync-pro/
├── index.html       # The single-page application entry point
├── styles.css       # All styling, CSS variables, and animations
├── script.js        # Application logic, time parsing, and DOM manipulation
└── README.md        # This comprehensive documentation file
```

### Core Logic Breakdown (`script.js`)
*   **File Handling:** Uses `FileReader API` to read user-uploaded text files asynchronously.
*   **Time Parsing:** A robust regex-based parser that handles both `SRT` (comma-separated milliseconds) and `VTT` (dot-separated milliseconds) timecode formats.
*   **Processing Engine:** Splits the raw text into iterable blocks, applies the mathematical shift to the parsed time variables, formats them back to the target syntax, and re-compiles the string.

---

## 🚀 Getting Started

Since SubSync Pro is a static web application, absolutely no build tools or package managers are required to run it locally.

### Prerequisites
A modern, up-to-date web browser (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge).

### Installation & Running

1.  **Clone the repository to your local machine:**
    ```bash
    git clone <your-repo-url>
    cd <your-repo-name>
    ```

2.  **Run locally (Option 1 - Direct File Execution):**
    You can simply double-click the `index.html` file in your file explorer to open it directly in your default browser via the `file://` protocol.

3.  **Run locally (Option 2 - Local Dev Server):**
    For a more authentic web-server experience (which guarantees all Web APIs work as expected without strict CORS issues), run a local python server:
    ```bash
    # If you have Python 3 installed
    python3 -m http.server 3000 --bind 0.0.0.0
    ```
    Then, open your browser and navigate to `http://localhost:3000`.

---

## 🛠️ Comprehensive Usage Guide

### 1. Importing Subtitles
*   **Via File Upload:** Click the **"Upload File"** button (with the cloud icon) to open your system's file picker. Select a `.srt`, `.vtt`, or `.txt` file. The text will instantly populate the editor.
*   **Via Manual Paste:** Click inside the large text area and paste `(Ctrl+V / Cmd+V)` your raw subtitle data.

### 2. Manual Editing
The main interface is a live text editor. You can freely scroll through your subtitles and modify typos, fix translation errors, or delete unwanted lines directly in the interface.

### 3. Adjusting Timings (The Sync Feature)
Locate the **"Time Shift (sec)"** input box below the editor.
*   **Delaying Subtitles:** If your subtitles are appearing *too early* (before the actors speak), enter a positive number (e.g., `2.5`). This will push all timestamps later by 2.5 seconds.
*   **Advancing Subtitles:** If your subtitles are appearing *too late* (after the actors speak), enter a negative number (e.g., `-1.75`). This will pull all timestamps earlier by 1.75 seconds.

### 4. Selecting Output Format
Use the **"Export As"** dropdown menu to select your desired final format.
*   *Tip:* If you just want the dialogue text to read like a script, choose `TXT (Text Only)`.

### 5. Finalizing & Exporting
Click the prominent **"Process & Download"** button. The application will instantly calculate the new timings across the entire document and prompt your browser to download the newly generated file.

---

## 🗺️ Roadmap & Future Features

We are actively looking to expand SubSync Pro. Here is what is on the horizon:

- [ ] **Drag and Drop Zone:** Allow users to drag a file directly from their desktop onto the web page to load it.
- [ ] **Live Video Preview:** A small integrated HTML5 video player so users can test the sync against a local video file before exporting.
- [ ] **Framerate Conversion:** Allow conversion between different framerates (e.g., 23.976fps to 25fps).
- [ ] **Multi-Language Support:** Localization of the UI interface into Spanish, French, and German.

---

## ❓ Frequently Asked Questions (FAQ)

**Q: Are my subtitle files uploaded to the cloud?**
A: **No.** SubSync Pro operates entirely on the client-side (in your browser). Your data is never transmitted over the internet.

**Q: The download button isn't working on my mobile browser, why?**
A: While the app is responsive, some older mobile browsers restrict the automatic downloading of Blob objects. We recommend using a desktop browser (Chrome/Firefox/Edge) for the best experience.

**Q: Can I convert a VTT file to an SRT file without changing the timings?**
A: **Yes!** Simply upload your VTT file, set the Time Shift to `0`, select `SRT` as the export format, and click download. It acts as a perfect format converter.

---

## 💻 Technologies Used

*   **HTML5** - Semantic structure and layout.
*   **CSS3** - Custom styling, flexbox/grid layouts, CSS variables for theming, and smooth transitions/animations.
*   **Vanilla JavaScript (ES6+)** - Core logic for time parsing, regex, string manipulation, DOM updates, and file generation using modern Web APIs.
*   **Font Awesome** - Beautiful, scalable vector icons for the UI.
*   **Google Fonts** - Utilizing the 'Poppins' font family for a modern, highly legible typographic feel.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📝 License & Acknowledgements

Distributed under the MIT License. See `LICENSE` for more information.

*   Design inspiration drawn from modern minimalist web tools.
*   Thanks to the open-source community for the underlying Web API documentation provided by MDN Web Docs.
