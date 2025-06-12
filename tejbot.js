
const tejbotData = [
  { keywords: ["hello", "hi", "namaste"], reply: "Namaste! TejBuziups mein aapka swagat hai. 😊 Ask me anything!" },
  { keywords: ["product", "categories", "t-shirt", "mug"], reply: "We offer Bhakti Tees, Couple Sets, Meme Swag, Kids Gifts, and Digital Designs!" },
  { keywords: ["custom", "personalize", "design"], reply: "Yes! We personalize mugs, T-shirts, keychains with name, photo, or quote. 🎁" },
  { keywords: ["order", "buy", "how"], reply: "Select a product → Fill WhatsApp form → Confirm → Delivered! 🛒" },
  { keywords: ["delivery", "time", "how long"], reply: "Usually within 5–7 working days via trusted courier partners. 🚚" },
  { keywords: ["payment", "upi", "qr", "cod"], reply: "We accept UPI, QR, Bank Transfer. COD may be available on request. 💳" },
  { keywords: ["refund", "return", "damage"], reply: "We accept returns within 5 days for misprints or damage. Just WhatsApp us. 🔄" },
  { keywords: ["contact", "help", "support"], reply: "Email: support@tejbuziups.in or message us on WhatsApp directly. 📱" },
  { keywords: ["bulk", "corporate", "school"], reply: "Yes! Bulk custom orders for schools, events, or gifts — at best prices! 📦" }
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
