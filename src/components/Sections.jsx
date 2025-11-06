import { Ship, MapPin, Compass } from 'lucide-react'

export default function Sections() {
  const features = [
    {
      title: 'Signature Destinations',
      icon: MapPin,
      desc: 'Mediterranean azure, Caribbean pearls, and secret archipelagos. Our curators trace routes of cinematic beauty and calm seas.'
    },
    {
      title: 'Curated Experiences',
      icon: Compass,
      desc: 'Private chefs, PADI-certified dives, rosé at golden hour, and barefoot beach suppers—meticulously arranged to your taste.'
    },
    {
      title: 'Modern Luxury Fleet',
      icon: Ship,
      desc: 'Performance yachts and serene catamarans with refined interiors, stabilizers, and intuitive tech for effortless days onboard.'
    }
  ]

  return (
    <section id="experiences" className="relative py-28">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.15),rgba(2,6,23,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Crafted for the modern voyager</h2>
          <p className="mt-3 text-slate-300">Every journey is bespoke—planned with precision and delivered with warmth.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur p-6 transition hover:border-emerald-400/30">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:scale-110" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
