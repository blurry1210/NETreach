// JavaScript to animate titles when they are in the viewport

function checkIfElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    if (rect.top >= 0 && rect.bottom <= windowHeight) {
      element.classList.add('in-viewport');
    } else {
      element.classList.remove('in-viewport');
    }
  }
  
  // Get all elements with the class "animated-title"
  const titleElements = document.querySelectorAll('.animated-title');
  
  function handleElementsInViewport() {
    titleElements.forEach((element) => {
      checkIfElementInViewport(element);
    });
  }
  
  window.addEventListener('scroll', handleElementsInViewport);
  window.addEventListener('resize', handleElementsInViewport);
  
  // Initial check on page load
  handleElementsInViewport();
  