import { Mail, Phone, Instagram } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SITE } from "@/config/site-config";

export function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneTel}` },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Instagram, label: "Instagram", value: SITE.instagramHandle, href: SITE.instagram },
  ];
  return (
    <section id="contact" className="section-pad bg-ivory">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-10">
        <Reveal>
          <p className="eyebrow text-coral">Get in touch</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl">
            Have a brand to showcase? Want to collaborate with Fika? <em>Let's connect!</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 border-y border-border py-12 sm:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={0.1 * i}>
              <it.icon className="mx-auto h-5 w-5 text-coral" />
              <p className="eyebrow mt-4 text-muted-foreground">{it.label}</p>
              <a
                href={it.href}
                {...(it.label === "Instagram" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mt-2 block font-display text-2xl hover:text-coral"
              >
                {it.value}
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a href={`mailto:${SITE.email}`} className="btn-fika">
              Connect with us
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-12 w-12 place-items-center rounded-full border border-charcoal/20 transition-colors hover:bg-blush"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
