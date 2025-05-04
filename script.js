document.addEventListener("DOMContentLoaded", () => {

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMsg = document.getElementById("empty-cart");
    const totalPrice = document.getElementById("total-price");
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
})