import SectionHeading from './SectionHeading'
import { FloralBurst } from './Botanical'

export default function Story() {
  return (
    <section
      id="story"
      aria-label="A New Chapter Begins"
      className="relative bg-paper-wash px-6 py-24 sm:py-28"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <SectionHeading
          kicker="Our Story"
          title="A New Chapter Begins"
          subtitle="Two stories, two families, and countless little moments have brought us here. Now, Arun & Tara begin a beautiful new chapter — together."
        />
        <FloralBurst className="mt-10 h-14 w-14 text-rose-dusty/60" />
      </div>
    </section>
  )
}
