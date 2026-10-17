import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { projects } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Work — NoLimit Visual</title>
        <meta name="description" content="Selected case studies and projects from NoLimit Visual" />
      </Head>

      <div className="min-h-screen bg-[#05070b] text-slate-100">
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-8">
            <p className="eyebrow">Selected work</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-semibold">Case studies</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} title={p.title} tag={p.tag}>
                {p.short}
                <div className="mt-4">
                  <Link href={`/projects/${p.slug}`}>
                    <a className="text-sm font-medium text-primary">Read case study →</a>
                  </Link>
                </div>
              </ProjectCard>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
