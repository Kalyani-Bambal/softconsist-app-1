const products = [
  { id: 1, name: "Laptop", price: 55000, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Smartphone", price: 25000, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 3000, img: "https://via.placeholder.com/150" }
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

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
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
  toggleCart();
  showPage("orders");
}

function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function openSignup() {
  closeModal();
  document.getElementById("signupModal").style.display = "block";
}

function closeModal() {
  document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}

loadProducts();


