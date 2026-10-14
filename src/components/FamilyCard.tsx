/** The formal family invitation, set like the printed stationery's arched card. */
export default function FamilyCard() {
  return (
    <section className="page family" id="family">
      <div className="arch-card" data-reveal="unfold">
        <div className="arch-card-top" data-flora="arch" />
        <div className="arch-card-body">
          <div className="mini-flourish" data-flora="flourish" />
          <p className="parents" data-reveal="">
            श्रीमती सुनीता एवं श्री रवि सिंह
          </p>
          <p className="request" data-reveal="">
            अपनी सुपुत्री के शुभ विवाह के पावन अवसर पर आपकी गरिमामयी उपस्थिति के सादर आकांक्षी हैं
          </p>
          <p className="big-name" data-reveal="">
            तारा
          </p>
          <p className="weds-script" data-reveal="">
            संग
          </p>
          <p className="big-name" data-reveal="">
            अरुण
          </p>
          <p className="son-of" data-reveal="">
            <span>सुपुत्र</span>
            श्रीमती सुषमा एवं स्वर्गीय श्री पृथ्वी सिंह
          </p>
          <div className="arch-card-flora" data-flora="spray" data-seed="31" />
        </div>
      </div>
    </section>
  )
}
