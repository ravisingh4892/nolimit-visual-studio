import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#05070b]">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 px-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">NoLimit Visual</p>
          <p className="mt-3 max-w-md text-sm text-slate-400">
            AI strategy, design systems and product experiences for ambitious teams.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-slate-300">
          <Link href="/about"><a>About</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <a href="mailto:hello@nolimitvisual.com">hello@nolimitvisual.com</a>
        </div>
      </div>
    </footer>
  )
}
