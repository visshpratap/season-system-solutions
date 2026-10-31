"""Create catalogue-backed product thumbnails and a cleaned Season System mark."""

from __future__ import annotations

import argparse
from pathlib import Path

import fitz
from PIL import Image, ImageEnhance, ImageFilter


PAGE_PRODUCTS = {
    3: ["casement-door-set-complete", "casement-door-premium", "d-handle-set"],
    4: [
        "single-roller-nylon-groove", "single-roller-nylon-flat", "ball-bearing-12mm",
        "double-roller-nylon-groove-flat", "mesh-roller", "mesh-roller-7-5mm",
        "mesh-roller-10mm", "adjustable-roller", "adjustable-roller-blue-wheel",
        "adjustable-roller-brass-wheel", "four-wheel-roller", "eight-wheel-roller",
    ],
    5: [
        "sliding-touch-lock", "sliding-touch-lock-mini-50mm", "sliding-lg-touch-lock",
        "pop-up-handle-zinc", "pop-up-handle-key", "crescent-lock", "short-neck-handle",
        "sliding-l-handle", "sliding-handle-roto", "sliding-inline-door-handle",
        "sliding-short-neck-key-left-right", "short-neck-left-right",
    ],
    6: [
        "sliding-handle", "sliding-handle-key", "c-small-handle", "d-handle-dummy",
        "d-handle-lockable-both-sides", "c-handle-big", "d-with-dummy-handle",
        "sliding-key-knob-handle", "sliding-key-plain-handle",
    ],
    7: [
        "casement-handle-uk", "casement-handle-eco", "casement-handle-american",
        "casement-handle-key", "casement-handle-premium-key", "casement-handle-premium",
        "cockspur-handle-normal", "cockspur-handle-premium-044", "cockspur-handle-premium-045",
    ],
    8: [
        "casement-door-handle", "casement-door-handle-premium-047", "casement-door-handle-premium-048",
        "casement-double-key-plain", "casement-double-key-knob", "casement-double-american-key-knob",
        "casement-double-american-key-plain", "t-handle-sash-zammer", "allen-key-handle",
    ],
    9: [
        "hinge-3d", "hinge-3d-zinc", "silicone", "flat-hinge-window-sash", "hinge-concealed-door",
        "hinge-concealed-window", "hinge-butt-100mm", "friction-stay-ss-202-304", "arm-stay-ss-202-304",
    ],
    10: ["bathroom-set-92-35", "single-point-set-85-25", "single-point-set-92-35"],
    11: [
        "glass-packer", "u-packer", "fastener-cap", "l-type-anti-lift", "anti-lift-small",
        "anti-lift-big", "sliding-stopper-round-big", "sliding-stopper-round-small",
        "sliding-stopper-rectangular", "bump-stopper-pvc-metal", "bump-stopper-premium-pvc", "drainage-cap",
    ],
    12: [
        "aluminium-track-solid", "aluminium-track-hollow", "aluminium-track-semi-solid", "ss-natural-mesh",
        "ss-black-mesh", "nylon-fiber-mesh", "pvc-self-screw", "fastener-8-80-100", "wool-pile",
        "gasket", "mesh-tool-wooden", "mesh-tool-pvc",
    ],
    13: [
        "shoot-bolt-white-powder-coated", "sliding-striker", "l-clamp-12x50", "l-clamp-30x30",
        "welding-paper-adhesive", "casement-window-striker-9-axis", "casement-door-striker-13-axis",
        "french-window-door-striker", "13mm-axis-casement-striker-1",
    ],
    14: ["casement-espag-30-35-bs", "casement-espag-22-bs"],
    15: ["sliding-espag-15-bs", "sliding-espag-7-5-bs"],
}


def clamp_box(box: tuple[int, int, int, int], size: tuple[int, int]) -> tuple[int, int, int, int]:
    left, top, right, bottom = box
    width, height = size
    return max(0, left), max(0, top), min(width, right), min(height, bottom)


