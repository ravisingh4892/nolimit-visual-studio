export default function Footer() {
  return (
    <footer className="border-t mt-20 border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} NoLimit Visual Studio</div>
        <div className="text-sm text-slate-400">Built with Next.js + Tailwind + GSAP</div>
      </div>
    </footer>
  )
}
