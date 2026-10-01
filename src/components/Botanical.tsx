/**
 * Recurring fine-line botanical ornaments — the decorative language that ties
 * the stationery-style chrome back to the foliage inside the illustrations.
 */

export function SprigDivider({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 48"
      className={`h-10 w-auto ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M0 24 H96" strokeOpacity="0.5" />
      <path d="M144 24 H240" strokeOpacity="0.5" />
      <path d="M120 10 C112 18, 112 30, 120 38 C128 30, 128 18, 120 10 Z" strokeOpacity="0.8" />
      <path d="M120 10 V38" strokeOpacity="0.6" />
      <path d="M103 24 C110 18, 114 20, 118 24" strokeOpacity="0.7" />
      <path d="M137 24 C130 18, 126 20, 122 24" strokeOpacity="0.7" />
      <circle cx="120" cy="24" r="2.4" strokeOpacity="0.9" />
    </svg>
  )
}

export function CornerFlourish({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`${className} ${flip ? 'scale-x-[-1]' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M4 4 C 40 4, 60 10, 60 40 C 60 10, 100 4, 116 4" strokeOpacity="0.55" />
      <path d="M4 4 C 4 40, 10 60, 40 60 C 10 60, 4 100, 4 116" strokeOpacity="0.55" />
      <path d="M18 18 C 30 22, 34 28, 32 38" strokeOpacity="0.7" />
      <circle cx="14" cy="14" r="2" strokeOpacity="0.8" />
    </svg>
  )
}

export function VineRule({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 20"
      className={`w-full h-5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 10 H400" strokeOpacity="0.35" />
      {[40, 110, 180, 250, 320, 390].map((x, i) => (
        <path
          key={x}
          d={`M${x} 10 C ${x + (i % 2 === 0 ? 8 : -8)} 2, ${x + (i % 2 === 0 ? 14 : -14)} 2, ${x + (i % 2 === 0 ? 16 : -16)} 10`}
          strokeOpacity="0.55"
        />
      ))}
    </svg>
  )
}

export function FloralBurst({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <g strokeOpacity="0.65">
        <path d="M80 80 C 80 40, 60 20, 40 10" />
        <path d="M80 80 C 80 40, 100 20, 120 10" />
        <path d="M80 80 C 50 70, 20 65, 6 50" />
        <path d="M80 80 C 110 70, 140 65, 154 50" />
        <path d="M80 80 C 70 110, 55 135, 35 150" />
        <path d="M80 80 C 90 110, 105 135, 125 150" />
      </g>
      <circle cx="80" cy="80" r="6" strokeOpacity="0.9" />
      <circle cx="40" cy="10" r="3" strokeOpacity="0.8" />
      <circle cx="120" cy="10" r="3" strokeOpacity="0.8" />
      <circle cx="6" cy="50" r="3" strokeOpacity="0.8" />
      <circle cx="154" cy="50" r="3" strokeOpacity="0.8" />
      <circle cx="35" cy="150" r="3" strokeOpacity="0.8" />
      <circle cx="125" cy="150" r="3" strokeOpacity="0.8" />
    </svg>
  )
}

/** Very small, slow drifting petals — purely ambient, respects reduced-motion via parent control. */
export function FloatingPetals({ count = 8 }: { count?: number }) {
  const petals = Array.from({ length: count })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((_, i) => {
        const left = (i * 97) % 100
        const delay = (i * 1.7) % 14
        const duration = 12 + ((i * 3) % 8)
        const size = 8 + ((i * 5) % 10)
        return (
          <span
            key={i}
            className="absolute top-0 block rounded-[60%_40%_60%_40%] bg-rose-dusty/30 animate-petalFall"
            style={{
              left: `${left}%`,
              width: size,
              height: size * 0.75,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        )
      })}
    </div>
  )
}
