import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { posts } from '../data/insights'

export default function InsightsPage() {
  return (
    <>
      <Head>
        <title>Insights — NoLimit Visual</title>
        <meta name="description" content="Articles on AI product design, trust and systems" />
      </Head>

      <div className="min-h-screen bg-[#05070b] text-slate-100">
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-8">
            <p className="eyebrow">Insights</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-semibold">Essays and thinking</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
                <h3 className="text-2xl font-semibold"><Link href={`/insights/${post.slug}`}><a>{post.title}</a></Link></h3>
                <p className="mt-3 text-slate-300">{post.excerpt}</p>
                <div className="mt-4"><Link href={`/insights/${post.slug}`}><a className="text-primary">Read →</a></Link></div>
              </article>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
