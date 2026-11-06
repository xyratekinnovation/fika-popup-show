import { Reveal, ImageReveal } from "@/components/common/Reveal";
import { EDITIONS } from "@/constants/editions";
import { SITE } from "@/config/site-config";

export function Editions() {
  return (
    <section id="journey" className="section-pad bg-blush">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-5xl">
          <Reveal>
            <p className="eyebrow text-coral">A revisit to our 8 shows</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[clamp(1.25rem,2.4vw,1.85rem)] leading-snug tracking-tight md:whitespace-nowrap">
              Eight editions. Countless memories. One growing community.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 space-y-12 md:mt-12 md:space-y-16">
          {EDITIONS.map((edition, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={edition.number}
                className={`grid items-center gap-8 md:grid-cols-12 md:gap-12 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <ImageReveal className="md:col-span-5">
                  <img
                    src={edition.image}
                    alt={edition.imageAlt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </ImageReveal>
                <Reveal className="md:col-span-7" delay={0.1}>
                  <p className="eyebrow text-coral">Edition {edition.number}</p>
                  <h3 className="mt-3 font-display text-3xl md:text-5xl">{edition.title}</h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">{edition.date}</p>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {edition.description}
                  </p>
                </Reveal>
              </article>
            );
          })}
        </div>

        <Reveal className="mt-12 border border-charcoal/15 bg-ivory px-6 py-8 md:mt-14 md:px-12 md:py-12">
          <p className="eyebrow text-coral">Featured edition</p>
          <h3 className="mt-4 text-3xl md:text-5xl">{SITE.eventName}</h3>
          <p className="mt-4 text-lg text-muted-foreground">
            {SITE.eventDate} · {SITE.venue}, {SITE.city}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.16em] text-muted-foreground">{SITE.categoriesLine}</p>
          <p className="mt-4 text-sm text-muted-foreground">An Event by {SITE.eventBy}.</p>
        </Reveal>
      </div>
    </section>
  );
}
