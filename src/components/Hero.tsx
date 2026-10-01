import proposalImg from '../assets/images/proposal.webp'
import Reveal from './Reveal'
import { FloralBurst } from './Botanical'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Tara weds Arun, 21 November 2026"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-paper-wash lg:flex-row-reverse lg:items-stretch"
    >
      <div className="relative flex-1 lg:w-[54%]">
        <div className="relative h-[52vh] w-full sm:h-[60vh] lg:h-full">
          <img
            src={proposalImg}
            alt="Arun kneeling and offering Tara a flower beneath a floral wedding backdrop"
            className="h-full w-full object-cover object-[center_18%]"
            loading="eager"
            fetchPriority="high"
            width={1332}
            height={2000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory-paper via-transparent to-transparent lg:bg-gradient-to-r lg:from-ivory-paper/0 lg:via-transparent lg:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ivory-paper to-transparent lg:hidden" />
          <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-ivory-paper to-transparent lg:block" />
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-6 py-12 sm:py-16 lg:w-[46%] lg:px-12 xl:px-16">
        <Reveal className="flex max-w-lg flex-col items-center text-center lg:items-start lg:text-left" delay={0.15}>
          <FloralBurst className="mb-4 h-9 w-9 text-sage-deep/70" />
          <p className="font-serif text-sm font-semibold uppercase tracking-widest2 text-rose-deep">
            Together With Their Families
          </p>

          <h1 className="mt-4 font-display leading-[0.95] text-charcoal">
            <span className="block text-6xl font-semibold sm:text-7xl md:text-8xl">Tara</span>
            <span className="my-1 block font-script text-4xl font-normal text-plum sm:my-2 sm:text-5xl">
              weds
            </span>
            <span className="block text-6xl font-semibold sm:text-7xl md:text-8xl">Arun</span>
          </h1>

          <div className="mt-7 flex items-center gap-4">
            <span className="hairline-gold w-10" />
            <p className="font-serif text-xl font-medium tracking-wide text-charcoal sm:text-2xl">
              21 November 2026
            </p>
            <span className="hairline-gold w-10" />
          </div>

          <p className="mt-6 max-w-sm font-serif text-xl italic leading-relaxed text-charcoal-soft sm:text-2xl">
            Two hearts. One beautiful beginning.
          </p>
        </Reveal>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-charcoal-soft/60 lg:flex">
          <span className="font-serif text-xs uppercase tracking-widest2">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-charcoal-soft/40" />
        </div>
      </div>
    </section>
  )
}
