import { HeroSection } from "@/components/hero-section"
import { AirlinePartners } from "@/components/airline-partners"
import { BestOffers } from "@/components/best-offers"
import { DestinationCards } from "@/components/destination-cards"
import { ExploreNearest } from "@/components/explore-nearest"
import { TravelExperiences } from "@/components/travel-experiences"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AirlinePartners />
      <BestOffers />
      <DestinationCards />
      <ExploreNearest />
      <TravelExperiences />
      <ContactSection />
    </div>
  )
}
