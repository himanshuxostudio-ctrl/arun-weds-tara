import proposalImg from '../assets/images/proposal.webp'

/** "Dear Friends & Family" — the proposal illustration as the opening story beat. */
export default function Welcome() {
  return (
    <section className="page welcome" id="welcome">
      <h2 className="script-title" data-reveal="">
        प्रिय स्वजनों एवं मित्रों
      </h2>
      <p className="lead" data-reveal="">
        हर्षित हृदय से हम आपको आमंत्रित करते हैं — अरुण और तारा के जीवन के इस सुंदर नए अध्याय के शुभारंभ में
        सम्मिलित होकर इस मंगल बेला को और भी विशेष बनाएँ।
      </p>
      <figure className="moment moment--welcome" data-reveal="image">
        <div className="corner corner-tr" data-flora="corner" data-seed="37" />
        <div className="corner corner-bl" data-flora="corner" data-seed="43" />
        <div className="moment-img">
          <img
            src={proposalImg}
            alt="चित्र: सफ़ेद फूलों और मोमबत्तियों के बीच घुटने पर बैठकर तारा को सफ़ेद गुलाब भेंट करते अरुण"
            width={1332}
            height={2000}
            decoding="async"
            data-parallax="0.04"
          />
        </div>
      </figure>
    </section>
  )
}
