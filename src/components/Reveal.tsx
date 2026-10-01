import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  duration?: number
  className?: string
  as?: 'div' | 'span'
  once?: boolean
}

/** Gentle fade + rise used throughout the invitation for scroll-triggered entrances. */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  className,
  once = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion()

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0.4 : duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
