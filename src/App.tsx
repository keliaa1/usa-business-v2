import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesChess from './components/FeaturesChess'
import FeaturesGrid from './components/FeaturesGrid'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CtaFooter from './components/CtaFooter'

function App() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="bg-[#f8f9fa]">
          <FeaturesChess />
          <FeaturesGrid />
          <Stats />
          <Pricing />
          <Testimonials />
          <CtaFooter />
        </div>
      </div>
    </div>
  )
}

export default App
