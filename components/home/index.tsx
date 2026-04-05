import Navbar from "./Navbar"
import Hero from "./Hero"
import Identity from "./Identity"
import Services from "./Services"
import FeaturedWork from "./FeaturedWork"
import ScaleImpact from "./ScaleImpact"
import Philosophy from "./Philosophy"
import CTA from "./CTA"
import Footer from "./Footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Identity />
      <Services />
      <FeaturedWork />
      <ScaleImpact />
      <Philosophy />
      <CTA />
      <Footer />
    </main>
  )
}
