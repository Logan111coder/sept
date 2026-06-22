"use client";

import { useRef, useState, useCallback } from "react";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onUp = () => {
    dragging.current = false;
  };

  const onKey = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 3));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 3));
  };

  return (
    <section id="work" className="bg-ink px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-center gap-5 text-center">
          <Eyebrow>The difference</Eyebrow>
          <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight3 text-paper sm:text-6xl">
            Drag to see the transformation.
          </h2>
        </div>

        <Reveal>
          <div
            ref={containerRef}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerLeave={onUp}
            className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl"
          >
            {/* AFTER (base layer) — replace .ba-after background with a real image */}
            <div className="ba-after ph-light absolute inset-0">
              <span className="absolute bottom-6 right-6 rounded-full bg-ink/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-paper backdrop-blur-md">
                After
              </span>
            </div>

            {/* BEFORE (clipped overlay) — replace .ba-before background with a real image */}
            <div
              className="ba-before ph absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <div className="absolute inset-0 bg-ink/20" />
              <span className="absolute bottom-6 left-6 rounded-full bg-ink/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-paper backdrop-blur-md">
                Before
              </span>
            </div>

            {/* Handle */}
            <div
              className="absolute top-0 z-10 h-full w-px bg-champagne/80 shadow-[0_0_24px_rgba(187,163,126,0.6)]"
              style={{ left: `${pos}%` }}
            >
              <button
                type="button"
                aria-label="Drag to compare before and after"
                aria-valuenow={Math.round(pos)}
                aria-valuemin={0}
                aria-valuemax={100}
                role="slider"
                onKeyDown={onKey}
                className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-champagne/70 bg-ink/40 text-paper backdrop-blur-md transition-transform duration-300 hover:scale-105"
              >
                <span className="text-xs tracking-tight">‹ ›</span>
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-md text-center text-sm font-light leading-relaxed text-fog">
            Real results, not staged ones. The same room, the same light — only
            the standard has changed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
