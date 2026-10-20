import Link from 'next/link'

const navItems = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Contact', href: '/contact' }
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#05070b]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/">
          <a className="text-lg font-semibold tracking-tight text-white">NoLimit Visual</a>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <a className="text-sm text-slate-300 transition hover:text-white">{item.label}</a>
            </Link>
          ))}
        </nav>

        <Link href="/contact">
          <a className="inline-flex items-center justify-center rounded-full border border-lime-400/50 bg-lime-400/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-lime-400/20">
            Start a project
          </a>
        </Link>
      </div>
    </header>
  )
}
