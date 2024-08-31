document.getElementById('registration-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        event.preventDefault(); // Prevent form submission
    }
});


document.getElementById('registration-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailPattern.test(email)) {
        alert('Please enter email that ends with @gmail.com.');
        event.preventDefault(); // Prevent form submission
    }
});
