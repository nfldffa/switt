document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined') {
        console.warn("GSAP tidak ditemukan. Animasi tidak akan berfungsi.");
        document.querySelectorAll('[class*="product"]').forEach(el => {
            el.style.opacity = 1;
            el.style.transform = 'none';
        });
        return;
    }

    gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
        .to('.product-card', { opacity: 1, y: 0, duration: 1 })
        .to('.title', { opacity: 1, y: 0, ease: 'back.out(1.7)' }, 0.2)
        .to('.subtitle', { opacity: 1, y: 0 }, 0.3)
        .to('.product-item', { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }, 0.4);

    document.querySelectorAll('.product-item').forEach(item => {
        const content = item.querySelector('.product-content');
        if (!content) return;

        const hoverEffect = gsap.to(content, {
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            duration: 0.3,
            paused: true
        });

        item.addEventListener('mouseenter', () => {
            hoverEffect.play();
            requestAnimationFrame(() => {
                const shine = document.createElement('div');
                shine.className = 'shine-effect';
                content.appendChild(shine);
                gsap.fromTo(shine, { x: '-100%', rotation: 45 }, {
                    x: '200%', duration: 0.8, ease: 'power2.inOut',
                    onComplete: () => shine.remove()
                });
            });
        });

        item.addEventListener('mouseleave', () => hoverEffect.reverse());
    });
});
