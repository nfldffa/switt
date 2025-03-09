document.addEventListener('DOMContentLoaded', () => {
  // Pastikan GSAP telah dimuat
  if (typeof gsap === 'undefined') {
      console.warn("GSAP tidak ditemukan. Animasi tidak akan berfungsi.");
      document.querySelectorAll('[class*="product"]').forEach(el => {
          el.style.opacity = 1;
          el.style.transform = 'none';
      });
      return;
  }

  // Set initial states untuk elemen-elemen lain, KECUALI tombol WhatsApp
  gsap.set(['.product-card', '.title', '.subtitle', '.divider', '.product-item'], {
      opacity: 0,
      y: 50
  });

  // Master animation timeline
  const masterTL = gsap.timeline({
      defaults: {
          ease: 'power3.out',
          duration: 0.8
      }
  });

  masterTL
      .to('.product-card', { opacity: 1, y: 0, duration: 1.2 })
      .to('.title', { opacity: 1, y: 0, ease: 'back.out(1.7)' }, 0.2)
      .to('.divider', { scaleX: 1, opacity: 1, ease: 'expo.out' }, 0.3)
      .to('.subtitle', { opacity: 1, y: 0 }, 0.4)
      .to('.product-item', { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }, 0.5);
      // Tween untuk .whatsapp-btn dihapus dari timeline agar tidak mempengaruhi tampilannya

  // Hover effects dengan shine animation
  const createShine = (element) => {
      if (!element) return;

      const shine = document.createElement('div');
      shine.className = 'shine-effect';
      element.appendChild(shine);

      gsap.fromTo(shine,
          { x: '-100%', rotation: 45 },
          {
              x: '200%',
              duration: 0.8,
              ease: 'power2.inOut',
              onComplete: () => element.removeChild(shine)
          }
      );
  };

  document.querySelectorAll('.product-item').forEach(item => {
      const content = item.querySelector('.product-content');
      if (!content) return;

      const hoverTL = gsap.timeline({ paused: true });
      hoverTL.to(content, { boxShadow: '0 8px 20px rgba(0,0,0,0.2)', duration: 0.3 });

      item.addEventListener('mouseenter', () => {
          hoverTL.play();
          createShine(content);
      });

      item.addEventListener('mouseleave', () => {
          hoverTL.reverse();
      });
  });
})
