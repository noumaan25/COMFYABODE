// address.js

function submitAddress(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;

    // Store address details in local storage or use them as needed
    const shippingAddress = { name, address, city, state, zip };
    localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));

    // Navigate to the payment page
    window.location.href = 'payment.html';
}
