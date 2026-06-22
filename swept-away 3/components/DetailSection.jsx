"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const points = ["Corners", "Surfaces", "Floors", "Glass", "Finishing touches"];

export default function DetailSection() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 0.96]);
  const letter = useTransform(scrollYProgress, [0, 1], ["-0.02em", "0.02em"]);

  return (
    <section
      ref={ref}
      className="relative grain flex min-h-[100svh] items-center overflow-hidden bg-carbon px-6 py-32 lg:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(187,163,126,0.08),transparent_70%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.span
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8 text-[11px] font-medium uppercase tracking-eyebrow text-fog"
        >
          The standard
        </motion.span>

        <motion.h2
          style={reduce ? undefined : { scale, letterSpacing: letter }}
          className="font-display text-5xl font-light leading-[0.95] tracking-tight3 text-paper sm:text-8xl lg:text-[10rem]"
        >
          Every detail
          <br />
          <span className="italic text-champagne/90">matters.</span>
        </motion.h2>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {points.map((p, i) => (
            <motion.span
              key={p}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{
                duration: 0.9,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3 text-sm font-light tracking-tight text-paper/75"
            >
              <span className="h-1 w-1 rounded-full bg-champagne" />
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
