/** The floating music control. Its visible/playing state is toggled by useInvitationEngine via class names. */
export default function MusicButton() {
  return (
    <button className="music" id="music" type="button" aria-label="संगीत चलाएँ" aria-pressed="false">
      <span className="music-note" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path
            d="M9 18V6l10-2v12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6.5" cy="18" r="2.5" fill="currentColor" />
          <circle cx="16.5" cy="16" r="2.5" fill="currentColor" />
        </svg>
      </span>
      <span className="music-bars" aria-hidden="true">
        <i /><i /><i /><i />
      </span>
    </button>
  )
}
