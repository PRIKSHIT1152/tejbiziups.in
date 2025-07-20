// 🌟 TejBot Q&A Data
const tejbotData = [
  // 👋 Greetings
  { keywords: ["hello", "hi", "namaste"], reply: "🙏 Namaste! TejBuziups mein aapka swagat hai. 😊 Ask me anything!" },
  
  // 🛍️ Products & Categories
  { keywords: ["product", "categories", "t-shirt", "mug"], reply: "✨ We offer Bhakti Tees, Couple Sets, Meme Swag, Kids Gifts, and Digital Designs!" },

  // ✨ Customization
  { keywords: ["custom", "personalize", "design"], reply: "🎨 Yes! We personalize mugs, T-shirts, keychains with your name, photo, or quote. 🎁" },

  // 🧵 Gift Card
  { keywords: ["gift card", "ecard", "greeting"], reply: "🎁 You can create and download beautiful TejBuziups Gift Cards directly on our website and share them on WhatsApp!" },
  { keywords: ["giftcard", "card bana", "card create"], reply: "🖌️ Gift Card banane ke liye generator open karo, apna naam/photo daalo aur ek click me download karo! ✨" },

  // 🚚 Orders & Delivery
  { keywords: ["order", "buy", "how"], reply: "🛒 Select a product → Fill WhatsApp form → Confirm → Delivered with love!" },
  { keywords: ["delivery", "time", "how long"], reply: "🚚 Delivery usually within 5–7 working days via trusted courier partners." },

  // 💳 Payment
  { keywords: ["payment", "upi", "qr", "cod"], reply: "💳 We accept UPI, QR, Bank Transfer. COD may be available on request." },

  // 🔄 Returns
  { keywords: ["refund", "return", "damage"], reply: "🔄 We accept returns within 5 days for misprints or damage. Just WhatsApp us." },

  // 📞 Contact
  { keywords: ["contact", "help", "support"], reply: "📱 Email us at support@tejbuziups.in or message on WhatsApp directly. Always happy to help!" },

  // 📦 Bulk Orders
  { keywords: ["bulk", "corporate", "school"], reply: "📦 Yes! Bulk custom orders for schools, events, or gifts — at best prices!" },

  // 🌟 About TejBuziups
  { keywords: ["about", "brand", "tejbuziups", "story"], reply: "🇮🇳 TejBuziups is a proud Indian brand that celebrates emotion, culture & creativity through personalized products." },
  { keywords: ["unique", "different", "why buy", "special"], reply: "💡 We blend tradition with modern creativity! Every design at TejBuziups tells a story. ✨" },
  { keywords: ["trust", "safe", "secure"], reply: "🔒 We use trusted delivery partners and secure payment options to ensure your order reaches safely." },
  { keywords: ["location", "where", "based"], reply: "📍 We proudly operate from India and ship all over the country." },

  // 🤖 AI & Technology
  { keywords: ["ai", "technology", "smart"], reply: "🤖 TejBuziups uses AI to offer smart product suggestions & personalized experiences." },

  // 🎁 Gift Ideas
  { keywords: ["gift idea", "recommend"], reply: "🎀 Try our gift card generator, custom mugs or couple tees — perfect for any occasion! 💖" }
];

// 🌟 Toggle TejBot Open/Close
function toggleTejBot() {
  const box = document.getElementById("tejbot-box");
  const chat = document.getElementById("tejbot-chat");
  if (!box || !chat) return;

  box.style.display = box.style.display === "none" ? "block" : "none";

  if (box.style.display === "block" && chat.innerHTML.trim() === "") {
    setTimeout(() => {
      chat.innerHTML += `<div><strong>TejBot:</strong> 👋 Namaste! Kaise madad kar sakta hoon aapki? 💛</div>`;
      chat.scrollTop = chat.scrollHeight;
    }, 300);
  }
}

// 🌟 Handle User Messages
function handleTejBot() {
  const input = document.getElementById("tejbot-input");
  const chat = document.getElementById("tejbot-chat");
  if (!input || !chat) return;

  const msg = input.value.trim();
  if (!msg) return;

  chat.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
  input.value = "";

  chat.innerHTML += `<div id="typing">TejBot is typing...</div>`;
  setTimeout(() => {
    document.getElementById("typing")?.remove();
    let found = false;
    const lowerMsg = msg.toLowerCase();

    for (let q of tejbotData) {
      if (q.keywords.some(k => lowerMsg.includes(k))) {
        chat.innerHTML += `<div><strong>TejBot:</strong> ${q.reply}</div>`;
        found = true;
        break;
      }
    }

    if (!found) {
      chat.innerHTML += `<div><strong>TejBot:</strong> 🤔 Hmm... I didn’t get that. Try asking about products, delivery, gift cards, or payments. </div>`;
    }

    chat.scrollTop = chat.scrollHeight;
  }, 800);
}

// 🌟 Share Gift Card
function shareGiftCard() {
  const canvas = document.getElementById("cardCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff3e0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 30px sans-serif";
  ctx.fillStyle = "#d84315";
  ctx.fillText("TejBuziups Gift Card", 100, 150);

  const link = document.createElement("a");
  link.download = "TejBuziups_GiftCard.png";
  link.href = canvas.toDataURL();
  link.click();

  const msg = `🎁 Your gift card has been downloaded!\n📲 Share this image on WhatsApp with your loved ones. 💛`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
}

// 🌟 Make TejBot Draggable
(function makeTejBotDraggable() {
  const box = document.getElementById("tejbot-box");
  if (!box) return;
  let isDragging = false, offsetX, offsetY;

  box.addEventListener("mousedown", e => {
    isDragging = true;
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
    box.style.cursor = "move";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    if (box) box.style.cursor = "default";
  });

  document.addEventListener("mousemove", e => {
    if (!isDragging) return;
    box.style.left = `${e.clientX - offsetX}px`;
    box.style.top = `${e.clientY - offsetY}px`;
    box.style.bottom = "unset";
    box.style.right = "unset";
  });
})();
