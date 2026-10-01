import Reveal from './Reveal'

const stars = ['Mahi', 'Devansh', 'Duggu', 'Vani']

function StarMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-gold-deep/70" fill="currentColor" aria-hidden="true">
      <path d="M12 0 L14.2 9.2 L23.4 11.4 L14.2 13.6 L12 22.8 L9.8 13.6 L0.6 11.4 L9.8 9.2 Z" />
    </svg>
  )
}

export default function LittleStars() {
  return (
    <section
      id="little-stars"
      aria-label="Little Stars"
      className="relative bg-blush-soft/50 px-6 py-16 sm:py-20"
    >
      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        <span className="font-serif text-sm font-semibold uppercase tracking-widest2 text-rose-deep">
          Little Stars
        </span>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-display text-2xl font-medium text-charcoal sm:text-3xl">
          {stars.map((name, i) => (
            <li key={name} className="flex items-center gap-5">
              <span>{name}</span>
              {i < stars.length - 1 && <StarMark />}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
