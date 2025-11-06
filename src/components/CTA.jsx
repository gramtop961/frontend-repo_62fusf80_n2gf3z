export default function CTA() {
  return (
    <section id="book" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-blue-50 to-indigo-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-10 md:p-14 shadow-xl">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Ready to chart your course?</h3>
            <p className="mt-3 text-slate-600">Tell us about your dream voyage and our concierge will craft a tailored itinerary within 24 hours.</p>
          </div>

          <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <input required type="text" placeholder="Your name" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="email" placeholder="Email address" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="text" placeholder="Preferred destination" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea required placeholder="Tell us more (dates, guests, interests)" className="md:col-span-3 w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} />
            <div className="md:col-span-3 flex items-center gap-3">
              <button type="submit" className="rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition">Request itinerary</button>
              <p className="text-xs text-slate-500">We’ll get back within 24 hours. No spam.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
