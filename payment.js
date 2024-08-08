// payment.js

document.addEventListener('DOMContentLoaded', function() {
    // Show the payment success popup after 10 seconds
    setTimeout(() => {
        showSuccessPopup();
    }, 10000);
});

function showSuccessPopup() {
    const popup = document.getElementById('success-popup');
    popup.style.display = 'block';

    // Redirect to homepage after 5 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 5000);
}
