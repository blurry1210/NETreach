const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;

function showSlide(index) {
    console.log(`Showing slide: ${index}`); // Debugging log
    sliderItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
            console.log(`Activating slide ${i}`); // Debugging log
        } else {
            item.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
}

// Auto-advance the slider every 5 seconds (5000 milliseconds)
setInterval(nextSlide, 5000);

// Show the initial slide
showSlide(currentIndex);