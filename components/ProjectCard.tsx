import { useRef, useEffect, ReactNode } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

type Props = {
  title: string
  children?: ReactNode
}

export default function ProjectCard({ title, children }: Props) {
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
    <article ref={cardRef} className="card transition-transform will-change-transform hover:-translate-y-1">
      <div className="h-40 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">
        Screenshot
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <div className="mt-2 text-sm text-slate-400">{children}</div>
    </article>
  )
}
