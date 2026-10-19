/* =====================================================================
   SudsHome — script.js
   Beginner-friendly, well-commented JavaScript.
===================================================================== */

const CONFIG = {
  businessName: " SK HOME NEEDS🏠",
  phoneNumber: "+919894693228",
  whatsappNumber: "919894693228",
  address: "NO. 196, Pillayar Kovil Street, Kakkalur Village, Thiruvallur  District,pin - 602003 Near Backside Weight Brdige ",
  currencySymbol: "₹",
};

const CATEGORIES = [
  { id: "laundry",     name: "Laundry Care",            icon: "🧺" },
  { id: "dishwash",    name: "Dishwashing",              icon: "🍽️" },
  { id: "floor-bath",  name: "Floor & Bathroom Cleaning", icon: "🧽" },
  { id: "personal",    name: "Personal / Home Care",      icon: "🧴" },
  { id: "accessories", name: "Cleaning Accessories",      icon: "🧹" },
];

const PRODUCTS = [
  { id: 1, name: "Detergent Powder", category: "laundry", price: 70, originalPrice: 90, rating: 4.6, size: "1 kg pack", description: "Powerful stain-removing detergent powder for everyday laundry.", image: "senu2.jpeg", inStock: true, featured: true },
  { id: 2, name: "Detergent liquid", category: "laundry", price: 180, rating: 4.7, size: "1 litter  pack", description: "Family-size detergent liquid pack, great value for bigger households.", image: "msenu3.jpeg", inStock: true, featured: false },
  { id: 3, name: "Pooja Powder", category: "laundry", price: 22, rating: 4.4, size: "250 g bar", description: "Classic pooja- powder jar .", image: "pojapowder.png", inStock: true, featured: true },
  { id: 4, name: "Pooja Vessel cleaner Gel", category: "laundry", price: 84, rating: 4.3, size: "100 g", description: "Everyday washing pooja metals , .", image: "pooja gel.png", inStock: true, featured: false },

  { id: 5, name: "Vim Liquid Gel", category: "dishwash", price: 45, originalPrice: 115, rating: 4.8, size: "500 ml bottle", description: "Cuts grease fast and is gentle on hands. Lemon fragrance.", image: "vim.png", inStock: true, featured: true },
  { id: 6, name: "Dishwash Bar", category: "dishwash", price: 18, size: "200 g bar", description: "Compact dishwashing bar, easy to use at the kitchen sink.", image: "https://placehold.co/400x400/ffc94a/16262a?text=Dishwash+Bar", inStock: true, featured: false },
  { id: 7, name: "Dishwash Powder", category: "dishwash", price: 55, size: "500 g pack", description: "Tough on burnt utensils and everyday vessels alike.", image: "https://placehold.co/400x400/ffc94a/16262a?text=Dishwash+Powder", inStock: false, featured: false },

  { id: 8, name: "Floor Cleaner", category: "floor-bath", price: 110, size: "1 L bottle", description: "Disinfectant floor cleaner with a long-lasting fresh fragrance.", image: "floorcl.png", inStock: true, featured: true },
  { id: 9, name: "HARPIC", category: "floor-bath", price: 85, size: "500 ml bottle", description: "Thick formula that clings to remove tough stains and germs.", image: "HARPIC.png", inStock: true, featured: true },
  { id: 10, name: "Toilet Cleaning Acid", category: "floor-bath", price: 85, size: "500 ml bottle", description: "Thick formula that clings to remove tough stains and germs.", image: "toilet cleaner.png", inStock: true, featured: true },
  { id: 11, name: "Bleaching Powder", category: "floor-bath", price: 10, size: "50 g", description: "disinfecting water and removing stains/ whitening clothes.", image: "bleaching.png", inStock: true, featured: false },
  { id: 12, name: "Glass & Surface Cleaner", category: "floor-bath", price: 99, size: "500 ml spray", description: "Streak-free shine for glass, mirrors and countertops.", image: "https://design.canva.ai/T3ABigH8PW6kyxs", inStock: true, featured: false },
  { id: 13, name: "PHENYL", category: "floor & surface cleaner", price: 85, size: "1 L bottle", description: "  that formula that clings to remove tough stains and germs.", image: "phenyl.png", inStock: true, featured: true },


  { id: 14, name: "Liquid Hand Wash", category: "personal", price: 75, size: "250 ml bottle", description: "Gentle, moisturising hand wash that kills 99.9% of germs.", image: "https://placehold.co/400x400/ff6b5b/ffffff?text=Hand+Wash", inStock: true, featured: true },
  { id: 15, name: "Liquid Hand Wash Refill", category: "personal", price: 130, size: "750 ml pouch", description: "Economical refill pouch for your hand wash dispenser.", image: "https://placehold.co/400x400/ff6b5b/ffffff?text=Hand+Wash+Refill", inStock: true, featured: false },
  { id: 16, name: "Room Spray", category: "personal", price: 145, size: "300 ml can", description: "Long-lasting home fragrance spray for every room.", image: "roomspary.png", inStock: true, featured: false },

  { id: 17, name: "Cleaning Brush", category: "accessories", price: 45, size: "1 piece", description: "Sturdy scrubbing brush for floors, tiles and outdoor use.", image: "https://placehold.co/400x400/0a5e66/ffffff?text=Brush", inStock: true, featured: false },
  { id: 18, name: "Kitchen Sponges (Pack of 6)", category: "accessories", price: 60, size: "6 pieces", description: "Soft-yet-tough sponges for everyday dishwashing.", image: "https://placehold.co/400x400/0a5e66/ffffff?text=Sponges", inStock: true, featured: true },
  { id: 19, name: "Steel Scrubber (Pack of 3)", category: "accessories", price: 40, size: "3 pieces", description: "Heavy-duty steel scrubbers for burnt and greasy vessels.", image: "https://placehold.co/400x400/0a5e66/ffffff?text=Scrubber", inStock: true, featured: false },
  { id: 20, name: "Broom", category: "accessories", price: 130, size: "1 piece", description: "Durable soft-bristle broom for daily floor sweeping.", image: "https://placehold.co/400x400/0a5e66/ffffff?text=Broom", inStock: true, featured: true },
  { id: 21, name: "Mop with Bucket", category: "accessories", price: 399, size: "1 set", description: "Spin mop with bucket for quick, low-effort floor cleaning.", image: "https://placehold.co/400x400/0a5e66/ffffff?text=Mop+%26+Bucket", inStock: true, featured: false },
  { id: 22, name: "Garbage Bags (Medium, 30 pcs)", category: "accessories", price: 89, size: "30 bags", description: "Leak-proof medium garbage bags for daily household waste.", image: "https://placehold.co/400x400/0a5e66/ffffff?text=Garbage+Bags", inStock: true, featured: true },
  { id: 23, name: "", category: "accessories", price: 109, size: "30 bags", description: "Large-size leak-proof garbage bags for bigger households.", image: "https://placehold.co/400x400/0a5e66/ffffff?text=Garbage+Bags+L", inStock: true, featured: false },
  
];

