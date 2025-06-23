import Image from "next/image"

export function AirlinePartners() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-12 opacity-60">
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Etihad Airways"
              width={120}
              height={40}
              className="grayscale"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Air Canada"
              width={120}
              height={40}
              className="grayscale"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Etihad Airways"
              width={120}
              height={40}
              className="grayscale"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Air Canada"
              width={120}
              height={40}
              className="grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
