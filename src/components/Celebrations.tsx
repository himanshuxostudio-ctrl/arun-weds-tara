const HOME_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=H.No+5+New+Kushal+Enclave+Bhabat+Zirakpur+Punjab'

/** The two-day celebration timeline — Haldi/Mehndi/Sangeet, then Barat/Dinner/Doli/Phere. */
export default function Celebrations() {
  return (
    <section className="page celebrations" id="celebrations">
      <div className="spray" data-flora="spray" data-seed="57" />
      <h2 className="script-title" data-reveal="">
        मांगलिक कार्यक्रम
      </h2>

      <div className="day" data-reveal="">
        <p className="day-head">शुक्रवार, 20 नवंबर 2026</p>
        <ol className="timeline">
          <li data-reveal="">
            <span className="tl-icon" data-flora="icon:haldi" />
            <div>
              <h3>हल्दी</h3>
              <p className="time">प्रातः 11:00 बजे</p>
            </div>
          </li>
          <li data-reveal="">
            <span className="tl-icon" data-flora="icon:sangeet" />
            <div>
              <h3>मेहंदी एवं संगीत</h3>
              <p className="time">सायं 7:00 बजे से</p>
            </div>
          </li>
        </ol>
        <div className="place" data-reveal="">
          <span className="place-icon" data-flora="icon:home" />
          <h4>निवास स्थान पर</h4>
          <p>
            मकान नं. 5, न्यू कुशल एन्क्लेव
            <br />
            शोकी जैन हॉस्पिटल के पास
            <br />
            भबात, ज़ीरकपुर, पंजाब
          </p>
          <a className="link-btn" href={HOME_MAPS_URL} target="_blank" rel="noopener">
            रास्ता देखें
          </a>
        </div>
      </div>

      <div className="day-divider" data-flora="flourish" />

      <div className="day" data-reveal="">
        <p className="day-head">शनिवार, 21 नवंबर 2026</p>
        <ol className="timeline">
          <li data-reveal="">
            <span className="tl-icon" data-flora="icon:barat" />
            <div>
              <h3>स्वागत बारात</h3>
              <p className="time">सायं 7:00 बजे</p>
            </div>
          </li>
          <li data-reveal="">
            <span className="tl-icon" data-flora="icon:dinner" />
            <div>
              <h3>प्रीतिभोज</h3>
              <p className="time">रात्रि 8:00 बजे</p>
            </div>
          </li>
          <li data-reveal="">
            <span className="tl-icon" data-flora="icon:doli" />
            <div>
              <h3>डोली</h3>
              <p className="time time--text">तारों की छाँव में</p>
            </div>
          </li>
          <li data-reveal="" className="tl-last">
            <span className="tl-icon" data-flora="icon:phere" />
            <div>
              <p className="followed">तत्पश्चात</p>
              <h3>नृत्य · संगीत · फेरे</h3>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
