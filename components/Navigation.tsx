import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="border-b border-zinc-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28 lg:h-32">
          <Link href="/" className="flex items-center gap-3 lg:-ml-10">
            <div className="relative h-16 w-56 sm:h-20 sm:w-72 md:h-24 md:w-80 lg:h-28 lg:w-96">
              <Image
                src="/images/apex-motors-logo.png"
                alt="Apex Motors"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/inventory"
              className="hover:text-primary transition-colors font-semibold tracking-wide hidden sm:block"
            >
              STOCK
            </Link>
            <Link
              href="/book"
              className="hover:text-primary transition-colors font-semibold tracking-wide hidden sm:block"
            >
              BOOK
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors font-semibold tracking-wide hidden sm:block"
            >
              CONTACT
            </Link>
            <Link href="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-black font-bold">
                <Phone className="h-4 w-4 mr-2" />
                GET IN TOUCH
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
