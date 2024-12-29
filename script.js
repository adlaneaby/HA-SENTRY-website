// Function to validate login form
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remindMe = document.getElementById('remindMe').checked;

    if (remindMe) {
        localStorage.setItem('savedUsername', username);
        localStorage.setItem('savedPassword', password);
    } else {
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
    }

    if (username === 'alger' && password === 'alger16') {
        window.location.href = 'welcome.html';
        return false; // Prevent form submission
    } else {
        alert('Invalid username or password!');
        return false; // Prevent form submission
    }
}

// Autofill saved credentials on load
window.onload = () => {
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');

    if (savedUsername) document.getElementById('username').value = savedUsername;
    if (savedPassword) document.getElementById('password').value = savedPassword;
};

// Function to submit support form using FormSubmit
async function submitSupportForm(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch('https://formsubmit.co/ajax/islamo.aby@gmail.com', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    });

    if (response.ok) {
        document.querySelector('.success-message').style.display = 'block';
        form.reset();
    } else {
        alert('Failed to send support request. Please try again.');
    }
}
