import { useRef } from "react";
import { useScroll, useTransform, useReducedMotion } from "motion/react";

export function useParallax(range = 80) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-range, range]);
  return { ref, y };
}
