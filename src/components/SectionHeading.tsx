import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { SprigDivider } from './Botanical'

type SectionHeadingProps = {
  kicker?: string
  title: ReactNode
  subtitle?: ReactNode
  className?: string
}

export default function SectionHeading({ kicker, title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <Reveal className={`flex flex-col items-center text-center ${className}`}>
      {kicker && (
        <span className="mb-3 font-serif text-[0.78rem] font-semibold uppercase tracking-widest2 text-rose-deep">
          {kicker}
        </span>
      )}
      <h2 className="font-display text-4xl font-semibold leading-[1.15] tracking-tight text-charcoal sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <div className="text-gold-deep">
        <SprigDivider className="my-5 sm:my-6" />
      </div>
      {subtitle && (
        <p className="max-w-xl font-serif text-xl leading-relaxed text-charcoal-soft/90 sm:text-2xl">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
