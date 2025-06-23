import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-red-500">FLY</span>
              <span className="text-white">GLOBE</span>
            </div>
            <p className="text-gray-300 text-sm">
              FlyGlobe is more than just a flight booking app; it's your one-stop shop for seamless travel experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/promo" className="hover:text-white">
                  Promo
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-white">
                  Order
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/documentation" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/carrier" className="hover:text-white">
                  Carrier
                </Link>
              </li>
              <li>
                <Link href="/work-with-us" className="hover:text-white">
                  Work With Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="hover:text-white">
                  Affiliate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>flyglobe@gmail.com</p>
              <p>+12 345 678 09</p>
              <p>Singapore, Indonesia</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us On Social</h4>
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700"
                >
                  <Youtube className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 FlyBritain All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
