import { Reveal, ImageReveal } from "@/components/common/Reveal";
import { SITE } from "@/config/site-config";
import about from "@/assets/images/about.jpg";

export function About() {
  return (
    <section id="about" className="section-pad bg-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:px-10">
        <ImageReveal className="md:col-span-6 lg:col-span-5">
          <img
            src={about}
            alt="Brand founders chatting at a curated Fika stall"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full object-cover"
          />
        </ImageReveal>
        <div className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="eyebrow text-coral">About Fika</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
              {SITE.brand}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{SITE.tagline}</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{SITE.fikaMeaning}</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{SITE.communityLine}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
