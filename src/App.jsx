import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-inter bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-100">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