def crop_for(page_number: int, index: int, size: tuple[int, int]) -> tuple[int, int, int, int]:
    width, height = size
    if page_number == 3:
        top = [405, 997, 1566][index]
        return clamp_box((110, top + 22, 1390, top + 382), size)
    if page_number == 10:
        top = [416, 930, 1376][index]
        return clamp_box((110, top + 8, 1390, top + 378), size)
    if page_number in (14, 15):
        top = ([480, 1308] if page_number == 14 else [495, 1334])[index]
        return clamp_box((72, top + 10, 972, top + 435), size)

    columns = [45, 526, 1004]
    col = index % 3
    row = index // 3
    if page_number in (4, 5):
        row_tops = [385, 813, 1240, 1667] if page_number == 4 else [399, 836, 1272, 1709]
        top = row_tops[row]
        return clamp_box((columns[col] + 22, top + 65, columns[col] + 428, top + 314), size)
    if page_number == 6:
        row_tops = [395, 907, 1478]
        top = row_tops[row]
        return clamp_box((columns[col] + 18, top + 18, columns[col] + 430, top + 350), size)
    if page_number in (7, 8, 9):
        row_tops = [399, 938, 1477]
        top = row_tops[row]
        return clamp_box((columns[col] + 30, top + 38, columns[col] + 415, top + 370), size)
    if page_number == 12:
        row_tops = [273, 707, 1163, 1614]
        top = row_tops[row]
        return clamp_box((columns[col] + 20, top + 101, columns[col] + 426, top + 330), size)
    if page_number == 13:
        row_tops = [410, 949, 1487]
        top = row_tops[row]
        return clamp_box((columns[col] + 20, top + 44, columns[col] + 426, top + 365), size)
    row_tops = [401, 845, 1287, 1728]
    top = row_tops[row]
    return clamp_box((columns[col] + 25, top + 49, columns[col] + 424, top + 285), size)


def clean_logo(source: Path, destination: Path) -> None:
    image = Image.open(source).convert("RGBA")
    pixels = image.load()
    for y in range(image.height):
        for x in range(image.width):
            red, green, blue, _ = pixels[x, y]
            brightness = max(red, green, blue)
            alpha = round(max(0, min(255, (brightness - 8) * 255 / 28)))
            pixels[x, y] = (red, green, blue, alpha)

    bbox = image.getbbox()
    if bbox:
        image = image.crop(bbox)
    canvas_size = max(image.size) + 18
    canvas = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    canvas.alpha_composite(image, ((canvas_size - image.width) // 2, (canvas_size - image.height) // 2))
    canvas = canvas.resize((1024, 1024), Image.Resampling.LANCZOS)
    rgb = canvas.convert("RGB")
    alpha = canvas.getchannel("A")
    rgb = ImageEnhance.Contrast(rgb).enhance(1.06)
    sharpened = rgb.filter(ImageFilter.UnsharpMask(radius=1.4, percent=145, threshold=3))
    canvas = sharpened.convert("RGBA")
    canvas.putalpha(alpha)
    canvas.save(destination, optimize=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("catalogue", type=Path)
    parser.add_argument("logo", type=Path)
    parser.add_argument("project", type=Path)
    args = parser.parse_args()

    catalog_dir = args.project / "images" / "catalog"
    catalog_dir.mkdir(parents=True, exist_ok=True)
    document = fitz.open(args.catalogue)
    rendered = {}
    for page_number in PAGE_PRODUCTS:
        page = document[page_number - 1]
        pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        rendered[page_number] = Image.frombytes("RGB", (pixmap.width, pixmap.height), pixmap.samples)

    for page_number, slugs in PAGE_PRODUCTS.items():
        page_image = rendered[page_number]
        for index, slug in enumerate(slugs):
            box = crop_for(page_number, index, page_image.size)
            crop = page_image.crop(box)
            crop.save(catalog_dir / f"{slug}.webp", "WEBP", quality=93, method=6)

    hero_page = document[0]
    pixmap = hero_page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    hero = Image.frombytes("RGB", (pixmap.width, pixmap.height), pixmap.samples)
    hero.crop((490, 620, 1503, 1425)).save(args.project / "images" / "hero-upvc-window.webp", "WEBP", quality=92, method=6)
    clean_logo(args.logo, args.project / "images" / "season-system-mark.png")
    print(f"Created {sum(map(len, PAGE_PRODUCTS.values()))} catalogue product crops and refreshed logo/hero assets.")


if __name__ == "__main__":
    main()
