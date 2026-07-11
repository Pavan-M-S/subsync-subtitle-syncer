// --- Dark/Light Mode Logic ---
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Check LocalStorage for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

// Toggle Theme on Button Click
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});


// --- Subtitle Processing Logic ---
let currentFilename = 'subtitles';

document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const parts = file.name.split('.');
    currentFilename = parts.length > 1 ? parts.slice(0, -1).join('.') : file.name;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const editor = document.getElementById('editor');
        editor.value = event.target.result;
        
        editor.style.transform = 'scale(1.02)';
        setTimeout(() => editor.style.transform = 'scale(1)', 200);
    };
    
    reader.readAsText(file);
    e.target.value = ''; 
});

function clearEditor() {
    document.getElementById('editor').value = '';
    document.getElementById('fileInput').value = '';
    currentFilename = 'subtitles';
}

function parseTime(timeStr) {
    timeStr = timeStr.replace(',', '.');
    const parts = timeStr.split(':');
    let h = 0, m = 0, s = 0, ms = 0;
    
    if (parts.length === 3) {
        h = parseInt(parts[0]);
        m = parseInt(parts[1]);
        const sms = parts[2].split('.');
        s = parseInt(sms[0]);
        ms = parseInt(sms[1] || 0);
    } else if (parts.length === 2) {
        m = parseInt(parts[0]);
        const sms = parts[1].split('.');
        s = parseInt(sms[0]);
        ms = parseInt(sms[1] || 0);
    }
    return h * 3600 + m * 60 + s + ms / 1000;
}

function formatTime(seconds, format) {
    if (seconds < 0) seconds = 0;
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const ms = Math.round((seconds % 1) * 1000);
    const sep = format === 'vtt' ? '.' : ',';
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}${sep}${String(ms).padStart(3,'0')}`;
}

function processAndDownload() {
    const text = document.getElementById('editor').value;
    const shift = parseFloat(document.getElementById('shiftAmount').value) || 0;
    const format = document.getElementById('exportFormat').value;

    if (!text.trim()) {
        alert("Please upload a file or paste subtitle text first.");
        return;
    }

    const blocks = text.trim().split(/\r?\n\r?\n/);
    const output = [];
    if (format === 'vtt') output.push('WEBVTT\n');

    let index = 1;
    const timeRegex = /(\d{2,}:\d{2}:\d{2}[,\.]\d{3})\s*-->\s*(\d{2,}:\d{2}:\d{2}[,\.]\d{3})/;

    blocks.forEach(block => {
        if (block.includes('WEBVTT')) return;
        
        const lines = block.split(/\r?\n/);
        const newBlock = [];
        let hasTime = false;

        for (let line of lines) {
            const match = line.match(timeRegex);
            if (match) {
                hasTime = true;
                let t1 = parseTime(match[1]) + shift;
                let t2 = parseTime(match[2]) + shift;

                if (t2 <= 0) return; 
                if (t1 < 0) t1 = 0;

                const newTimeLine = `${formatTime(t1, format)} --> ${formatTime(t2, format)}`;

                if (format === 'srt') {
                    newBlock.push(index.toString());
                    newBlock.push(newTimeLine);
                } else if (format === 'vtt') {
                    newBlock.push(newTimeLine);
                }
            } else if (hasTime || (!line.match(/^\d+$/) && format === 'txt')) {
                newBlock.push(line);
            }
        }

        if (format === 'txt') {
            const txtLines = newBlock.filter(l => !l.match(timeRegex) && !l.match(/^\d+$/));
            if (txtLines.length > 0) output.push(txtLines.join('\n'));
        } else if (newBlock.length > 0) {
            output.push(newBlock.join('\n'));
            index++;
        }
    });

    const finalString = output.join('\n\n');
    const blob = new Blob([finalString], { type: 'text/plain' });
    const link = document.createElement('a');
    
    link.href = URL.createObjectURL(blob);
    link.download = `${currentFilename}_synced.${format}`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}