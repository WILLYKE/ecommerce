// Product data
const products = [
    { name: 'Product 1', price: 10, image: 'product1.jpg' },
    { name: 'Product 2', price: 15, image: 'product2.jpg' },
    { name: 'Product 3', price: 20, image: 'product3.jpg' },
    { name: 'Product 4', price: 25, image: 'product4.jpg' },
];

// Generate product HTML dynamically
function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '<h2>Our Products</h2>';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
}

// Call the function to display products on page load
document.addEventListener('DOMContentLoaded', displayProducts);

// Cart functionality
let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear current cart display
    cartItems.innerHTML = '';

    // Add items to the cart display
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(listItem);
    });

    // Calculate and display total price
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = totalPrice;
}
