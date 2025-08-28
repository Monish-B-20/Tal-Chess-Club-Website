// Simple alert on form submission
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting tal Chess Club!');
            contactForm.reset();
        });
    }
});
