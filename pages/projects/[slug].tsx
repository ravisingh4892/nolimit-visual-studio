import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { projects } from '../../data/projects'

export default function ProjectSlug({}) {
  const slug = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : ''
  const project = projects.find((p) => p.slug === slug) || projects[0]

  return (
    <>
      <Head>
        <title>{project.title} — NoLimit Visual</title>
      </Head>

      <div className="min-h-screen bg-[#05070b] text-slate-100">
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-8">
            <p className="eyebrow">Case study</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-semibold">{project.title}</h1>
            <p className="mt-4 text-slate-300">{project.short}</p>
          </div>

          <article className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </article>

          <div className="mt-12">
            <Link href="/projects">
              <a className="text-primary">← Back to projects</a>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
