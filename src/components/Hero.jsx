import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-200/90">
              Luxury Yacht Charters
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-emerald-200 via-emerald-300 to-cyan-200 drop-shadow-[0_2px_10px_rgba(16,185,129,0.15)]">
              Sail Beyond the Ordinary
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-200/85 leading-relaxed">
              Private voyages across iconic coasts with curated experiences, modern yachts, and a concierge touch from bow to stern.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#book" className="group inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20 transition hover:shadow-emerald-500/30">
                Plan your voyage
                <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#experiences" className="inline-flex items-center rounded-full border border-emerald-400/30 bg-slate-900/40 backdrop-blur px-6 py-3 text-emerald-100 hover:bg-slate-900/60 transition">
                Explore experiences
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70 to-transparent" />
    </section>
  )
}
