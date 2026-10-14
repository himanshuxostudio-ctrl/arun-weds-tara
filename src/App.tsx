import musicSrc from './assets/audio/divine-union.mp3'
import { useInvitationEngine } from './useInvitationEngine'
import Envelope from './components/Envelope'
import Cover from './components/Cover'
import DateCountdown from './components/DateCountdown'
import Invocation from './components/Invocation'
import Welcome from './components/Welcome'
import FamilyCard from './components/FamilyCard'
import Story from './components/Story'
import Celebrations from './components/Celebrations'
import Venue from './components/Venue'
import RSVP from './components/RSVP'
import Blessings from './components/Blessings'
import Thanks from './components/Thanks'
import MusicButton from './components/MusicButton'

function App() {
  useInvitationEngine()

  return (
    <>
      <audio id="bgm" src={musicSrc} preload="auto" loop />

      <Envelope />

      <main className="invite" id="invite">
        <Cover />
        <DateCountdown />
        <Invocation />
        <Welcome />
        <FamilyCard />
        <Story />
        <Celebrations />
        <Venue />
        <RSVP />
        <Blessings />
        <Thanks />
      </main>

      <MusicButton />

      <div className="grain" aria-hidden="true" />
    </>
  )
}

export default App
