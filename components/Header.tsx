import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import AnimatedHero from '../components/AnimatedHero'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const metrics = [
  { value: '4x', label: 'faster concept-to-launch cycles' },
  { value: '12+', label: 'AI products shipped' },
  { value: '90%', label: 'reduce manual ops overhead' },
  { value: '24/7', label: 'active insight pipelines' }
]

const services = [
  {
    title: 'AI Strategy',
    text: 'Turn ambiguous opportunities into product-ready roadmaps with measurable ROI and focused experimentation.'
  },
  {
    title: 'Product Design',
    text: 'Design systems, interface patterns, and product narratives that feel premium, trustworthy and conversion-focused.'
  },
  {
    title: 'Systems Build',
    text: 'Integrate agents, workflows, and product experiences that scale from prototype to production deployment.'
  }
]

const caseStudies = [
  {
    title: 'Signal OS',
    tag: 'AI Operations',
    text: 'A workflow intelligence layer that helps teams automate triage, summarization and escalation across operations.'
  },
  {
    title: 'Nexus Pilot',
    tag: 'Product Design',
    text: 'A rapid experimentation platform for exploring user journeys, prompts, pricing panels and AI features.'
  },
  {
    title: 'Sage Loop',
    tag: 'Research',
    text: 'A decision-support system for research teams that blends qualitative insight with measurable action loops.'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>NoLimit Visual Studio — Higgsfield clone</title>
        <meta name="description" content="AI strategy, design and product systems for teams building with intelligence at the edge of experience." />
      </Head>

      <div className="min-h-screen bg-[#05070b] text-slate-100">
        <Header />
        <main>
          <AnimatedHero />

          <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
            <div className="grid md:grid-cols-4 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 backdrop-blur-sm">
                  <div className="text-3xl font-semibold text-primary">{metric.value}</div>
                  <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow">What we do</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-semibold">AI systems built for real outcomes.</h2>
              </div>
              <Link href="/about">
                <a className="text-sm font-medium text-primary hover:text-lime-300">About the studio →</a>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="group rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition-transform hover:-translate-y-1 hover:border-lime-400/40">
                  <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-lime-400/40 bg-lime-400/10 text-sm font-semibold text-primary">
                    0{services.indexOf(service) + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-slate-300 leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-8">
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Built for founders, operators and teams in motion.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <ProjectCard key={study.title} title={study.title} tag={study.tag}>
                  {study.text}
                </ProjectCard>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="rounded-[32px] border border-slate-800 bg-slate-950/80 p-8 md:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="eyebrow">Why teams choose us</p>
                  <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Strategy, product and systems under one roof.</h2>
                </div>
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center rounded-full border border-lime-400/50 bg-lime-400/10 px-5 py-3 text-sm font-medium text-primary transition hover:bg-lime-400/20">
                    Book a conversation
                  </a>
                </Link>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <h3 className="text-lg font-semibold text-white">From concept to signal</h3>
                  <p className="mt-3 text-slate-300">We turn noisy AI hype into clear product bets, user narratives and execution plans.</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <h3 className="text-lg font-semibold text-white">Builds trust into the experience</h3>
                  <p className="mt-3 text-slate-300">Each screen, workflow and interaction is designed to feel direct, credible and commercially useful.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
