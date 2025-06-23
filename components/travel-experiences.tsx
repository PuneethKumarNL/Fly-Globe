import { Card, CardContent } from "@/components/ui/card"
import { Star, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Star,
    title: "Seamless Booking Experience",
    description: "Effortless reservations with our user-friendly platform. Flights to destinations and more.",
  },
  {
    icon: Shield,
    title: "Best Pricing and Deals",
    description:
      "We are committed to offering you the best possible prices for your travel needs, ensuring you get the most value.",
  },
  {
    icon: Users,
    title: "Personalized Travel Recommendations",
    description:
      "Our advanced algorithms analyze your preferences and past bookings to provide personalized recommendations.",
  },
]

export function TravelExperiences() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">WHY FLYGLOBE</h2>
          <p className="text-gray-600">Our happy travellers</p>
          <div className="flex items-center justify-center mt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
              ))}
            </div>
            <span className="ml-3 text-sm font-semibold">4.9 (3.5k Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-900 text-white border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
