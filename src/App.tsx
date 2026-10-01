import { useEffect } from 'react'
import musicSrc from './assets/audio/divine-union.mp3'
import { useBackgroundMusic } from './hooks/useBackgroundMusic'
import PaperTexture from './components/PaperTexture'
import MusicToggle from './components/MusicToggle'
import Invocation from './components/Invocation'
import Hero from './components/Hero'
import Story from './components/Story'
import SevenSteps from './components/SevenSteps'
import Celebrations from './components/Celebrations'
import Venue from './components/Venue'
import FamilyInvitation from './components/FamilyInvitation'
import FamilyBlessings from './components/FamilyBlessings'
import LittleStars from './components/LittleStars'
import RSVP from './components/RSVP'
import ThankYou from './components/ThankYou'
import Footer from './components/Footer'

function App() {
  const { audioRef, isPlaying, play, toggle } = useBackgroundMusic()

  useEffect(() => {
    // Browsers block autoplay without a prior gesture; this quietly succeeds
    // when allowed and otherwise leaves the floating toggle for the guest.
    play()
  }, [play])

  return (
    <div className="min-h-screen bg-paper-wash">
      <audio ref={audioRef} src={musicSrc} loop preload="none" />
      <PaperTexture />

      <main>
        <Invocation />
        <Hero />
        <Story />
        <SevenSteps />
        <Celebrations />
        <Venue />
        <FamilyInvitation />
        <FamilyBlessings />
        <LittleStars />
        <RSVP />
        <ThankYou />
      </main>
      <Footer />

      <MusicToggle isPlaying={isPlaying} onToggle={toggle} visible />
    </div>
  )
}

export default App
