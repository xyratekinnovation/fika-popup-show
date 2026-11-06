import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { useParallax } from "@/hooks/use-parallax";
import { SITE } from "@/config/site-config";
import experience from "@/assets/images/experience.jpg";

export function Experience() {
  const { ref, y } = useParallax(90);
  return (
    <section id="experience" ref={ref} className="relative isolate flex min-h-[62vh] items-center overflow-hidden md:min-h-[70vh]">
      <motion.img
        style={{ y }}
        src={experience}
        alt="Fika evening market with festoon lights and food counters"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-[125%] w-full -translate-y-[10%] object-cover"
      />
      <div className="overlay-dark absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 text-on-dark md:px-10 md:py-20">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow text-butter">{SITE.eventEdition}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-5xl leading-[1.02] md:text-7xl">
              Shopping, food, music and a whole lot of <em>fun and frolic.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg leading-relaxed opacity-85">
              {SITE.eventDate} at {SITE.venue}, {SITE.city}. An Event by {SITE.eventBy}.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a href="#sponsors" className="btn-fika-outline mt-9">
              Explore our partners <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
