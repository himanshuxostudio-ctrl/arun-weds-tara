import Reveal from './Reveal'
import VenueMotif from './VenueMotif'
import { SprigDivider } from './Botanical'

const VENUE_NAME = 'The Grand Nimantran'
const ADDRESS_LINES = ['NH 7, Near Guru Nanak Service Station', 'Dhakoli, Zirakpur, Punjab – 160104']
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${VENUE_NAME}, ${ADDRESS_LINES.join(', ')}`,
)}`

export default function Venue() {
  return (
    <section
      id="venue"
      aria-label="Wedding Venue"
      className="relative bg-paper-wash px-6 py-24 sm:py-28"
    >
      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        <span className="font-serif text-sm font-semibold uppercase tracking-widest2 text-rose-deep">
          The Wedding
        </span>

        <VenueMotif className="mt-6 h-28 w-52 text-gold-deep/80 sm:h-32 sm:w-60" />

        <h2 className="mt-6 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
          {VENUE_NAME}
        </h2>

        <SprigDivider className="my-6 text-gold-deep" />

        <p className="font-serif text-xl leading-relaxed text-charcoal-soft sm:text-2xl">
          {ADDRESS_LINES.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <p className="mt-5 font-serif text-xl font-medium tracking-wide text-plum sm:text-2xl">
          Saturday, 21 November 2026
        </p>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring group mt-9 inline-flex items-center gap-3 border border-plum/70 px-8 py-3 font-serif text-base uppercase tracking-widest2 text-plum transition-colors duration-500 hover:bg-plum hover:text-ivory-paper sm:px-10 sm:py-4 sm:text-lg"
        >
          <span>View Location</span>
          <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">
            ↗
          </span>
        </a>
      </Reveal>
    </section>
  )
}
