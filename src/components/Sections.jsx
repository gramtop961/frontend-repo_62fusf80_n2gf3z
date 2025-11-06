import { Ship, MapPin, Compass } from 'lucide-react'

export default function Sections() {
  const features = [
    {
      title: 'Signature Destinations',
      icon: MapPin,
      desc: 'From the azure coves of the Mediterranean to the pristine isles of the Caribbean, choose from handpicked routes designed for wonder.'
    },
    {
      title: 'Curated Experiences',
      icon: Compass,
      desc: 'Chef-crafted dining, diving with certified guides, sunset sails, and secluded beach picnics—crafted to your tastes.'
    },
    {
      title: 'Luxury Fleet',
      icon: Ship,
      desc: 'A modern collection of yachts and catamarans with spacious decks, elegant cabins, and best-in-class safety.'
    }
  ]

  return (
    <section id="experiences" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Crafted for the modern voyager</h2>
          <p className="mt-3 text-slate-600">Every journey is bespoke—planned with precision and delivered with warmth.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
