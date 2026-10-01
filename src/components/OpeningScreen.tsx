import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import GaneshMotif from './GaneshMotif'
import { CornerFlourish, FloralBurst } from './Botanical'

type OpeningScreenProps = {
  onOpened: () => void
  onPlayMusic: () => void
}

type Phase = 'closed' | 'glow' | 'opening' | 'done'

const EASE = [0.76, 0, 0.24, 1] as const

export default function OpeningScreen({ onOpened, onPlayMusic }: OpeningScreenProps) {
  const [phase, setPhase] = useState<Phase>('closed')
  const prefersReduced = useReducedMotion()

  const handleOpen = () => {
    // Must fire inside the click gesture so browsers allow playback.
    onPlayMusic()

    if (prefersReduced) {
      setPhase('done')
      window.setTimeout(onOpened, 350)
      return
    }

    setPhase('glow')
    window.setTimeout(() => setPhase('opening'), 650)
    window.setTimeout(() => setPhase('done'), 650 + 1500)
    window.setTimeout(onOpened, 650 + 1500 + 250)
  }

  const isOpening = phase === 'opening' || phase === 'done'

  return (
    <div
      className={`fixed inset-0 z-[60] overflow-hidden bg-ivory-paper transition-opacity duration-700 ${
        phase === 'done' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={phase === 'done'}
    >
      {/* Top panel */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-paper-wash"
        style={{ transformOrigin: 'top center' }}
        animate={isOpening ? { y: '-102%', rotateX: -8 } : { y: 0, rotateX: 0 }}
        transition={{ duration: 1.5, ease: EASE }}
      >
        <div className="absolute inset-0 flex items-end justify-center pb-6">
          <CornerFlourish className="absolute left-4 top-4 h-16 w-16 text-gold-deep/70 sm:left-8 sm:top-8 sm:h-24 sm:w-24" />
          <CornerFlourish className="absolute right-4 top-4 h-16 w-16 rotate-90 text-gold-deep/70 sm:right-8 sm:top-8 sm:h-24 sm:w-24" flip />
        </div>
      </motion.div>

      {/* Bottom panel */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-paper-wash"
        style={{ transformOrigin: 'bottom center' }}
        animate={isOpening ? { y: '102%', rotateX: 8 } : { y: 0, rotateX: 0 }}
        transition={{ duration: 1.5, ease: EASE }}
      >
        <div className="absolute inset-0 flex items-start justify-center pt-6">
          <CornerFlourish className="absolute bottom-4 left-4 h-16 w-16 rotate-[-90deg] text-gold-deep/70 sm:bottom-8 sm:left-8 sm:h-24 sm:w-24" flip />
          <CornerFlourish className="absolute bottom-4 right-4 h-16 w-16 rotate-180 text-gold-deep/70 sm:bottom-8 sm:right-8 sm:h-24 sm:w-24" />
        </div>
      </motion.div>

      {/* Gold seam light */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 h-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
        animate={{
          width: phase === 'closed' ? '0%' : '100%',
          opacity: isOpening ? 0 : 1,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Centred invitation face */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center p-6">
        <motion.div
          className="pointer-events-auto flex w-full max-w-md flex-col items-center border border-charcoal/15 px-6 py-10 text-center sm:px-10 sm:py-14"
          animate={{ opacity: phase === 'closed' || phase === 'glow' ? 1 : 0, scale: phase === 'closed' || phase === 'glow' ? 1 : 0.94 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <FloralBurst className="mb-2 h-10 w-10 text-sage-deep/70 sm:h-12 sm:w-12" />

          <p className="mt-4 font-serif text-base font-semibold tracking-[0.18em] text-plum sm:text-lg">
            !! श्री गणेशाय नमः !!
          </p>

          <div className="my-5 text-gold-deep">
            <GaneshMotif className="h-16 w-16 sm:h-20 sm:w-20" />
          </div>

          <p className="max-w-xs font-serif text-[1.05rem] italic leading-relaxed text-charcoal-soft sm:text-xl">
            ॐ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः
            <br />
            निर्विघ्नं कुरु मे देव शुभकार्येषु सर्वदा॥
          </p>

          <div className="my-6 h-px w-16 bg-gold/50" />

          <p className="font-script text-4xl text-plum sm:text-5xl">Tara &amp; Arun</p>
          <p className="mt-2 font-serif text-sm uppercase tracking-widest2 text-charcoal-soft/80">
            21 · November · 2026
          </p>

          <button
            type="button"
            onClick={handleOpen}
            disabled={phase !== 'closed'}
            className="focus-ring group relative mt-9 inline-flex items-center gap-3 border border-plum/70 px-8 py-3 font-serif text-base uppercase tracking-widest2 text-plum transition-colors duration-500 hover:bg-plum hover:text-ivory-paper disabled:pointer-events-none sm:px-10 sm:py-4 sm:text-lg"
          >
            <span>Open Invitation</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </button>

          <p className="mt-5 font-serif text-xs uppercase tracking-widest2 text-charcoal-soft/60">
            शुभ आरंभ · A Beautiful Beginning
          </p>
        </motion.div>
      </div>
    </div>
  )
}
