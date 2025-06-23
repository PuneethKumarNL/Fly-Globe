import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar, Users } from "lucide-react"

interface TourCardProps {
  tour: {
    id: number
    title: string
    rating: number
    reviews: number
    duration: string
    image: string
    originalPrice: string
    discountedPrice: string
    discount: string
  }
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={tour.image || "/placeholder.svg"}
          alt={tour.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-red-500 text-white">{tour.discount}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">{tour.title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm ml-1">{tour.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({tour.reviews} reviews)</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Kerala</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>2+</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500 line-through">{tour.originalPrice}</div>
            <div className="text-lg font-bold text-blue-600">{tour.discountedPrice}</div>
            <div className="text-xs text-gray-500">per person</div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">View Package</Button>
        </div>
      </CardContent>
    </Card>
  )
}
