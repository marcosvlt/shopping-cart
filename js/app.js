let cart = [];
const cartElement = document.getElementById('cart');
const totalElement = document.getElementById('total');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.parentElement;
        const productName = product.querySelector('h2').innerText;
        const productPrice = parseFloat(product.querySelector('p').innerText.replace('Price: $', ''));

        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

document.getElementById('clear-cart').addEventListener('click', () => {
    cart = [];
    updateCart();
});

function updateCart() {
    cartElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - $${item.price}`;
        cartElement.appendChild(itemElement);
        total += item.price;
    });

    totalElement.innerText = `Total: $${total}`;
}
