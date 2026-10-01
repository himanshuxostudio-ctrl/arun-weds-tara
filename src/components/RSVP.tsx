import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

type Contact = { label: string; number: string }

const contacts: Contact[] = [
  { label: 'Call Anku', number: '9588568534' },
  { label: 'Call Barkha', number: '8837791382' },
  { label: 'Call Barkha', number: '9034114316' },
]

function formatNumber(number: string) {
  return `${number.slice(0, 5)} ${number.slice(5)}`
}

export default function RSVP() {
  return (
    <section id="rsvp" aria-label="RSVP" className="relative bg-paper-wash px-6 py-24 sm:py-28">
      <SectionHeading kicker="Join Us" title="We Would Love to Celebrate With You" />

      <Reveal delay={0.1} className="mx-auto mt-4 max-w-xl text-center">
        <p className="font-script text-4xl text-plum sm:text-5xl">RSVP</p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 flex max-w-xl flex-col items-stretch gap-4 sm:mt-12">
        {contacts.map((contact) => (
          <a
            key={`${contact.label}-${contact.number}`}
            href={`tel:${contact.number}`}
            className="focus-ring group flex flex-col items-center gap-1.5 border border-plum/30 bg-ivory-paper/70 px-7 py-5 text-center font-serif transition-colors duration-500 hover:border-plum hover:bg-plum sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-9 sm:py-6 sm:text-left"
          >
            <span className="whitespace-nowrap text-xl font-semibold uppercase tracking-widest2 text-plum transition-colors duration-500 group-hover:text-ivory-paper sm:text-2xl">
              {contact.label}
            </span>
            <span className="whitespace-nowrap text-xl font-medium tracking-wide text-charcoal transition-colors duration-500 group-hover:text-ivory-paper sm:text-2xl">
              {formatNumber(contact.number)}
            </span>
          </a>
        ))}
      </Reveal>
    </section>
  )
}
