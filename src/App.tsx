import { useEffect, useState } from 'react'
import musicSrc from './assets/audio/divine-union.mp3'
import { useBackgroundMusic } from './hooks/useBackgroundMusic'
import OpeningScreen from './components/OpeningScreen'
import PaperTexture from './components/PaperTexture'
import MusicToggle from './components/MusicToggle'
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
  const [showOpening, setShowOpening] = useState(true)
  const [opened, setOpened] = useState(false)
  const { audioRef, isPlaying, play, toggle } = useBackgroundMusic()

  useEffect(() => {
    document.body.style.overflow = showOpening ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showOpening])

  return (
    <div className="min-h-screen bg-paper-wash">
      <audio ref={audioRef} src={musicSrc} loop preload="none" />
      <PaperTexture />

      {showOpening && (
        <OpeningScreen
          onPlayMusic={play}
          onOpened={() => {
            setOpened(true)
            setShowOpening(false)
          }}
        />
      )}

      <main>
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

      <MusicToggle isPlaying={isPlaying} onToggle={toggle} visible={opened} />
    </div>
  )
}

export default App
