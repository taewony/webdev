const products = Array.from({ length: 100 }, (_, i) => ({
  name: `Product ${i + 1}`,
  price: `$${(50 + i).toFixed(2)}`,
  rating: Math.floor(Math.random() * 5) + 1,
  image: "https://picsum.photos/400/600?random=" + i
}));

const grid = document.getElementById("productGrid");
let index = 0;

function renderBatch(count = 12) {
  for (let i = 0; i < count && index < products.length; i++, index++) {
    const p = products[index];
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="wishlist">♡</div>
      <img src="${p.image}" />
      <div class="product-info">
        <div>${p.name}</div>
        <div class="price">${p.price}</div>
        <div class="rating">${"★".repeat(p.rating)}</div>
      </div>
    `;

    grid.appendChild(card);
  }
}

renderBatch();

/* Infinite scroll */
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    renderBatch();
  }
});

observer.observe(document.getElementById("scrollSentinel"));
