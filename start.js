    const codeBlock = document.querySelector('.code-block');
    const codeLines = [
        'const imageFrame = document.getElementById("imageFrame");',
        'const images = document.querySelectorAll(".image-container");',
        'const maxDistance = 100; // Maximum distance from the center',
        'imageFrame.addEventListener("mousemove", (e) => {',
        '    const centerX = imageFrame.clientWidth / 2;',
        '    const centerY = imageFrame.clientHeight / 2;',
        // ... Add more lines of code
    ];

    let currentIndex = 0;

    function displayNextLine() {
        if (currentIndex < codeLines.length) {
            codeBlock.textContent += codeLines[currentIndex] + '\n';
            currentIndex++;
            setTimeout(displayNextLine, 1000); // Delay between lines (adjust as needed)
        }
    }
    displayNextLine();

    