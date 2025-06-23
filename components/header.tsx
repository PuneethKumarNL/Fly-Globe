"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-red-500 font-extrabold">Fly</span>
              <span className="text-blue-600 font-extrabold">Globe</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/flights" className="text-gray-700 hover:text-blue-600">
              Flights
            </Link>
            <Link href="/business" className="text-gray-700 hover:text-blue-600">
              Business
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Globe className="w-4 h-4" />
              <span>UK | ENG</span>
            </div>
            <Link href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
