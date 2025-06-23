import { TourCard } from "@/components/tour-card"
import { TourFilters } from "@/components/tour-filters"

const tours = [
  {
    id: 1,
    title: "The Best Dream Tour of Kerala",
    rating: 4.5,
    reviews: 48,
    duration: "4N 5D",
    image: "/placeholder.svg?height=200&width=300",
    originalPrice: "Rs 15,000",
    discountedPrice: "Rs 10,000",
    discount: "33% OFF",
  },
  {
    id: 2,
    title: "The Best Dream Tour of Kerala",
    rating: 4.5,
    reviews: 48,
    duration: "4N 5D",
    image: "/placeholder.svg?height=200&width=300",
    originalPrice: "Rs 15,000",
    discountedPrice: "Rs 10,000",
    discount: "33% OFF",
  },
]

export default function ToursPage() {
  return (
    <div className="hero-bg min-h-screen">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-4">DISCOVER INCREDIBLE INDIA!</h1>
          <p className="text-xl">PLAN YOUR SOJOURN TO GOD'S OWN COUNTRY</p>
        </div>

        <div className="flex gap-8 mt-16">
          <div className="w-1/4">
            <TourFilters />
          </div>
          <div className="w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
