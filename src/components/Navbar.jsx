import { useState } from 'react'
import { Anchor, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
              <Anchor className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-slate-900">Sailing Beyond</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#destinations" className="hover:text-slate-900">Destinations</a>
            <a href="#experiences" className="hover:text-slate-900">Experiences</a>
            <a href="#fleet" className="hover:text-slate-900">Fleet</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#book" className="rounded-full bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition">Book Now</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3 text-slate-700">
            <a onClick={() => setOpen(false)} href="#destinations" className="py-2">Destinations</a>
            <a onClick={() => setOpen(false)} href="#experiences" className="py-2">Experiences</a>
            <a onClick={() => setOpen(false)} href="#fleet" className="py-2">Fleet</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2">Contact</a>
            <a onClick={() => setOpen(false)} href="#book" className="py-2 rounded-md bg-blue-600 text-white text-center font-medium">Book Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
