import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function useLenisGsap() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      smoothTouch: false
    })

    const frame = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(frame)
    }

    requestAnimationFrame(frame)
    lenis.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value: number) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
      pinType: document.documentElement.style.transform ? 'transform' : 'fixed'
    })

    setTimeout(() => ScrollTrigger.refresh(), 50)

    return () => {
      ScrollTrigger.kill()
      lenis.destroy()
    }
  }, [])
}
