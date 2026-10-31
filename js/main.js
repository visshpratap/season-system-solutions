const BRAND = {
  email: "seasonsystemsolution@gmail.com",
  phone: "8130729201",
  address: "Khedki Daula, NH-8 Road, Near Stella Industries, Gurgaon-122004, Haryana",
};

document.documentElement.classList.add("js-enabled");

const FEATURED_SLUGS = [
  "casement-door-set-complete",
  "single-roller-nylon-groove",
  "sliding-touch-lock",
  "casement-handle-uk",
  "hinge-3d",
  "casement-double-key-knob",
  "sliding-espag-15-bs",
  "glass-packer",
];

const CATEGORY_ICONS = {
  door: '<svg viewBox="0 0 24 24"><path d="M5 21h14M7 21V4h10v17M10 12h.01"/></svg>',
  roller: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="2.2"/><path d="M4.5 12h2M17.5 12h2M12 4.5v2M12 17.5v2"/></svg>',
  handle: '<svg viewBox="0 0 24 24"><path d="M7 4v12a4 4 0 0 0 8 0V9M15 9h4M7 4h4"/></svg>',
  window: '<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4zM12 4v16M4 12h16"/></svg>',
  hinge: '<svg viewBox="0 0 24 24"><path d="M8 3h8v18H8zM8 8h8M8 16h8M11 6h2M11 18h2"/></svg>',
  seal: '<svg viewBox="0 0 24 24"><path d="M12 3c3.2 4 6.3 7.1 6.3 11a6.3 6.3 0 1 1-12.6 0C5.7 10.1 8.8 7 12 3Z"/><path d="M9 15c.3 1.3 1.2 2 2.4 2.3"/></svg>',
  accessories: '<svg viewBox="0 0 24 24"><path d="M8 4h8v16H8zM10.5 8h3M10.5 12h3M10.5 16h3M5 7H3v10h2M19 7h2v10h-2"/></svg>',
  espag: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16M7 5v14M17 5v14"/><circle cx="12" cy="12" r="2.2"/></svg>',
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[character]));
}

function productBySlug(slug) {
  return PRODUCTS.find((product) => product.slug === slug);
}

function productImage(product) {
  return product.image || product.catalogueImage;
}

function productCard(product, extraClass = "") {
  return `<a class="product-card ${extraClass}" href="product.html?id=${encodeURIComponent(product.slug)}" aria-label="View ${escapeHTML(product.name)}, catalogue reference ${escapeHTML(product.sku)}">
    <div class="product-card-image">
      <img src="${escapeHTML(productImage(product))}" data-fallback="${escapeHTML(product.catalogueImage)}" alt="${escapeHTML(product.imageAlt)}" loading="lazy" width="800" height="600">
      <span class="product-card-category">${escapeHTML(product.category)}</span>
    </div>
    <div class="product-card-body"><h3 class="product-card-title">${escapeHTML(product.name)}</h3><p class="product-card-reference">Catalogue ref. ${escapeHTML(product.sku)}</p></div>
    <div class="product-card-footer"><span>View product</span><span aria-hidden="true">→</span></div>
  </a>`;
}

function bindImageFallbacks(scope = document) {
  scope.querySelectorAll("img[data-fallback]").forEach((image) => {
    image.addEventListener("error", () => {
      if (image.src.endsWith(image.dataset.fallback)) return;
      image.src = image.dataset.fallback;
    }, { once: true });
  });
}

function renderHome() {
  const categoryGrid = document.getElementById("category-grid");
  if (categoryGrid) {
    categoryGrid.innerHTML = CATEGORIES.map((category, index) => {
      const feature = productBySlug(category.feature);
      const image = feature ? productImage(feature) : "images/season-system-mark.png";
      return `<a class="category-card reveal reveal-delay-${index % 3}" href="products.html?category=${encodeURIComponent(category.name)}">
        <div class="category-visual"><span class="category-icon" aria-hidden="true">${CATEGORY_ICONS[category.icon] || ""}</span><img src="${escapeHTML(image)}" data-fallback="${feature ? escapeHTML(feature.catalogueImage) : "images/season-system-mark.png"}" alt="" loading="lazy" width="480" height="360"></div>
        <div class="category-body"><h3>${escapeHTML(category.name)}</h3><p>${escapeHTML(category.intro)}</p><div class="category-bottom"><span>${category.count} catalogue listings</span><span aria-hidden="true">→</span></div></div>
      </a>`;
    }).join("");
    bindImageFallbacks(categoryGrid);
  }

  const featured = document.getElementById("featured-products");
  if (featured) {
    featured.innerHTML = FEATURED_SLUGS.map(productBySlug).filter(Boolean).map((product) => productCard(product, "reveal")).join("");
    bindImageFallbacks(featured);
  }
}

