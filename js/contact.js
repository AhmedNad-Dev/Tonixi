// ========================================
// Tonixi Website - Contact Form Handler
// EmailJS Integration
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // EmailJS Configuration
    // ========================================
    
    // IMPORTANT: Replace these placeholder values with your actual EmailJS credentials
    // Get these from your EmailJS dashboard: https://dashboard.emailjs.com/
    
    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your EmailJS service ID
    const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your EmailJS template ID
    const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your EmailJS public key
    
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);
    
    // ========================================
    // Form Elements
    // ========================================
    
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');
    const btnSpinner = document.getElementById('btn-spinner');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    // ========================================
    // Form Submission Handler
    // ========================================
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            if (!validateForm(name, email, message)) {
                return;
            }
            
            // Show loading state
            setLoadingState(true);
            hideMessages();
            
            // Prepare template parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_name: 'Tonixi Team'  // You can customize this
            };
            
            // Send email using EmailJS
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    handleSuccess();
                })
                .catch(function(error) {
                    console.error('FAILED...', error);
                    handleError();
                });
        });
    }
    
    // ========================================
    // Form Validation
    // ========================================
    
    function validateForm(name, email, message) {
        // Check if fields are empty
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return false;
        }
        
        // Validate email format
        if (!window.validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        
        // Check minimum message length
        if (message.length < 10) {
            alert('Please provide a more detailed message (at least 10 characters).');
            return false;
        }
        
        return true;
    }
    
    // ========================================
    // UI State Management
    // ========================================
    
    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-70', 'cursor-not-allowed');
            btnText.textContent = 'Sending...';
            btnIcon.classList.add('hidden');
            btnSpinner.classList.remove('hidden');
        } else {
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
            btnText.textContent = 'Send Message';
            btnIcon.classList.remove('hidden');
            btnSpinner.classList.add('hidden');
        }
    }
    
    function hideMessages() {
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
    }
    
    function handleSuccess() {
        setLoadingState(false);
        successMessage.classList.remove('hidden');
        
        // Clear form
        contactForm.reset();
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide success message after 10 seconds
        setTimeout(function() {
            successMessage.classList.add('hidden');
        }, 10000);
    }
    
    function handleError() {
        setLoadingState(false);
        errorMessage.classList.remove('hidden');
        
        // Scroll to error message
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide error message after 10 seconds
        setTimeout(function() {
            errorMessage.classList.add('hidden');
        }, 10000);
    }
    
    // ========================================
    // Real-time Email Validation
    // ========================================
    
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            if (email && !window.validateEmail(email)) {
                this.classList.add('border-red-500');
            } else {
                this.classList.remove('border-red-500');
            }
        });
        
        emailInput.addEventListener('input', function() {
            this.classList.remove('border-red-500');
        });
    }
    
});

// ========================================
// EmailJS Template Setup Instructions
// ========================================

/*
SETUP INSTRUCTIONS:

1. Create an EmailJS account at https://www.emailjs.com/

2. Add an email service (Gmail, Outlook, etc.) in your EmailJS dashboard

3. Create an email template with the following variables:
   - {{from_name}} - Sender's name
   - {{from_email}} - Sender's email
   - {{message}} - Message content
   - {{to_name}} - Recipient name (optional)

   Example template:
   
   Subject: New Contact Form Submission from {{from_name}}
   
   You have received a new message from your Tonixi website contact form:
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from the Tonixi website contact form.

4. Get your credentials:
   - Service ID: Found in the "Email Services" section
   - Template ID: Found in the "Email Templates" section
   - Public Key: Found in "Account" > "General" > "Public Key"

5. Replace the placeholder values at the top of this file:
   - EMAILJS_SERVICE_ID
   - EMAILJS_TEMPLATE_ID
   - EMAILJS_PUBLIC_KEY

6. Test the form to ensure emails are being sent correctly

IMPORTANT NOTES:
- EmailJS free tier allows 200 emails/month
- Keep your public key safe (it's meant to be public, but don't share unnecessarily)
- For production, consider rate limiting and spam protection
- The template can be customized in your EmailJS dashboard
*/