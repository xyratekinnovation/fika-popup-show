import { Reveal } from "@/components/common/Reveal";
import { VISION, MISSION } from "@/config/site-config";

const CARDS = [
  {
    number: "01",
    label: VISION.title,
    heading: "More than a shopping destination.",
    paragraphs: VISION.paragraphs,
  },
  {
    number: "02",
    label: MISSION.title,
    heading: "Curated platforms for communities.",
    paragraphs: MISSION.paragraphs,
  },
] as const;

export function VisionMission() {
  return (
    <section id="vision" className="section-pad-tight-b bg-blush">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:gap-8 md:px-10">
        {CARDS.map((card, i) => (
          <Reveal key={card.number} delay={i * 0.1} className="h-full">
            <article className="group flex h-full flex-col border border-charcoal/10 bg-white p-8 transition-transform duration-500 ease-out hover:-translate-y-1 md:p-10 lg:p-12">
              <div className="flex items-start justify-between gap-4">
                <p className="eyebrow text-coral">{card.label}</p>
                <span className="font-display text-3xl leading-none text-charcoal/15 md:text-4xl">
                  {card.number}
                </span>
              </div>
              <h2 className="mt-6 text-3xl leading-tight md:text-4xl lg:text-[2.65rem]">
                {card.heading}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:mt-10 md:text-lg">
                {card.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
