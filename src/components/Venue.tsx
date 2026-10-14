const VENUE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=The+Grand+Nimantran+NH+7+Dhakoli+Zirakpur+Punjab+160104'

/** The wedding venue reveal — line-art palace facade, name, address, and a map link. */
export default function Venue() {
  return (
    <section className="page venue" id="venue">
      <h2 className="script-title" data-reveal="">
        शुभ विवाह
      </h2>
      <div className="venue-card" data-reveal="unfold">
        <div className="venue-art-wrap" data-flora="venue" />
        <p className="venue-name">द ग्रैंड निमंत्रण</p>
        <p className="venue-addr">
          एन.एच. 7, गुरु नानक सर्विस स्टेशन के पास
          <br />
          ढकोली, ज़ीरकपुर, पंजाब – 160104
        </p>
        <p className="venue-date">शनिवार, 21 नवंबर 2026</p>
        <a className="gold-btn" href={VENUE_MAPS_URL} target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 21s-6.5-6.2-6.5-11.2A6.5 6.5 0 0 1 18.5 9.8C18.5 14.8 12 21 12 21z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle cx="12" cy="10" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span>स्थान देखें</span>
        </a>
      </div>
    </section>
  )
}
