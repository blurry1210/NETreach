function handleScroll() {
    const services = document.querySelectorAll('.service');
    services.forEach((service) => {
        const rect = service.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            if (!service.classList.contains('visible')) {
                service.style.top = '0';
                service.style.opacity = 1;
                setTimeout(() => {
                    const description = service.querySelector('p');
                    description.style.opacity = 1;
                }, 2000);
                service.classList.add('visible');
            }
        }
    });
}

window.addEventListener('scroll', handleScroll);

// Initial check for elements in the viewport
handleScroll();
