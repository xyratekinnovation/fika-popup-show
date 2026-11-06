import { Reveal } from "@/components/common/Reveal";
import { Pinwheel } from "@/components/common/Pinwheel";
import { ACHIEVEMENT_STATS, ACHIEVEMENT_HIGHLIGHTS } from "@/constants/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-ivory">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow flex items-center justify-center gap-3 text-coral">
              <Pinwheel /> Our Records
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-6xl">Achievements that define Fika.</h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {ACHIEVEMENT_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border border-charcoal/10 bg-blush/60 px-6 py-10 text-center">
                <p className="font-display text-5xl text-coral md:text-6xl">{stat.value}</p>
                <p className="eyebrow mt-4 text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENT_HIGHLIGHTS.map((item, i) => (
            <Reveal key={item} delay={0.05 * i}>
              <div className="border-b border-charcoal/10 py-4 text-center font-display text-xl md:text-2xl">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
