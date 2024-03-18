function handleScroll() {
    const services = document.querySelectorAll('.service');
    services.forEach((service) => {
      const rect = service.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight+700) {
        if (!service.classList.contains('visible')) {
          service.style.top = '0';
          service.style.opacity = 1;
          // Apply fade-in animation to the image
          const image = service.querySelector('.service1__image');
          if (image) { // Check if the element exists
              image.style.transition = 'opacity 1s ease-in';
              image.style.opacity = 1;
          }
  
          setTimeout(() => {
            const description = service.querySelector('.service1__content');
            if (description) { // Check if the element exists
                description.style.opacity = 1;
            }
           }, 1000);
          service.classList.add('visible');
        }
      }
    });
  }
  window.addEventListener('scroll', handleScroll);
  
handleScroll();

  