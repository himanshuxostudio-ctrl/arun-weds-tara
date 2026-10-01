import seatedImg from '../assets/images/seated.webp'
import Reveal from './Reveal'
import { FloatingPetals, SprigDivider } from './Botanical'

export default function ThankYou() {
  return (
    <section
      id="thank-you"
      aria-label="Thank You"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-plum text-ivory-paper lg:flex-row"
    >
      <div className="relative order-2 flex-1 lg:order-1 lg:w-[54%]">
        <div className="relative h-[52vh] w-full sm:h-[60vh] lg:h-full">
          <img
            src={seatedImg}
            alt="Arun & Tara seated together, hand in hand, beneath white floral garlands"
            className="h-full w-full object-cover object-top"
            loading="lazy"
            width={1332}
            height={2000}
          />
        </div>
      </div>

      <div className="relative order-1 flex flex-1 items-center justify-center overflow-hidden px-6 py-16 text-center sm:py-20 lg:order-2 lg:w-[46%] lg:items-center lg:px-12 lg:text-left xl:px-16">
        <FloatingPetals count={8} />

        <Reveal className="relative z-10 flex max-w-md flex-col items-center lg:items-start">
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
