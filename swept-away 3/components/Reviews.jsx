"use client";

import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";

const reviews = [
  {
    quote:
      "I have never seen my kitchen look like this — not even the day we moved in.",
    name: "Marisol R.",
    role: "Homeowner",
  },
  {
    quote:
      "They turned my rental between guests in under three hours. The five-star reviews followed on their own.",
    name: "Daniel K.",
    role: "Airbnb Host",
  },
  {
    quote:
      "Our office feels different on Monday mornings now. Calmer. Sharper. People notice.",
    name: "Priya S.",
    role: "Studio Director",
  },
  {
    quote:
      "It is the small things — the corners, the glass. You can tell they actually noticed.",
    name: "Lena M.",
    role: "Homeowner",
  },
  {
    quote:
      "The move-out clean got my full deposit back. Easily worth every dollar.",
    name: "Aaron T.",
    role: "Tenant",
  },
  {
    quote:
      "Effortless to book, immaculate result. This is what the word premium should mean.",
    name: "James P.",
    role: "Property Manager",
  },
];

function Card({ review, index, reduce }) {
  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 1,
        delay: (index % 3) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-champagne/30"
    >
      <span className="font-display text-5xl leading-none text-champagne/60">
        &ldquo;
      </span>
      <blockquote className="mt-4 flex-1 text-pretty font-display text-xl font-light italic leading-relaxed text-paper/90">
        {review.quote}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-medium text-paper/80">
          {review.name.charAt(0)}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-medium tracking-tight text-paper">
            {review.name}
          </span>
          <span className="text-xs font-light text-fog">{review.role}</span>
        </span>
      </figcaption>
    </motion.figure>
  );
}

export default function Reviews() {
  const reduce = useReducedMotion();

  return (
    <section id="reviews" className="bg-ink px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center gap-5 text-center">
          <Eyebrow>In their words</Eyebrow>
          <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight3 text-paper sm:text-6xl">
            Quietly, completely impressed.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Card key={review.name} review={review} index={i} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}
