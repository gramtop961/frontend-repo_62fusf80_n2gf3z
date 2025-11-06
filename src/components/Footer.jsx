export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Sailing Beyond. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#destinations" className="hover:text-white/90">Destinations</a>
            <a href="#experiences" className="hover:text-white/90">Experiences</a>
            <a href="#fleet" className="hover:text-white/90">Fleet</a>
            <a href="#book" className="hover:text-white/90">Book</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
