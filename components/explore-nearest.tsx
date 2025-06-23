import Image from "next/image"

const cities = [
  { name: "LOS ANGELES", country: "USA", image: "/placeholder.svg?height=150&width=150" },
  { name: "MIAMI", country: "USA", image: "/placeholder.svg?height=150&width=150" },
  { name: "NEW YORK", country: "USA", image: "/placeholder.svg?height=150&width=150" },
  { name: "LOS VEGAS", country: "USA", image: "/placeholder.svg?height=150&width=150" },
  { name: "TEXAS", country: "USA", image: "/placeholder.svg?height=150&width=150" },
  { name: "CHICAGO", country: "USA", image: "/placeholder.svg?height=150&width=150" },
  { name: "BOSTON", country: "USA", image: "/placeholder.svg?height=150&width=150" },
]

const experiences = [
  {
    title: "Life Changing Experience",
    subtitle: "Skydiving",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Colosseum",
    subtitle: "Historical",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Life Changing Experience",
    subtitle: "Skydiving",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Colosseum",
    subtitle: "Historical",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function ExploreNearest() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">EXPLORE NEAREST</h2>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
          {cities.map((city, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden">
                <Image
                  src={city.image || "/placeholder.svg"}
                  alt={city.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-sm">{city.name}</h3>
              <p className="text-gray-500 text-xs">{city.country}</p>
            </div>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={experience.image || "/placeholder.svg"}
                alt={experience.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-sm opacity-80">{experience.subtitle}</p>
                <h3 className="text-white font-semibold">{experience.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
