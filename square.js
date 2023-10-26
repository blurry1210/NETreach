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

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.0,
};

const squareObserver = new IntersectionObserver(fadeInSquares, options);

squares.forEach((square) => {
    squareObserver.observe(square);
});
