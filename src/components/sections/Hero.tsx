import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Pinwheel } from "@/components/common/Pinwheel";
import { SITE } from "@/config/site-config";
import hero from "@/assets/images/hero.jpg";

export function Hero() {
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const y = useTransform(scrollY, [0, 800], reduce ? [0, 0] : [0, 120]);
  return (
    <section id="home" className="relative overflow-hidden bg-blush pt-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 pb-12 pt-7 md:grid md:grid-cols-[1.05fr_1fr] md:items-center md:gap-12 md:px-10 md:pb-16 md:pt-14">
        <div className="contents md:relative md:z-10 md:flex md:flex-col">
          <div className="order-1 md:order-none">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <Pinwheel /> {SITE.established}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-3 text-[2.15rem] leading-[1.08] tracking-tight sm:mt-4 sm:text-5xl sm:leading-[1.02] md:mt-6 md:text-6xl md:leading-[1.02] md:tracking-normal lg:text-[5.4rem]">
                Fika Pop-Up Show
              </h1>
            </Reveal>
          </div>

          <div className="order-3 md:order-none">
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground md:mt-7 md:text-lg">
                {SITE.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-6 max-w-lg border-y border-charcoal/15 py-4 md:mt-9 md:py-5">
                <p className="text-sm font-medium leading-snug text-charcoal md:text-base">
                  Featured Edition — {SITE.eventEdition}
                </p>
                <dl className="mt-3 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0 text-coral" />
                    <dd>{SITE.eventDate}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-coral" />
                    <dd>{SITE.venue}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-teal" />
                    <dd>{SITE.city}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {SITE.categoriesLine}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">An Event by {SITE.eventBy}.</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <a href="#journey" className="btn-fika mt-7 md:mt-9">
                Explore our journey <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="hero-curve order-2 relative aspect-[4/3] w-full overflow-hidden shadow-soft md:order-none md:aspect-[4/5]"
        >
          <motion.img
            style={{ y }}
            src={hero}
            alt="Guests browsing curated stalls at a Fika Pop-Up Show"
            width={1280}
            height={1600}
            className="absolute inset-0 h-full w-full object-cover object-[center_28%] md:h-[115%] md:-translate-y-[6%] md:object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
