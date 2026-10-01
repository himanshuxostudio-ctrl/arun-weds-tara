import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import handkissImg from '../assets/images/handkiss.webp'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { FloralBurst } from './Botanical'

const steps = [
  {
    n: '01',
    title: 'Nourishment & Purity',
    text: 'To provide for our household, keeping it pure and avoiding those things that might harm us.',
  },
  {
    n: '02',
    title: 'Strength & Vitality',
    text: 'To develop our physical, mental & spiritual power.',
  },
  {
    n: '03',
    title: 'Prosperity',
    text: 'To increase our wealth by righteous & proper means.',
  },
  {
    n: '04',
    title: 'Love, Respect & Trust',
    text: 'To acquire knowledge, wealth, happiness & harmony by mutual love, respect & trust.',
  },
  {
    n: '05',
    title: 'A Blessed Family',
    text: 'To be blessed with strong, virtuous & heroic children.',
  },
  {
    n: '06',
    title: 'Harmony & Longevity',
    text: 'To strive for self-restraint & longevity.',
  },
  {
    n: '07',
    title: 'Eternal Companionship',
    text: 'To be true companions & remain lifelong partners by this wedlock.',
  },
]

export default function SevenSteps() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.75', 'end 0.4'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 0.4 })

  return (
    <section
      id="seven-steps"
      aria-label="The Seven Sacred Steps"
      className="relative bg-paper-wash px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          kicker="The Saptapadi"
          title="The Seven Sacred Steps"
          subtitle="Seven promises. One journey. A lifetime together."
        />
      </div>

      <Reveal className="mx-auto mt-14 max-w-md sm:mt-16" delay={0.1}>
        <figure className="overflow-hidden rounded-sm border border-charcoal/10 shadow-card">
          <img
            src={handkissImg}
            alt="Arun gently kissing Tara's hand before the sacred ceremony"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1332}
            height={2000}
          />
        </figure>
      </Reveal>

      <div ref={trackRef} className="relative mx-auto mt-20 max-w-3xl sm:mt-24">
        {/* Connecting vine line */}
        <div className="absolute left-5 top-2 bottom-2 w-px bg-charcoal/10 sm:left-1/2 sm:-translate-x-1/2">
          <motion.div
            className="h-full w-px origin-top bg-gradient-to-b from-gold via-rose-dusty to-sage-deep"
            style={{ scaleY: lineScale }}
          />
        </div>

        <ol className="flex flex-col gap-14 sm:gap-20">
          {steps.map((step, i) => {
            const alignRight = i % 2 === 1
            return (
              <li key={step.n} className="relative pl-16 sm:pl-0">
                <div className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-10">
                  <Reveal
                    className={
                      alignRight
                        ? 'sm:col-start-2 sm:text-left'
                        : 'sm:col-start-1 sm:text-right'
                    }
                    y={24}
                  >
                    <div
                      className={`flex flex-col items-start ${alignRight ? 'sm:items-start' : 'sm:items-end'}`}
                    >
                      <span className="font-display text-sm font-semibold uppercase tracking-widest2 text-gold-deep">
                        Step {step.n}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-charcoal sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-sm font-serif text-lg leading-relaxed text-charcoal-soft sm:text-xl">
                        {step.text}
                      </p>
                    </div>
                  </Reveal>
                  <div
                    className={
                      alignRight
                        ? 'hidden sm:col-start-1 sm:row-start-1 sm:block'
                        : 'hidden sm:col-start-2 sm:row-start-1 sm:block'
                    }
                  />
                </div>

                {/* Node marker */}
                <span
                  className="absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-gold/60 bg-ivory-paper font-display text-sm font-semibold text-plum shadow-card sm:left-1/2"
                  aria-hidden="true"
                >
                  {step.n}
                </span>
              </li>
            )
          })}
        </ol>
      </div>

      <Reveal className="mx-auto mt-20 max-w-xl text-center sm:mt-24" delay={0.1}>
        <FloralBurst className="mx-auto mb-6 h-10 w-10 text-sage-deep/70" />
        <p className="font-serif text-xl italic leading-relaxed text-charcoal-soft sm:text-2xl">
          In the presence of the holy fire, they take their first steps into a new life of
          togetherness.
        </p>
      </Reveal>
    </section>
  )
}
