/**
 * A minimal, reverent fine-line Ganesh motif in the spirit of the printed
 * invitation's line-art illustrations — abstracted, not literal iconography.
 */
export default function GaneshMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Shri Ganesha, invoked at the beginning of auspicious occasions"
    >
      {/* Ears */}
      <circle cx="42" cy="62" r="22" strokeOpacity="0.75" />
      <circle cx="118" cy="62" r="22" strokeOpacity="0.75" />

      {/* Head */}
      <circle cx="80" cy="66" r="34" strokeOpacity="0.95" />

      {/* Crown */}
      <path d="M62 36 C 68 24, 92 24, 98 36" strokeOpacity="0.8" />
      <path d="M80 24 L80 33" strokeOpacity="0.8" />
      <circle cx="80" cy="19" r="2.6" strokeOpacity="0.9" />

      {/* Tilak */}
      <path d="M80 50 L80 58" strokeOpacity="0.55" />

      {/* Eyes */}
      <circle cx="69" cy="64" r="2" fill="currentColor" strokeOpacity="0" fillOpacity="0.85" />
      <circle cx="91" cy="64" r="2" fill="currentColor" strokeOpacity="0" fillOpacity="0.85" />

      {/* Trunk */}
      <path
        d="M80 78 C 78 90, 70 92, 70 104 C 70 114, 80 118, 86 112 C 91 107, 86 100, 80 103"
        strokeOpacity="0.95"
      />

      {/* Tusk */}
      <path d="M94 80 C 97 84, 97 88, 93 90" strokeOpacity="0.6" />

      {/* Lotus seat */}
      <path d="M38 126 C 52 118, 108 118, 122 126" strokeOpacity="0.45" />
      <path d="M30 134 C 48 144, 112 144, 130 134" strokeOpacity="0.55" />
    </svg>
  )
}
