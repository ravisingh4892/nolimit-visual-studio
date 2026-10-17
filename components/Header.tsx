import Link from 'next/link'

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <Link href="/">
        <a className="text-xl font-semibold">NoLimit Visual</a>
      </Link>
      <nav className="space-x-6">
        <a href="#" className="text-sm text-slate-300 hover:text-white">Work</a>
        <a href="#" className="text-sm text-slate-300 hover:text-white">Blog</a>
        <a href="#" className="text-sm text-slate-300 hover:text-white">Contact</a>
      </nav>
    </header>
  )
}
