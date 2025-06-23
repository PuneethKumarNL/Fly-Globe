"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon, ArrowLeftRight, MapPin } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [tripType, setTripType] = useState("round-trip")
  const [from, setFrom] = useState("Delhi (DEL)")
  const [to, setTo] = useState("London (LHR)")
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [passengers, setPassengers] = useState("1 Adult, 1 Child")
  const [seatClass, setSeatClass] = useState("Economy")
  const [directFlightsOnly, setDirectFlightsOnly] = useState(false)
  const router = useRouter()

  const handleSearch = () => {
    router.push("/flights")
  }

  return (
    <section className="hero-bg min-h-screen flex items-center relative">
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              UNLOCK EFFORTLESS TRAVEL WITH
              <br />
              UNBEATABLE FLIGHT DEALS!
            </h1>
            <p className="text-lg opacity-90">
              Discover the world with ease. Book flights, hotels, and experiences.
              <br />
              Care of Every Detail so You Can Enjoy the Journey!
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-blue-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="round-trip"
                  name="trip-type"
                  checked={tripType === "round-trip"}
                  onChange={() => setTripType("round-trip")}
                  className="text-blue-600"
                />
                <label htmlFor="round-trip" className="text-white text-sm">
                  Round Trip
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="one-way"
                  name="trip-type"
                  checked={tripType === "one-way"}
                  onChange={() => setTripType("one-way")}
                  className="text-blue-600"
                />
                <label htmlFor="one-way" className="text-white text-sm">
                  One Way
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
              {/* From */}
              <div className="lg:col-span-1">
                <Label className="text-white text-sm mb-2 block">From</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="pl-10 bg-white border-0 h-12"
                    placeholder="Delhi (DEL)"
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="lg:col-span-1 flex items-end justify-center">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-12 w-12">
                  <ArrowLeftRight className="w-5 h-5" />
                </Button>
              </div>

              {/* To */}
              <div className="lg:col-span-1">
                <Label className="text-white text-sm mb-2 block">To</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="pl-10 bg-white border-0 h-12"
                    placeholder="London (LHR)"
                  />
                </div>
              </div>

              {/* Departure Date */}
              <div className="lg:col-span-1">
                <Label className="text-white text-sm mb-2 block">Departure Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white border-0 h-12",
                        !departureDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departureDate ? format(departureDate, "dd MMM yyyy") : "Mar 20, 2025"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Return Date */}
              <div className="lg:col-span-1">
                <Label className="text-white text-sm mb-2 block">Return Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white border-0 h-12",
                        !returnDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "dd MMM yyyy") : "Mar 27, 2025"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Passengers */}
              <div className="lg:col-span-1">
                <Label className="text-white text-sm mb-2 block">Passengers</Label>
                <Select value={passengers} onValueChange={setPassengers}>
                  <SelectTrigger className="bg-white border-0 h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 Adult">1 Adult</SelectItem>
                    <SelectItem value="1 Adult, 1 Child">1 Adult, 1 Child</SelectItem>
                    <SelectItem value="2 Adults">2 Adults</SelectItem>
                    <SelectItem value="2 Adults, 1 Child">2 Adults, 1 Child</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Seat Class */}
              <div>
                <Label className="text-white text-sm mb-2 block">Seat Class</Label>
                <Select value={seatClass} onValueChange={setSeatClass}>
                  <SelectTrigger className="bg-white border-0 h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Economy">Economy</SelectItem>
                    <SelectItem value="Premium Economy">Premium Economy</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="First">First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Select Airlines */}
              <div>
                <Label className="text-white text-sm mb-2 block">Select Airlines</Label>
                <Select defaultValue="all-airlines">
                  <SelectTrigger className="bg-white border-0 h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-airlines">All Airlines</SelectItem>
                    <SelectItem value="air-india">Air India</SelectItem>
                    <SelectItem value="emirates">Emirates</SelectItem>
                    <SelectItem value="lufthansa">Lufthansa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Direct Flights Only */}
              <div className="flex items-end">
                <div className="flex items-center space-x-2 h-12">
                  <Checkbox
                    id="direct-flights"
                    checked={directFlightsOnly}
                    onCheckedChange={setDirectFlightsOnly}
                    className="border-white data-[state=checked]:bg-white data-[state=checked]:text-blue-900"
                  />
                  <label htmlFor="direct-flights" className="text-white text-sm">
                    Direct Flights Only
                  </label>
                </div>
              </div>
            </div>

            <Button
              onClick={handleSearch}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 text-lg rounded-xl"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
