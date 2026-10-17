import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { posts } from '../../data/insights'

export default function InsightSlug() {
  const slug = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : ''
  const post = posts.find((p) => p.slug === slug) || posts[0]

  return (
    <>
      <Head>
        <title>{post.title} — NoLimit Visual</title>
      </Head>

      <div className="min-h-screen bg-[#05070b] text-slate-100">
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-8">
            <p className="eyebrow">Insights</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-semibold">{post.title}</h1>
          </div>

          <article className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <div className="mt-12">
            <Link href="/insights">
              <a className="text-primary">← Back to insights</a>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
