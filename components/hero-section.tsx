"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/professional-boiler-technician-working-on-heating-.png",
    title: "Profesyonel Servis",
    subtitle: "Desteğimizle",
    highlight: "Hizmetinizdeyiz",
    description:
      "7/24 Profesyonel Kombi Servisi. Kombi arızaları, bakım ve montaj hizmetlerinde uzman ve teknik ekibimizle her zaman yanınızdayız.",
  },
  {
    image: "/professional-boiler-maintenance-technician-working.png",
    title: "Uzman Kadro",
    subtitle: "Garantili",
    highlight: "Çözümler",
    description:
      "Sertifikalı teknisyenlerimiz, kombininiz için en iyi bakım ve onarım hizmetlerini sunar. Güvenilir, hızlı ve garantili çözümler.",
  },
  {
    image: "/modern-boiler-installation-service.png",
    title: "7/24 Kesintisiz",
    subtitle: "Hızlı ve",
    highlight: "Güvenilir Hizmet",
    description:
      "Kombi arızaları her zaman beklenmedik anlarda meydana gelebilir. Soğuk kış günlerinde kombi sorunu yaşamanız durumunda haftanın her günü hizmet veriyoruz.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section
      id="anasayfa"
      className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${slide.image}')`,
          }}
        />
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            {slides[currentSlide].title}
            <br />
            <span className="text-primary">{slides[currentSlide].subtitle}</span>
            <br />
            {slides[currentSlide].highlight}
          </h1>

          <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200 leading-relaxed">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 text-sm md:text-base"
            >
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Bize Ulaşın
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground px-6 md:px-8 py-3 bg-transparent text-sm md:text-base"
            >
              Hizmetlerimiz
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-xs md:text-sm">
            <div className="flex items-center">
              <Clock className="h-3 w-3 md:h-4 md:w-4 text-primary mr-2" />
              <span>7/24 Hizmet</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 md:h-4 md:w-4 text-primary mr-2" />
              <span>Van Genelinde</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-3 w-3 md:h-4 md:w-4 text-primary mr-2" />
              <span>0554 104 32 65</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
