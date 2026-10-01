import seatedImg from '../assets/images/seated.webp'
import Reveal from './Reveal'
import { FloatingPetals, SprigDivider } from './Botanical'

export default function ThankYou() {
  return (
    <section
      id="thank-you"
      aria-label="Thank You"
      className="relative flex min-h-[100svh] items-stretch overflow-hidden bg-plum text-ivory-paper"
    >
      <img
        src={seatedImg}
        alt="Arun & Tara seated together, hand in hand, beneath white floral garlands"
        className="absolute inset-0 h-full w-full object-cover object-top opacity-90"
        loading="lazy"
        width={1332}
        height={2000}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-plum-deep via-plum/80 to-plum/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-plum-deep/95 via-plum/60 to-transparent sm:from-plum-deep/90" />

      <FloatingPetals count={10} />

      <div className="relative z-10 flex w-full flex-col items-center justify-end px-6 pb-16 pt-28 text-center sm:items-start sm:justify-center sm:px-14 sm:py-24 sm:text-left lg:px-20">
        <Reveal className="max-w-md">
          <span className="font-serif text-sm font-semibold uppercase tracking-widest2 text-blush-soft/90">
            From Our Hearts
          </span>
          <h2 className="mt-4 font-display text-6xl font-semibold leading-[1.05] sm:text-7xl">
            Thank You
          </h2>

          <div className="my-6 text-gold-soft/80">
            <SprigDivider />
          </div>

          <p className="font-serif text-xl leading-relaxed text-ivory-paper/90 sm:text-2xl">
            For being a part of our story, and for celebrating this beautiful beginning with us.
          </p>

          <p className="mt-9 font-serif text-lg uppercase tracking-widest2 text-blush-soft/80">
            With Love,
          </p>
          <p className="mt-2 font-script text-5xl text-ivory-paper sm:text-6xl">Arun &amp; Tara</p>
        </Reveal>
      </div>
    </section>
  )
}
