"use client"

import { useState } from "react"
import { FlightSearchForm } from "@/components/flight-search-form"
import { FlightFilters } from "@/components/flight-filters"
import { FlightResults } from "@/components/flight-results"
import { FlightDetailsModal } from "@/components/flight-details-modal"
import { BaggageModal } from "@/components/baggage-modal"

export default function FlightsPage() {
  const [selectedFlight, setSelectedFlight] = useState<any>(null)
  const [showBaggageModal, setShowBaggageModal] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="hero-bg h-32 flex items-center">
        <div className="container mx-auto px-4">
          <FlightSearchForm />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="w-1/4">
            <FlightFilters />
          </div>
          <div className="w-3/4">
            <FlightResults onFlightSelect={setSelectedFlight} onBaggageClick={() => setShowBaggageModal(true)} />
          </div>
        </div>
      </div>

      {selectedFlight && <FlightDetailsModal flight={selectedFlight} onClose={() => setSelectedFlight(null)} />}

      {showBaggageModal && <BaggageModal onClose={() => setShowBaggageModal(false)} />}
    </div>
  )
}
