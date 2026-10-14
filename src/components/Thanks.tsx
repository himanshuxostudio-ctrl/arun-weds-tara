import togetherImg from '../assets/images/together.webp'

/** The closing page: the couple's portrait, a thank-you note, and the wax seal signature. */
export default function Thanks() {
  return (
    <section className="page thanks" id="thanks">
      <figure className="closing-art" data-reveal="image">
        <div className="closing-arch">
          <img
            src={togetherImg}
            alt="जलरंग चित्र: फूलों के मेहराब और जगमगाती रोशनी के सामने साथ खड़े नेवी शेरवानी में अरुण और गुलाबी परिधान में तारा"
            width={1024}
            height={1536}
            decoding="async"
          />
        </div>
        <div className="corner corner-bl" data-flora="corner" data-seed="71" />
        <div className="corner corner-br" data-flora="corner" data-seed="79" />
      </figure>
      <h2 className="thanks-title" data-reveal="">
        धन्यवाद
      </h2>
      <p className="lead" data-reveal="">
        हमारी कहानी का हिस्सा बनने
        <br />
        और इस सुंदर शुरुआत की खुशियों में
        <br />
        शामिल होने के लिए।
      </p>
      <p className="with-love" data-reveal="">
        सप्रेम,
      </p>
      <p className="signature" data-reveal="">
        अरुण एवं तारा
      </p>
      <div className="end-seal" data-reveal="">
        <span className="seal-wax" data-flora="seal" />
        <span className="seal-mono" aria-hidden="true">
          A<em>&amp;</em>T
        </span>
      </div>
      <p className="end-date" data-reveal="">
        21 · 11 · 2026
      </p>
    </section>
  )
}
