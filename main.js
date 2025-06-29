// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.getElementsByTagName('a');
    for (let link of mobileLinks) {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    }
});

// Form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', formObject);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4';
        successMessage.innerHTML = `
            <strong class="font-bold">Thank you!</strong>
            <span class="block sm:inline"> Your message has been received. We'll get back to you soon.</span>
        `;
        
        contactForm.appendChild(successMessage);
        contactForm.reset();

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-green-200');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('text-green-200');
        }
    });
}); 