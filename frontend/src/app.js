const grid = document.querySelector(".grid");
const tabs = document.querySelectorAll(".tab");

function renderItems(category) {
  grid.innerHTML = "";

  const filtered =
    category === "all"
      ? items
      : items.filter(item => item.category === category);

  filtered.forEach(item => {
    grid.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <div class="overlay">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
    `;
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderItems(tab.dataset.category);
  });
});

renderItems("all");

