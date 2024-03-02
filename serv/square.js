
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');

    function fadeInSquares(entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 500); // Delay appearance by 1 second for each square
            }
        });
    }

    function zoomInSquare(event) {
        event.target.style.transform = 'scale(1.1)';
    }

    function resetSquare(event) {
        event.target.style.transform = 'scale(1)';
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.0,
    };

    const squareObserver = new IntersectionObserver(fadeInSquares, options);

    squares.forEach((square) => {
        squareObserver.observe(square);

        // Add event listeners for hover effect
        square.addEventListener('mouseenter', zoomInSquare);
        square.addEventListener('mouseleave', resetSquare);
    });
});