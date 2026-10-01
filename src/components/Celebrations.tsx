import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { VineRule } from './Botanical'

type EventItem = { name: string; time: string }

const dayOne: EventItem[] = [
  { name: 'Haldi', time: '11:00 AM' },
  { name: 'Mehndi & Sangeet', time: '7:00 PM onwards' },
]

const dayTwo: EventItem[] = [
  { name: 'Swagat Barat', time: '7:00 PM' },
  { name: 'Dinner', time: '8:00 PM' },
  { name: 'Doli', time: 'Under the Stars' },
]

function DayCard({
  dateLabel,
  dayLabel,
  events,
  venue,
  footer,
  delay,
}: {
  dateLabel: string
  dayLabel: string
  events: EventItem[]
  venue?: { name: string; address: string[] }
  footer?: string
  delay: number
}) {
  return (
    <Reveal delay={delay} className="w-full">
      <div className="flex h-full flex-col border border-charcoal/12 bg-ivory-paper/80 px-7 py-10 text-center shadow-card sm:px-10">
        <span className="font-serif text-sm font-semibold uppercase tracking-widest2 text-rose-deep">
          {dayLabel}
        </span>
        <h3 className="mt-2 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
          {dateLabel}
        </h3>

        <VineRule className="my-6 text-gold-deep/70" />

        <dl className="flex flex-col gap-6">
          {events.map((event) => (
            <div key={event.name} className="flex flex-col items-center">
              <dt className="font-display text-2xl font-semibold text-charcoal sm:text-[1.7rem]">
                {event.name}
              </dt>
              <dd className="mt-1 font-serif text-xl font-medium text-plum sm:text-2xl">
                {event.time}
              </dd>
            </div>
          ))}
        </dl>

        {venue && (
          <div className="mt-7 border-t border-charcoal/10 pt-6">
            <p className="font-serif text-lg font-semibold uppercase tracking-widest2 text-charcoal">
              {venue.name}
            </p>
            <p className="mt-2 font-serif text-lg leading-relaxed text-charcoal-soft">
              {venue.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        )}

        {footer && (
          <p className="mt-7 border-t border-charcoal/10 pt-6 font-script text-3xl text-plum sm:text-4xl">
            {footer}
          </p>
        )}
      </div>
    </Reveal>
  )
}

export default function Celebrations() {
  return (
    <section
      id="celebrations"
      aria-label="The Celebrations"
      className="relative bg-blush-soft/60 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading kicker="Save These Dates" title="The Celebrations" />
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:mt-16 lg:grid-cols-2">
        <DayCard
          dateLabel="20 November 2026"
          dayLabel="Friday"
          events={dayOne}
          venue={{
            name: 'At Home',
            address: [
              'H.No 5, New Kushal Enclave',
              'Near Shoki Jain Hospital',
              'Bhabat, Zirakpur, Punjab',
            ],
          }}
          delay={0}
        />
        <DayCard
          dateLabel="21 November 2026"
          dayLabel="Saturday"
          events={dayTwo}
          footer="Dance · Music · Phere"
          delay={0.15}
        />
      </div>
    </section>
  )
}
