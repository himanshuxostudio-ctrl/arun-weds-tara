function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.6 3.5h2.8l1.4 4.3-2 1.6a12 12 0 0 0 5.8 5.8l1.6-2 4.3 1.4v2.8a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** RSVP contacts with tappable call buttons — the original's exact numbers, with country code. */
export default function RSVP() {
  return (
    <section className="page rsvp" id="rsvp">
      <div className="corner corner-tl" data-flora="corner" data-seed="61" />
      <div className="corner corner-tr" data-flora="corner" data-seed="67" />
      <h2 className="script-title" data-reveal="">
        आपके आगमन की प्रतीक्षा रहेगी
      </h2>
      <p className="rsvp-label" data-reveal="">
        संपर्क सूत्र
      </p>
      <div className="contacts">
        <div className="contact" data-reveal="">
          <p className="contact-name">अंकु वर्मा</p>
          <a className="contact-num" href="tel:+919588568534">
            9588568534
          </a>
          <a className="gold-btn gold-btn--solid" href="tel:+919588568534">
            <PhoneIcon />
            <span>अंकु को कॉल करें</span>
          </a>
        </div>
        <div className="contact" data-reveal="">
          <p className="contact-name">बरखा</p>
          <a className="contact-num" href="tel:+918837791382">
            8837791382
          </a>
          <a className="contact-num" href="tel:+919034114316">
            9034114316
          </a>
          <a className="gold-btn gold-btn--solid" href="tel:+918837791382">
            <PhoneIcon />
            <span>बरखा को कॉल करें</span>
          </a>
        </div>
      </div>
    </section>
  )
}
