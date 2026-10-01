# Tara &amp; Arun — Wedding Invitation

A cinematic, single-page digital wedding invitation built with React, TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev     # local dev server
npm run build   # production build to dist/
```

## Structure

- `src/components/OpeningScreen.tsx` — the invitation-opening interaction (Ganesh invocation + envelope-style reveal) that gates the rest of the site and starts the background music on the opening gesture.
- `src/components/Hero.tsx` through `src/components/ThankYou.tsx` — the sections of the invitation, in the order they appear on the page (see `src/App.tsx`).
- `src/components/Botanical.tsx`, `GaneshMotif.tsx`, `VenueMotif.tsx` — the recurring fine-line decorative illustrations.
- `src/assets/images` — the three supplied couple illustrations (proposal, hand-kiss, seated portrait).
- `src/assets/audio` — the background wedding soundtrack.
