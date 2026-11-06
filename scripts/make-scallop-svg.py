from pathlib import Path

from PIL import Image
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
mask_path = ROOT / "src" / "assets" / "shapes" / "partner-scallop-mask.png"
out_path = ROOT / "src" / "assets" / "shapes" / "partner-scallop.svg"

img = Image.open(mask_path).convert("L").resize((960, 666), Image.NEAREST)
arr = np.array(img)
mask = arr > 128
h, w = mask.shape

try:
    from skimage import measure

    contours = measure.find_contours(mask.astype(float), 0.5)
    c = max(contours, key=len)
    pts = [(float(x), float(y)) for y, x in c]
    print("skimage points", len(pts))
except Exception as exc:
    print("fallback contour", exc)
    pts = []
    for y in range(h):
        xs = np.where(mask[y])[0]
        if len(xs):
            pts.append((float(xs[0]), float(y)))
    for y in range(h - 1, -1, -1):
        xs = np.where(mask[y])[0]
        if len(xs):
            pts.append((float(xs[-1]), float(y)))

step = max(1, len(pts) // 220)
simp = pts[::step]
if simp[0] != simp[-1]:
    simp.append(simp[0])

d = f"M {simp[0][0]:.1f} {simp[0][1]:.1f} " + " ".join(
    f"L {x:.1f} {y:.1f}" for x, y in simp[1:]
) + " Z"

svg = (
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" fill="none">'
    f'<path fill="black" d="{d}"/></svg>'
)
out_path.write_text(svg, encoding="utf-8")
print("wrote", out_path, "bytes", len(svg))
