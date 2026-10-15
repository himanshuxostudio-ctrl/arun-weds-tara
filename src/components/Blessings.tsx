const blessings = ['सतपाल सिंह', 'तुलसी राम', 'अमर सिंह', 'प्रेम पाल', 'चंदर सिंह', 'अंकु वर्मा']

/** Family blessings, followed by the Little Stars. */
export default function Blessings() {
  return (
    <section className="page blessings" id="blessings">
      <div className="flourish-wrap" data-reveal="" data-flora="flourish" />
      <h2 className="script-title" data-reveal="">
        शुभेच्छु
      </h2>
      <ul className="bless-list">
        {blessings.map((name) => (
          <li data-reveal="" key={name}>
            {name}
          </li>
        ))}
        <li data-reveal="" className="bless-family">
          एवं समस्त वर्मा परिवार
        </li>
      </ul>
      <div className="little-stars" data-reveal="">
        <svg className="stars-ornament" viewBox="0 0 120 30" aria-hidden="true">
          <g fill="currentColor">
            <path d="M60 3l2.4 7.6L70 13l-7.6 2.4L60 23l-2.4-7.6L50 13l7.6-2.4z" />
            <path d="M38 10l1.3 3.7 3.7 1.3-3.7 1.3L38 20l-1.3-3.7L33 15l3.7-1.3z" opacity=".7" />
            <path d="M82 10l1.3 3.7 3.7 1.3-3.7 1.3L82 20l-1.3-3.7L77 15l3.7-1.3z" opacity=".7" />
            <circle cx="22" cy="15" r="1.4" opacity=".5" />
            <circle cx="98" cy="15" r="1.4" opacity=".5" />
          </g>
        </svg>
        <h3 className="script-title script-title--sm">बाल मनुहार</h3>
        <p className="stars-names">माही, देवांश, तानी, दुग्गू एवं खुशी</p>
      </div>
    </section>
  )
}
