"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-500 mb-2">GET STARTED</h2>
            <h3 className="text-3xl font-bold mb-4">
              Get in touch with us,
              <br />
              We're here to assist you.
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1" required />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number (optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 min-h-[120px]"
                required
              />
            </div>

            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              SEND MESSAGE
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-16 flex justify-end">
          <div className="space-y-2 text-right">
            <div className="flex items-center justify-end space-x-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm">Phone</span>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm">Email</span>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm">Address</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
