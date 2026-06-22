"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";

const serviceOptions = [
  "Residential Cleaning",
  "Deep Cleaning",
  "Move-Out Cleaning",
  "Commercial Cleaning",
  "Airbnb / Rental Turnovers",
  "Not sure yet",
];

const fieldClass =
  "w-full border-b border-white/15 bg-transparent py-3 text-paper placeholder:text-fog/60 transition-colors duration-300 focus:border-champagne focus:outline-none";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet — see README for wiring this to email/Formspree/an API route.
    console.log("Quote request:", form);
    setSubmitted(true);
  };

  return (
    <section id="quote" className="bg-ink px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-6">
          <Eyebrow>Begin</Eyebrow>
          <h2 className="font-display text-4xl font-light leading-tight tracking-tight3 text-paper sm:text-6xl">
            Request a quote.
          </h2>
          <p className="max-w-sm text-pretty text-sm font-light leading-relaxed text-fog">
            Tell us about your space. We will reply within one business day with
            a tailored quote — no pressure, no scripts.
          </p>

          <div className="mt-6 flex flex-col gap-1 text-sm font-light text-fog">
            <span>hello@sweptaway.co</span>
            <span>+1 (555) 014-2200</span>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full min-h-[300px] flex-col items-start justify-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/50 text-champagne">
                  ✓
                </span>
                <h3 className="font-display text-3xl font-light tracking-tight3 text-paper">
                  Thank you, {form.name.split(" ")[0] || "there"}.
                </h3>
                <p className="max-w-sm text-sm font-light leading-relaxed text-fog">
                  Your request is in. We will be in touch within one business
                  day to arrange the details.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col gap-7"
              >
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-fog">
                      Name
                    </span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Jane Doe"
                      className={fieldClass}
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-fog">
                      Phone
                    </span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="(555) 000-0000"
                      className={fieldClass}
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-fog">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@email.com"
                    className={fieldClass}
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-fog">
                    Service needed
                  </span>
                  <select
                    required
                    value={form.service}
                    onChange={update("service")}
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="" disabled className="bg-carbon text-fog">
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-carbon text-paper">
                        {s}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-fog">
                    Message
                  </span>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your space…"
                    className={`${fieldClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-paper px-8 py-4 text-[13px] font-medium tracking-tight text-ink transition-all duration-500 ease-luxe hover:bg-white hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.5)]"
                >
                  Send request
                  <span className="inline-block transition-transform duration-500 ease-luxe group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
