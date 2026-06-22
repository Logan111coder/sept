"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-luxe ${
          scrolled
            ? "bg-ink/55 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#top"
            className="font-display text-lg font-light tracking-tight2 text-paper"
          >
            Swept Away
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-light tracking-tight text-paper/70 transition-colors duration-300 hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#quote"
              className="hidden rounded-full bg-paper px-5 py-2.5 text-[13px] font-medium tracking-tight text-ink transition-all duration-500 ease-luxe hover:bg-white sm:inline-block"
            >
              Request a Quote
            </a>

            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            >
              <span className="h-px w-5 bg-paper" />
              <span className="h-px w-5 bg-paper" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg font-light tracking-tight2 text-paper">
                Swept Away
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-2xl font-light text-paper"
              >
                ×
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 * i,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-5xl font-light tracking-tight3 text-paper"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="mt-10 inline-flex w-fit rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink"
              >
                Request a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
