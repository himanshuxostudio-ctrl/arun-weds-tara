import Reveal from './Reveal'
import { SprigDivider } from './Botanical'

const names = [
  'Satpal Singh',
  'Tulsi Ram',
  'Amar Singh',
  'Prem Pal',
  'Chander Singh',
  'Anku Verma',
]

export default function FamilyBlessings() {
  return (
    <section
      id="family-blessings"
      aria-label="With Best Compliments From"
      className="relative bg-paper-wash px-6 py-20 sm:py-24"
    >
      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        <span className="font-serif text-sm font-semibold uppercase tracking-widest2 text-rose-deep">
          With Best Compliments From
        </span>

        <div className="mt-7 text-gold-deep/70">
          <SprigDivider />
        </div>

        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-serif text-xl text-charcoal-soft sm:text-2xl">
          {names.map((name, i) => (
            <li key={name} className="flex items-center gap-3">
              <span>{name}</span>
              {i < names.length - 1 && <span className="text-gold-deep/50" aria-hidden="true">·</span>}
            </li>
          ))}
        </ul>

        <p className="mt-5 font-display text-2xl font-semibold text-plum sm:text-3xl">
          &amp; Whole Verma Family
        </p>
      </Reveal>
    </section>
  )
}
