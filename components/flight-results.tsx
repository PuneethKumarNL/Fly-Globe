"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plane } from "lucide-react"

const flights = [
  {
    id: 1,
    departure: { time: "14:00", airport: "DEL", city: "Delhi" },
    arrival: { time: "14:00", airport: "LHR", city: "London" },
    duration: "9h 30 m",
    stops: "2 stops | VIZ",
    airline: "Air India",
    price: "£552.32",
    type: "Cheapest Flight",
  },
  {
    id: 2,
    departure: { time: "14:00", airport: "DEL", city: "Delhi" },
    arrival: { time: "14:00", airport: "LHR", city: "London" },
    duration: "9h 30 m",
    stops: "2 stops | VIZ",
    airline: "Air India",
    price: "£552.32",
    type: "Cheapest Flight",
  },
  {
    id: 3,
    departure: { time: "14:00", airport: "DEL", city: "Delhi" },
    arrival: { time: "14:00", airport: "LHR", city: "London" },
    duration: "9h 30 m",
    stops: "2 stops | VIZ",
    airline: "Air India",
    price: "£552.32",
    type: "Cheapest Flight",
  },
]

interface FlightResultsProps {
  onFlightSelect: (flight: any) => void
  onBaggageClick: () => void
}

export function FlightResults({ onFlightSelect, onBaggageClick }: FlightResultsProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-6">
        <Button variant="default" className="bg-blue-600">
          Recommended £552.32*
        </Button>
        <Button variant="outline">Fastest £552.32*</Button>
        <Button variant="outline">Cheapest £552.32*</Button>
        <Button variant="outline">Best Deals £552.32*</Button>
      </div>

      {flights.map((flight) => (
        <Card key={flight.id} className="p-6">
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-2xl font-bold">{flight.departure.time}</div>
                  <div className="text-sm text-gray-500">{flight.departure.airport}</div>
                  <div className="text-sm text-gray-500">{flight.departure.city}</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-sm text-gray-500">{flight.duration}</div>
                  <div className="flex items-center">
                    <div className="w-8 h-px bg-gray-300"></div>
                    <Plane className="w-4 h-4 mx-2 text-red-500" />
                    <div className="w-8 h-px bg-gray-300"></div>
                  </div>
                  <div className="text-sm text-gray-500">{flight.stops}</div>
                </div>

                <div>
                  <div className="text-2xl font-bold">{flight.arrival.time}</div>
                  <div className="text-sm text-gray-500">{flight.arrival.airport}</div>
                  <div className="text-sm text-gray-500">{flight.arrival.city}</div>
                </div>
              </div>

              <div className="text-right">
                <Badge className="bg-green-100 text-green-800 mb-2">{flight.type}</Badge>
                <div className="text-2xl font-bold">{flight.price}</div>
                <div className="text-sm text-gray-500">price per person</div>
                <div className="text-sm text-gray-500">incl. Taxes and fees</div>
                <Button className="mt-2 bg-blue-600" onClick={() => onFlightSelect(flight)}>
                  BOOK NOW
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <div className="flex space-x-4 text-sm">
                <span>FLIGHT DETAILS</span>
                <button onClick={onBaggageClick} className="text-blue-600">
                  BAGGAGE
                </button>
                <span>REFUNDABLE</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
