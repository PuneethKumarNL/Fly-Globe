"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface BaggageModalProps {
  onClose: () => void
}

export function BaggageModal({ onClose }: BaggageModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Baggage Details
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Baggage Allowed</h3>
            <p className="text-sm text-gray-600">Per Person</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                <span className="text-xs">✈️</span>
              </div>
              <div>
                <div className="font-medium">Cabin Baggage</div>
                <div className="text-sm text-gray-500">7 Kg (1 Pc Only)</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                <span className="text-xs">🧳</span>
              </div>
              <div>
                <div className="font-medium">Checked Baggage</div>
                <div className="text-sm text-gray-500">15 Kg</div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded p-3">
            <p className="text-sm text-red-600">
              Different baggage allowance may apply, we show minimum baggage allowance here
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
