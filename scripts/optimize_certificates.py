import os
from PIL import Image

src_dir = 'public/data/certificates'
thumb_dir = os.path.join(src_dir, 'thumbnails')
preview_dir = os.path.join(src_dir, 'preview')

os.makedirs(thumb_dir, exist_ok=True)
os.makedirs(preview_dir, exist_ok=True)

pngs = [f for f in os.listdir(src_dir) if f.endswith('.png')]

header = f"{'Certificate File':<36} | {'Original':>10} | {'Thumbnail':>10} | {'Modal Preview':>14}"
print(header)
print("-" * len(header))

total_orig = 0
total_thumb = 0
total_preview = 0

for f in sorted(pngs):
    base_name = os.path.splitext(f)[0]
    src_path = os.path.join(src_dir, f)
    orig_bytes = os.path.getsize(src_path)
    total_orig += orig_bytes
    
    im = Image.open(src_path)
    if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
        bg = Image.new('RGB', im.size, (255, 255, 255))
        if im.mode == 'RGBA':
            bg.paste(im, mask=im.split()[-1])
        else:
            bg.paste(im.convert('RGBA'), mask=im.convert('RGBA').split()[-1])
        rgb_im = bg
    else:
        rgb_im = im.convert('RGB')
        
    # Generate Thumbnail (720px max dimension, crisp for 280-320px CSS container @ 2x pixel density)
    thumb = rgb_im.copy()
    thumb.thumbnail((720, 720), Image.Resampling.LANCZOS)
    thumb_path = os.path.join(thumb_dir, f"{base_name}.webp")
    thumb.save(thumb_path, 'WEBP', quality=85, method=6)
    thumb_bytes = os.path.getsize(thumb_path)
    total_thumb += thumb_bytes
    
    # Generate Modal Preview (2000px max dimension, quality 92 for pristine readability)
    preview = rgb_im.copy()
    preview.thumbnail((2000, 2000), Image.Resampling.LANCZOS)
    preview_path = os.path.join(preview_dir, f"{base_name}.webp")
    preview.save(preview_path, 'WEBP', quality=92, method=6)
    preview_bytes = os.path.getsize(preview_path)
    total_preview += preview_bytes
    
    print(f"{f:<36} | {orig_bytes/(1024*1024):7.2f} MB | {thumb_bytes/1024:7.1f} KB | {preview_bytes/1024:11.1f} KB")

print("-" * len(header))
print(f"{'TOTAL':<36} | {total_orig/(1024*1024):7.2f} MB | {total_thumb/1024:7.1f} KB | {total_preview/(1024*1024):10.2f} MB")
