
let cartItems = [];

function showCategory(category) {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
        product.style.display = 'none';
    });

    const categoryProducts = document.querySelectorAll(`.product.${category}`);
    categoryProducts.forEach(product => {
        product.style.display = 'block';
    });
}

function addToCart(productName, price) {
    cartItems.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName}: $${item.price}`;
        cartList.appendChild(listItem);
    });

    const itemCount = document.getElementById('item-count');
    itemCount.textContent = cartItems.length;

    const cartTotal = document.getElementById('cart-total');
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}

function openCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'flex';
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

function checkout() {
    alert('Sizning buyurtmangiz tasdiqlandi!');
    cartItems = [];
    updateCart();
    closeCart();
}