const TESTIMONIALS = [
  { name: "Priya Kumar", area: "Avadi", rating: 5, text: "Ordered detergent and a mop on WhatsApp in the evening — it was at my door within the hour. So much easier than the supermarket." },
  { name: "Ramesh S.", area: "MMDA Colony", rating: 5, text: "Prices are honestly cheaper than the big stores, and they always have what I need in stock. My family's go-to shop now." },
  { name: "Lakshmi V.", area: "Avadi", rating: 4, text: "Love that I don't need to install any app. A quick message and the order is confirmed. Very friendly service too." }
];

let cart = [];
let activeCategory = "all";
let searchQuery = "";

function formatPrice(n){
  return CONFIG.currencySymbol + n.toLocaleString("en-IN");
}
function findProduct(id){
  return PRODUCTS.find(p => p.id === id);
}
function whatsappLink(message){
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function showToast(message){
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

function applyConfig(){
  document.title = `${CONFIG.businessName} — Quality Home Care Products at Affordable Prices`;

  const generalMessage = `Hi ${CONFIG.businessName}! I'd like to know more about your products.`;
  const waLinks = ["heroWhatsApp", "ctaWhatsApp", "footerWhatsApp", "floatingWhatsApp", "contactWhatsApp"];
  waLinks.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = whatsappLink(generalMessage);
  });

  const telLinks = ["contactPhone", "footerPhone", "ctaCall"];
  telLinks.forEach(id => {
    const el = document.getElementById(id);
    if (el){
      el.href = `tel:${CONFIG.phoneNumber}`;
      if (id === "ctaCall") el.textContent = "Call Us";
    }
  });

  document.getElementById("contactAddress").textContent = CONFIG.address;
  document.getElementById("footerAddress").textContent = CONFIG.address;
  document.getElementById("footerYear").textContent = new Date().getFullYear();
}

