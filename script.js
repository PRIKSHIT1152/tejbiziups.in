// Update Cart Count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
  document.getElementById('cart-count').textContent = cart.length;
}

// Add to Cart Function
function addToCart(productName) {
  const item = {
    name: productName,
    price: 799,
    qty: 1
  };
  let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Check if already in cart
  const existingItem = cart.find(i => i.name === productName);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push(item);
  }

  localStorage.setItem('cartItems', JSON.stringify(cart));
  updateCartCount();
  alert("✅ Added to cart!");
}

// Add to Wishlist Function
function addToWishlist(productName) {
  let wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];

  if (!wishlist.includes(productName)) {
    wishlist.push(productName);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlist));
    alert("❤️ Added to Wishlist!");
  } else {
    alert("Already in Wishlist!");
  }
}

// Initialize Cart Count on Load
window.onload = updateCartCount;