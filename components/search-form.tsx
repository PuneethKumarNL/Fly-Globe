"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ArrowLeftRight } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export function SearchForm() {
  const [tripType, setTripType] = useState("one-way")
  const [from, setFrom] = useState("Delhi DEL")
  const [to, setTo] = useState("London LHR")
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [passengers, setPassengers] = useState("1 Adult")
  const router = useRouter()

  const handleSearch = () => {
    router.push("/flights")
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-4 mb-6">
        <Button
          variant={tripType === "one-way" ? "default" : "outline"}
          onClick={() => setTripType("one-way")}
          className="bg-blue-600 text-white"
        >
          One Way
        </Button>
        <Button
          variant={tripType === "round-trip" ? "default" : "outline"}
          onClick={() => setTripType("round-trip")}
          className="bg-white text-gray-700 border"
        >
          Round Trip
        </Button>
        <Button
          variant={tripType === "multi-city" ? "default" : "outline"}
          onClick={() => setTripType("multi-city")}
          className="bg-white text-gray-700 border"
        >
          Multi City
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        <div className="space-y-2">
          <Label>From</Label>
          <div className="relative">
            <Input value={from} onChange={(e) => setFrom(e.target.value)} />
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeftRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <Label>To</Label>
          <Input value={to} onChange={(e) => setTo(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label>Departure Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !departureDate && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {departureDate ? format(departureDate, "dd MMM yyyy") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Passengers & Class</Label>
          <Select value={passengers} onValueChange={setPassengers}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Adult">1 Adult</SelectItem>
              <SelectItem value="2 Adults">2 Adults</SelectItem>
              <SelectItem value="3 Adults">3 Adults</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Button onClick={handleSearch} className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-2">
          Modify Search
        </Button>
      </div>
    </div>
  )
}
