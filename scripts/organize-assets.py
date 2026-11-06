"""Copy extracted PDF images into named sponsor/partner/event asset folders."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src" / "assets" / "extracted"
SPONSORS = ROOT / "src" / "assets" / "sponsors"
PARTNERS = ROOT / "src" / "assets" / "partners"
EVENTS = ROOT / "src" / "assets" / "events"
CREDITS = ROOT / "src" / "assets" / "credits"

for d in (SPONSORS, PARTNERS, EVENTS, CREDITS):
    d.mkdir(parents=True, exist_ok=True)

sponsors = {
    "anand.png": "p7_X15_1080x360.png",
    "bridgewoods-international-school.png": "p7_X17_525x96.png",
    "sumangali-jewellers.png": "p7_X19_2000x2000.png",
    "city-cars-coimbatore.png": "p7_X21_652x218.png",
    "ms-rice.png": "p7_X23_502x502.png",
    "wondr-diamonds.png": "p7_X29_496x461.png",
    "tastee-masala.png": "p7_X25_752x532.png",
    "smb.png": "p7_X27_656x481.png",
    "ssvm-institutions.png": "p7_X31_318x117.png",
    "the-green-bowl-community.png": "p7_X37_1053x744.png",
    "hita.jpg": "p7_X43_354x349.jpg",
    "psr-silk-sarees.png": "p7_X41_1275x838.png",
    "nalam.png": "p7_X46_354x767.png",
    "ayyappa-ghee.png": "p7_X39_320x320.png",
    "ruhi-continuum-school.png": "p7_X44_644x157.png",
    "tvs-sundaram-motors.png": "p8_X15_998x361.png",
    "sanbrix-properties.png": "p8_X17_497x702.png",
    "lakshmi-ceramics.png": "p8_X21_648x159.png",
    "aroma.png": "p8_X19_600x405.png",
    "kiara-fine-jewellery.png": "p8_X37_900x900.png",
    "tour-on.png": "p8_X39_324x324.png",
    "beauty-wares.png": "p8_X43_923x434.png",
    "shree-anandhaas.png": "p8_X45_501x240.png",
    "arya-bhavan.png": "p8_X49_332x332.png",
    "clusters-media-college.png": "p8_X47_600x600.png",
    "pps-motors.png": "p8_X51_480x321.png",
    "majestin-jewels.png": "p8_X53_675x844.png",
    "hotel-thai.png": "p8_X23_993x1404.png",
    "vivekalaya-school.png": "p8_X27_410x410.png",
    "rao-hospital.png": "p8_X41_553x238.png",
    "vilva-jewels.png": "p8_X25_459x648.png",
    "mount-group.png": "p8_X35_480x437.png",
}

partners = {
    "the-covai-mail.png": "p9_X19_593x179.png",
    "sky-rams.png": "p9_X21_895x448.png",
    "mirchi.png": "p9_X17_702x389.png",
    "suryan-fm.png": "p9_X15_336x166.jpg",
    "made-of-coimbatore.png": "p9_X31_384x384.jpg",
    "we-love-coimbatore.png": "p9_X27_400x400.png",
    "cinema-ticket.png": "p9_X29_768x432.png",
    "sportfy.png": "p9_X25_781x301.png",
}

credits = {
    "koodu.png": "p9_X60_522x150.png",
}

events = {
    "edition-photo-1.jpg": "p2_X13_557x711.jpg",
    "edition-photo-2.jpg": "p2_X15_857x554.jpg",
    "edition-photo-3.jpg": "p2_X16_497x791.jpg",
    "edition-photo-4.jpg": "p2_X19_1248x832.jpg",
    "edition-photo-5.jpg": "p4_X6_820x547.jpg",
    "edition-photo-6.jpg": "p4_X9_1872x1248.jpg",
    "edition-photo-7.jpg": "p4_X10_800x1200.jpg",
    "edition-photo-8.jpg": "p4_X11_1743x1162.jpg",
    "edition-photo-9.jpg": "p4_X13_472x612.jpg",
    "hero-extra.png": "p1_X14_1200x958.png",
}

copied = 0
missing = []

def copy_map(mapping, dest):
    global copied
    for name, src_name in mapping.items():
        src = SRC / src_name
        if not src.exists():
            missing.append(src_name)
            continue
        shutil.copy2(src, dest / name)
        copied += 1

copy_map(sponsors, SPONSORS)
copy_map(partners, PARTNERS)
copy_map(credits, CREDITS)
copy_map(events, EVENTS)
print(f"copied={copied} missing={missing}")