function setCatalogUrl(category, query) {
  const url = new URL(window.location.href);
  if (category && category !== "All") url.searchParams.set("category", category);
  else url.searchParams.delete("category");
  if (query.trim()) url.searchParams.set("q", query.trim());
  else url.searchParams.delete("q");
  window.history.replaceState({}, "", url);
}

function initCatalog() {
  const filters = document.getElementById("category-filters");
  const grid = document.getElementById("catalog-grid");
  if (!filters || !grid) return;

  const search = document.getElementById("search-input");
  const clear = document.getElementById("clear-search");
  const count = document.getElementById("results-count");
  const empty = document.getElementById("empty-state");
  const reset = document.getElementById("reset-filters");
  const initial = new URLSearchParams(window.location.search);
  let activeCategory = initial.get("category") || "All";
  let query = initial.get("q") || "";
  if (!CATEGORIES.some((category) => category.name === activeCategory)) activeCategory = "All";
  if (search) search.value = query;

  function renderFilters() {
    const buttons = [{ name: "All", count: PRODUCTS.length }, ...CATEGORIES.map((category) => ({ name: category.name, count: category.count }))];
    filters.innerHTML = buttons.map((item) => `<button class="filter-chip ${item.name === activeCategory ? "is-active" : ""}" type="button" data-category="${escapeHTML(item.name)}" aria-pressed="${item.name === activeCategory}">${escapeHTML(item.name)}<span>${item.count}</span></button>`).join("");
    filters.querySelectorAll(".filter-chip").forEach((button) => button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      setCatalogUrl(activeCategory, query);
      renderFilters();
      renderProducts();
    }));
  }

  function renderProducts() {
    const normalizedQuery = query.trim().toLowerCase();
    const visible = PRODUCTS.filter((product) => {
      const categoryMatch = activeCategory === "All" || product.category === activeCategory;
      const queryMatch = !normalizedQuery || [product.name, product.sku, product.category].some((value) => value.toLowerCase().includes(normalizedQuery));
      return categoryMatch && queryMatch;
    });
    grid.innerHTML = visible.map((product) => productCard(product)).join("");
    bindImageFallbacks(grid);
    if (count) count.innerHTML = `Showing <strong>${visible.length}</strong> of <strong>${PRODUCTS.length}</strong> catalogue listings`;
    if (empty) empty.hidden = visible.length > 0;
    grid.hidden = visible.length === 0;
    if (clear) clear.hidden = !query;
  }

  search?.addEventListener("input", () => {
    query = search.value;
    setCatalogUrl(activeCategory, query);
    renderProducts();
  });
  clear?.addEventListener("click", () => {
    query = "";
    if (search) search.value = "";
    setCatalogUrl(activeCategory, query);
    renderProducts();
    search?.focus();
  });
  reset?.addEventListener("click", () => {
    activeCategory = "All";
    query = "";
    if (search) search.value = "";
    setCatalogUrl(activeCategory, query);
    renderFilters();
    renderProducts();
    search?.focus();
  });
  window.addEventListener("popstate", () => {
    const params = new URLSearchParams(window.location.search);
    activeCategory = params.get("category") || "All";
    if (!CATEGORIES.some((category) => category.name === activeCategory)) activeCategory = "All";
    query = params.get("q") || "";
    if (search) search.value = query;
    renderFilters();
    renderProducts();
  });

  renderFilters();
  renderProducts();
}

