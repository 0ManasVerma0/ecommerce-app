document.addEventListener("DOMContentLoaded", () => {

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMsg = document.getElementById("empty-cart");
    const totalPriceDisplay = document.getElementById("total-price");
    const cartTotalMsg = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");

    const products = [
        {id: 1, name: "Product 1", price: 16.99},
        {id: 2, name: "Product 2", price: 55.99},
        {id: 3, name: "Product 3", price: 69.999},
        {id: 4, name: "Product 4", price: 70.00}
    ];

    const cart = [];

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to Cart</button>
        `
        productList.appendChild(productDiv)
    });

    productList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON"){
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find((p) => p.id == productId);
            addtoCart(product);
        }
    })

    function addtoCart(product){
        cart.push(product);
        renderCart();
    }

    function renderCart(){
        cartItems.innerText = "";
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartMsg.classList.add("hidden");
            cartTotalMsg.classList.remove("hidden");
            cart.forEach((item, index) => {
                totalPrice += item.price;
                const cartItem = document.createElement("div");
                cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                `
                cartItems.appendChild(cartItem);
                totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
            })
        } else {
            emptyCartMsg.classList.remove("hidden");
            totalPriceDisplay.textContent = `$0.00`;
        }
    }

    checkoutBtn.addEventListener("click", () => {
        cart.length = 0;
        alert("Checkout successfully");
        renderCart();
      });
})