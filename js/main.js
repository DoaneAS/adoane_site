/**
 * Main JavaScript for Ashley Doane Website
 * Handles navigation, smooth scrolling, animations, and interactivity
 */

// ===================================
// DOM Elements
// ===================================
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('back-to-top');

// ===================================
// Mobile Navigation Toggle
// ===================================
function showMenu() {
    if (navMenu && navToggle) {
        navMenu.classList.add('show-menu');
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
    }
}

function hideMenu() {
    if (navMenu) {
        navMenu.classList.remove('show-menu');
        // Restore body scroll
        document.body.style.overflow = '';
    }
}

// Open menu on toggle button click
if (navToggle) {
    navToggle.addEventListener('click', showMenu);
}

// Close menu on close button click
if (navClose) {
    navClose.addEventListener('click', hideMenu);
}

// Close menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hideMenu();
    });
});

// Close menu when clicking outside
if (navMenu) {
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('show-menu') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
            hideMenu();
        }
    });
}

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
function setActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + header.offsetHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// Header Shadow on Scroll
// ===================================
function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ===================================
// Back to Top Button
// ===================================
function handleBackToTop() {
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Scroll Event Listener (Optimized with Throttle)
// ===================================
let scrollTimeout;

function handleScroll() {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        setActiveNavLink();
        handleHeaderScroll();
        handleBackToTop();
    });
}

window.addEventListener('scroll', handleScroll);

// ===================================
// Intersection Observer for Scroll Animations
// ===================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optionally unobserve after revealing
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Add scroll-reveal class to elements to animate
function initScrollAnimations() {
    const elementsToAnimate = [
        '.about-description',
        '.stat-card',
        '.education-card',
        '.timeline-item',
        '.skill-card',
        '.publication-card',
        '.contact-item',
        '.social-link'
    ];

    elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.classList.add('scroll-reveal');
            element.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(element);
        });
    });
}

// ===================================
// Email Copy to Clipboard
// ===================================
function initEmailCopy() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            // Only prevent default if clipboard API is supported
            if (navigator.clipboard) {
                e.preventDefault();
                const email = link.textContent;

                try {
                    await navigator.clipboard.writeText(email);

                    // Visual feedback
                    const originalText = link.textContent;
                    link.textContent = 'Email copied!';
                    link.style.color = 'var(--accent-color)';

                    setTimeout(() => {
                        link.textContent = originalText;
                        link.style.color = '';
                    }, 2000);
                } catch (err) {
                    // If copy fails, allow default mailto behavior
                    console.log('Failed to copy email:', err);
                }
            }
        });
    });
}

// ===================================
// Keyboard Navigation Support
// ===================================
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
            hideMenu();
        }

        // Navigate to top with Home key
        if (e.key === 'Home' && e.ctrlKey) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Navigate to bottom with End key
        if (e.key === 'End' && e.ctrlKey) {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    });
}

// ===================================
// Loading Animation
// ===================================
function initPageLoad() {
    // Add fade-in class to hero section on page load
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('fade-in');
    }

    // Initialize scroll animations
    initScrollAnimations();
}

// ===================================
// External Link Security
// ===================================
function initExternalLinks() {
    // Add rel="noopener noreferrer" to external links for security
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// ===================================
// Smooth Scroll Polyfill Check
// ===================================
function checkSmoothScrollSupport() {
    // Check if smooth scroll is supported
    if (!('scrollBehavior' in document.documentElement.style)) {
        // If not supported, you could load a polyfill here
        console.log('Smooth scroll not natively supported');
    }
}

// ===================================
// Performance: Preload Important Resources
// ===================================
function preloadResources() {
    // Preload the CV PDF for faster downloads
    const cvLink = document.querySelector('a[href*="Doane_CV.pdf"]');
    if (cvLink) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = cvLink.getAttribute('href');
        link.as = 'document';
        document.head.appendChild(link);
    }
}

// ===================================
// Lazy Load Images (if needed in future)
// ===================================
function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        // Could implement Intersection Observer here if needed
        console.log('Native lazy loading not supported');
    }
}

// ===================================
// Analytics Tracking (Placeholder)
// ===================================
function trackPageView() {
    // Add analytics tracking here if needed
    // Example: Google Analytics, Plausible, etc.
    console.log('Page loaded:', window.location.href);
}

function trackEvent(eventName, eventData) {
    // Track custom events
    console.log('Event:', eventName, eventData);
}

// Track CV downloads
function initAnalytics() {
    const cvButtons = document.querySelectorAll('a[href*="Doane_CV.pdf"]');
    cvButtons.forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('cv_download', { source: 'website' });
        });
    });

    // Track external link clicks
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', () => {
            const url = new URL(link.href);
            if (url.hostname !== window.location.hostname) {
                trackEvent('external_link', { destination: url.hostname });
            }
        });
    });
}

// ===================================
// Error Handling
// ===================================
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ===================================
// Initialize Everything on DOM Content Loaded
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website initialized');

    // Check support and features
    checkSmoothScrollSupport();

    // Initialize all features
    initPageLoad();
    initEmailCopy();
    initKeyboardNavigation();
    initExternalLinks();
    initLazyLoading();
    preloadResources();
    initAnalytics();
    trackPageView();

    // Set initial states
    handleHeaderScroll();
    handleBackToTop();
    setActiveNavLink();
});

// ===================================
// Handle Page Visibility Changes
// ===================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page hidden');
    } else {
        console.log('Page visible');
    }
});

// ===================================
// Handle Window Resize (Debounced)
// ===================================
let resizeTimeout;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768 && navMenu.classList.contains('show-menu')) {
            hideMenu();
        }
    }, 250);
});

// ===================================
// Service Worker Registration (Future Enhancement)
// ===================================
if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA features
    /*
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
    */
}

// ===================================
// Export functions for testing (optional)
// ===================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showMenu,
        hideMenu,
        setActiveNavLink,
        handleHeaderScroll,
        handleBackToTop,
        trackEvent
    };
}
