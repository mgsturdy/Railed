import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ExampleDeal from './components/ExampleDeal'
import Testimonials from './components/Testimonials'
import Compliance from './components/Compliance'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ExampleDeal />
        <Testimonials />
        <Compliance />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
