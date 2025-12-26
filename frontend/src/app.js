const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 }
];

let cart = [];

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

function loadProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  products.forEach(p => {
    list.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
  const list = document.getElementById("cartList");
  list.innerHTML = "";
  cart.forEach(p => {
    list.innerHTML += `<li>${p.name} - ₹${p.price}</li>`;
  });
}

function placeOrder() {
  alert("✅ Order placed successfully!");
  cart = [];
  updateCart();
  showPage("orders");
}

loadProducts();


