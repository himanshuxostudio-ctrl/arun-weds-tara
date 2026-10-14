# तारा संग अरुण — विवाह निमंत्रण (Tara weds Arun — Wedding Invitation)

A Hindi-only digital wedding invitation for **तारा संग अरुण · 21 नवंबर 2026**, built with
React, TypeScript and Vite. This is a faithful port of the design, illustrations, envelope
interaction, botanical artwork, soundtrack and animation system from the project's original
(English) reference site — reproduced here entirely in Hindi, with no language toggle.

Experience flow: embossed envelope with an A&amp;T wax seal → envelope opens with a warm light
bloom → illustrated cover → the date + countdown → श्री गणेशाय नमः invocation → family
invitation → the Seven Sacred Steps → celebrations timeline → venue → RSVP → blessings →
thank-you page.

## Getting started

```bash
npm install
npm run dev     # local dev server
npm run build   # production build to dist/
npm run preview # serve the production build locally
```

## Structure

- `src/flora.ts` — a small deterministic SVG generator for all the botanical artwork (embossed
  envelope roses, floral corners, gold flourishes, arches, the venue facade, timeline icons),
  ported from the reference project's `js/flora.js`.
- `src/useInvitationEngine.ts` — a React hook ported from the reference project's `js/main.js`:
  it paints the `[data-flora]` placeholders, drives the envelope-opening sequence, background
  music, scroll reveals (`[data-reveal]`), parallax (`[data-parallax]`) and the live countdown.
  It operates on the same ids/classes as the original markup so behaviour and timing match.
- `src/components/` — one component per invitation section (`Envelope`, `Cover`,
  `DateCountdown`, `Invocation`, `Welcome`, `FamilyCard`, `Story`, `Celebrations`, `Venue`,
  `RSVP`, `Blessings`, `Thanks`, `MusicButton`), assembled in `src/App.tsx`.
- `src/styles/invitation.css` — the ported stylesheet (originally `css/style.css`), including
  the Hindi-specific typography rules (`html[lang="hi"]`), which apply by default since
  `index.html` sets `<html lang="hi">` permanently.
- `src/assets/images/` — `proposal.webp`, `promise.webp`, `together.webp` (Vite-bundled).
- `src/assets/audio/divine-union.mp3` — the background wedding soundtrack.
- `public/images/couple.webp` and `public/fonts/Roffelia.otf` — served from a stable path so
  they can be preloaded from `index.html` (matching the original's preload hints).

## Fonts

- **Roffelia** (`public/fonts/Roffelia.otf`) — names and calligraphic headings; falls back to
  Tiro Devanagari Sanskrit for Devanagari glyphs it doesn't cover. This is the free
  *personal-use* edition bundled with the reference project; a commercial licence is available
  from ergibistudio.com.
- **Times New Roman** (Tinos as the metric-compatible web fallback) — dates, timings, phone
  numbers and the countdown.
- **Cormorant Garamond** — supporting body copy; **Tiro Devanagari Sanskrit** — the shloka and
  all Hindi body/heading text.

## Reviewing the envelope animation

Append `?slow=4` to the URL to play the opening sequence four times slower.

## Content

All visitor-facing text is Hindi, sourced from the reference project's approved translation
table (`js/i18n.js`'s `translations.hi`), with one deliberate addition: **Little Stars** lists
five names — माही, देवांश, तानी, दुग्गू एवं वाणी — rather than the reference's four.
