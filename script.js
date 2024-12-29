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