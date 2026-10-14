// Served from /public so it shares a stable URL with the <link rel="preload"> in index.html.
const coupleImg = '/images/couple.webp'

/** The full-screen envelope: wax seal, embossed flaps, and the card waiting inside. */
export default function Envelope() {
  return (
    <div className="envelope" id="envelope">
      <div className="env-light" aria-hidden="true" />
      <div className="env-scene" id="envScene">
        <p className="env-names">
          तारा <em>&amp;</em> अरुण
        </p>

        <div className="env" id="env">
          <div className="env-back" />
          <div className="env-glow" aria-hidden="true" />

          {/* the invitation card waiting inside the pocket */}
          <div className="env-card" aria-hidden="true">
            <div className="ec-inner">
              <div className="ec-arch" data-flora="arch" />
              <p className="ec-eyebrow">शुभ विवाह</p>
              <p className="ec-names">
                <span>तारा</span>
                <em>संग</em>
                <span>अरुण</span>
              </p>
              <div className="ec-art">
                <img src={coupleImg} alt="" width={1600} height={900} />
              </div>
              <p className="ec-date">21 · नवंबर · 2026</p>
            </div>
          </div>

          <div className="flap flap-left">
            <div className="flap-face">
              <div className="emboss emboss-side" data-flora="emboss-side" />
            </div>
          </div>
          <div className="flap flap-right">
            <div className="flap-face">
              <div className="emboss emboss-side" data-flora="emboss-side" />
            </div>
          </div>
          <div className="flap flap-bottom">
            <div className="flap-face">
              <div className="emboss emboss-bottom" data-flora="emboss-bottom" />
            </div>
          </div>
          <div className="flap flap-top">
            <div className="flap-face flap-front">
              <div className="emboss emboss-top" data-flora="emboss-top" />
              <div className="flap-shade" />
            </div>
            <div className="flap-face flap-back" />
          </div>

          <button className="seal" id="seal" type="button" aria-label="मुहर तोड़कर निमंत्रण खोलें">
            <span className="seal-half seal-l">
              <span className="seal-wax" data-flora="seal" />
              <span className="seal-mono" aria-hidden="true">
                A<em>&amp;</em>T
              </span>
            </span>
            <span className="seal-half seal-r">
              <span className="seal-wax" data-flora="seal" />
              <span className="seal-mono" aria-hidden="true">
                A<em>&amp;</em>T
              </span>
            </span>
          </button>
        </div>

        <button className="env-hint" id="openBtn" type="button">
          निमंत्रण खोलने के लिए मुहर छुएँ
        </button>
      </div>
    </div>
  )
}
