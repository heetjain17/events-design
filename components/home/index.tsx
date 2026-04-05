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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#8b3a3a_0%,transparent_35%)] opacity-12 dark:bg-[radial-gradient(circle_at_20%_10%,#4a2c2a_0%,transparent_35%)] dark:opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,#a04848_0%,transparent_40%)] opacity-10 dark:bg-[radial-gradient(circle_at_80%_15%,#6b3e3e_0%,transparent_40%)] dark:opacity-12" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#944444_0%,transparent_45%)] opacity-8 dark:bg-[radial-gradient(circle_at_50%_30%,#5c3838_0%,transparent_45%)] dark:opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,#7d3535_0%,transparent_50%)] opacity-6 dark:bg-[radial-gradient(circle_at_30%_60%,#4a2c2a_0%,transparent_50%)] dark:opacity-8" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,#6b2e2e_0%,transparent_50%)] opacity-6 dark:bg-[radial-gradient(circle_at_70%_75%,#3d2424_0%,transparent_50%)] dark:opacity-8" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#8b3a3a_0%,transparent_30%)] opacity-4 dark:bg-[linear-gradient(to_bottom,#4a2c2a_0%,transparent_30%)] dark:opacity-5" />
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
