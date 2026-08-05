"""
Genera los banners 1200x630 que se ven al compartir el link
(public/img/og-es.jpg y og-en.jpg).

IMPORTANTE: la foto queda incrustada dentro del banner. Si reemplazás
public/img/sharon-portrait.jpg, este script hay que volver a correrlo,
o el banner va a seguir mostrando la foto anterior.

Uso:
    pip install pillow numpy
    python scripts/generar-banner.py

Las tipografías se buscan en varias rutas conocidas (Linux y Windows).
Si no encuentra ninguna, avisa y usa la que traiga el sistema.
"""

from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / 'public' / 'img'
PHOTO = IMG / 'sharon-portrait.jpg'

W, H = 2400, 1260   # se renderiza a 2x y se baja a 1200x630 al guardar
OUT_W, OUT_H = 1200, 630
S = 2               # factor de escala

NAVY_A = (0x12, 0x13, 0x58)
NAVY_B = (0x23, 0x2F, 0x72)
NAVY_C = (0x2F, 0x57, 0x8A)
TEAL = (0x36, 0xAD, 0xA3)
TEAL_HI = (0x8F, 0xE3, 0xDB)
SOFT = (0xA8, 0xB6, 0xDC)
DIM = (0x7F, 0x92, 0xC4)


def find_font(candidates):
    for path in candidates:
        if Path(path).exists():
            return path
    raise FileNotFoundError(f'No se encontró ninguna de: {candidates}')


BOLD = find_font([
    '/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf',
    'C:/Windows/Fonts/segoeuib.ttf',
    'C:/Windows/Fonts/arialbd.ttf',
])
MEDIUM = find_font([
    '/usr/share/fonts/truetype/google-fonts/Poppins-Medium.ttf',
    'C:/Windows/Fonts/segoeui.ttf',
    'C:/Windows/Fonts/arial.ttf',
])
LIGHT = find_font([
    '/usr/share/fonts/truetype/google-fonts/Poppins-Light.ttf',
    'C:/Windows/Fonts/segoeuil.ttf',
    'C:/Windows/Fonts/arial.ttf',
])
MONO = find_font([
    '/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf',
    'C:/Windows/Fonts/consolab.ttf',
    'C:/Windows/Fonts/cour.ttf',
])


def gradient():
    """Degradado diagonal, el mismo que usa el hero del sitio."""
    x = np.linspace(0, 1, W)[None, :]
    y = np.linspace(0, 1, H)[:, None]
    t = np.clip(0.62 * x + 0.55 * y, 0, 1)
    m = t <= 0.52
    k = np.where(m, t / 0.52, (t - 0.52) / 0.48)[..., None]
    a, b, c = map(np.array, (NAVY_A, NAVY_B, NAVY_C))
    out = np.where(m[..., None], a + (b - a) * k, b + (c - b) * k)
    return Image.fromarray(out.astype('uint8'))


def glow(img):
    """Halo teal suave arriba a la derecha."""
    g = Image.new('L', (W, H), 0)
    ImageDraw.Draw(g).ellipse([W - 620*S, -320*S, W + 180*S, 400*S], fill=70)
    g = g.filter(ImageFilter.GaussianBlur(150*S))
    return Image.composite(Image.blend(img, Image.new('RGB', (W, H), TEAL), 0.30), img, g)


def ring_photo(size=306*S, ring=6*S):
    """Foto circular con anillo degradado, igual que en el hero."""
    total = size + ring * 2
    x = np.linspace(0, 1, total)[None, :]
    y = np.linspace(0, 1, total)[:, None]
    t = np.clip(0.6 * x + 0.6 * y, 0, 1)[..., None]
    a, b = np.array(TEAL), np.array([235, 240, 255])
    ringimg = Image.fromarray((a + (b - a) * t).astype('uint8'))

    mask = Image.new('L', (total, total), 0)
    ImageDraw.Draw(mask).ellipse([0, 0, total - 1, total - 1], fill=255)
    card = Image.new('RGBA', (total, total), (0, 0, 0, 0))
    card.paste(ringimg, (0, 0), mask)

    ph = Image.open(PHOTO).convert('RGB').resize((size, size), Image.LANCZOS)
    pm = Image.new('L', (size, size), 0)
    ImageDraw.Draw(pm).ellipse([0, 0, size - 1, size - 1], fill=255)
    card.paste(ph, (ring, ring), pm)
    return card


def tracked(draw, xy, text, font, fill, tracking=0):
    """Texto con espaciado entre letras (PIL no lo soporta nativamente)."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


def build(out, tagline, kicker='PORTFOLIO · CV'):
    img = glow(gradient())
    d = ImageDraw.Draw(img)

    f_kick = ImageFont.truetype(MONO, 19*S)
    f_name = ImageFont.truetype(BOLD, 58*S)
    f_role = ImageFont.truetype(MEDIUM, 31*S)
    f_tag = ImageFont.truetype(LIGHT, 21*S)
    f_tech = ImageFont.truetype(MONO, 16*S)
    f_url = ImageFont.truetype(MONO, 20*S)

    L, y = 78*S, 108*S
    tracked(d, (L, y), kicker, f_kick, TEAL_HI, tracking=3.2*S)
    y += 52*S
    d.text((L, y), 'Sharon Rodríguez', font=f_name, fill=(255, 255, 255)); y += 70*S
    d.text((L, y), 'Liendo', font=f_name, fill=(255, 255, 255)); y += 88*S
    d.text((L, y), 'QA Automation Engineer', font=f_role, fill=TEAL_HI); y += 48*S
    d.text((L, y), tagline, font=f_tag, fill=SOFT)

    tracked(d, (L, H - 186*S), 'CYPRESS · POSTMAN · JENKINS · JMETER · SQL',
            f_tech, DIM, tracking=1.6*S)

    d.rounded_rectangle([L, H - 96*S, L + 4*S, H - 62*S], radius=2*S, fill=TEAL)
    d.text((L + 20*S, H - 92*S), 'sharonrodriguez22.github.io', font=f_url, fill=(226, 232, 246))

    shadow = Image.new('L', (W, H), 0)
    ImageDraw.Draw(shadow).ellipse([812*S, 178*S, 1136*S, 502*S], fill=150)
    shadow = shadow.filter(ImageFilter.GaussianBlur(28*S))
    img = Image.composite(Image.new('RGB', (W, H), (4, 6, 30)), img, shadow)

    card = ring_photo()
    img.paste(card, (806*S, 156*S), card)
    # bajar a tamaño final: el antialias queda mucho más limpio
    img = img.resize((OUT_W, OUT_H), Image.LANCZOS)
    # subsampling=0 (4:4:4) evita que el JPEG emborrone el texto de color
    img.save(out, 'JPEG', quality=95, subsampling=0, optimize=True)
    print('generado:', out)


if __name__ == '__main__':
    build(IMG / 'og-es.jpg', 'Testing Manual y Automatizado · API & Data Testing')
    build(IMG / 'og-en.jpg', 'Manual & Automated Testing · API & Data Testing')
