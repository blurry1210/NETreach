function createCoolTitle(title) {
    // Create a cool title element
    const titleElement = document.createElement('h1');
    titleElement.textContent = title;
    titleElement.classList.add('cool-title');
    document.querySelector('.title-container').appendChild(titleElement);

    // Apply animation and font styles
    titleElement.style.fontFamily = 'cursive'; // Set a cool font
    titleElement.style.fontSize = '36px'; // Set the font size
    titleElement.style.color = '#4a90e2'; // Set the text color

    // Add an animation
    titleElement.style.animation = 'fadeIn 2s ease';

    // Define the fadeIn animation
    const keyframes = `
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;

    // Create a style element for the animation
    const styleElement = document.createElement('style');
    styleElement.textContent = keyframes;

    // Append the style element to the document's head
    document.head.appendChild(styleElement);
}

// Call the createCoolTitle function with different titles
createCoolTitle('Service 1 Title');
createCoolTitle('Service 2 Title');
createCoolTitle('Service 3 Title');
