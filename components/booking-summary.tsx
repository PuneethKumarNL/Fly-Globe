import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BookingSummary() {
  return (
    <div className="space-y-6">
      {/* Fare Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Fare Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Passenger 1 Adult</span>
              <span>$90,000</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Price per adult</span>
              <span>$90,000</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Flexible Ticket</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Taxes & Fees</span>
              <span>$0.00</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>$90,000</span>
            </div>
            <div className="text-sm text-gray-600">
              <div>Subtotal: $90,000</div>
              <div>Discount Depending on Payment method (Max 0.5%): -$0.00</div>
              <div>Payment Gateway Fees: $0.00</div>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Amount to Pay</span>
              <span>$90,000</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Offer & Discount */}
      <Card>
        <CardHeader>
          <CardTitle>Offer & Discount</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Coupon Code" />
            <Button className="bg-blue-600">Apply</Button>
          </div>
        </CardContent>
      </Card>

      {/* Cancellation & Date Change */}
      <Card>
        <CardHeader>
          <CardTitle>Cancellation & Date Change Charges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm">
            <div className="text-red-600 font-semibold mb-2">Non Refundable</div>
            <p className="text-gray-600 mb-4">
              The Cancellation penalty on this booking will depend on how close to the departure date you cancel your
              ticket. View the detailed cancellation policy to know more.
            </p>
            <Button variant="link" className="p-0 text-blue-600">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
