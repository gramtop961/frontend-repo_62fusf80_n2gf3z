import { useEffect, useState } from 'react'
import { Anchor, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-emerald-400/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-slate-900 shadow-md shadow-emerald-500/30">
              <Anchor className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-slate-100">Sailing Beyond</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#destinations" className="hover:text-white/90">Destinations</a>
            <a href="#experiences" className="hover:text-white/90">Experiences</a>
            <a href="#fleet" className="hover:text-white/90">Fleet</a>
            <a href="#contact" className="hover:text-white/90">Contact</a>
            <a href="#book" className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-slate-900 font-medium shadow shadow-emerald-500/30 hover:shadow-emerald-500/40 transition">Book Now</a>
          </nav>

          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-100/90 hover:bg-white/5">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3 text-slate-200">
            <a onClick={() => setOpen(false)} href="#destinations" className="py-2">Destinations</a>
            <a onClick={() => setOpen(false)} href="#experiences" className="py-2">Experiences</a>
            <a onClick={() => setOpen(false)} href="#fleet" className="py-2">Fleet</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2">Contact</a>
            <a onClick={() => setOpen(false)} href="#book" className="py-2 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 text-center font-medium">Book Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
