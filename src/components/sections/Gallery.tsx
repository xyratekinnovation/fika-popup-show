import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { GALLERY } from "@/constants/gallery";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <section id="gallery" className="bg-blush py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <Reveal><p className="eyebrow">The Fika moments</p></Reveal>
          <Reveal delay={0.1}><h2 className="mx-auto mt-4 max-w-3xl text-4xl md:text-6xl">Little Moments. <em>Beautiful Discoveries.</em></h2></Reveal>
        </div>
        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {GALLERY.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.08} className={`${g.cls} h-full`} y={24}>
              <button onClick={() => setActive(i)} className="group block h-full w-full overflow-hidden" aria-label={`Open image: ${g.alt}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-charcoal/90 p-5"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <button className="absolute right-5 top-5 text-on-dark" aria-label="Close"><X className="h-7 w-7" /></button>
            <motion.img
              key={active}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={GALLERY[active]?.src}
              alt={GALLERY[active]?.alt}
              className="max-h-[85vh] max-w-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
