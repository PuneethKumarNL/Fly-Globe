"use client"
import { BookingForm } from "@/components/booking-form"
import { BookingSummary } from "@/components/booking-summary"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Please review your offer</h1>
          <p className="text-gray-600">Delhi To London</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
          <div>
            <BookingSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
