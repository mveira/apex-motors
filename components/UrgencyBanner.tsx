"use client"

import { useEffect, useState } from "react"
import { Clock, Flame } from "lucide-react"

export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 border-y border-red-800 py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-4 flex-wrap text-center">
        <Flame className="h-5 w-5 text-red-400 animate-pulse" />
        <p className="font-bold text-white">
          <span className="text-red-400">LIMITED TIME:</span> New arrivals this week - 
          <span className="text-red-300 ml-2">
            {timeLeft.hours.toString().padStart(2, "0")}:
            {timeLeft.minutes.toString().padStart(2, "0")}:
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="ml-2">until next refresh</span>
        </p>
        <Clock className="h-5 w-5 text-red-400" />
      </div>
    </div>
  )
}
