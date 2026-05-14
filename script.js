// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const top = element.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;

        if (isVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Ejecutar al cargar

// Smooth scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
