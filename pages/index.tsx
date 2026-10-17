import Head from 'next/head'
import Header from '../components/Header'
import AnimatedHero from '../components/AnimatedHero'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>NoLimit Visual Studio — Higgsfield clone</title>
        <meta name="description" content="Pixel-approximate clone of higgsfield.ai built with Next.js, TypeScript, Tailwind, GSAP and Lenis" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <AnimatedHero />

          <section className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProjectCard key={i} title={`Project ${i + 1}`}>
                  Short description of the project and the outcome.
                </ProjectCard>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
