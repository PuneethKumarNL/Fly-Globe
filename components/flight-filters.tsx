import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function FlightFilters() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-blue-600">Filter Your Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-3">Destinations</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="asia" />
              <label htmlFor="asia" className="text-sm">
                Asia
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="europe" />
              <label htmlFor="europe" className="text-sm">
                Europe
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="america" />
              <label htmlFor="america" className="text-sm">
                America
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Price</h3>
          <Slider defaultValue={[500]} max={1000} step={10} className="mb-2" />
          <div className="flex justify-between text-sm text-gray-500">
            <span>£150.33</span>
            <span>£950.32</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Duration</h3>
          <Slider defaultValue={[12]} max={24} step={1} className="mb-2" />
          <div className="flex justify-between text-sm text-gray-500">
            <span>5h</span>
            <span>24h 30m</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Airlines</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="air-india" />
              <label htmlFor="air-india" className="text-sm">
                Air India
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="air-asia" />
              <label htmlFor="air-asia" className="text-sm">
                Air Asia
              </label>
            </div>
          </div>
        </div>

        <Button className="w-full bg-blue-600">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}
