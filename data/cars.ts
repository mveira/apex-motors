export interface Car {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid"
  transmission: "Manual" | "Automatic"
  bodyType: "Sedan" | "Saloon" | "SUV" | "Hatchback" | "Coupe" | "Estate" | "Van"
  color: string
  doors: number
  seats: number
  image: string
  images: string[]
  description: string
  features: string[]
  condition: "Excellent" | "Very Good" | "Good"
}

// Real inventory - Update with your actual vehicles
export const CARS: Car[] = [
  {
    id: "1",
    make: "BMW",
    model: "M340i xDrive",
    year: 2020,
    price: 38995,
    mileage: 28000,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Saloon",
    color: "Black Sapphire",
    doors: 4,
    seats: 5,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800",
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800",
      "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800",
    ],
    description: "Performance-focused BMW M340i offering everyday comfort with serious power. Smooth automatic gearbox and xDrive all-wheel drive make this a refined yet engaging saloon.",
    features: [
      "xDrive AWD",
      "M Sport Brakes",
      "Digital Cockpit",
      "Heated Seats",
      "Parking Sensors",
    ],
    condition: "Excellent",
  },
  {
    id: "2",
    make: "Porsche",
    model: "911 Carrera S",
    year: 2021,
    price: 89995,
    mileage: 12000,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Coupe",
    color: "Guards Red",
    doors: 2,
    seats: 4,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800",
    ],
    description: "Iconic Porsche 911 Carrera S combining timeless design with modern performance. A driver-focused coupe offering exceptional balance, precision, and everyday usability.",
    features: [
      "Sport Chrono Package",
      "Adaptive Suspension",
      "Sport Exhaust",
      "Heated Sports Seats",
      "Touchscreen Infotainment",
    ],
    condition: "Excellent",
  },
  {
    id: "3",
    make: "Audi",
    model: "A6 S line",
    year: 2019,
    price: 27995,
    mileage: 42000,
    fuelType: "Diesel",
    transmission: "Automatic",
    bodyType: "Saloon",
    color: "Daytona Grey",
    doors: 4,
    seats: 5,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800",
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800",
      "https://images.unsplash.com/photo-1605559425160-62c6d1f3c9bb?w=800",
    ],
    description: "Comfortable and refined Audi A6 S line, ideal for long journeys and daily use. Strong diesel performance paired with a smooth automatic gearbox.",
    features: [
      "S line Styling",
      "Virtual Cockpit",
      "Cruise Control",
      "LED Headlights",
      "Front & Rear Sensors",
    ],
    condition: "Very Good",
  },
  {
    id: "4",
    make: "Mercedes-Benz",
    model: "C220d AMG Line",
    year: 2020,
    price: 29995,
    mileage: 31000,
    fuelType: "Diesel",
    transmission: "Automatic",
    bodyType: "Saloon",
    color: "Polar White",
    doors: 4,
    seats: 5,
    image: "https://images.unsplash.com/photo-1617814065893-00757125a7b9?w=800",
    images: [
      "https://images.unsplash.com/photo-1617814065893-00757125a7b9?w=800",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800",
    ],
    description: "Stylish Mercedes-Benz C220d AMG Line offering premium comfort, efficient diesel performance, and sharp exterior styling.",
    features: [
      "AMG Line Package",
      "Ambient Lighting",
      "Heated Seats",
      "Reversing Camera",
      "Navigation",
    ],
    condition: "Excellent",
  },
  {
    id: "5",
    make: "Volkswagen",
    model: "Golf GTI",
    year: 2018,
    price: 21995,
    mileage: 46000,
    fuelType: "Petrol",
    transmission: "Manual",
    bodyType: "Hatchback",
    color: "Pure White",
    doors: 5,
    seats: 5,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",
    images: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",
      "https://images.unsplash.com/photo-1605559425160-62c6d1f3c9bb?w=800",
    ],
    description: "Well-balanced hot hatch offering strong performance, practicality, and everyday comfort. The Golf GTI remains a benchmark in its class.",
    features: [
      "GTI Styling",
      "Sports Seats",
      "Performance Brakes",
      "Touchscreen Media",
      "Dual-Zone Climate",
    ],
    condition: "Very Good",
  },
  {
    id: "6",
    make: "Range Rover",
    model: "Velar R-Dynamic",
    year: 2021,
    price: 46995,
    mileage: 19000,
    fuelType: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Santorini Black",
    doors: 5,
    seats: 5,
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800",
    images: [
      "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800",
      "https://images.unsplash.com/photo-1619682817490-9b02b63eafda?w=800",
    ],
    description: "Premium SUV with a sleek design and refined interior. The Velar offers comfort, capability, and strong road presence.",
    features: [
      "R-Dynamic Styling",
      "Panoramic Roof",
      "Leather Interior",
      "Adaptive Cruise Control",
      "All-Wheel Drive",
    ],
    condition: "Excellent",
  },
]
