import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ygsSaWz5lM4VQPIj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
              Sail Beyond The Ordinary
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-xl">
              Curated voyages to the world’s most breathtaking coasts. Private charters, expert crews, and unforgettable experiences.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#book" className="rounded-full bg-white/90 backdrop-blur px-6 py-3 text-slate-900 font-semibold hover:bg-white transition">Plan your voyage</a>
              <a href="#experiences" className="rounded-full bg-slate-900/70 px-6 py-3 text-white font-semibold hover:bg-slate-900/90 transition">Explore experiences</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/20 to-white"></div>
    </section>
  )
}
