/** The Ganesh invocation that opens every auspicious occasion. */
export default function Invocation() {
  return (
    <section className="page invocation" id="invocation">
      <svg className="kalash" data-reveal="" viewBox="0 0 120 120" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="60" cy="40" rx="10" ry="12" />
          <path d="M55 30 C57 25 63 25 65 30 M60 28 V22 M57 23 L60 22 L63 23" />
          <path d="M50 52 C40 46 30 46 22 50 C30 54 40 55 50 52Z M50 52 L24 50" />
          <path d="M70 52 C80 46 90 46 98 50 C90 54 80 55 70 52Z M70 52 L96 50" />
          <path d="M52 50 C46 40 38 34 30 33 C34 41 42 48 52 50Z" />
          <path d="M68 50 C74 40 82 34 90 33 C86 41 78 48 68 50Z" />
          <ellipse cx="60" cy="56" rx="17" ry="3.5" />
          <path d="M47 59 V66 M73 59 V66 M47 66 H73" />
          <path d="M47 66 C30 74 32 104 60 108 C88 104 90 74 73 66" />
          <path d="M38 82 C44 78 50 86 56 82 C62 78 66 86 72 82 C76 79 80 82 82 82" />
          <path d="M37 90 H83" />
        </g>
        <g fill="currentColor">
          <circle cx="48" cy="96" r="1.4" />
          <circle cx="60" cy="98" r="1.4" />
          <circle cx="72" cy="96" r="1.4" />
          <circle cx="60" cy="74" r="1.8" />
        </g>
      </svg>
      <p className="hindi-invoke" data-reveal="" lang="hi">
        !! श्री गणेशाय नमः !!
      </p>
      <p className="shloka" data-reveal="" lang="sa">
        ॐ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः ।
        <br />
        निर्विघ्नं कुरु मे देव शुभकार्येषु सर्वदा ॥
      </p>
      <div className="flourish-wrap" data-reveal="" data-flora="flourish" />
      <p className="shubh" data-reveal="" lang="hi">
        शुभ आरंभ
      </p>
    </section>
  )
}
