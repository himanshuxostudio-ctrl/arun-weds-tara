type MusicToggleProps = {
  isPlaying: boolean
  onToggle: () => void
  visible: boolean
}

export default function MusicToggle({ isPlaying, onToggle, visible }: MusicToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
      aria-pressed={isPlaying}
      className={`focus-ring fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ivory-paper/90 text-plum shadow-card backdrop-blur transition-all duration-700 ease-out hover:border-gold hover:bg-ivory-paper sm:bottom-7 sm:right-7 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 ${isPlaying ? 'animate-[spin_9s_linear_infinite]' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9.2" strokeOpacity="0.55" />
          <path
            d="M9.4 15.2V9.1l5.2-1.2v6.1"
            strokeOpacity="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8.7" cy="15.4" r="1.5" strokeOpacity="0.9" />
          <circle cx="13.9" cy="14.1" r="1.5" strokeOpacity="0.9" />
        </svg>
        {!isPlaying && (
          <span className="absolute h-[135%] w-px rotate-45 bg-plum/70" aria-hidden="true" />
        )}
      </span>
    </button>
  )
}
