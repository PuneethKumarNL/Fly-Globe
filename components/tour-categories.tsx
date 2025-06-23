import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "BEACH", places: "786 Places", image: "/placeholder.svg?height=200&width=200" },
  { name: "HERITAGE", places: "786 Places", image: "/placeholder.svg?height=200&width=200" },
  { name: "CITY", places: "786 Places", image: "/placeholder.svg?height=200&width=200" },
  { name: "OCEAN", places: "786 Places", image: "/placeholder.svg?height=200&width=200" },
  { name: "PILGRIMAGE", places: "786 Places", image: "/placeholder.svg?height=200&width=200" },
  { name: "CITY", places: "786 Places", image: "/placeholder.svg?height=200&width=200" },
  { name: "FESTIVAL", places: "786 Places", image: "/placeholder.svg?height=200&width=200" },
  { name: "MOUNTAIN", places: "786 Places", image: "/placeholder.svg?height=200&width=200" },
]

export function TourCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">TOP CATEGORIES</h2>
          <p className="text-gray-600">
            Explore a wide range of tours, from thrilling adventures and cultural escapes to relaxing beach getaways and
            luxurious cruises!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href="/tours" className="group relative overflow-hidden rounded-lg aspect-square">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.places}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
