// Smooth scroll functionality and navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Mobile menu functionality can be added here
            console.log('Mobile menu clicked');
        });
    }

    // Active navigation link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-primary');
            const indicator = link.querySelector('.nav-indicator');
            
            if (indicator) {
                indicator.style.display = 'none';
            }

            if (link.getAttribute('data-section') === current) {
                link.classList.remove('text-gray-600', 'dark:text-gray-300');
                link.classList.add('text-primary');
                if (indicator) {
                    indicator.style.display = 'block';
                }
            } else {
                link.classList.remove('text-primary');
                link.classList.add('text-gray-600', 'dark:text-gray-300');
            }
        });
    }

    // Highlight on scroll
    window.addEventListener('scroll', highlightNav);
    
    // Highlight on page load
    highlightNav();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
