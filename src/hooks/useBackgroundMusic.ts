import { useCallback, useRef, useState } from 'react'

/**
 * Centralises the single <audio> element used for the wedding soundtrack so
 * both the opening-invitation gesture and the floating toggle can control it.
 */
export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const play = useCallback(() => {
    const el = audioRef.current
    if (!el) return
    el
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // Autoplay was blocked — the floating control lets the guest start it manually.
        setIsPlaying(false)
      })
  }, [])

  const pause = useCallback(() => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }, [])

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }, [isPlaying, pause, play])

  return { audioRef, isPlaying, play, pause, toggle }
}
