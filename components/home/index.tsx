import Navbar from "./Navbar"
import Hero from "./Hero"
import Identity from "./Identity"
import Services from "./Services"
import FeaturedWork from "./FeaturedWork"
import ImpactPhilosophy from "./ImpactPhilosophy"
import CTA from "./CTA"
import Footer from "./Footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <div className="relative w-full overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--accent)_0%,transparent_50%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,var(--primary)_0%,transparent_50%)] opacity-5" />
        <Identity />
        <Services />
        <FeaturedWork />
        <ImpactPhilosophy />
      </div>
      <CTA />
      <Footer />
    </main>
  )
}
