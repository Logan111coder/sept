# Swept Away — Premium Cleaning Studio Website

A cinematic, luxury-brand site built with **Next.js (App Router) · React · Tailwind CSS · Framer Motion · Lenis** (smooth scroll). Monochrome ink/paper palette with a single champagne hairline accent, a light optical serif (Fraunces) for the cinematic statements, and a precise sans (Inter) for everything functional.

Sections: cinematic hero → Apple-style pinned scroll story → parallax cleaning visuals → before/after slider → services → "every detail" dark section → reviews → quote form → footer. Fully responsive and respects `prefers-reduced-motion`.

---

## File structure

```
swept-away/
├── app/
│   ├── globals.css        # Tailwind layers, grain, placeholder gradients
│   ├── layout.jsx         # Fonts (Fraunces + Inter), metadata, smooth-scroll wrapper
│   └── page.jsx           # Composes all sections
├── components/
│   ├── Nav.jsx            # Fixed nav, scroll blur, mobile overlay
│   ├── Hero.jsx           # Full-screen hero, parallax, video-ready
│   ├── ScrollStory.jsx    # Pinned Apple-style line-by-line reveal
│   ├── MovingVisuals.jsx  # Parallax editorial image grid
│   ├── BeforeAfter.jsx    # Draggable before/after slider
│   ├── Services.jsx       # Scroll-revealed service rows
│   ├── DetailSection.jsx  # Dark "Every detail matters" section
│   ├── Reviews.jsx        # Glass testimonial cards
│   ├── QuoteForm.jsx      # Quote request form + success state
│   ├── Footer.jsx         # Minimal footer
│   ├── SmoothScroll.jsx   # Lenis provider (off under reduced motion)
│   └── ui/
│       ├── Reveal.jsx     # Fade/slide-on-view primitive
│       ├── Eyebrow.jsx    # Tracked label primitive
│       └── Button.jsx     # Minimal pill button
├── public/
│   └── media/             # Drop hero.mp4 + photos here (see media/README.md)
├── jsconfig.json          # @/ path alias
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
├── package.json
└── .gitignore
```

---

## Run it in Cursor (step by step)

1. **Open the folder.** In Cursor: `File → Open Folder…` and select `swept-away`.
2. **Open the terminal.** `Ctrl + `` (backtick) or `Terminal → New Terminal`.
3. **Install dependencies** (needs Node.js 18.18+ — check with `node -v`):
   ```bash
   npm install
   ```
4. **Start the dev server:**
   ```bash
   npm run dev
   ```
5. Open **http://localhost:3000** in your browser. Edits hot-reload instantly.

> The first load fetches the Google Fonts (Fraunces + Inter) at build time, so keep internet on for `npm install` / first run.

---

## Add your real media

Everything runs with elegant gradient placeholders out of the box — nothing is broken if you add nothing. To go live with real assets, see **`public/media/README.md`**. Short version:
- Add `public/media/hero.mp4` → it auto-fades into the hero.
- Add before/after photos and the tile photos per the instructions in that file.

---

## Deploy to Vercel (step by step)

**Option A — GitHub (recommended):**
1. Create a new repo on GitHub and push this project:
   ```bash
   git init
   git add .
   git commit -m "Swept Away site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/swept-away.git
   git push -u origin main
   ```
2. Go to **vercel.com → Add New → Project**, import the repo.
3. Vercel auto-detects Next.js. Leave defaults (Build: `next build`, Output: `.next`). Click **Deploy**.
4. You get a live `*.vercel.app` URL in ~1 minute. Add a custom domain under **Settings → Domains**.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel        # follow prompts (first deploy = preview)
vercel --prod # promote to production
```

---

## Wiring up the quote form

The form currently validates and shows a success state client-side (it logs to the console). To actually receive submissions, pick one:

- **Formspree / Web3Forms (no backend):** set the form `action` to your endpoint, or `fetch()` it inside `handleSubmit` in `components/QuoteForm.jsx`.
- **Next.js API route:** create `app/api/quote/route.js` with a `POST` handler that emails you (e.g. via Resend/Nodemailer), then `fetch('/api/quote', { method: 'POST', body: JSON.stringify(form) })` in `handleSubmit`.

---

## Customizing the look

- **Colors:** `tailwind.config.js` → `theme.extend.colors` (`ink`, `paper`, `fog`, `champagne`, …). Change `champagne` to retune the one accent.
- **Fonts:** `app/layout.jsx` — swap `Fraunces` / `Inter` for other `next/font/google` faces.
- **Copy:** all section text lives at the top of each component as plain arrays/strings.
- **Motion feel:** tune Lenis in `components/SmoothScroll.jsx` (`lerp`, `duration`) and the easing `[0.22, 1, 0.36, 1]` used throughout.

Built to feel like a brand, not a template. Make it yours.
