document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('nav a');
  
  const removeActiveClass = () => {
    menuLinks.forEach(link => link.classList.remove('active'));
  };
  
  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      
      removeActiveClass();
      link.classList.add('active');
      
      const targetId = link.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  window.addEventListener('scroll', () => {
    let currentSection = '';
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
    
    menuLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });
});
