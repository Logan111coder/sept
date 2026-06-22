"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const lines = [
  { text: "Not just clean.", italic: false },
  { text: "Calm.", italic: true },
  { text: "Fresh.", italic: true },
  { text: "Effortless.", italic: true },
  {
    text: "The feeling of walking into a space that has been cared for.",
    italic: false,
    small: true,
  },
];

function StoryLine({ progress, index, total, line, reduce }) {
  const slot = 1 / total;
  const start = index * slot;
  const end = start + slot;
  const inMid = start + slot * 0.28;
  const outMid = end - slot * 0.28;

  const opacity = useTransform(
    progress,
    [start, inMid, outMid, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, end], [40, -40]);
  const blur = useTransform(
    progress,
    [start, inMid, outMid, end],
    ["12px", "0px", "0px", "12px"]
  );

  return (
    <motion.p
      style={
        reduce
          ? undefined
          : { opacity, y, filter: blur }
      }
      className={`absolute px-6 text-center font-display font-light tracking-tight3 text-paper ${
        line.small
          ? "max-w-4xl text-3xl leading-snug sm:text-5xl"
          : "text-6xl sm:text-8xl lg:text-[9rem]"
      } ${line.italic ? "italic" : ""}`}
    >
      {line.text}
    </motion.p>
  );
}

export default function ScrollStory() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reduce) {
    return (
      <section id="story" className="bg-ink px-6 py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          {lines.map((l) => (
            <p
              key={l.text}
              className={`font-display font-light tracking-tight3 text-paper ${
                l.small ? "text-3xl" : "text-5xl"
              } ${l.italic ? "italic" : ""}`}
            >
              {l.text}
            </p>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="story"
      ref={ref}
      className="relative bg-ink"
      style={{ height: `${lines.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        {/* sweep progress line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.04]">
          <motion.div
            style={{ scaleY: lineScale }}
            className="h-full w-full origin-top bg-gradient-to-b from-transparent via-champagne/40 to-transparent"
          />
        </div>

        {lines.map((line, i) => (
          <StoryLine
            key={line.text}
            progress={scrollYProgress}
            index={i}
            total={lines.length}
            line={line}
            reduce={reduce}
          />
        ))}
      </div>
    </section>
  );
}
