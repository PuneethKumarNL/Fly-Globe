import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function TourFilters() {
  return (
    <Card className="bg-white/90 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-blue-600">Filter Your Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-3">Destinations</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="kerala" />
              <label htmlFor="kerala" className="text-sm">
                Kerala
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="goa" />
              <label htmlFor="goa" className="text-sm">
                Goa
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="rajasthan" />
              <label htmlFor="rajasthan" className="text-sm">
                Rajasthan
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Price Range</h3>
          <Slider defaultValue={[5000]} max={50000} step={1000} className="mb-2" />
          <div className="flex justify-between text-sm text-gray-500">
            <span>₹5,000</span>
            <span>₹50,000</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Duration</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="3-5-days" />
              <label htmlFor="3-5-days" className="text-sm">
                3-5 Days
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="6-10-days" />
              <label htmlFor="6-10-days" className="text-sm">
                6-10 Days
              </label>
            </div>
          </div>
        </div>

        <Button className="w-full bg-blue-600">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}
