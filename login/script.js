document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
            // Set login flag
            localStorage.setItem('isLoggedIn', 'true');
            // Redirect to the dashboard
            window.location.href = '/dashboard';
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});

// Modal functionality
const modal = document.getElementById('email-modal');
const receiveEmailButton = document.getElementById('receive-email-button');
const closeButton = document.querySelector('.close-button');
const sendCodeButton = document.getElementById('send-code-button');

receiveEmailButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

sendCodeButton.addEventListener('click', function() {
    const modalEmail = document.getElementById('modal-email').value;
    if (modalEmail) {
        fetch('/api/send-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: modalEmail })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`Code sent to ${modalEmail}`);
                modal.style.display = 'none';
            } else {
                alert('Failed to send code: ' + data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter a valid email address.');
    }
});
