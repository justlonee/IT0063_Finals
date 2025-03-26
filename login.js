document.addEventListener('DOMContentLoaded', function() {
    
    // Initially shows the login section
    document.getElementById('login').classList.add('active');
    
    // Click event listeners that navigate between the three sections
    
    // Login section
    document.querySelectorAll('.login-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('login');
        });
    });
    
    // Register section
    document.querySelectorAll('.register-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('register');
        });
    });
    
    // Password reset section
    document.querySelectorAll('.forgot-password-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('pass-reset');
        });
    });
    
    // Toggle password visibility
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            const icon = this.querySelector('i');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('bi-eye-slash');
                icon.classList.add('bi-eye');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('bi-eye');
                icon.classList.add('bi-eye-slash');
            }
        });
    });
    
    function showSection(sectionId) {
        
        // Hides all sections first
        ['login', 'register', 'pass-reset'].forEach(id => {
            document.getElementById(id).classList.remove('active');
        });
        
        // Then shows the section of the selected link
        document.getElementById(sectionId).classList.add('active');
    }
});
