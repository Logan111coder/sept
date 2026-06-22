"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const ease = [0.22, 1, 0.36, 1];

  return (
    <section
      id="top"
      ref={ref}
      className="relative grain h-[100svh] w-full overflow-hidden"
    >
      {/* Background media — drop /public/media/hero.mp4 to replace the gradient */}
      <motion.div
        style={{ scale: reduce ? 1 : scale }}
        className="absolute inset-0"
      >
        <div className="ph-warm absolute inset-0" />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000 data-[ready=true]:opacity-100"
          autoPlay
          muted
          loop
          playsInline
          poster=""
          onLoadedData={(e) => e.currentTarget.setAttribute("data-ready", "true")}
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        {/* Cinematic grading */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/90" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_30%,rgba(10,10,11,0.55)_100%)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: reduce ? 0 : y, opacity: reduce ? 1 : opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="mb-8 text-[11px] font-medium uppercase tracking-eyebrow text-paper/60"
        >
          Cleaning, considered
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 0.55, ease }}
          className="font-display text-[16vw] font-light leading-[0.92] tracking-tight3 text-paper sm:text-[12vw] lg:text-[9.5rem]"
        >
          Swept Away
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.05, ease }}
          className="mt-6 font-display text-xl font-light italic tracking-tight text-paper/80 sm:text-2xl"
        >
          A New Standard of Clean
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.4, ease }}
          className="mt-12"
        >
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 text-[13px] font-medium tracking-tight text-ink transition-all duration-500 ease-luxe hover:bg-white hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.45)]"
          >
            Request a Quote
            <span className="inline-block transition-transform duration-500 ease-luxe group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-paper/25 p-1.5">
          <motion.span
            animate={reduce ? {} : { y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-paper/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