const pages = {
  home: document.getElementById("page-home"),
  products: document.getElementById("page-products"),
  about: document.getElementById("page-about"),
  contact: document.getElementById("page-contact")
};

function goToPage(name){
  Object.keys(pages).forEach(key => {
    pages[key].hidden = key !== name;
  });
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.nav === name);
  });
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  closeMobileNav();
  closeSearchBar();
}

function initNavigation(){
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      goToPage(el.dataset.nav);
    });
  });

  document.getElementById("categoryGrid").addEventListener("click", (e) => {
    const card = e.target.closest(".category-card");
    if (!card) return;
    activeCategory = card.dataset.category;
    goToPage("products");
    renderProductsPage();
  });
}

function closeMobileNav(){
  document.getElementById("mainNav").classList.remove("open");
}
function initMobileNav(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

function closeSearchBar(){
  document.getElementById("searchBar").classList.remove("open");
}
function initHeaderSearch(){
  const bar = document.getElementById("searchBar");
  const input = document.getElementById("searchInput");
  document.getElementById("searchToggle").addEventListener("click", () => {
    bar.classList.toggle("open");
    if (bar.classList.contains("open")) input.focus();
  });
  document.getElementById("searchClose").addEventListener("click", closeSearchBar);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim()){
      searchQuery = input.value.trim();
      activeCategory = "all";
      goToPage("products");
      renderProductsPage();
      document.getElementById("productSearchInput").value = searchQuery;
    }
  });
}

function renderCategories(){
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="category-card" data-category="${cat.id}">
      <div class="category-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <p>${PRODUCTS.filter(p => p.category === cat.id).length} products</p>
    </div>
  `).join("");
}

function starString(rating){
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function productCardHTML(p){
  const catName = CATEGORIES.find(c => c.id === p.category)?.name || p.category;
  const rating = p.rating || 4.5;
  const discountPct = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-media">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${p.featured ? '<span class="product-badge">Popular</span>' : ""}
        ${discountPct > 0 ? `<span class="product-badge discount">${discountPct}% OFF</span>` : ""}
        ${!p.inStock ? '<span class="product-badge out">Out of Stock</span>' : ""}
      </div>
      <div class="product-body">
        <span class="product-cat">${catName}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating"><span class="stars">${starString(rating)}</span><span>${rating.toFixed(1)}</span></div>
        <p class="product-desc">${p.description}</p>
        <div class="product-meta">
          <span class="product-price">
            ${p.originalPrice ? `<span class="original-price">${formatPrice(p.originalPrice)}</span>` : ""}
            ${formatPrice(p.price)} <small>/ ${p.size}</small>
          </span>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary add-to-cart-btn" data-id="${p.id}" ${!p.inStock ? "disabled" : ""}>
            ${p.inStock ? "Add to Cart" : "Unavailable"}
          </button>
          <button class="btn btn-outline order-wa-btn" data-id="${p.id}" aria-label="Order ${p.name} on WhatsApp">💬</button>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured(){
  const grid = document.getElementById("featuredGrid");
  const featured = PRODUCTS.filter(p => p.featured);
  grid.innerHTML = featured.map(productCardHTML).join("");
}

function renderTestimonials(){
  const grid = document.getElementById("testimonialGrid");
  if (!grid) return;
  grid.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <span class="testimonial-stars">${starString(t.rating)}</span>
      <p>&ldquo;${t.text}&rdquo;</p>
      <div class="testimonial-person">
        <span class="testimonial-avatar">${t.name.charAt(0)}</span>
        <div>
          <strong>${t.name}</strong>
          <span>${t.area}</span>
        </div>
      </div>
    </div>
  `).join("");
}

function renderFilterChips(){
  const chips = document.getElementById("filterChips");
  const all = [{ id: "all", name: "All Products" }, ...CATEGORIES];
  chips.innerHTML = all.map(c => `
    <button class="chip ${activeCategory === c.id ? "active" : ""}" data-category="${c.id}">${c.name}</button>
  `).join("");

  chips.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.category;
      renderProductsPage();
    });
  });
}

