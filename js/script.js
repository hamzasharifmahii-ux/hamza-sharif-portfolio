(function () {
    emailjs.init({
        publicKey: "GHVCW73NmtNGJZgKc",
    });
})();
// ==================== HAMZA SHARIF PORTFOLIO JS ====================

// ==================== TYPING ANIMATION ====================
const typingTexts = [
    "Frontend Developer",
    "Python Developer",
    "Web Developer",
    "Full Stack Developer",
    "Problem Solver"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 50;
const deletingSpeed = 30;
const delayBetweenWords = 1000;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const currentText = typingTexts[textIndex];

    if (!isDeleting) {
        // Typing
        if (charIndex < currentText.length) {
            typingElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            // Wait before deleting
            isDeleting = true;
            setTimeout(typeText, delayBetweenWords);
        }
    } else {
        // Deleting
        if (charIndex > 0) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeText, deletingSpeed);
        } else {
            // Move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            setTimeout(typeText, 500);
        }
    }
}

// ==================== SCROLL PROGRESS BAR ====================
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    if (!scrollProgress) return;

    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}

// ==================== BACK TO TOP BUTTON ====================
function toggleBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

// ==================== SCROLL ANIMATIONS ====================
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.skill-category, .project-card, .certificate-card, .timeline-item').forEach((el) => {
        observer.observe(el);
    });
}

// ==================== SMOOTH SCROLL NAVIGATION ====================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
}

// ==================== NAVBAR ACTIVE LINK ====================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
}
// ==================== CONTACT FORM ====================
function showFormMessage(message, type, element) {
    if (!element) return;

    element.innerHTML = `
        <div class="alert alert-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;

    if (type === 'success') {
        setTimeout(() => {
            element.innerHTML = '';
        }, 5000);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const formStatus = document.getElementById('formStatus');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const submitBtnOriginalHTML = submitBtn ? submitBtn.innerHTML : '';

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const subjectField = document.getElementById('subject');
        const messageField = document.getElementById('message');

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const subject = subjectField.value.trim();
        const message = messageField.value.trim();

        // Validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields before submitting.', 'error', formStatus);
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error', formStatus);
            return;
        }

        // Show loading state
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }
        showFormMessage('Sending your message, please wait...', 'info', formStatus);

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'hamzasharifmahii@gmail.com'
        };

        emailjs.send('service_seosuxl', 'template_1unp01v', templateParams)
            .then(() => {
                showFormMessage('Thank you! Your message has been sent successfully. I will get back to you soon.', 'success', formStatus);
                contactForm.reset();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                showFormMessage('Sorry, something went wrong while sending your message. Please try again or email me directly at hamzasharifmahii@gmail.com.', 'error', formStatus);
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = submitBtnOriginalHTML;
                }
            });
    });
}

// ==================== ANIMATED COUNTERS ====================
function setupCounters() {
    const counters = document.querySelectorAll('.counter');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
}

// ==================== BACK TO TOP FUNCTIONALITY ====================
function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== MOBILE MENU TOGGLE ====================
function setupMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    }
}

// ==================== LAZY LOAD IMAGES ====================
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach((img) => imageObserver.observe(img));
}

// ==================== GLOWING EFFECT ON HOVER ====================
function setupGlowingEffect() {
    const glowingButtons = document.querySelectorAll('.glowing-btn');

    glowingButtons.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', y + 'px');
        });
    });
}

// ==================== PARALLAX EFFECT ====================
function setupParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', () => {
        parallaxElements.forEach((el) => {
            const scrollPosition = window.scrollY;
            const elementOffset = el.offsetTop;
            const distance = scrollPosition - elementOffset;

            if (distance > -window.innerHeight && distance < window.innerHeight) {
                el.style.transform = `translateY(${distance * 0.5}px)`;
            }
        });
    });
}

// ==================== TOOLTIP INITIALIZATION ====================
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// ==================== INITIALIZE ALL ====================
document.addEventListener('DOMContentLoaded', () => {
    // Start typing animation
    setTimeout(typeText, 500);

    // Setup all features
    setupSmoothScroll();
    setupContactForm();
    setupBackToTop();
    setupMobileMenu();
    setupLazyLoading();
    setupGlowingEffect();
    setupParallax();
    updateActiveNavLink();
    observeElements();
    setupCounters();
    initializeTooltips();

    // Update scroll progress on load
    updateScrollProgress();
});

// ==================== EVENT LISTENERS ====================
window.addEventListener('scroll', () => {
    updateScrollProgress();
    toggleBackToTop();
});

// Refresh animations on window resize
window.addEventListener('resize', () => {
    observeElements();
});

// ==================== UTILITY FUNCTIONS ====================

/**
 * Get element with fallback
 */
function getElement(selector) {
    return document.querySelector(selector) || null;
}

/**
 * Get all elements with fallback
 */
function getElements(selector) {
    return document.querySelectorAll(selector) || [];
}

/**
 * Add class to element
 */
function addClass(element, className) {
    if (element) {
        element.classList.add(className);
    }
}

/**
 * Remove class from element
 */
function removeClass(element, className) {
    if (element) {
        element.classList.remove(className);
    }
}

/**
 * Toggle class on element
 */
function toggleClass(element, className) {
    if (element) {
        element.classList.toggle(className);
    }
}

/**
 * Check if element has class
 */
function hasClass(element, className) {
    return element ? element.classList.contains(className) : false;
}

/**
 * Format date
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

/**
 * Debounce function
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Log with custom styling (for development)
 */
function log(message, type = 'info') {
    const colors = {
        info: 'color: #00BFFF; font-weight: bold;',
        success: 'color: #10B981; font-weight: bold;',
        warning: 'color: #F59E0B; font-weight: bold;',
        error: 'color: #EF4444; font-weight: bold;'
    };

    console.log(`%c${message}`, colors[type] || colors.info);
}

// ==================== PERFORMANCE MONITORING ====================
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        log(`Page loaded in ${pageLoadTime}ms`, 'success');
    });
}

// ==================== SERVICE WORKER REGISTRATION (Optional) ====================
if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('sw.js').then(reg => {
    //     log('Service Worker registered', 'success');
    // });
}

log('Portfolio loaded successfully!', 'success');
