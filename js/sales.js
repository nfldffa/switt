// pajero.js

// Animasi Scroll dengan Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '-10% 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "power3.out"
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Set opacity dan posisi awal hanya jika elemen ada
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (elements.length > 0) {
    gsap.set(elements, { opacity: 0, y: 30 });
    elements.forEach(element => observer.observe(element));
  }
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

  if (navMenu && menuToggle) {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  } else {
    console.warn("Elemen nav-menu atau menu-toggle tidak ditemukan!");
  }
}

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  if (window.gsap) {
    initScrollAnimations();
    initHoverAnimations();
    initPageLoadAnimations();
  } else {
    console.error("GSAP tidak ditemukan! Pastikan GSAP sudah di-load.");
  }

  // Tutup menu mobile saat klik di luar
  document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (navMenu && menuToggle && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
});