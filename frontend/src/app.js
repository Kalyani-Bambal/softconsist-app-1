const API = "http://localhost:5000/api/products";

function loadProducts() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      document.getElementById("list").innerHTML = data.map(p =>
        `<li>
          ${p.name} - ₹${p.price}
          <button onclick="deleteProduct(${p.id})">❌</button>
        </li>`
      ).join("");
    });
}

function addProduct() {
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      price: price.value
    })
  }).then(loadProducts);
}

function deleteProduct(id) {
  fetch(`${API}/${id}`, { method: "DELETE" })
    .then(loadProducts);
}

loadProducts();

