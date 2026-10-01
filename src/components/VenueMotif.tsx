/** Minimal architectural line-art evoking a banquet venue archway, in the same fine-line register as the invitation's illustrations. */
export default function VenueMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 180"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M20 170 H300" strokeOpacity="0.5" />

      {/* Central dome archway */}
      <path
        d="M120 170 V110 C120 80, 140 60, 160 60 C180 60, 200 80, 200 110 V170"
        strokeOpacity="0.85"
      />
      <path d="M160 60 C160 48, 166 40, 160 30 C154 40, 160 48, 160 60" strokeOpacity="0.7" />
      <circle cx="160" cy="24" r="2.2" strokeOpacity="0.8" />

      {/* Side pillars */}
      <path d="M70 170 V96 C70 80, 82 70, 94 70 C106 70, 118 80, 118 96 V170" strokeOpacity="0.6" />
      <path d="M202 170 V96 C202 80, 214 70, 226 70 C238 70, 250 80, 250 96 V170" strokeOpacity="0.6" />

      {/* Flanking small domes */}
      <path d="M94 70 C94 60, 100 54, 94 46 C88 54, 94 60, 94 70" strokeOpacity="0.55" />
      <path d="M226 70 C226 60, 232 54, 226 46 C220 54, 226 60, 226 70" strokeOpacity="0.55" />

      {/* Garland swags */}
      <path d="M40 112 C 70 128, 110 128, 120 112" strokeOpacity="0.45" />
      <path d="M200 112 C 210 128, 250 128, 280 112" strokeOpacity="0.45" />

      {/* Ground foliage */}
      <path d="M30 170 C 40 158, 50 158, 56 170" strokeOpacity="0.4" />
      <path d="M264 170 C 270 158, 280 158, 290 170" strokeOpacity="0.4" />
    </svg>
  )
}
