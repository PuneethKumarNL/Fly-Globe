import { Card } from "@/components/ui/card"
import Image from "next/image"

const offers = [
  {
    discount: "20%",
    title: "OFF",
    description: "On your first flight with us. Book now and save big on your next adventure.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    discount: "20%",
    title: "OFF",
    description: "On your first flight with us. Book now and save big on your next adventure.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    discount: "20%",
    title: "OFF",
    description: "On your first flight with us. Book now and save big on your next adventure.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    discount: "20%",
    title: "OFF",
    description: "On your first flight with us. Book now and save big on your next adventure.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function BestOffers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">BEST OFFERS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're excited to offer you an exclusive voucher to help you save on your next adventure. Whether you're
            planning a weekend getaway, a family vacation, or a solo expedition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt="Travel offer"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white rounded-lg px-3 py-2 text-center">
                    <div className="text-2xl font-bold text-blue-600">{offer.discount}</div>
                    <div className="text-sm font-semibold text-gray-700">{offer.title}</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm">{offer.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
