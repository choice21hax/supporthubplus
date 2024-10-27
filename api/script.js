document.getElementById('get-login-data').addEventListener('click', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginDataDisplay = document.getElementById('login-data-display');

    if (isLoggedIn) {
        loginDataDisplay.textContent = 'User is logged in.';
    } else {
        loginDataDisplay.textContent = 'No login data found.';
    }
});

document.getElementById('bypass-login').addEventListener('click', function() {
    // Set the login flag to bypass login
    localStorage.setItem('isLoggedIn', 'true');
    alert('Login bypassed. You can now access the dashboard without logging in.');
});
