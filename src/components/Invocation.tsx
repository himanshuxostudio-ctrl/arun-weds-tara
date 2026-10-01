import GaneshMotif from './GaneshMotif'
import { FloralBurst } from './Botanical'

/** A brief, non-blocking Ganesh invocation that opens the invitation — no click required. */
export default function Invocation() {
  return (
    <section
      aria-label="Shri Ganesha invocation"
      className="relative flex flex-col items-center bg-paper-wash px-6 pb-10 pt-14 text-center sm:pb-12 sm:pt-16"
    >
      <FloralBurst className="h-8 w-8 text-sage-deep/60" />

      <p className="mt-4 font-serif text-sm font-semibold tracking-[0.18em] text-plum sm:text-base">
        !! श्री गणेशाय नमः !!
      </p>

      <div className="my-4 text-gold-deep">
        <GaneshMotif className="h-14 w-14 sm:h-16 sm:w-16" />
      </div>

      <p className="max-w-xs font-serif text-base italic leading-relaxed text-charcoal-soft sm:text-lg">
        ॐ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः
        <br />
        निर्विघ्नं कुरु मे देव शुभकार्येषु सर्वदा॥
      </p>

      <p className="mt-5 font-serif text-xs uppercase tracking-widest2 text-charcoal-soft/60">
        शुभ आरंभ · A Beautiful Beginning
      </p>
    </section>
  )
}
