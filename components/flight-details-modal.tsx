"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Plane } from "lucide-react"

interface FlightDetailsModalProps {
  flight: any
  onClose: () => void
}

export function FlightDetailsModal({ flight, onClose }: FlightDetailsModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Flight Details
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Departure</h3>
            <div className="text-sm text-gray-600">23 MARCH 2025 TUESDAY | BUSINESS</div>
            <div className="font-semibold">Delhi To London</div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="text-lg font-bold">14:00</div>
                <div className="text-sm">DEL</div>
                <div className="text-sm text-gray-500">Terminal 3, Indira Gandhi Int Airport, Delhi</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-500">7h</div>
                <Plane className="w-4 h-4 text-red-500 my-1" />
                <div className="text-xs">Boeing AI-2906</div>
              </div>

              <div>
                <div className="text-lg font-bold">22:00</div>
                <div className="text-sm">CDG</div>
                <div className="text-sm text-gray-500">Terminal 2, Paris Charles de Gaulle Airport, France</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">RETURN</h3>
            <div className="text-sm text-gray-600">29 APRIL 2025 TUESDAY | BUSINESS</div>
            <div className="font-semibold">London To Delhi</div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="text-lg font-bold">14:00</div>
                <div className="text-sm">LHR</div>
                <div className="text-sm text-gray-500">Terminal 5, London Heathrow Airport, London</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-500">7h</div>
                <Plane className="w-4 h-4 text-red-500 my-1" />
                <div className="text-xs">Boeing AI-2906</div>
              </div>

              <div>
                <div className="text-lg font-bold">22:00</div>
                <div className="text-sm">DEL</div>
                <div className="text-sm text-gray-500">Terminal 3, Indira Gandhi Int Airport, Delhi</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
