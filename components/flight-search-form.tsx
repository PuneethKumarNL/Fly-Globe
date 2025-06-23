"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeftRight } from "lucide-react"

export function FlightSearchForm() {
  const [from, setFrom] = useState("Delhi DEL")
  const [to, setTo] = useState("London LHR")

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-4">
        <Button variant="default" className="bg-blue-600">
          One Way
        </Button>
        <div className="flex items-center gap-2">
          <Input value={from} className="w-32" />
          <ArrowLeftRight className="w-4 h-4" />
          <Input value={to} className="w-32" />
        </div>
        <Input type="date" defaultValue="2025-03-23" />
        <Input value="1 Adult" className="w-24" />
        <Button className="bg-gray-600">Modify Search</Button>
      </div>
    </div>
  )
}
