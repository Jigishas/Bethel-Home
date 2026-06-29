import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Pillars from './components/Pillars'
import Team from './components/Team'
import Events from './components/Events'
import DonationSection from './components/DonationSection'
import Impact from './components/Impact'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Team />
        <Events />
        <DonationSection />
        <Impact />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
