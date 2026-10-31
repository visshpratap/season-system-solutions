"""Create a visually faithful, smaller PDF for the website download."""

from io import BytesIO
from pathlib import Path

import fitz
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "downloads" / "season-system-solutions-catalogue.pdf"
OUTPUT = ROOT / "downloads" / "season-system-solutions-catalogue-web.pdf"


def main() -> None:
    document = fitz.open(SOURCE)
    for page in document:
        # The supplied catalogue is a scanned brochure with one full-page
        # image on each page. Re-encode that image at its original pixel size.
        images = page.get_images(full=True)
        if len(images) != 1:
            raise ValueError(f"Expected one scanned page image, found {len(images)}")

        xref = images[0][0]
        pixmap = fitz.Pixmap(document, xref)
        if pixmap.n > 3:
            pixmap = fitz.Pixmap(fitz.csRGB, pixmap)
        image = Image.frombytes("RGB", (pixmap.width, pixmap.height), pixmap.samples)
        encoded = BytesIO()
        image.save(encoded, format="JPEG", quality=90, optimize=True, progressive=True)
        page.replace_image(xref, stream=encoded.getvalue())

    document.save(OUTPUT, garbage=4, deflate=True, deflate_images=True)
    print(f"Created {OUTPUT} ({OUTPUT.stat().st_size:,} bytes; {len(document)} pages)")


if __name__ == "__main__":
    main()
