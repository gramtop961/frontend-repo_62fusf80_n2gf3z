export default function CTA() {
  return (
    <section id="book" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur p-8 md:p-12 shadow-[0_10px_60px_-15px_rgba(16,185,129,0.25)]">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to chart your course?</h3>
            <p className="mt-3 text-slate-300">Tell us about your dream voyage and our concierge will craft a tailored itinerary within 24 hours.</p>
          </div>

          <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <input required type="text" placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/60" />
            <input required type="email" placeholder="Email address" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/60" />
            <input required type="text" placeholder="Preferred destination" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/60" />
            <textarea required placeholder="Tell us more (dates, guests, interests)" className="md:col-span-3 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/60" rows={4} />
            <div className="md:col-span-3 flex items-center gap-3">
              <button type="submit" className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-slate-900 font-semibold shadow shadow-emerald-500/30 hover:shadow-emerald-500/40 transition">Request itinerary</button>
              <p className="text-xs text-slate-400">We’ll get back within 24 hours. No spam.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
