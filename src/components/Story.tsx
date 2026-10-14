import promiseImg from '../assets/images/promise.webp'

const steps = [
  { n: '01', text: 'हम अपने घर-परिवार का पालन करें, उसे पवित्र रखें और हर अनिष्ट से दूर रहें।' },
  { n: '02', text: 'हम अपनी शारीरिक, मानसिक एवं आध्यात्मिक शक्ति का विकास करें।' },
  { n: '03', text: 'हम धर्म और सत्कर्म के मार्ग से अपनी समृद्धि बढ़ाएँ।' },
  { n: '04', text: 'परस्पर प्रेम, सम्मान एवं विश्वास से हम ज्ञान, सुख और सामंजस्य प्राप्त करें।' },
  { n: '05', text: 'हमें सबल, सद्गुणी एवं वीर संतान का आशीर्वाद मिले।' },
  { n: '06', text: 'हम संयम और दीर्घायु के लिए सदा प्रयत्नशील रहें।' },
  { n: '07', text: 'इस पावन बंधन में हम सच्चे साथी बनें और आजीवन एक-दूसरे का साथ निभाएँ।' },
]

/** The hand-kiss illustration followed by the Seven Sacred Steps (Saptapadi). */
export default function Story() {
  return (
    <section className="page story" id="story">
      <figure className="moment" data-reveal="image">
        <div className="corner corner-tl" data-flora="corner" data-seed="41" />
        <div className="corner corner-br" data-flora="corner" data-seed="47" />
        <div className="moment-img">
          <img
            src={promiseImg}
            alt="चित्र: स्नेह से तारा का हाथ चूमते अरुण"
            width={1332}
            height={2000}
            loading="eager"
            decoding="async"
            data-parallax="0.04"
          />
        </div>
      </figure>

      <h2 className="script-title" data-reveal="">
        सप्तपदी के सात वचन
      </h2>
      <div className="flourish-wrap" data-reveal="" data-flora="flourish" />
      <ol className="steps">
        {steps.map((step) => (
          <li data-reveal="" key={step.n}>
            <span className="num">{step.n}</span>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <p className="fire-line" data-reveal="">
        <svg className="flame" viewBox="0 0 48 48" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
            <path d="M24 6 C30 14 34 19 32 27 C31 32 27 35 24 35 C21 35 17 32 16 27 C14 19 18 14 24 6Z" />
            <path d="M24 20 C27 24 27 28 24 31 C21 28 21 24 24 20Z" />
            <path d="M10 41 C16 37 32 37 38 41" />
          </g>
        </svg>
        <span>
          पवित्र अग्नि को साक्षी मानकर,
          <br />
          वे साथ-साथ अपने नए जीवन की
          <br />
          ओर पहले कदम बढ़ाते हैं।
        </span>
      </p>
    </section>
  )
}
