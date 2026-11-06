import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Pinwheel } from "@/components/common/Pinwheel";
import { useParallax } from "@/hooks/use-parallax";
import { SITE } from "@/config/site-config";
import arch from "@/assets/images/gallery-arch.jpg";

export function Book() {
  const { ref, y } = useParallax(50);
  return (
    <section id="book" ref={ref} className="section-pad relative overflow-hidden bg-charcoal text-on-dark">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-[1.2fr_1fr] md:px-10">
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-blush">
              <Pinwheel /> Join the Fika community
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
              Your Brand Deserves to Be <em className="text-blush">Seen.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-80">
              Have a brand to showcase? Want to collaborate with Fika? Bring your brand to life at Fika Pop-Up Show —
              connect with new customers, showcase your products and become part of a thoughtfully curated lifestyle
              experience.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href={SITE.bookStallFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fika-blush mt-11"
            >
              Book your stall now <ArrowRight className="h-5 w-5" />
            </a>
          </Reveal>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-t-full border border-blush/30" aria-hidden />
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
            <motion.img
              style={{ y }}
              src={arch}
              alt="Floral Fika entrance"
              loading="lazy"
              width={768}
              height={1024}
              className="absolute inset-0 h-[120%] w-full -translate-y-[8%] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
