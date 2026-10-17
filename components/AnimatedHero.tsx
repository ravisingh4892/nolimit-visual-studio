import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function AnimatedHero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const ctasRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!titleRef.current) return

    gsap.from([titleRef.current, subtitleRef.current, ctasRef.current], {
      y: 32,
      autoAlpha: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out'
    })
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 ref={titleRef} className="text-5xl sm:text-6xl font-extrabold leading-tight">
            Reactive AI Research & Engineering
          </h1>
          <p ref={subtitleRef} className="mt-6 text-lg text-slate-400 max-w-xl">
            Pixel-accurate visual clone with smooth scroll and scroll-triggered animations.
          </p>
          <div ref={ctasRef} className="mt-8 flex gap-4">
            <a className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-black shadow hover:opacity-95" href="#">
              View Work
            </a>
            <a className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-700 text-slate-200" href="#">
              About
            </a>
          </div>
        </div>

        <div>
          <div className="rounded-3xl bg-gradient-to-br from-slate-900/30 to-transparent p-8 shadow-lg">
            <div className="h-56 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center text-slate-400">
              Placeholder image
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800 rounded-xl">Project A</div>
              <div className="p-4 bg-slate-800 rounded-xl">Project B</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
