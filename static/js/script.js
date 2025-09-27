// Typing effect for hero section
const dynamicText = document.getElementById('dynamic-text');
const roles = ['Data Analyst', 'Machine Learning Engineer', 'Vibe Coder', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        dynamicText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        dynamicText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeWriter, 500);
    } else {
        setTimeout(typeWriter, isDeleting ? 100 : 200);
    }
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000);
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


// Project filtering
const filterButtons = document.querySelectorAll('.tab-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                gsap.to(card, { duration: 0.5, opacity: 1, scale: 1, display: 'block' });
            } else {
                gsap.to(card, { duration: 0.5, opacity: 0, scale: 0.8, display: 'none' });
            }
        });
    });
});

// GSAP animations
gsap.registerPlugin(TextPlugin, ScrollToPlugin);

// Hero animations
gsap.from('.hero-title', { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, delay: 1 });
gsap.from('.hero-buttons', { duration: 1, y: 50, opacity: 0, delay: 1.5 });

// Section animations on scroll
const sections = gsap.utils.toArray('section');

sections.forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Skill bar animations
const skillBars = document.querySelectorAll('.skill-fill');

skillBars.forEach(bar => {
    gsap.from(bar, {
        width: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Project card hover animations
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { duration: 0.3, y: -10, boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)' });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { duration: 0.3, y: 0, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' });
    });
});

// Certification card animations
const certCards = document.querySelectorAll('.cert-card');

certCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { duration: 0.3, scale: 1.05 });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { duration: 0.3, scale: 1 });
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 70 } });
        }
    });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: 0 });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Certifications Swiper
const certificationsSwiper = new Swiper('.certifications-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});