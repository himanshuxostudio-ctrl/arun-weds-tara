import { useEffect } from 'react'
import { Flora, PALETTES } from './flora'

/**
 * Ported from the original project's js/main.js. Wires up the envelope
 * opening sequence, background music, scroll reveals, parallax and the
 * countdown — operating on the same ids/classes/data-attributes as the
 * source markup, so behaviour and timing match the original invitation.
 */
export function useInvitationEngine() {
  useEffect(() => {
    const body = document.body
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    const cleanups: Array<() => void> = []

    /* ------------------------------------------------------------------
     * 1. Paint the botanical artwork into the placeholders
     * ---------------------------------------------------------------- */
    let sealCount = 0
    function sealSVG() {
      const id = 'seal' + sealCount++
      const pts: string[] = []
      for (let i = 0; i < 90; i++) {
        const t = (i / 90) * Math.PI * 2
        const r = 47 * (1 + 0.035 * Math.sin(7 * t) + 0.025 * Math.sin(11 * t + 0.7) + 0.018 * Math.sin(17 * t + 2))
        pts.push((50 + Math.cos(t) * r).toFixed(2) + ' ' + (50 + Math.sin(t) * r).toFixed(2))
      }
      const blob = 'M' + pts.join(' L') + 'Z'
      return Flora.svg(100, 100,
        '<defs>' +
          '<radialGradient id="' + id + 'w" cx="38%" cy="32%" r="75%">' +
            '<stop offset="0" stop-color="#fffaf1"/><stop offset=".45" stop-color="#f3e6d2"/>' +
            '<stop offset=".8" stop-color="#e2cdb0"/><stop offset="1" stop-color="#cdb08c"/></radialGradient>' +
          '<radialGradient id="' + id + 'i" cx="62%" cy="68%" r="80%">' +
            '<stop offset="0" stop-color="#fbf3e6"/><stop offset=".7" stop-color="#efe1cb"/><stop offset="1" stop-color="#dcc5a5"/></radialGradient>' +
        '</defs>' +
        '<path d="' + blob + '" fill="url(#' + id + 'w)"/>' +
        '<path d="' + blob + '" fill="none" stroke="#c6a57e" stroke-opacity=".45" stroke-width=".8"/>' +
        '<circle cx="50" cy="50" r="34" fill="url(#' + id + 'i)" stroke="#c9a77d" stroke-opacity=".6" stroke-width=".9"/>' +
        '<circle cx="50" cy="50" r="31" fill="none" stroke="#fffaf0" stroke-opacity=".8" stroke-width=".7"/>' +
        '<circle cx="50" cy="50" r="38.5" fill="none" stroke="#b89466" stroke-opacity=".35" stroke-width=".5" stroke-dasharray="1 2.2"/>',
        'seal-svg')
    }

    const E = PALETTES.emboss, C = PALETTES.color
    const painters: Record<string, (el: Element) => string> = {
      'emboss-top': () => {
        const r = Flora.rng(3)
        let b = Flora.cluster(150, 92, 92, 101, E, { dirs: [180, 200, 160, 0, 340, 20, 230, 310, 90, 60, 120] })
        b += Flora.branch(60, 60, 20, 30, 6, 4, E, { rand: r, leaves: 5, size: 14, tipBud: true })
        b += Flora.branch(240, 60, 280, 30, 294, 4, E, { rand: r, leaves: 5, size: 14, tipBud: true })
        return Flora.svg(300, 200, b)
      },
      'emboss-side': () => {
        const r = Flora.rng(9)
        let b = Flora.branch(40, 410, 90, 220, 36, 10, E, { rand: r, leaves: 13, size: 20, tipBud: true })
        b += Flora.branch(52, 300, 100, 250, 92, 170, E, { rand: r, leaves: 5, size: 15, tipBud: true })
        b += Flora.rose(60, 210, 20, 30, E) + Flora.rose(40, 240, 13, 120, E) + Flora.rose(70, 120, 12, 60, E) + Flora.rose(46, 330, 11, 10, E)
        return Flora.svg(120, 420, b)
      },
      'emboss-bottom': () => {
        const b = Flora.cluster(150, 120, 96, 205, E, { dirs: [180, 200, 165, 0, 345, 20, 240, 300, 270, 140, 40] })
        return Flora.svg(300, 230, b)
      },
      seal: sealSVG,
      corner: (el) => Flora.svg(230, 230, Flora.corner(+(el.getAttribute('data-seed') || 1), C, 230, 230), 'corner-svg'),
      spray: (el) => {
        const seed = +(el.getAttribute('data-seed') || 1)
        return Flora.svg(320, 120, Flora.cluster(160, 60, 70, seed, C, {
          dirs: [178, 190, 168, 2, 350, 12, 210, 330, 150, 30],
          roses: [[0, 0, 1], [-1.3, 0.25, 0.7], [1.3, 0.2, 0.7], [-0.55, -0.85, 0.5], [0.6, 0.85, 0.5]],
        }), 'spray-svg')
      },
      arch: () => Flora.archTop(360, 170),
      flourish: () => Flora.flourish(240),
      venue: () => Flora.venue(),
    }

    document.querySelectorAll('[data-flora]').forEach((el) => {
      if (el.childElementCount > 0) return // already painted (StrictMode double-invoke safe)
      const key = el.getAttribute('data-flora') || ''
      let html: string | undefined
      if (key.indexOf('icon:') === 0) html = Flora.icon(key.slice(5))
      else if (painters[key]) html = painters[key](el)
      if (html) el.insertAdjacentHTML('afterbegin', html)
    })

    /* ------------------------------------------------------------------
     * 2. Music
     * ---------------------------------------------------------------- */
    const audio = document.getElementById('bgm') as HTMLAudioElement | null
    const musicBtn = document.getElementById('music') as HTMLButtonElement | null
    let wantMusic = false
    let fadeTimer: ReturnType<typeof setInterval> | null = null

    function setMusicUI(playing: boolean) {
      if (!musicBtn) return
      musicBtn.classList.toggle('is-playing', playing)
      musicBtn.setAttribute('aria-pressed', playing ? 'true' : 'false')
      musicBtn.setAttribute('aria-label', playing ? 'संगीत रोकें' : 'संगीत चलाएँ')
    }
    setMusicUI(false)

    function fadeIn() {
      if (!audio) return
      if (fadeTimer) clearInterval(fadeTimer)
      let v = 0
      try { audio.volume = 0 } catch { /* iOS: volume is read-only */ }
      fadeTimer = setInterval(() => {
        v = Math.min(0.75, v + 0.03)
        try { audio.volume = v } catch { if (fadeTimer) clearInterval(fadeTimer) }
        if (v >= 0.75 && fadeTimer) clearInterval(fadeTimer)
      }, 80)
    }

    function playMusic() {
      if (!audio) return
      wantMusic = true
      const p = audio.play()
      if (p && p.then) {
        p.then(() => { setMusicUI(true); fadeIn() }).catch(() => setMusicUI(false))
      } else {
        setMusicUI(true)
      }
    }

    function pauseMusic() {
      if (!audio) return
      wantMusic = false
      audio.pause()
      setMusicUI(false)
    }

    function onMusicClick() {
      if (!audio) return
      if (audio.paused) playMusic(); else pauseMusic()
    }
    musicBtn?.addEventListener('click', onMusicClick)
    cleanups.push(() => musicBtn?.removeEventListener('click', onMusicClick))

    function onVisibilityChange() {
      if (!audio) return
      if (document.hidden) { if (!audio.paused) audio.pause() }
      else if (wantMusic && audio.paused) { audio.play().catch(() => {}) }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    cleanups.push(() => document.removeEventListener('visibilitychange', onVisibilityChange))
    cleanups.push(() => { if (fadeTimer) clearInterval(fadeTimer) })

    /* ------------------------------------------------------------------
     * 3. Envelope opening
     * ---------------------------------------------------------------- */
    const envelope = document.getElementById('envelope')
    const card = envelope?.querySelector('.env-card') as HTMLElement | null
    let opened = false
    const openTimers: Array<ReturnType<typeof setTimeout>> = []

    function openEnvelope() {
      if (opened || !envelope) return
      opened = true
      playMusic() // inside the user gesture, so browsers allow it

      const slowMatch = location.search.match(/[?&]slow=([\d.]+)/)
      const slow = (slowMatch && parseFloat(slowMatch[1])) || 1
      const k = (reduceMotion ? 0.3 : 1) * slow
      function at(ms: number, fn: () => void) { openTimers.push(setTimeout(fn, ms * k)) }

      envelope.classList.add('is-pressed')
      at(190, () => envelope.classList.add('is-released'))
      at(650, () => envelope.classList.add('is-lifting'))
      at(1900, () => envelope.classList.add('is-rising'))
      at(3500, () => {
        if (!card) return
        const r = card.getBoundingClientRect()
        const colW = Math.min(window.innerWidth, 480)
        const scale = colW / r.width
        const dx = window.innerWidth / 2 - (r.left + r.width / 2)
        const dy = -r.top
        const base = getComputedStyle(card).transform
        card.style.transition = 'transform 1.4s cubic-bezier(.6,0,.2,1)'
        card.style.transform = 'translate(' + dx + 'px,' + dy + 'px) ' + (base === 'none' ? '' : base) + ' scale(' + scale + ')'
        envelope.classList.add('is-expanding')
      })
      at(4500, () => envelope.classList.add('is-fading'))
      at(4600, () => body.classList.add('is-revealed'))
      at(5500, () => {
        envelope.classList.add('is-gone')
        body.classList.remove('is-sealed')
        musicBtn?.classList.add('is-visible')
      })
    }

    const sealBtn = document.getElementById('seal')
    const openBtn = document.getElementById('openBtn')
    sealBtn?.addEventListener('click', openEnvelope)
    openBtn?.addEventListener('click', openEnvelope)
    cleanups.push(() => {
      sealBtn?.removeEventListener('click', openEnvelope)
      openBtn?.removeEventListener('click', openEnvelope)
      openTimers.forEach(clearTimeout)
    })

    /* ------------------------------------------------------------------
     * 4. Scroll reveals
     * ---------------------------------------------------------------- */
    const revealEls = document.querySelectorAll('[data-reveal]')
    if ('IntersectionObserver' in window && !reduceMotion) {
      const watched: Array<[Element, Element]> = []
      function revealTarget(el: Element) {
        return el.getAttribute('data-reveal') === 'unfold' ? (el.parentNode as Element) : el
      }
      const io = new IntersectionObserver((entries) => {
        let n = 0
        entries.forEach((en) => {
          if (!en.isIntersecting) return
          watched.forEach((pair) => {
            if (pair[1] !== en.target || pair[0].classList.contains('in')) return
            ;(pair[0] as HTMLElement).style.setProperty('--d', n++ * 110 + 'ms')
            pair[0].classList.add('in')
          })
          io.unobserve(en.target)
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
      revealEls.forEach((el) => {
        const t = revealTarget(el)
        watched.push([el, t])
        io.observe(t)
      })
      cleanups.push(() => io.disconnect())
    } else {
      revealEls.forEach((el) => el.classList.add('in'))
    }

    /* ------------------------------------------------------------------
     * 5. Gentle parallax
     * ---------------------------------------------------------------- */
    const parallaxEls = reduceMotion ? [] : Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    let ticking = false
    function parallax() {
      ticking = false
      const vh = window.innerHeight
      for (const el of parallaxEls) {
        const r = (el.parentNode as HTMLElement).getBoundingClientRect()
        if (r.bottom < -100 || r.top > vh + 100) continue
        const shift = (r.top + r.height / 2 - vh / 2) * parseFloat(el.getAttribute('data-parallax') || '0')
        el.style.setProperty('--py', shift.toFixed(1) + 'px')
      }
    }
    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(parallax) }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', parallax)
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', parallax)
    })
    parallax()

    /* ------------------------------------------------------------------
     * 6. Countdown — to the Swagat Barat, 7:00 PM IST on 21 November 2026
     * ---------------------------------------------------------------- */
    const WEDDING = Date.UTC(2026, 10, 21, 13, 30, 0) // 19:00 IST = 13:30 UTC
    const cdEls: Record<string, HTMLElement> = {}
    document.querySelectorAll<HTMLElement>('[data-cd]').forEach((el) => {
      cdEls[el.getAttribute('data-cd') || ''] = el
    })
    function pad(n: number) { return n < 10 ? '0' + n : String(n) }
    let countdownTimer: ReturnType<typeof setTimeout> | null = null
    function tick() {
      const left = Math.max(0, Math.floor((WEDDING - Date.now()) / 1000))
      const vals: Record<string, number> = {
        d: Math.floor(left / 86400),
        h: Math.floor((left % 86400) / 3600),
        m: Math.floor((left % 3600) / 60),
        s: left % 60,
      }
      for (const key in vals) {
        const txt = pad(vals[key])
        if (cdEls[key] && cdEls[key].textContent !== txt) cdEls[key].textContent = txt
      }
      if (left > 0) countdownTimer = setTimeout(tick, 1000 - (Date.now() % 1000))
    }
    tick()
    cleanups.push(() => { if (countdownTimer) clearTimeout(countdownTimer) })

    return () => cleanups.forEach((fn) => fn())
  }, [])
}
