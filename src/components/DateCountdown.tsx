/** The wedding date, printed, plus a live countdown to the Swagat Barat. */
export default function DateCountdown() {
  return (
    <section className="page date" id="date">
      <div className="spray" data-flora="spray" data-seed="5" />
      <h2 className="script-title" data-reveal="">
        शुभ तिथि
      </h2>
      <div className="date-print" data-reveal="" aria-label="शनिवार, 21 नवंबर 2026">
        <p className="dp-day">शनिवार</p>
        <div className="dp-row">
          <span className="dp-side">नवंबर</span>
          <span className="dp-num">21</span>
          <span className="dp-side">2026</span>
        </div>
      </div>

      <div className="countdown" data-reveal="" aria-label="विवाह की शुभ घड़ी तक शेष समय">
        <div className="flourish-wrap" data-flora="flourish" />
        <h3 className="script-title script-title--sm">शुभ घड़ी की प्रतीक्षा</h3>
        <div className="cd-row" id="countdown" role="timer" aria-live="off">
          <div className="cd-unit">
            <span className="cd-num" data-cd="d">00</span>
            <span className="cd-label">दिन</span>
          </div>
          <i className="cd-sep" aria-hidden="true" />
          <div className="cd-unit">
            <span className="cd-num" data-cd="h">00</span>
            <span className="cd-label">घंटे</span>
          </div>
          <i className="cd-sep" aria-hidden="true" />
          <div className="cd-unit">
            <span className="cd-num" data-cd="m">00</span>
            <span className="cd-label">मिनट</span>
          </div>
          <i className="cd-sep" aria-hidden="true" />
          <div className="cd-unit">
            <span className="cd-num" data-cd="s">00</span>
            <span className="cd-label">सेकंड</span>
          </div>
        </div>
      </div>
    </section>
  )
}
