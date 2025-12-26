const products = [
  {
    id: 1,
    name: "Laptop",
    price: 54999,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 24999,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 3,
    name: "Headphones",
    price: 2999,
    img: "https://images.unsplash.com/photo-1518444028785-8f4c6b0e0b26"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 4999,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  }
];

let cart = [];

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function loadProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  products.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  cart.push(products.find(p => p.id === id));
  document.getElementById("cartCount").innerText = cart.length;
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";
  cart.forEach(p => {
    list.innerHTML += `<li>${p.name} - ₹${p.price}</li>`;
  });
}

function placeOrder() {
  alert("🎉 Order placed successfully!");
  cart = [];
  renderCart();
  document.getElementById("cartCount").innerText = 0;
  showPage("orders");
}

loadProducts();

