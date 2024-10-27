document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        // Redirect to the login page if not logged in
        window.location.href = '/login';
    } else {
        console.log("Dashboard loaded");
    }
});

