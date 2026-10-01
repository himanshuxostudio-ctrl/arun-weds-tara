import Reveal from './Reveal'
import { CornerFlourish, SprigDivider } from './Botanical'

export default function FamilyInvitation() {
  return (
    <section
      id="family-invitation"
      aria-label="Wedding Invitation"
      className="relative bg-plum px-6 py-24 text-ivory-paper sm:py-28"
    >
      <Reveal className="relative mx-auto max-w-2xl border border-ivory-paper/25 px-6 py-14 text-center sm:px-14 sm:py-16">
        <CornerFlourish className="absolute left-3 top-3 h-14 w-14 text-gold-soft/80 sm:left-5 sm:top-5 sm:h-20 sm:w-20" />
        <CornerFlourish className="absolute right-3 top-3 h-14 w-14 rotate-90 text-gold-soft/80 sm:right-5 sm:top-5 sm:h-20 sm:w-20" flip />
        <CornerFlourish className="absolute bottom-3 left-3 h-14 w-14 rotate-[-90deg] text-gold-soft/80 sm:bottom-5 sm:left-5 sm:h-20 sm:w-20" flip />
        <CornerFlourish className="absolute bottom-3 right-3 h-14 w-14 rotate-180 text-gold-soft/80 sm:bottom-5 sm:right-5 sm:h-20 sm:w-20" />

        <p className="font-display text-2xl font-semibold text-ivory-paper sm:text-3xl">
          Mrs. Sunita &amp; Mr. Ravi Singh
        </p>
        <p className="mt-5 max-w-md mx-auto font-serif text-xl leading-relaxed text-blush-soft/90 sm:text-2xl">
          request the pleasure of your gracious presence at the auspicious occasion of the
          wedding ceremony of their daughter
        </p>

        <div className="my-9 text-gold-soft/80">
          <SprigDivider />
        </div>

        <div className="font-display leading-[1.05]">
          <span className="block text-6xl font-semibold sm:text-7xl">Tara</span>
          <span className="my-2 block font-script text-4xl font-normal text-blush-soft sm:text-5xl">
            weds
          </span>
          <span className="block text-6xl font-semibold sm:text-7xl">Arun</span>
        </div>

        <div className="my-9 text-gold-soft/80">
          <SprigDivider />
        </div>

        <p className="font-serif text-lg uppercase tracking-widest2 text-blush-soft/90 sm:text-xl">
          Son of
        </p>
        <p className="mt-3 font-display text-2xl font-semibold text-ivory-paper sm:text-3xl">
          Mrs. Sushma &amp; Late Sh. Prithvi Singh
        </p>
      </Reveal>
    </section>
  )
}
