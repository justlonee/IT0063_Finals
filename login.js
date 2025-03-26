document.addEventListener('DOMContentLoaded', function() {
    
    // Initially shows the login section
    document.getElementById('login').classList.add('active');

    // Click event listeners that navigate between the three login sections
    document.querySelectorAll('.login-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('login');
        });
    });

    document.querySelectorAll('.register-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('register');
        });
    });

    document.querySelectorAll('.forgot-password-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('pass-reset');
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
