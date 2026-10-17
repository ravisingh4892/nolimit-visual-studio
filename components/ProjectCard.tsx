import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function AnimatedHero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const ctasRef = useRef<HTMLDivElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!titleRef.current) return

    gsap.from([titleRef.current, subtitleRef.current, ctasRef.current, panelRef.current], {
      y: 28,
      autoAlpha: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: 'power3.out'
    })
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(209,254,23,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.10),_transparent_25%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">AI product design studio</p>
            <h1 ref={titleRef} className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
              Build AI experiences that feel intentional.
            </h1>
            <p ref={subtitleRef} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              We help teams turn AI ambition into product strategy, interface design and deployment systems that create trust at scale.
            </p>

            <div ref={ctasRef} className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#work" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-black transition hover:shadow-neon">
                View our work
              </a>
              <Link href="/contact">
                <a className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-500">
                  Book a call
                </a>
              </Link>
            </div>
          </div>

          <div ref={panelRef} className="rounded-[28px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            <div className="rounded-[22px] border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                <span>Signal</span>
                <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-2 py-1 text-primary">Live</span>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-800 bg-[#0a0d12] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Pipeline health</div>
                    <div className="mt-1 text-3xl font-semibold text-white">92%</div>
                  </div>
                  <div className="rounded-full bg-lime-400/10 px-2 py-1 text-sm text-primary">+18% QoQ</div>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[92%] rounded-full bg-primary" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Ops</div>
                  <div className="mt-2 text-2xl font-semibold text-white">4.7x</div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Velocity</div>
                  <div className="mt-2 text-2xl font-semibold text-white">2.1x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
