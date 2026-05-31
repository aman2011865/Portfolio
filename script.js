// Smooth scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Project button interactions with smooth scroll and highlight
document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        // Scroll to projects section
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });

            // Highlight effect on project cards
            setTimeout(() => {
                const cards = document.querySelectorAll('.project-card');
                cards.forEach(card => {
                    card.style.transition = 'all 0.3s ease';
                    card.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                    setTimeout(() => {
                        card.style.borderColor = 'rgba(0, 217, 255, 0.15)';
                    }, 1500);
                });
            }, 600);
        }
    });
});

// Button interactions
document.querySelectorAll('.btn-primary, .cta-nav').forEach(button => {
    button.addEventListener('click', function () {
        console.log('CTA clicked');
    });
});

// Add scroll shadow to nav
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 10) {
        nav.style.borderBottomColor = 'rgba(0, 217, 255, 0.3)';
    } else {
        nav.style.borderBottomColor = 'rgba(0, 217, 255, 0.1)';
    }
});
