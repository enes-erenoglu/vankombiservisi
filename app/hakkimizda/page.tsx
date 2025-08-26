import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"
import { AboutFeatures } from "@/components/about-features"
import { AboutServices } from "@/components/about-services"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutContent />
      <AboutFeatures />
      <AboutServices />
    </main>
  )
}
