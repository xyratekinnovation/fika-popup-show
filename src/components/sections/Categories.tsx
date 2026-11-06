import { Reveal } from "@/components/common/Reveal";
import { Pinwheel } from "@/components/common/Pinwheel";
import { CATEGORIES } from "@/constants/categories";
import { SITE } from "@/config/site-config";

export function Categories() {
  return (
    <section className="section-pad-tight-t bg-blush">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">Explore Fika</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-4xl md:text-6xl">A little something for everyone.</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-xl text-sm uppercase tracking-[0.16em] text-muted-foreground">
                {SITE.categoriesLine}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Pinwheel />
          </Reveal>
        </div>
      </div>
      <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-auto md:grid md:max-w-7xl md:grid-cols-3 md:gap-8 md:overflow-visible md:px-10 lg:grid-cols-6 lg:gap-5">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.08} className="w-[68vw] shrink-0 snap-start sm:w-[42vw] md:w-auto">
            <figure className="group">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.t}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline gap-3">
                <span className="text-xs text-coral">0{i + 1}</span>
                <span className="font-display text-xl leading-tight">{c.t}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
