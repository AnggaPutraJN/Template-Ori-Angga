function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const   
   windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight) {
        element.classList.add('show');
      } 
    });
  }
  
  window.addEventListener('scroll',   
   handleScroll);