function getFilteredProducts(){
  return PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });
}

function renderProductsPage(){
  renderFilterChips();
  const grid = document.getElementById("allProductsGrid");
  const results = getFilteredProducts();
  const info = document.getElementById("resultsInfo");
  const empty = document.getElementById("emptyState");

  info.textContent = `Showing ${results.length} of ${PRODUCTS.length} products`;
  grid.innerHTML = results.map(productCardHTML).join("");
  empty.hidden = results.length !== 0;
  grid.hidden = results.length === 0;
}

function initProductsPageSearch(){
  const input = document.getElementById("productSearchInput");
  input.addEventListener("input", () => {
    searchQuery = input.value;
    renderProductsPage();
  });
}

function initProductCardEvents(){
  document.body.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".add-to-cart-btn");
    if (addBtn && !addBtn.disabled){
      addToCart(Number(addBtn.dataset.id));
      return;
    }
    const waBtn = e.target.closest(".order-wa-btn");
    if (waBtn){
      orderSingleProductOnWhatsApp(Number(waBtn.dataset.id));
      return;
    }
  });
}

function orderSingleProductOnWhatsApp(id){
  const p = findProduct(id);
  if (!p) return;
  const message =
    `Hi ${CONFIG.businessName}! I'd like to order:\n\n` +
    `• ${p.name} (${p.size}) — ${formatPrice(p.price)}\n\n` +
    `Please confirm availability. Thank you!`;
  window.open(whatsappLink(message), "_blank", "noopener");
}

function addToCart(id){
  const existing = cart.find(item => item.id === id);
  if (existing){
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  renderCart();
  openCart();
  const p = findProduct(id);
  showToast(`${p.name} added to cart`);
}

function updateQty(id, delta){
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0){
    cart = cart.filter(i => i.id !== id);
  }
  renderCart();
}

