# SubSync Pro 🎬

An elegant, browser-based subtitle editor that allows you to effortlessly view, edit, shift timings, and export subtitle files in various formats. Built entirely with plain HTML, CSS, and JavaScript.

## Features ✨

*   **Dark/Light Mode:** Toggle between sleek dark and clean light modes to suit your preference.
*   **Time Shifting:** Easily sync out-of-sync subtitles by shifting timings forwards or backwards in seconds (e.g., `-1.5` or `2.0`).
*   **Multiple Export Formats:** Convert and download your edited subtitles as:
    *   `SRT` (SubRip)
    *   `VTT` (WebVTT)
    *   `TXT` (Text Only)
*   **Toast Notifications:** Real-time feedback when loading files, processing, and downloading.
*   **Drag & Drop / Paste:** Easily upload `.srt`, `.vtt`, or `.txt` files, or simply paste your subtitle text directly into the editor.

## Getting Started 🚀

Since this is a static web application, no build tools or complex dependencies are required.

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-repo-name>
    ```

2.  **Run locally (Optional):**
    You can simply open `index.html` in your browser. Alternatively, to run it on a local server:
    ```bash
    python3 -m http.server 3000 --bind 0.0.0.0
    ```
    Then, open your browser and navigate to `http://localhost:3000`.

## Usage 🛠️

1.  **Upload:** Click the "Upload File" button to select a subtitle file, or paste text directly into the main editor area.
2.  **Edit:** Modify the subtitle text directly in the editor if needed.
3.  **Shift Timing:** Enter the number of seconds in the "Time Shift" box. Use negative numbers (e.g., `-2.5`) to move subtitles earlier, and positive numbers (e.g., `1.5`) to move them later.
4.  **Export:** Select your desired format (`SRT`, `VTT`, or `TXT`) from the dropdown.
5.  **Process & Download:** Click the button to apply your changes and download the new file.

## Technologies Used 💻

*   HTML5
*   CSS3 (Custom Styling & Transitions)
*   Vanilla JavaScript
*   Font Awesome (Icons)
*   Google Fonts (Poppins)
