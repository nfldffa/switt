// pajero.js

// Animasi Scroll dengan Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Gunakan GSAP untuk animasi yang lebih stabil
        gsap.to(entry.target, {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "power3.out",
          onComplete: () => {
            observer.unobserve(entry.target);
          }
        });
      }
    });
  }, observerOptions);

  // Inisialisasi element yang perlu diobservasi
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    // Set initial state melalui GSAP
    gsap.set(element, {
      opacity: 0,
      y: 30
    });
    observer.observe(element);
  });
}

// Animasi Hover untuk Experience Item
function initHoverAnimations() {
  document.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      gsap.to(this, {
        duration: 0.3,
        y: -5,
        boxShadow: '0 8px 15px rgba(0,0,0,0.12)',
        ease: "power2.out"
      });
    });
    
    item.addEventListener('mouseleave', function() {
      gsap.to(this, {
        duration: 0.3,
        y: 0,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        ease: "power2.out"
      });
    });
  });
}

// Animasi Load Awal dengan GSAP
function initPageLoadAnimations() {
  // Animasi untuk element utama
  gsap.from('.profile-header', {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out"
  });
}

// Fungsi toggle menu
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  initScrollAnimations();
  initHoverAnimations();
  
  // Jalankan GSAP animations
  if (typeof gsap !== 'undefined') {
    initPageLoadAnimations();
  }

  // Tutup menu mobile saat klik di luar
  document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
});