const API = "http://BACKEND_SERVICE/api/products";

function loadProducts() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      list.innerHTML = "";
      data.forEach(p => {
        list.innerHTML += `
          <li>
            ${p.name} - ₹${p.price}
            <button onclick="deleteProduct(${p.id})">❌</button>
          </li>`;
      });
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


