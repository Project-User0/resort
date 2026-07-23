'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { images } from '@/lib/images'

const slides = images.slider.map((image, idx) => ({
  id: idx + 1,
  title: [
    'Infinity Pool',
    'Beach Resort',
    'Mountain View',
    'Luxury Villa',
    'Fine Dining',
    'Sunset View',
  ][idx],
  image,
}))

export default function ImageSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay])

  const goToSlide = (index: number) => {
    setCurrent(index)
    setAutoplay(false)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoplay(false)
  }

  return (
    <section className="relative w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 md:h-screen md:max-h-screen rounded-lg overflow-hidden">
          <AnimatePresence>
            {slides.map((slide, index) => (
              index === current && (
                <motion.div
                  key={slide.id}
                  className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Overlay for text visibility */}
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative text-center">
                    <h2 className="text-xl md:text-6xl font-serif font-bold text-white mb-4">
                      {slide.title}
                    </h2>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-3 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-3 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current ? 'bg-accent-gold w-8' : 'bg-white/60 w-2 hover:bg-white'
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  )
}
