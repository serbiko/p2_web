document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (password === 'senha') {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Incorrect password. Please try again.';
    }
});