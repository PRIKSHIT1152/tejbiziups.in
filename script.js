// Update Cart Count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
  document.getElementById('cart-count').textContent = cart.length;
}

// ✅ Add to Cart Function (fixed)
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

  // check if product already exists
  const existingItem = cart.find(i => i.name === product.name);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      name: product.name,
      price: product.price,
      qty: 1
    });
  }

  localStorage.setItem('cartItems', JSON.stringify(cart));
  updateCartCount();
  alert(`✅ ${product.name} added to cart!`);
}
// Initialize Cart Count on Load
window.onload = updateCartCount;
// ⭐ Handle star click and review submit
document.addEventListener("DOMContentLoaded", () => {
  // Render old reviews
  document.querySelectorAll(".rating-section").forEach(sec => {
    const productName = sec.querySelector(".stars").dataset.product;
    const list = sec.querySelector(".reviews-list");
    const saved = JSON.parse(localStorage.getItem(`reviews-${productName}`) || "[]");
    saved.forEach(r => {
      const li = document.createElement("li");
      li.textContent = `⭐${r.stars}: ${r.text}`;
      list.appendChild(li);
    });
  });

  // Star rating system
  document.querySelectorAll(".stars").forEach(starBox => {
    const productName = starBox.dataset.product;
    let selected = 0;
    starBox.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const span = document.createElement("span");
      span.textContent = "★";
      span.addEventListener("click", () => {
        selected = i;
        // highlight
        starBox.querySelectorAll("span").forEach((s, idx) => {
          s.style.color = (idx < i) ? "gold" : "#ccc";
        });
        starBox.dataset.selected = i;
      });
      starBox.appendChild(span);
    }
  });

  // Submit review
  document.querySelectorAll(".submit-review").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const sec = btn.closest(".rating-section");
      const productName = sec.querySelector(".stars").dataset.product;
      const stars = parseInt(sec.querySelector(".stars").dataset.selected || 0);
      const text = sec.querySelector(".review-input").value.trim();
      if (!stars || !text) {
        alert("⭐ Please select stars and write a review!");
        return;
      }
      // Save to localStorage
      const key = `reviews-${productName}`;
      const saved = JSON.parse(localStorage.getItem(key) || "[]");
      saved.push({stars,text});
      localStorage.setItem(key, JSON.stringify(saved));
      // Show on page
      const li = document.createElement("li");
      li.textContent = `⭐${stars}: ${text}`;
      sec.querySelector(".reviews-list").appendChild(li);
      sec.querySelector(".review-input").value = "";
      alert("✅ Review submitted!");
    });
  });
});


