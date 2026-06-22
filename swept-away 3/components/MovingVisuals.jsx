"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";

const tiles = [
  {
    caption: "Sparkling surfaces",
    ph: "ph",
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/5] md:aspect-auto",
    speed: 55,
  },
  {
    caption: "Folded towels",
    ph: "ph-warm",
    span: "md:col-span-5",
    aspect: "aspect-[5/4]",
    speed: -38,
  },
  {
    caption: "Clean kitchen counters",
    ph: "ph",
    span: "md:col-span-5",
    aspect: "aspect-[5/4]",
    speed: 30,
  },
  {
    caption: "Fresh living room",
    ph: "ph-light",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    speed: -48,
    light: true,
  },
  {
    caption: "Glass reflections",
    ph: "ph",
    span: "md:col-span-12",
    aspect: "aspect-[16/7]",
    speed: 32,
  },
];

function Tile({ tile, progress, reduce }) {
  const y = useTransform(progress, [0, 1], [tile.speed, -tile.speed]);

  return (
    <div
      className={`relative ${tile.span} ${tile.aspect} min-h-[260px] overflow-hidden rounded-2xl md:h-full`}
    >
      {/* Oversized layer so parallax translation never reveals the edges */}
      <motion.div
        style={{ y: reduce ? 0 : y }}
        className="absolute inset-x-0 -inset-y-[18%]"
      >
        <div className={`grain ${tile.ph} h-full w-full`} />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      <span
        className={`absolute bottom-5 left-5 text-[11px] font-medium uppercase tracking-[0.22em] ${
          tile.light ? "text-ink/70" : "text-paper/85"
        }`}
      >
        {tile.caption}
      </span>
    </div>
  );
}

export default function MovingVisuals() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="bg-ink px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5">
            <Eyebrow>The craft</Eyebrow>
            <h2 className="max-w-xl font-display text-4xl font-light leading-tight tracking-tight3 text-paper sm:text-6xl">
              Cleaning as a discipline, not a chore.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm font-light leading-relaxed text-fog">
            Every room is a composition of light, texture, and order. We treat
            each surface as something to be finished, not simply wiped.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {tiles.map((tile) => (
            <Tile
              key={tile.caption}
              tile={tile}
              progress={scrollYProgress}
              reduce={reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
