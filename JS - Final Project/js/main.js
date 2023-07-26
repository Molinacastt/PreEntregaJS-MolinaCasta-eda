/* LOGIN */ 

document.getElementById("form-group").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username !== "" && password !== "") {
        window.location.href = "../pages/contacto.html"; 
    } else {
        alert("Por favor, complete todos los campos del formulario.");
    }
});

/* FINISH LOGIN */

/* CARRITO DE COMPRAS */

const cartItemsContainer = document.querySelector(".cart-items");
const purchaseButton = document.querySelector(".btn-purchase");

      function addToCartClicked(event) {
        const shopItem = event.target.parentElement.parentElement;
        const title = shopItem.querySelector(".shop-item-title").innerText;
        const price = parseFloat(
          shopItem.querySelector(".shop-item-price").innerText.replace("$", "")
        );
        const imageSrc = shopItem.querySelector(".shop-item-image").src;
        addItemToCart(title, price, imageSrc);
      }

      function addItemToCart(title, price, imageSrc) {
        const cartRow = document.createElement("div");
        cartRow.classList.add("cart-row");
        const cartRowContents = `
          <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
          </div>
          <span class="cart-price cart-column">$${price}</span>
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" min="1" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
          </div>
        `;
        cartRow.innerHTML = cartRowContents;
        cartItemsContainer.append(cartRow);

        const removeButton = cartRow.querySelector(".btn-danger");
        removeButton.addEventListener("click", removeCartItem);

        const quantityInput = cartRow.querySelector(".cart-quantity-input");
        quantityInput.addEventListener("change", quantityChanged);

        updateCartTotal();
      }

      function removeCartItem(event) {
        const removeButton = event.target;
        removeButton.parentElement.parentElement.remove();
        updateCartTotal();
      }

      function updateCartTotal() {
        const cartRows = cartItemsContainer.querySelectorAll(".cart-row");
        let total = 0;
        cartRows.forEach((cartRow) => {
          const priceElement = cartRow.querySelector(".cart-price");
          const quantityElement = cartRow.querySelector(".cart-quantity-input");
          const price = parseFloat(priceElement.innerText.replace("$", ""));
          const quantity = quantityElement.valueAsNumber;
          total += price * quantity;
        });

        const cartTotalElement = document.querySelector(".cart-total-price");
        cartTotalElement.innerText = "$" + total.toFixed(2);
      }

      function quantityChanged(event) {
        const input = event.target;
        if (input.value <= 0) {
          input.value = 1;
        }
        updateCartTotal();
      }

      function purchaseClicked() {
        alert("Thank you for your purchase!");
        cartItemsContainer.innerHTML = "";
        updateCartTotal();
      }

      const addToCartButtons = document.querySelectorAll(".shop-item-button");
      addToCartButtons.forEach((button) => {
        button.addEventListener("click", addToCartClicked);
      });

      purchaseButton.addEventListener("click", purchaseClicked);

/* FINISH CARRITO DE COMPRAS */