"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car } from "@/data/cars"
import { formatPrice, formatMileage } from "@/lib/utils"
import { Zap, Award, TrendingUp, ArrowRight, Gauge, Calendar, Eye } from "lucide-react"
import { FramerShowcase } from "./FramerShowcase"

interface SpotlightVehicleProps {
  car: Car
}

export function SpotlightVehicle({ car }: SpotlightVehicleProps) {
  return (
    <section className="relative bg-gradient-to-b from-black to-zinc-950 py-20 px-4 overflow-hidden border-y border-zinc-800">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-primary/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <div>
            {/* Spotlight badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/40 px-4 py-2 rounded-full mb-6 backdrop-blur-xl animate-pulse">
              <TrendingUp className="h-4 w-4 text-red-500" />
              <span className="text-sm font-bold tracking-wider text-red-400">
                SPOTLIGHT VEHICLE • JUST ARRIVED
              </span>
            </div>

            {/* Vehicle info */}
            <p className="text-zinc-500 text-sm font-semibold mb-2 uppercase tracking-wider">
              {car.year} • REF #{car.id}
            </p>
            
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tighter">
              {car.make}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary">
                {car.model}
              </span>
            </h2>

            <p className="text-xl text-zinc-300 mb-6 leading-relaxed max-w-xl">
              {car.description}
            </p>

            {/* Quick specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className="h-4 w-4 text-primary" />
                  <p className="text-xs text-zinc-500 font-semibold uppercase">Mileage</p>
                </div>
                <p className="text-2xl font-black text-white">{formatMileage(car.mileage)}</p>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="h-4 w-4 text-primary" />
                  <p className="text-xs text-zinc-500 font-semibold uppercase">Condition</p>
                </div>
                <p className="text-2xl font-black text-primary">{car.condition}</p>
              </div>
            </div>

            {/* Price with urgency */}
            <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-6 rounded-lg mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-zinc-500 mb-2 font-semibold uppercase">Price</p>
                  <p className="text-5xl font-black text-primary mb-2 tracking-tight">
                    {formatPrice(car.price)}
                  </p>
                  <p className="text-sm text-zinc-400">
                    or from <span className="text-white font-bold">£{Math.round(car.price / 60)}/month</span>
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-4 w-4 text-zinc-500" />
                    <span className="text-sm text-zinc-400">89 views today</span>
                  </div>
                  <Badge className="bg-red-600/20 text-red-400 border-red-600/30">
                    HIGH DEMAND
                  </Badge>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/cars/${car.id}`} className="flex-1">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-black font-black text-lg py-7 shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  VIEW FULL DETAILS
                </Button>
              </Link>
              <a
                href={`https://wa.me/YOUR_PHONE_NUMBER?text=Hi, I'm interested in the Spotlight Vehicle: ${car.year} ${car.make} ${car.model} (Ref: ${car.id})`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-zinc-700 hover:border-primary text-lg py-7 font-bold backdrop-blur"
                >
                  ENQUIRE NOW
                </Button>
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-6 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <Award className="h-3 w-3 text-primary" />
                <span>Full Service History</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-3 w-3 text-primary" />
                <span>HPI Clear</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-3 w-3 text-primary" />
                <span>Warranty Included</span>
              </div>
            </div>
          </div>

          {/* Right: Framer Motion Showcase */}
          <div className="relative">
            <FramerShowcase car={car} />
          </div>
        </div>
      </div>
    </section>
  )
}
