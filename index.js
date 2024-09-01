document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    setTimeout(() => {
        document.getElementById('response-message').textContent = `Thank you, ${name}! We have received your message.`;
        document.getElementById('contact-form').reset();
    }, 1000);
});
