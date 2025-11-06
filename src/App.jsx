import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-inter text-slate-800 bg-white">
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
