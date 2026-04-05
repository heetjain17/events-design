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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgb(218,169,165)_0%,transparent_35%)] opacity-12 dark:bg-[radial-gradient(circle_at_20%_10%,rgb(14,13,13)_0%,transparent_35%)] dark:opacity-18" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgb(218,169,165)_0%,transparent_40%)] opacity-10 dark:bg-[radial-gradient(circle_at_80%_15%,rgb(14,13,13)_0%,transparent_40%)] dark:opacity-16" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgb(218,169,165)_0%,transparent_45%)] opacity-8 dark:bg-[radial-gradient(circle_at_50%_30%,rgb(14,13,13)_0%,transparent_45%)] dark:opacity-14" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,#a04848_0%,transparent_45%)] opacity-14 dark:bg-[radial-gradient(circle_at_30%_60%,#5c1a1a_0%,transparent_45%)] dark:opacity-14" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,#8b3a3a_0%,transparent_45%)] opacity-12 dark:bg-[radial-gradient(circle_at_70%_75%,#4a1515_0%,transparent_45%)] dark:opacity-12" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(218,169,165)_0%,transparent_30%)] opacity-8 dark:bg-[linear-gradient(to_bottom,rgb(14,13,13)_0%,transparent_30%)] dark:opacity-8" />
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