function removeFromCart(id){
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

function cartTotal(){
  return cart.reduce((sum, item) => {
    const p = findProduct(item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function cartCount(){
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart(){
  const itemsEl = document.getElementById("cartItems");
  const emptyEl = document.getElementById("cartEmpty");
  const footEl = document.getElementById("cartFoot");
  const countEl = document.getElementById("cartCount");

  countEl.textContent = cartCount();

  if (cart.length === 0){
    itemsEl.innerHTML = "";
    emptyEl.style.display = "flex";
    footEl.hidden = true;
    return;
  }

  emptyEl.style.display = "none";
  footEl.hidden = false;

  itemsEl.innerHTML = cart.map(item => {
    const p = findProduct(item.id);
    if (!p) return "";
    return `
      <div class="cart-item" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name}">
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <span>${p.size}</span>
          <div class="cart-item-price">${formatPrice(p.price * item.qty)}</div>
          <div class="qty-control">
            <button class="qty-minus" aria-label="Decrease quantity">&minus;</button>
            <span>${item.qty}</span>
            <button class="qty-plus" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item-remove" aria-label="Remove ${p.name}">Remove</button>
      </div>
    `;
  }).join("");

  document.getElementById("cartTotal").textContent = formatPrice(cartTotal());
}

function initCartEvents(){
  document.getElementById("cartItems").addEventListener("click", (e) => {
    const row = e.target.closest(".cart-item");
    if (!row) return;
    const id = Number(row.dataset.id);
    if (e.target.classList.contains("qty-plus")) updateQty(id, 1);
    if (e.target.classList.contains("qty-minus")) updateQty(id, -1);
    if (e.target.classList.contains("cart-item-remove")) removeFromCart(id);
  });
}

function openCart(){
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}
function closeCart(){
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}
function initCartDrawer(){
  document.getElementById("cartToggle").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("overlay").addEventListener("click", () => {
    closeCart();
    closeCheckout();
  });
}

function renderCheckoutSummary(){
  const summaryEl = document.getElementById("checkoutSummary");
  summaryEl.innerHTML = cart.map(item => {
    const p = findProduct(item.id);
    if (!p) return "";
    return `<div class="summary-row"><span>${p.name} x${item.qty}</span><span>${formatPrice(p.price * item.qty)}</span></div>`;
  }).join("");
  document.getElementById("checkoutTotal").textContent = formatPrice(cartTotal());
}

function openCheckout(){
  if (cart.length === 0){
    showToast("Your cart is empty");
    return;
  }
  renderCheckoutSummary();
  document.getElementById("checkoutOverlay").classList.add("open");
}
function closeCheckout(){
  document.getElementById("checkoutOverlay").classList.remove("open");
}

function initCheckout(){
  document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
  document.getElementById("checkoutClose").addEventListener("click", closeCheckout);

  document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("checkoutName").value.trim();
    const phone = document.getElementById("checkoutPhone").value.trim();
    const address = document.getElementById("checkoutAddress").value.trim();

    const lines = cart.map(item => {
      const p = findProduct(item.id);
      return `• ${p.name} (${p.size}) x${item.qty} — ${formatPrice(p.price * item.qty)}`;
    }).join("\n");

    const message =
      `Hi ${CONFIG.businessName}! I'd like to place an order:\n\n` +
      `${lines}\n\n` +
      `Total: ${formatPrice(cartTotal())}\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Delivery Address: ${address}`;

    window.open(whatsappLink(message), "_blank", "noopener");

    cart = [];
    renderCart();
    closeCheckout();
    closeCart();
    e.target.reset();
    showToast("Order sent! Please confirm on WhatsApp.");
  });
}

function initContactForm(){
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const msg = form.message.value.trim();

    const message = `Hi ${CONFIG.businessName}! My name is ${name} (${phone}).\n\n${msg}`;
    document.getElementById("contactFormNote").hidden = false;
    setTimeout(() => {
      window.open(whatsappLink(message), "_blank", "noopener");
      form.reset();
    }, 700);
  });
}

function initBubbleBackground(){
  const canvas = document.getElementById("bubbleCanvas");
  const ctx = canvas.getContext("2d");
  const hero = document.querySelector(".hero");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width, height, bubbles;
  const mouse = { x: -9999, y: -9999 };

  function resize(){
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function createBubbles(){
    const count = Math.max(18, Math.min(38, Math.floor(width / 40)));
    bubbles = Array.from({ length: count }, () => spawnBubble(true));
  }

  function spawnBubble(randomY){
    const r = 6 + Math.random() * 22;
    return {
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + r,
      r,
      speed: 0.3 + Math.random() * 0.7,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.005 + Math.random() * 0.01,
      opacity: 0.12 + Math.random() * 0.22
    };
  }

  function draw(){
    ctx.clearRect(0, 0, width, height);
    bubbles.forEach(b => {
      b.y -= b.speed;
      b.sway += b.swaySpeed;
      b.x += Math.sin(b.sway) * 0.4;

      const dx = b.x - mouse.x;
      const dy = b.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const influenceRadius = 110;
      if (dist < influenceRadius && dist > 0.1){
        const force = (influenceRadius - dist) / influenceRadius;
        b.x += (dx / dist) * force * 4;
        b.y += (dy / dist) * force * 4;
      }

      if (b.y + b.r < 0){
        Object.assign(b, spawnBubble(false));
      }

      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${b.opacity})`;
      ctx.lineWidth = 1.5;
      ctx.fillStyle = `rgba(255,255,255,${b.opacity * 0.35})`;
      ctx.fill();
      ctx.stroke();
    });
    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  resize();
  createBubbles();

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  hero.addEventListener("mouseleave", () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });
  hero.addEventListener("touchmove", (e) => {
    const rect = hero.getBoundingClientRect();
    const touch = e.touches[0];
    if (!touch) return;
    mouse.x = touch.clientX - rect.left;
    mouse.y = touch.clientY - rect.top;
  }, { passive: true });

  window.addEventListener("resize", () => {
    resize();
    createBubbles();
  });

  if (prefersReducedMotion){
    draw();
  } else {
    requestAnimationFrame(draw);
  }
}

function initScrollReveal(){
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || targets.length === 0){
    targets.forEach(el => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  targets.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initNavigation();
  initMobileNav();
  initHeaderSearch();

  renderCategories();
  renderFeatured();
  renderTestimonials();
  renderProductsPage();

  initProductsPageSearch();
  initProductCardEvents();
  initCartEvents();
  initCartDrawer();
  initCheckout();
  initContactForm();
  renderCart();

  initBubbleBackground();
  initScrollReveal();

  goToPage("home");
});