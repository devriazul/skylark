# skylark

Concept redesign of [skylarkglobaledu.com](https://skylarkglobaledu.com) for **Skylark Global** (study abroad & immigration consultancy, Mirpur DOHS, Dhaka), prepared by **Dev riazul** as a client demo.

**Live demo:** https://devriazul.github.io/skylark/

## What it shows
- Modern glassmorphism UI in Skylark's logo colours (teal `#047C8D`, charcoal `#231F20`)
- Scroll-triggered animations, animated counters, parallax hero, logo marquee
- English / Bangla language toggle
- Interactive 2-minute eligibility check that sends answers to a counsellor on WhatsApp
- Searchable partner-university list, gallery lightbox, contact form → WhatsApp
- Fully static, mobile-first, `noindex` (it is a demo, so it never competes with the real site in Google)

Content and photos come from the current public website. Passport/visa document images were deliberately left out.

## Stack
Next.js 16 (static export) · React 19 · Tailwind CSS 4 · Framer Motion · Lucide icons · GitHub Pages

## Run locally
```bash
npm install
NEXT_PUBLIC_BASE_PATH= npm run dev   # http://localhost:3000
```

## Deploy to GitHub Pages
```bash
npm run deploy   # builds to ./out and publishes it to the gh-pages branch
```
Add `?qa` to any URL to render all animations in their final state (handy for screenshots).
