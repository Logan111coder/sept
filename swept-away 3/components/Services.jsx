"use client";

import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";

const services = [
  {
    title: "Residential Cleaning",
    tag: "Recurring",
    desc: "Quiet, consistent care for the homes you actually live in — weekly, biweekly, or whenever life calls for a reset.",
  },
  {
    title: "Deep Cleaning",
    tag: "Full reset",
    desc: "Top to bottom, edge to edge. The details a routine clean glides past, brought back to a like-new finish.",
  },
  {
    title: "Move-Out Cleaning",
    tag: "Transition",
    desc: "Leave a space immaculate. Protect the deposit, keep the goodwill, and hand over keys without a second thought.",
  },
  {
    title: "Commercial Cleaning",
    tag: "Workspaces",
    desc: "Offices, studios, and storefronts that feel as sharp as the work happening inside them. After hours, on schedule.",
  },
  {
    title: "Airbnb / Rental Turnovers",
    tag: "Hospitality",
    desc: "Hotel-grade resets between every guest — staged, stocked, and photo-ready, so reviews take care of themselves.",
  },
];

function ServiceRow({ service, index, reduce }) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration: 1,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group grid grid-cols-1 items-center gap-3 border-t border-white/10 py-9 transition-colors duration-500 hover:border-champagne/40 md:grid-cols-12 md:gap-8 md:py-12"
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-champagne/70 md:col-span-2">
        {service.tag}
      </span>

      <h3 className="font-display text-3xl font-light tracking-tight3 text-paper transition-transform duration-500 ease-luxe group-hover:translate-x-2 md:col-span-5 md:text-5xl">
        {service.title}
      </h3>

      <p className="max-w-md text-pretty text-sm font-light leading-relaxed text-fog md:col-span-4">
        {service.desc}
      </p>

      <span className="hidden text-paper/40 transition-all duration-500 ease-luxe group-hover:translate-x-1 group-hover:text-paper md:col-span-1 md:block md:text-right">
        →
      </span>
    </motion.div>
  );
}

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="bg-ink px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-5">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight3 text-paper sm:text-6xl">
            Five ways to be swept away.
          </h2>
        </div>

        <div className="border-b border-white/10">
          {services.map((service, i) => (
            <ServiceRow
              key={service.title}
              service={service}
              index={i}
              reduce={reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
