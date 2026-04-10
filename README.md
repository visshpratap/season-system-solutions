# 🔩 Season System Solutions — Premium UPVC Hardware Website

> An established brand approved by industry professionals — providing the finest quality UPVC hardware products and services across the Indian subcontinent.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Live Pages](#live-pages)
- [Features](#features)
- [Product Categories](#product-categories)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [SEO](#seo)
- [Contact & Business Info](#contact--business-info)
- [License](#license)

---

## About the Project

**Season System Solutions** is a static, multi-page business website built for a premium UPVC hardware brand based in Gurgaon, Haryana. The website showcases the company's product catalog — including sliding handles, casement handles, hinges, rollers, espagnolette bolts, locks, and accessories — and allows customers to get in touch for quotes and bulk orders.

The site is fully responsive, SEO-optimized, and features smooth animations, a page loader, mobile navigation, and a contact form — all built with pure HTML, CSS, and JavaScript (no frameworks or external dependencies).

---

## Live Pages

| Page | File | Description |
|------|------|-------------|
| 🏠 Home | `index.html` | Hero, featured products, categories, value props, CTA |
| 🛍️ Products | `products.html` | Full product catalog with search & category filter |
| 📄 Product Detail | `product.html` | Individual product page with specs |
| ℹ️ About | `about.html` | Brand story, warranty, values, stats |
| 📞 Contact | `contact.html` | Contact form, office address, phone, map |

---

## Features

- ⚡ **Page Loader** — Smooth loading animation on every page
- 📱 **Responsive Design** — Mobile-first layout with hamburger navigation
- 🎞️ **Scroll Animations** — `animate-in` fade-up effects on content sections
- 🔍 **Product Search & Filter** — Search by name, filter by category (on `products.html`)
- 📊 **Stats Bar** — Animated counters showing key business metrics
- 📬 **Contact Form** — Client-side validated form with success feedback
- 🗺️ **Google Maps Embed** — Office location embedded on the contact page
- 📥 **Catalog Download** — Direct download link for the product catalog PDF
- 🎨 **Dark-themed Design** — Sleek dark UI with accent color system using CSS variables
- 🔑 **SEO Meta Tags** — Title, description, and keyword meta tags on all pages

---

## Product Categories

The website covers **67+ products** across **10 categories**:

| # | Category |
|---|----------|
| 1 | Sliding Handles |
| 2 | Casement Handles |
| 3 | Hinges |
| 4 | Rollers |
| 5 | Espagnolette (Espag) Bolts |
| 6 | Locks |
| 7 | Accessories |
| 8 | Folding Systems |
| 9 | Door Hardware |
| 10 | Window Hardware |

All products come with a **10-Year Warranty** against manufacturing defects.

---

## Tech Stack

| Technology | Usage |
|-----------|-------|
| **HTML5** | Page structure & semantic markup |
| **CSS3** | Styling, animations, CSS custom properties (variables) |
| **Vanilla JavaScript** | Product data, filtering, scroll animations, form handling |
| **Google Maps Embed API** | Office location on contact page |

> **No build tools, no frameworks, no npm** — just pure HTML/CSS/JS. Open any `.html` file directly in a browser.

---

## Project Structure

```
season-system-solutions/
│
├── index.html          # Home page
├── products.html       # Product listing & filter page
├── product.html        # Single product detail page
├── about.html          # About the company
├── contact.html        # Contact form & info
│
├── css/
│   └── style.css       # All site styles (31KB) — design system, components, pages
│
├── js/
│   └── main.js         # All JS logic (41KB) — product data, filtering, animations
│
└── images/
    ├── page1_img1.jpeg  # Hero / cover image
    ├── page2_img1.jpeg  # About section image
    └── page*_img*.jpeg  # Product catalog images (pages 1–16)
```

---

## Getting Started

Since this is a static website, no installation or build step is required.

### Option 1 — Open Directly in Browser

Simply double-click `index.html` to open the site in your default browser.

### Option 2 — Use a Local Dev Server (Recommended)

For the best experience (especially for relative paths and the contact form), use a local server:

**Using VS Code Live Server:**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → **Open with Live Server**

**Using Python:**
```bash
# Python 3
python -m http.server 8080
```
Then visit: `http://localhost:8080`

**Using Node.js (npx serve):**
```bash
npx serve .
```

---

## SEO

Each page is optimized with:

- ✅ Unique `<title>` tags
- ✅ `<meta name="description">` on every page
- ✅ `<meta name="keywords">` on the home page
- ✅ Single `<h1>` per page with proper heading hierarchy
- ✅ `alt` attributes on all images
- ✅ `loading="lazy"` on below-the-fold images
- ✅ Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)

---

## Contact & Business Info

| Detail | Info |
|--------|------|
| 🏢 **Company** | Season System Solutions |
| 📍 **Address** | Khedki Daula, NH-8 Road, Near Stella Industries, Gurgaon-122004, Haryana |
| 📞 **Phone** | [8130729201](tel:8130729201) |
| 📧 **Email** | [seasonsystemsolution@gmail.com](mailto:seasonsystemsolution@gmail.com) |
| 🕐 **Hours** | Monday – Saturday: 9:00 AM – 6:00 PM |

---

## License

© 2026 Season System Solutions. All rights reserved.  
This website and its contents are proprietary to Season System Solutions.
