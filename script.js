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
type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Store",
  "name": "TejBuziups",
  "image": "https://yourcdn.com/logo.png",
  "telephone": "+917017270882",
  "email": "tejbuziup@gmail.com",
  "url": "https://prikshit1152.github.io/tejbuziups.in/",
  "sameAs": ["https://instagram.com/yourhandle"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "India",
    "postalCode": "000000"
  }
}
// Initialize Cart Count on Load
window.onload = updateCartCount;