// ===========================
// Dark Mode Toggle
// ===========================
const themeToggle = document.getElementById('themeToggle');

// Load theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
});

// Load theme on page load
loadTheme();

// ===========================
// Mobile Menu Toggle
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ===========================
// Dropdown Menu Handling
// ===========================
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form elements
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const phoneInput = document.querySelector('input[name="phone"]');
        const serviceSelect = document.querySelector('select[name="service"]');
        const messageInput = document.querySelector('textarea[name="message"]');
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const messageElement = document.getElementById('formMessage');

        // Validate inputs
        if (!nameInput?.value.trim()) {
            showFormMessage('Please enter your name', 'error');
            return;
        }

        if (!emailInput?.value.trim()) {
            showFormMessage('Please enter your email', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }

        if (!messageInput?.value.trim()) {
            showFormMessage('Please enter your message', 'error');
            return;
        }

        if (messageInput.value.trim().length < 10) {
            showFormMessage('Message must be at least 10 characters long', 'error');
            return;
        }

        // Prepare form data
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput?.value.trim() || '',
            service: serviceSelect?.value || 'General Inquiry',
            message: messageInput.value.trim(),
        };

        // Disable submit button
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                showFormMessage('✅ Message sent successfully! We\'ll contact you soon.', 'success');
                contactForm.reset();
                
                // Clear message after 5 seconds
                setTimeout(() => {
                    messageElement.classList.remove('success');
                }, 5000);
            } else {
                showFormMessage('❌ ' + (result.error || 'Error sending message. Please try again.'), 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showFormMessage('❌ Error sending message. Please check your connection and try again.', 'error');
        } finally {
            // Re-enable submit button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            }
        }
    });
}

// Helper function to show form messages
function showFormMessage(message, type) {
    const messageElement = document.getElementById('formMessage');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.classList.add(type);
        messageElement.classList.remove(type === 'success' ? 'error' : 'success');
        messageElement.style.display = 'block';
    }
}

// ===========================
// Smooth Scrolling for Navigation
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only smooth scroll if it's a section link, not form handling
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===========================
// Scroll Animation - Reveal Elements
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards, portfolio items, team members, testimonials
document.querySelectorAll('.service-card, .portfolio-item, .team-member, .testimonial-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===========================
// Pricing Plan Buttons
// ===========================
document.querySelectorAll('.pricing-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const plan = this.closest('.pricing-card').querySelector('h3').textContent;
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            // Pre-fill service select with plan name
            const serviceSelect = document.querySelector('select[name="service"]');
            if (serviceSelect) {
                serviceSelect.value = plan.toLowerCase();
            }
        }
    });
});

// ===========================
// CTA Buttons Scroll
// ===========================
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
