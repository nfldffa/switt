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

// Tutup menu mobile saat klik di luar
document.addEventListener('click', (e) => {
  const navMenu = document.getElementById('nav-menu');
  const menuToggle = document.querySelector('.menu-toggle');

  if (navMenu && menuToggle && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// Tutup menu saat halaman dimuat ulang atau kembali ke halaman sebelumnya
document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const menuToggle = document.querySelector(".menu-toggle");

  if (navMenu && menuToggle) {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
  }
}); // <-- Menutup kurung yang hilang


let slideIndex = 0;
const slides = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const totalSlides = images.length;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let autoSlideInterval;

// ========== Menu Aktif Saat Halaman Dikunjungi ==========
(function setActiveMenu() {
  const { pathname } = window.location;
  const menuLinks = document.querySelectorAll('#nav-menu a[href]');
  
  // Handle homepage special case
  const currentPath = pathname === '/' ? 'index.html' : pathname.split('/').pop();
  
  menuLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname.split('/').pop();
    const isActive = linkPath === currentPath || 
                     (currentPath === 'index.html' && linkPath === '');
    
    link.classList.toggle('active', isActive);
    
    // Optional: Tambahkan aria-current untuk aksesibilitas
    link.setAttribute('aria-current', isActive ? 'page' : null);
  });
})();
// Fungsi untuk memperbarui tampilan slide
function updateSlide() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Fungsi untuk berpindah slide manual
function moveSlide(step) {
  slideIndex += step;

  if (slideIndex < 0) {
    slideIndex = totalSlides - 1; // Jika di awal, pindah ke slide terakhir
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0; // Jika di akhir, kembali ke slide pertama
  }

  updateSlide();
}

// Fungsi untuk memulai auto-slide
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    moveSlide(1);
  }, 3000);
}

// Fungsi untuk menghentikan auto-slide
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Event listener untuk menghentikan auto-slide saat hover tombol
prevButton.addEventListener("mouseenter", stopAutoSlide);
prevButton.addEventListener("mouseleave", startAutoSlide);
nextButton.addEventListener("mouseenter", stopAutoSlide);
nextButton.addEventListener("mouseleave", startAutoSlide);

// Mulai auto-slide pertama kali
startAutoSlide();



document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = window.location.href;
  const menuItems = document.querySelectorAll("#nav-menu li a");

  menuItems.forEach((item) => {
      if (item.href === currentLocation) {
          item.classList.add("active");
      }
  });
});



