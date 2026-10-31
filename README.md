# Season System Solutions

A responsive, static website for Season System Solutions, redesigned around the supplied product catalogue and the brand’s charcoal and orange identity.

## Pages

- `index.html` — brand introduction, product families, selected products and catalogue download.
- `products.html` — searchable catalogue with product-family filters.
- `product.html` — product details, catalogue reference and enquiry link, opened with `?id=<product-slug>`.
- `about.html` — catalogue-led company overview and the warranty note stated in the supplied brochure.
- `contact.html` — existing company contact details and an enquiry form that prepares an email in the visitor’s email app.

## Catalogue and imagery

The website includes all 103 entries listed in the supplied brochure. Product names and catalogue references are kept with each entry. The site download uses a visually faithful, compressed 16-page copy at `downloads/season-system-solutions-catalogue-web.pdf`; the full-resolution source brochure is retained at `downloads/season-system-solutions-catalogue.pdf`.

Each listing has a local image crop from the brochure. Where the reference site has a matching catalogue product with a higher-resolution image, the listing uses that locally bundled photo and falls back to its brochure crop if needed. No prices are displayed.

The supplied JPEG logo is preserved as the source asset. `images/season-system-mark.png` is a cropped, transparent, high-resolution website version. `images/hero-upvc-window.webp` is cropped from the brochure cover.

## Run locally

Open `index.html` directly, or serve the project folder:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Regenerate image assets

The site does not require a build step. To recreate the catalogue crops and clean logo, run the optional helper with Python, PyMuPDF and Pillow installed:

```powershell
python scripts/build_catalog_assets.py downloads/season-system-solutions-catalogue.pdf "images/logo syseen system.jpeg" .
```

`scripts/download-reference-images.ps1` contains the fixed list of matching Haport product-image URLs used for the local reference photos.
