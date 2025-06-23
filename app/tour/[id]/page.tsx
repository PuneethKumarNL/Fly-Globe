import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Share, Heart } from "lucide-react"

export default function TourDetailPage() {
  return (
    <div className="hero-bg min-h-screen">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold">Beautiful Bali With Malaysia</h1>
                <p className="text-gray-600">5 NIGHTS 6 DAYS | 2 COUNTRIES | CUSTOMISABLE</p>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">Malaysia, Bali</span>
                  <div className="flex items-center ml-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm ml-1">(48 reviews)</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">Rs 1,70,000</div>
                <div className="text-sm text-gray-500">per person</div>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm">
                    <Share className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4 mr-1" />
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">30 April, 2025 – 26 April, 2025 | From Chandigarh</p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-2 p-6">
            <div className="col-span-2 row-span-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Bali Temple"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Singapore"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Bali Beach"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Temple"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Beach View"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content Tabs */}
          <div className="p-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="inclusions">Inclusions/Exclusions</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Overview</h2>
                      <p className="text-gray-600 leading-relaxed">
                        Bali, also known as the land of gods has plenty to offer to travelers from across the globe. As
                        it is considered an enchanting settlement. Size like body some one may admit daughters
                        differing. Laughter proposal laughing any son law consider. Needed except up piqued an. To
                        occasional dissimilar impossible sentiments. Do fortune account written prepare invited no
                        passage. Garrets use ten you the way may admit daughters differing offering her ask own. Praise
                        effect wishes change way and any wanted. Lively use looked regard had.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Tour Info</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Departure:</strong> Chandigarh
                        </div>
                        <div>
                          <strong>Duration:</strong> 5 Days, 6 Nights
                        </div>
                        <div>
                          <strong>Start Point:</strong> Ngurah International Airport
                        </div>
                        <div>
                          <strong>End Point:</strong> Ngurah International Airport
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Tour Highlights</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Experience a delightful tropical getaway with a luxurious stay and witness the picture-perfect
                        beaches, charming waterfalls and so much more.
                      </p>
                      <p className="text-gray-600 leading-relaxed mt-2">
                        Dependent on so extremely delivered by. Yet no jokes worse her why. Bed one supposing breakfast
                        day fulfilled off depending questions.
                      </p>
                      <p className="text-gray-600 leading-relaxed mt-2">
                        Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet
                        outweigh.
                      </p>
                      <p className="text-gray-600 leading-relaxed mt-2">
                        Manor built if up doubt small purse. Required his you put the outlived answered position. A
                        pleasure exertion if believed provided to.
                      </p>
                    </div>
                  </div>

                  <div>
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-blue-600">20%</div>
                          <div className="text-sm text-gray-500">OFF</div>
                        </div>
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Offer"
                          width={300}
                          height={200}
                          className="w-full rounded-lg mb-4"
                        />
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="mt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Itinerary</h2>

                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        Day 1: Arrival in Kuta, get ready to explore this tropical island
                      </h3>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <Image
                          src="/placeholder.svg?height=100&width=150"
                          alt="Day 1"
                          width={150}
                          height={100}
                          className="rounded"
                        />
                        <Image
                          src="/placeholder.svg?height=100&width=150"
                          alt="Day 1"
                          width={150}
                          height={100}
                          className="rounded"
                        />
                        <Image
                          src="/placeholder.svg?height=100&width=150"
                          alt="Day 1"
                          width={150}
                          height={100}
                          className="rounded"
                        />
                      </div>
                      <div className="mt-4 space-y-2 text-sm">
                        <div>• Get up with a delicious lunch and a beautiful view from your room.</div>
                        <div>• Get up with a delicious lunch and a beautiful view from your room.</div>
                        <div>• Get up with a delicious lunch and a beautiful view from your room.</div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        Day 2: Arrival in Kuta, get ready to explore this tropical island
                      </h3>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        Day 3: Arrival in Kuta, get ready to explore this tropical island
                      </h3>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        Day 4: Arrival in Kuta, get ready to explore this tropical island
                      </h3>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        Day 5: Arrival in Kuta, get ready to explore this tropical island
                      </h3>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="inclusions" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Inclusions</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Comfortable stay for 4 nights in your preferred category hotels
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Complimentary breakfast on all days
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Airport transfers as per itinerary in private basis
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Breakfast is included as mentioned in itinerary
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Per Person rate on twin sharing basis
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-600">Exclusions</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Lunch and dinner are not included in CP plans
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Any other services not specifically mentioned in the inclusions
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Medical and Travel Insurance
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Airfare is not included
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="policies" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Confirmation Policy:</h3>
                    <p className="text-sm text-gray-600">
                      The customer receives a confirmation voucher via email within 24 hours of successful booking.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      In case the preferred slots are unavailable, an alternate schedule of the customer's preference
                      will be arranged and a new confirmation voucher will be sent via email.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Cancellation Policy:</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 0 to 15 days: 100% - Non Refundable</li>
                      <li>• 16 to 30 days: 25% - Non Refundable Component</li>
                      <li>• 31 to 45 days: 50% - Non Refundable Component</li>
                      <li>• 46 to 60 days: 75% - Non Refundable Component</li>
                      <li>• 100% Cancellation / Visa On Arrival</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      All Prices are in Indian Rupees and subject to change without prior notice. In the case FIT flight
                      inclusive packages, the full amount of the flight will be payable at the time of booking.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Refund Policy:</h3>
                    <p className="text-sm text-gray-600">
                      The applicable refund amount will be processed within 10 business days.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      All refund amounts will be done in the traveller's TripGenie wallet as TripCash.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
