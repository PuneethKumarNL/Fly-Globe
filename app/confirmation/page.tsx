import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ConfirmationPage() {
  return (
    <div className="hero-bg min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">BOOKING CONFIRMED</h1>
            <p className="text-xl leading-relaxed">
              Thank you for booking with us! Your booking
              <br />
              reference number is mailed at your email.
            </p>
          </div>

          <div className="space-y-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
              <Link href="/">Return to Home</Link>
            </Button>
            <div>
              <Button asChild variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Link href="/bookings">View My Bookings</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
