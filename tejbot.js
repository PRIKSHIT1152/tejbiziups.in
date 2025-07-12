
const tejbotData = [
  { keywords: ["hello", "hi", "namaste"], reply: "Namaste! TejBuziups mein aapka swagat hai. 😊 Ask me anything!" },
  { keywords: ["product", "categories", "t-shirt", "mug"], reply: "We offer Bhakti Tees, Couple Sets, Meme Swag, Kids Gifts, and Digital Designs!" },
  { keywords: ["custom", "personalize", "design"], reply: "Yes! We personalize mugs, T-shirts, keychains with name, photo, or quote. 🎁" },
  { keywords: ["order", "buy", "how"], reply: "Select a product → Fill WhatsApp form → Confirm → Delivered! 🛒" },
  { keywords: ["delivery", "time", "how long"], reply: "Usually within 5–7 working days via trusted courier partners. 🚚" },
  { keywords: ["payment", "upi", "qr", "cod"], reply: "We accept UPI, QR, Bank Transfer. COD may be available on request. 💳" },
  { keywords: ["refund", "return", "damage"], reply: "We accept returns within 5 days for misprints or damage. Just WhatsApp us. 🔄" },
  { keywords: ["contact", "help", "support"], reply: "Email: support@tejbuziups.in or message us on WhatsApp directly. 📱" },
  { keywords: ["bulk", "corporate", "school"], reply: "Yes! Bulk custom orders for schools, events, or gifts — at best prices! 📦" },
  { keywords: ["about", "brand", "tejbuziups", "story"], reply: "TejBuziups is a proud Indian brand that celebrates emotion, culture & creativity through personalized products. 🇮🇳" },
  { keywords: ["website", "features", "shop online", "online store"], reply: "Our website lets you explore themed products, create custom gifts, and place orders directly via WhatsApp. 💻📲" },
  { keywords: ["gift card", "ecard", "greeting"], reply: "Yes! You can generate stylish digital gift cards for festivals, birthdays & love with just one click. 🎁✨" },
  { keywords: ["trust", "safe", "secure"], reply: "We use trusted delivery partners and secure payment options to ensure your order reaches safely. 🔒" },
  { keywords: ["unique", "different", "why buy", "special"], reply: "Because we blend tradition with modern creativity! Every design at TejBuziups tells a story. 💡" },
  { keywords: ["ai", "technology", "smart", "future"], reply: "TejBuziups is embracing AI to offer smart product suggestions, design tools & personalized experiences. 🤖✨" },
  { keywords: ["gift idea", "recommend", "suggestion"], reply: "Try our gift card generator, custom mugs or couple tees — perfect for any occasion! 🎁💖" },
  { keywords: ["location", "where", "based"], reply: "We proudly operate from India and ship all over the country. 🇮🇳" }
];

function toggleTejBot() {
  const box = document.getElementById("tejbot-box");
  const chat = document.getElementById("tejbot-chat");
  box.style.display = box.style.display === "none" ? "block" : "none";
  if (box.style.display === "block") {
    setTimeout(() => {
      chat.innerHTML += `<div><strong>TejBot:</strong> 👋 Hello! How can I help you today?</div>`;
      chat.scrollTop = chat.scrollHeight;
    }, 300);
  }
}

function handleTejBot() {
  const input = document.getElementById("tejbot-input");
  const chat = document.getElementById("tejbot-chat");
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
      chat.innerHTML += `<div><strong>TejBot:</strong> Hmm... I didn’t get that. Try asking about products, delivery, or payment. 🧐</div>`;
    }

    chat.scrollTop = chat.scrollHeight;
  }, 800);
}

function shareGiftCard() {
  const canvas = document.getElementById("cardCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff3e0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 30px sans-serif";
  ctx.fillStyle = "#d84315";
  ctx.fillText("TejBuziups Gift Card", 200, 200);

  const link = document.createElement("a");
  link.download = "TejBuziups_GiftCard.png";
  link.href = canvas.toDataURL();
  link.click();

  const msg = `🎁 Your gift card has been downloaded!\n📲 Open WhatsApp and upload the image to share.`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
}
// ✅ Make TejBot draggable
(function makeTejBotDraggable() {
  const box = document.getElementById("tejbot-box");
  let isDragging = false, offsetX, offsetY;

  box?.addEventListener("mousedown", e => {
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
    if (!isDragging || !box) return;
    box.style.left = `${e.clientX - offsetX}px`;
    box.style.top = `${e.clientY - offsetY}px`;
    box.style.bottom = "unset";
    box.style.right = "unset";
  });
})();