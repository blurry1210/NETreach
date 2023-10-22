const imageFrame = document.getElementById("imageFrame");
const images = document.querySelectorAll(".image-container");

imageFrame.addEventListener("mousemove", (e) => {
    const centerX = imageFrame.clientWidth / 2;
    const centerY = imageFrame.clientHeight / 2;

    images.forEach((image, index) => {
        const angle = (Math.PI * 2) * (index / images.length);
        const distance = 100; // Adjust this value to control the distance from the center

        const moveX = distance * Math.cos(angle);
        const moveY = distance * Math.sin(angle);

        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
