document.addEventListener('DOMContentLoaded', function() {
    // Navbar Kembali effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');
        
        if (header && content && icon) {
            header.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all items in the same section
                const accordionType = item.getAttribute('data-accordion');
                const sameSectionItems = document.querySelectorAll(`[data-accordion="${accordionType}"]`);
                
                sameSectionItems.forEach(sectionItem => {
                    if (sectionItem !== item) {
                        sectionItem.classList.remove('active');
                        const sectionContent = sectionItem.querySelector('.accordion-content');
                        const sectionIcon = sectionItem.querySelector('.accordion-icon');
                        if (sectionContent && sectionIcon) {
                            sectionContent.classList.add('d-none');
                            sectionIcon.classList.remove('bi-dash');
                            sectionIcon.classList.add('bi-plus');
                        }
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    content.classList.add('d-none');
                    icon.classList.remove('bi-dash');
                    icon.classList.add('bi-plus');
                } else {
                    item.classList.add('active');
                    content.classList.remove('d-none');
                    icon.classList.remove('bi-plus');
                    icon.classList.add('bi-dash');
                }
            });
        }
    });
    
    // Smooth scroll for anchor links
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
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !phone || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Show All Button functionality (if needed)
    const showAllBtn = document.querySelector('.btn-show-all');
    if (showAllBtn) {
        showAllBtn.addEventListener('click', function() {
            // Add your functionality here
            // For example, scroll to a section or show more content
            alert('Show All functionality - customize this as needed');
        });
    }
});

