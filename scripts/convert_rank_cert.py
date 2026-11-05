import os
import fitz  # PyMuPDF
from PIL import Image, ImageDraw

cert_dir = os.path.join('public', 'data', 'certificates')
thumb_dir = os.path.join(cert_dir, 'thumbnails')
preview_dir = os.path.join(cert_dir, 'preview')

os.makedirs(thumb_dir, exist_ok=True)
os.makedirs(preview_dir, exist_ok=True)

pdf_path = os.path.join(cert_dir, 'RankCertificate12thoutof133.pdf')
png_path = os.path.join(cert_dir, 'rank-certificate-12th.png')

# Convert first page of PDF to high-res PNG using PyMuPDF (300 DPI equivalent)
doc = fitz.open(pdf_path)
page = doc[0]
mat = fitz.Matrix(3, 3)
pix = page.get_pixmap(matrix=mat, alpha=False)
pix.save(png_path)
doc.close()
print(f"Saved initial PNG: {png_path} ({os.path.getsize(png_path) / 1024:.1f} KB)")

# Clean CamScanner watermark below official university footer
im = Image.open(png_path).convert('RGB')
w, h = im.size
bg_color = im.getpixel((50, 2350))
draw = ImageDraw.Draw(im)
draw.rectangle([0, 2380, w, h], fill=bg_color)
im.save(png_path)
print(f"Saved cleaned PNG: {png_path} ({os.path.getsize(png_path) / 1024:.1f} KB)")

# Thumbnail (720px max dimension)
thumb = im.copy()
thumb.thumbnail((720, 720), Image.Resampling.LANCZOS)
thumb_path = os.path.join(thumb_dir, 'rank-certificate-12th.webp')
thumb.save(thumb_path, 'WEBP', quality=85, method=6)
print(f"Saved thumbnail: {thumb_path} ({os.path.getsize(thumb_path) / 1024:.1f} KB)")

# Modal preview (2000px max dimension)
preview = im.copy()
preview.thumbnail((2000, 2000), Image.Resampling.LANCZOS)
preview_path = os.path.join(preview_dir, 'rank-certificate-12th.webp')
preview.save(preview_path, 'WEBP', quality=92, method=6)
print(f"Saved preview: {preview_path} ({os.path.getsize(preview_path) / 1024:.1f} KB)")

print("\nDone! Rank certificate images generated successfully.")

