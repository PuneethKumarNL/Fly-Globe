import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const destinations = [
  {
    city: "ROME",
    country: "Italy",
    price: "₹1200",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    city: "ROME",
    country: "Italy",
    price: "₹1200",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    city: "ROME",
    country: "Italy",
    price: "₹500",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    city: "ROME",
    country: "Italy",
    price: "₹500",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    city: "ROME",
    country: "Italy",
    price: "₹500",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    city: "ROME",
    country: "Italy",
    price: "₹500",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    city: "ROME",
    country: "Italy",
    price: "₹500",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
]

export function DestinationCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">DISCOVER</h2>
          <p className="text-gray-600 mb-6">More than 200 destinations</p>
          <p className="text-gray-600 mb-8">
            Explore our curated list of the best countries to visit in 2024 and discover breathtaking destinations
            waiting to be explored.
          </p>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge variant="default" className="bg-blue-600 hover:bg-blue-700 px-4 py-2">
              All
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Asia
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              European
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Middle East
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Beach Paradise
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Nature Services
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Romantic Escapes
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Cultural Immersion
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Africas
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Americas
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Featured Large Cards */}
          <div className="lg:col-span-2 lg:row-span-2">
            <Card className="h-full overflow-hidden group cursor-pointer">
              <div className="relative h-full">
                <Image
                  src={destinations[0].image || "/placeholder.svg"}
                  alt={destinations[0].city}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-blue-600">ROME</Badge>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-2xl font-bold">{destinations[0].city}</h3>
                  <p className="text-white/80">{destinations[0].country}</p>
                  <p className="text-white font-bold text-xl mt-2">{destinations[0].price}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2 lg:row-span-2">
            <Card className="h-full overflow-hidden group cursor-pointer">
              <div className="relative h-full">
                <Image
                  src={destinations[1].image || "/placeholder.svg"}
                  alt={destinations[1].city}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-blue-600">ROME</Badge>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-2xl font-bold">{destinations[1].city}</h3>
                  <p className="text-white/80">{destinations[1].country}</p>
                  <p className="text-white font-bold text-xl mt-2">{destinations[1].price}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Smaller Cards */}
          {destinations.slice(2).map((destination, index) => (
            <Card key={index + 2} className="overflow-hidden group cursor-pointer">
              <div className="relative h-48">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.city}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-blue-600">ROME</Badge>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-lg font-bold">{destination.city}</h3>
                  <p className="text-white/80 text-sm">{destination.country}</p>
                  <p className="text-white font-bold">{destination.price}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
