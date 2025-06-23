"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"

export function BookingForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  const handleProceedToPayment = () => {
    router.push("/confirmation")
  }

  return (
    <div className="space-y-6">
      {/* Flight Details */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-lg font-bold">DEL 14:00</div>
              <div className="text-sm text-gray-500">Airport Delhi</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500">9h 30 m</div>
              <div className="text-sm text-gray-500">2 stops | VIZ</div>
            </div>
            <div>
              <div className="text-lg font-bold">LHR 14:00</div>
              <div className="text-sm text-gray-500">London</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Traveler Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600">Traveler Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 border border-red-200 rounded p-3 mb-4">
            <p className="text-sm text-red-600">Please make sure you enter the Name as per your passport</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" />
              </div>
              <div>
                <Label htmlFor="confirm-email">Confirm Your Email Address *</Label>
                <Input id="confirm-email" type="email" />
              </div>
            </div>
            <div>
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input id="mobile" type="tel" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Adult 1 */}
      <Card>
        <CardHeader>
          <CardTitle className="bg-blue-600 text-white p-3 -m-6 mb-4">Adult 1</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Title *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Mr." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">Mr.</SelectItem>
                  <SelectItem value="mrs">Mrs.</SelectItem>
                  <SelectItem value="ms">Ms.</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>First Name *</Label>
              <Input />
            </div>
            <div>
              <Label>Last Name *</Label>
              <Input />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div>
              <Label>Date of Birth *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 31 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Month *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">January</SelectItem>
                  <SelectItem value="02">February</SelectItem>
                  {/* Add more months */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Year *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 100 }, (_, i) => (
                    <SelectItem key={2024 - i} value={String(2024 - i)}>
                      {2024 - i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Nationality *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Nationality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="british">British</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4">
            <Label>Passport Number *</Label>
            <Input placeholder="Enter passport Number" />
          </div>
        </CardContent>
      </Card>

      {/* Booking Details */}
      <Card>
        <CardHeader>
          <CardTitle>Booking detail will be sent to</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Mobile Number</Label>
              <Input placeholder="Enter Mobile Number" />
            </div>
            <div>
              <Label>Email Address</Label>
              <Input placeholder="Enter Email Address" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Baggage Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Baggage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Personal Item</h3>
                <span className="font-bold">3,000Kgs</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">A small bag that must fit under the seat in front of you</p>
              <Button className="w-full bg-blue-600">INCLUDED</Button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Hand Baggage</h3>
                <span className="font-bold">3,000Kgs</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Standard or handling that goes in the overhead compartment</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="7kg" />
                  <label htmlFor="7kg" className="text-sm">
                    7 Kg (55 x 40 x 20 cm)
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Checked baggage</h3>
                <span className="font-bold">3,000Kgs</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Suitcase, duffel bag, and including sports equipment or other special items
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="no-bag" />
                  <label htmlFor="no-bag" className="text-sm">
                    No checked baggage
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="15kg" />
                  <label htmlFor="15kg" className="text-sm">
                    15 Kg (55 x 40 x 20 cm)
                  </label>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Add baggage allowance here. Up to 50% cheaper than at the airport 3,000Kgs
          </p>
        </CardContent>
      </Card>

      <Button onClick={handleProceedToPayment} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
        Proceed to Payment
      </Button>

      {/* Important Information */}
      <Card>
        <CardHeader>
          <CardTitle>Important Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm text-gray-600">
            <h3 className="font-semibold text-black">Passengers travelling to the United States, please note</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Who can travel? All fully vaccinated travellers are allowed to enter the country. All WHO-approved
                vaccines, including Covishield and Covaxin, are accepted by the USA.
              </li>
              <li>
                Destination restrictions: Non-vaccinated travellers from India cannot enter. Any traveller travelling
                via ESTA cannot enter the USA.
              </li>
              <li>
                Important: The sufficient document/immunization reduction as per him decisively. Processed how any given
                visitor.
              </li>
              <li>
                Explained property off our personal too you. Feel sold off him way over meet you. We are immediate,
                continued recommend it.
              </li>
              <li>
                Was letter for a few longer? Me sudden talent become. Done may have that if early an of beauty talent.
              </li>
            </ul>

            <h3 className="font-semibold text-black mt-6">A Note on Guidelines</h3>
            <p>
              While we do our best to get you the latest information, due to the rapidly evolving nature of current
              events, sometimes that is not possible. Please note, it is the sole responsibility of the passenger to
              ensure he is free eligibility to enter the destination or transit countries (as applicable). We accept no
              liability in this regard. Please check the travel rules of all regulatory websites before booking as well
              as commencing.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
