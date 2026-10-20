import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — NoLimit Visual</title>
      </Head>

      <div className="min-h-screen bg-[#05070b] text-slate-100">
        <Header />
        <main className="max-w-3xl mx-auto px-6 py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.06em]">Let’s build what’s next.</h1>

          <div className="mt-10 rounded-[28px] border border-slate-800 bg-slate-900/80 p-8">
            <p className="text-slate-300 leading-relaxed">
              For product strategy, AI experience design and systems build, reach out at <a className="text-primary" href="mailto:hello@nolimitvisual.com">hello@nolimitvisual.com</a>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="rounded-full border border-slate-700 px-3 py-2">Strategy</span>
              <span className="rounded-full border border-slate-700 px-3 py-2">Product Design</span>
              <span className="rounded-full border border-slate-700 px-3 py-2">AI Systems</span>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
