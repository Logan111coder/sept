# Media placeholders

Drop your real assets in this folder and the site will use them automatically.
Until you do, the site shows tasteful gradient placeholders (no broken images).

## Hero background video
Add a file named exactly:

    hero.mp4

(1080p or 4K, ~10–20s loop, muted, no audio needed). It will fade in over the
gradient automatically. You can also add a `hero.webm` source if you want — add
a second `<source>` in `components/Hero.jsx`.

## Before / After images
Add two images here, e.g. `before.jpg` and `after.jpg`, then in
`components/BeforeAfter.jsx` add an inline style to each panel:

    <div className="ba-after ph-light absolute inset-0"
         style={{ backgroundImage: "url(/media/after.jpg)" }}>

    <div className="ba-before ph absolute inset-0"
         style={{ backgroundImage: "url(/media/before.jpg)", clipPath: ... }}>

## Moving visuals tiles
In `components/MovingVisuals.jsx`, each tile renders a `<div className="ph ...">`.
To use a photo, give that div an inline `style={{ backgroundImage: "url(/media/your-photo.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}`
and remove the `ph` placeholder class.

Recommended: 16:9 or 4:5 photos, dark/moody and well-lit, ~2000px wide,
compressed (WebP/AVIF or optimized JPG) for fast loads.
