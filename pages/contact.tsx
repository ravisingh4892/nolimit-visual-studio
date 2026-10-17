import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — NoLimit Visual</title>
      </Head>

      <div className="min-h-screen bg-[#05070b] text-slate-100">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-20">
          <p className="eyebrow">About</p>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-[-0.06em]">We design and engineer AI experiences for real work.</h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            NoLimit Visual works at the intersection of research, product design and execution. We help teams clarify where AI adds leverage, design the experience around trust, and build products that are useful from day one.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold">Strategy</h3>
              <p className="mt-3 text-slate-300">We frame product bets, define success criteria and shorten the path from concept to shipped value.</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold">Design</h3>
              <p className="mt-3 text-slate-300">We create systems and interfaces that users trust, understand and return to because they feel useful.</p>
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-800 bg-slate-950/80 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Principles</p>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Make AI feel clear, not magical.</li>
              <li>• Design for trust, governance and human control.</li>
              <li>• Build systems that can ship in stages and scale with learning.</li>
            </ul>
          </div>

          <div className="mt-12">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-black">Start a conversation</a>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
