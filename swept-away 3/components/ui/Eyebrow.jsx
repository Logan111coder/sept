"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Eyebrow({ children, dark = false }) {
  const reduce = useReducedMotion();
  const line = dark ? "bg-ink/20" : "bg-champagne/50";
  const text = dark ? "text-ink/50" : "text-fog";

  return (
    <motion.div
      className="flex items-center gap-4"
      initial={reduce ? false : { opacity: 0 }}
      whileInView={reduce ? {} : { opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={`h-px w-8 ${line}`} />
      <span
        className={`text-[11px] font-medium uppercase tracking-eyebrow ${text}`}
      >
        {children}
      </span>
    </motion.div>
  );
}
