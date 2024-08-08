// cart.js

document.addEventListener('DOMContentLoaded', loadCartItems);

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    let totalAmount = 0;

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="product-info">
                <h3>${item.name}</h3>
                <p>₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}</p>
                <div class="quantity">
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>
                <button class="remove-button" onclick="removeItem(${index})">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(productCard);
        totalAmount += item.price * item.quantity;
    });

    totalAmountElement.textContent = totalAmount;
}

function changeQuantity(index, change) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems[index].quantity += change;

    if (cartItems[index].quantity < 1) {
        cartItems[index].quantity = 1;
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

function goToAddressPage() {
    window.location.href = 'address.html';
}

function closePaymentPopup() {
    document.getElementById('payment-popup').style.display = 'none';
}
