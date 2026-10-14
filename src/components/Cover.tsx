import type { CSSVarStyle } from '../cssVars'

// Served from /public so it shares a stable URL with the <link rel="preload"> in index.html.
const coupleImg = '/images/couple.webp'

const introStep = (i: number): CSSVarStyle => ({ '--i': i })

/** The cover page revealed once the envelope opens: names, date, and the couple portrait. */
export default function Cover() {
  return (
    <section className="page cover" id="cover">
      <div className="corner corner-tl" data-flora="corner" data-seed="11" />
      <div className="corner corner-tr" data-flora="corner" data-seed="23" />
      <div className="cover-frame">
        <div className="arch-frame">
          <div className="arch-svg" data-flora="arch" />
        </div>
        <div className="cover-text">
          <p className="eyebrow intro" style={introStep(0)}>
            शुभ विवाह
          </p>
          <h1 className="names">
            <span className="name intro" style={introStep(1)}>
              तारा
            </span>
            <span className="weds intro" style={introStep(2)}>
              संग
            </span>
            <span className="name intro" style={introStep(3)}>
              अरुण
            </span>
          </h1>
          <p className="cover-date intro" style={introStep(4)}>
            शनिवार, 21 नवंबर 2026
          </p>
        </div>
        <figure className="cover-art intro" style={introStep(3)}>
          <img
            src={coupleImg}
            alt="जलरंग चित्र: वाइन रंग की शेरवानी में अरुण, गुलाबी परिधान में तारा को देखकर मुस्कुराते हुए"
            width={1600}
            height={900}
            data-parallax="0.04"
          />
        </figure>
        <div className="cover-spray intro" style={introStep(5)} data-flora="spray" data-seed="13" />
      </div>
      <a className="scroll-cue intro" style={introStep(6)} href="#date">
        <span>आगे देखें</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
