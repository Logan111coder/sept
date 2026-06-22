"use client";

import Reveal from "@/components/ui/Reveal";

const areas = [
  "Vancouver",
  "Burnaby",
  "Maple Ridge",
  "Coquitlam",
  "Surrey",
  "North Shore",
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Pinterest", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-14">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <h3 className="font-display text-5xl font-light tracking-tight3 text-paper sm:text-7xl">
                  Swept Away
                </h3>
                <p className="mt-5 max-w-xs text-pretty text-sm font-light leading-relaxed text-fog">
                  A premium cleaning studio. A new standard of clean — felt the
                  moment you walk in.
                </p>
              </div>

              <div className="md:col-span-3">
                <h4 className="mb-5 text-[11px] uppercase tracking-[0.2em] text-fog">
                  Contact
                </h4>
                <ul className="flex flex-col gap-2 text-sm font-light text-paper/80">
                  <li>hello@sweptaway.co</li>
                  <li>+1 (555) 014-2200</li>
                  <li>By appointment</li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="mb-5 text-[11px] uppercase tracking-[0.2em] text-fog">
                  Service areas
                </h4>
                <ul className="flex flex-col gap-2 text-sm font-light text-paper/80">
                  {areas.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="mb-5 text-[11px] uppercase tracking-[0.2em] text-fog">
                  Follow
                </h4>
                <ul className="flex flex-col gap-2 text-sm font-light text-paper/80">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="transition-colors duration-300 hover:text-champagne"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs font-light text-fog sm:flex-row sm:items-center">
              <span>© {new Date().getFullYear()} Swept Away. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-paper">
                  Privacy
                </a>
                <a href="#" className="hover:text-paper">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