function makeQuoteUrl(product) {
  const subject = `Product enquiry: ${product.name} (${product.sku})`;
  const body = `Hello Season System Solutions,\n\nI would like to enquire about:\n${product.name}\nCatalogue reference: ${product.sku}\n\nPlease share availability and details.\n\nThank you.`;
  return `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function renderProductDetail() {
  const container = document.getElementById("product-detail-container");
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const identifier = params.get("id") || "";
  const product = PRODUCTS.find((item) => item.slug === identifier) || PRODUCTS.find((item) => item.sku === identifier);
  if (!product) {
    container.innerHTML = `<div class="not-found"><p class="eyebrow"><span class="eyebrow-line"></span> Product index</p><h1>We couldn’t find that item.</h1><p>Search the catalogue by product name or reference.</p><a class="button button-dark" href="products.html">Browse products <span aria-hidden="true">↗</span></a></div>`;
    return;
  }

  document.title = `${product.name} | Season System Solutions`;
  const category = CATEGORIES.find((item) => item.name === product.category);
  const categoryUrl = `products.html?category=${encodeURIComponent(product.category)}`;
  container.innerHTML = `<nav class="detail-breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><a href="products.html">Products</a><span aria-hidden="true">/</span><a href="${categoryUrl}">${escapeHTML(product.category)}</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHTML(product.name)}</span></nav>
    <div class="detail-layout"><div class="detail-image"><img src="${escapeHTML(productImage(product))}" data-fallback="${escapeHTML(product.catalogueImage)}" alt="${escapeHTML(product.imageAlt)}" width="900" height="760"></div>
    <div class="detail-info"><span class="detail-category">${escapeHTML(product.category)}</span><h1>${escapeHTML(product.name)}</h1><p class="detail-reference">CATALOGUE REF. ${escapeHTML(product.sku)}</p><p>This listing follows the supplied Season System catalogue. Contact our team to confirm the specific variant and availability.</p>
    <div class="detail-meta"><div class="detail-meta-row"><span>Catalogue reference</span><span>${escapeHTML(product.sku)}</span></div><div class="detail-meta-row"><span>Product family</span><span>${escapeHTML(product.category)}</span></div><div class="detail-meta-row"><span>Catalogue page</span><span>${String(product.page).padStart(2,"0")}</span></div>${product.options ? `<div class="detail-meta-row"><span>Sizes shown</span><span>${escapeHTML(product.options.replace(/^Catalogue sizes shown: /,""))}</span></div>` : ""}</div>
    <div class="detail-actions"><a class="button button-orange" href="${makeQuoteUrl(product)}">Enquire about this item <span aria-hidden="true">↗</span></a><a class="button button-outline" href="${categoryUrl}">More in ${escapeHTML(category?.name || product.category)}</a></div><p class="detail-note">For availability and product enquiries, contact Season System.</p></div></div>
    <section class="related-section"><h2>More from ${escapeHTML(product.category)}</h2><div class="product-grid" id="related-products"></div></section>`;
  bindImageFallbacks(container);
  const relatedGrid = document.getElementById("related-products");
  if (relatedGrid) {
    const related = PRODUCTS.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0,4);
    relatedGrid.innerHTML = related.map((item) => productCard(item)).join("");
    bindImageFallbacks(relatedGrid);
  }
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const note = document.getElementById("form-note");
  if (!form || !note) return;

  const params = new URLSearchParams(window.location.search);
  const productInput = form.elements.namedItem("product");
  if (productInput && params.get("product")) productInput.value = params.get("product");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = `Season System enquiry${values.get("product") ? `: ${values.get("product")}` : ""}`;
    const body = [
      "Hello Season System Solutions,",
      "",
      `Name: ${values.get("name")}`,
      `Phone: ${values.get("phone") || "Not provided"}`,
      `Email: ${values.get("email")}`,
      `Product or catalogue reference: ${values.get("product") || "Not provided"}`,
      "",
      String(values.get("message")),
    ].join("\n");
    const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    note.replaceChildren();
    note.append("Your email app should open with the details ready. If it doesn’t, ");
    const fallbackLink = document.createElement("a");
    fallbackLink.href = mailto;
    fallbackLink.textContent = "open the message here";
    note.append(fallbackLink, ".");
    window.location.href = mailto;
  });
}

function initMobileNavigation() {
  const toggle = document.getElementById("menu-toggle");
  const navigation = document.getElementById("primary-navigation");
  if (!toggle || !navigation) return;

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  }
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    navigation.classList.toggle("is-open", open);
  });
  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  window.addEventListener("resize", () => { if (window.innerWidth > 780) closeMenu(); });
}

function initHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 14);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: .08, rootMargin: "0px 0px -25px 0px" });
  nodes.forEach((node) => observer.observe(node));
}

function initFooterYear() {
  document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = String(new Date().getFullYear()); });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  initCatalog();
  renderProductDetail();
  initContactForm();
  initMobileNavigation();
  initHeader();
  initFooterYear();
  initReveal();
});
