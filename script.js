document.addEventListener('DOMContentLoaded', function() {
    // Check for saved user preference, if any, on page load
    const userPrefersLight = localStorage.getItem('theme') === 'light';
    if (userPrefersLight) {
        document.body.classList.add('light-mode');
        document.querySelector('header').classList.add('light-mode');
        document.querySelector('footer').classList.add('light-mode');
    }

    document.getElementById('signup-button').addEventListener('click', function() {
        // Redirect to the login page
        window.location.href = 'login';
    });

    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        document.querySelector('header').classList.toggle('light-mode');
        document.querySelector('footer').classList.toggle('light-mode');

        // Save the user's preference
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.removeItem('theme');
        }
    });
});
