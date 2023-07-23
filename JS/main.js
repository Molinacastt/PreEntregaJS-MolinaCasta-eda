const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentNode.querySelector('span').innerText;
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `${productName} <button class="remove-from-cart">Eliminar</button>`;
        cartItemsList.appendChild(cartItem);

        const removeButton = cartItem.querySelector('.remove-from-cart');
        removeButton.addEventListener('click', () => {
            cartItemsList.removeChild(cartItem);
        });
    });
});