import { Instagram } from "lucide-react";
import logo from "@/assets/logos/fika-logo.png";
import { Pinwheel } from "@/components/common/Pinwheel";
import { SITE, NAV, FOOTER } from "@/config/site-config";

export function Footer() {
  return (
    <footer className="bg-blush pt-14 pb-8 md:pt-16 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <img src={logo} alt="Fika Pop-Up Show" width={112} height={112} className="h-28 w-28 object-contain" />
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">{FOOTER.tagline}</p>
          <p className="mt-4 text-sm text-muted-foreground">{SITE.established}</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow mb-5">Explore</p>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="nav-link">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow mb-5">Work with us</p>
          <ul className="space-y-3 text-sm">
            {FOOTER.workWithUs.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <a href={`tel:${SITE.phoneTel}`} className="block hover:text-coral">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="block hover:text-coral">
              {SITE.email}
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-coral"
            >
              {SITE.instagramHandle}
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/20 hover:bg-ivory"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-3 border-t border-charcoal/10 px-5 pt-8 text-xs text-muted-foreground sm:flex-row md:px-10">
        <p>© {new Date().getFullYear()} Fika Pop-Up Show. All rights reserved. An Event by {SITE.eventBy}.</p>
        <Pinwheel />
      </div>
    </footer>
  );
}
