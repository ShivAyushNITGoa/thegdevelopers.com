/**
 * The GDevelopers - Newsletter Functionality
 * Handles newsletter subscription and confirmation
 */

document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const body = document.body;
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get email input
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            // Simple validation
            if (!email || !isValidEmail(email)) {
                emailInput.classList.add('error');
                return;
            }
            
            // Remove error class if present
            emailInput.classList.remove('error');
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Subscribing...';
            
            setTimeout(function() {
                // Reset form
                newsletterForm.reset();
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Show confirmation message
                showNewsletterConfirmation(email);
            }, 1500);
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNewsletterConfirmation(email) {
        // Create confirmation element if it doesn't exist
        let confirmation = document.querySelector('.newsletter-confirmation');
        
        if (!confirmation) {
            confirmation = document.createElement('div');
            confirmation.className = 'newsletter-confirmation';
            
            const content = `
                <i class="fas fa-check-circle"></i>
                <div>
                    <strong>Success!</strong>
                    <p>You've been subscribed to our newsletter.</p>
                </div>
                <button class="newsletter-confirmation-close" aria-label="Close">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            confirmation.innerHTML = content;
            body.appendChild(confirmation);
            
            // Add close button functionality
            const closeButton = confirmation.querySelector('.newsletter-confirmation-close');
            closeButton.addEventListener('click', function() {
                confirmation.classList.remove('active');
                
                setTimeout(function() {
                    confirmation.remove();
                }, 300);
            });
        }
        
        // Show confirmation
        setTimeout(function() {
            confirmation.classList.add('active');
            
            // Auto-hide after 5 seconds
            setTimeout(function() {
                if (confirmation.classList.contains('active')) {
                    confirmation.classList.remove('active');
                    
                    setTimeout(function() {
                        confirmation.remove();
                    }, 300);
                }
            }, 5000);
        }, 100);
        
        // Store subscription in localStorage to remember the user
        try {
            localStorage.setItem('newsletter_subscribed', 'true');
            localStorage.setItem('newsletter_email', email);
        } catch (e) {
            // Local storage might be disabled or full
            console.warn('Could not save newsletter subscription to localStorage');
        }
    }
}); 