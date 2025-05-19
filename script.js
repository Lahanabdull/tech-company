document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  const backToTopBtn = document.getElementById('backToTop');

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Close menu when clicking on a nav link (mobile)
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

  // Show or hide Back to Top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // Smooth scroll to top on Back to Top button click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

