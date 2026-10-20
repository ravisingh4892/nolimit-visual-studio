import { useRef, useEffect, ReactNode } from 'react'
import { gsap } from 'gsap'

type Props = {
  title: string
  tag?: string
  children?: ReactNode
}

export default function ProjectCard({ title, tag, children }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!cardRef.current) return

    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 24,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
  }, [])

  return (
    <article ref={cardRef} className="group overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/80 shadow-[0_18px_60px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-2 hover:border-lime-400/40">
      <div className="flex h-44 items-center justify-center border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(209,254,23,0.10),_transparent_30%),linear-gradient(135deg,#111827,#0f172a_40%,#030712)] text-slate-400">
        Mockup / visual
      </div>
      <div className="p-6">
        {tag ? (
          <span className="inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-primary">
            {tag}
          </span>
        ) : null}
        <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-slate-300 leading-relaxed">{children}</p>
      </div>
    </article>
  )
}
