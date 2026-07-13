'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    country: 'United States',
    text: 'An absolutely magnificent resort! The staff was incredibly attentive, and every detail was perfect. We will definitely return!',
    rating: 5,
  },
  {
    name: 'Marco Rossi',
    country: 'Italy',
    text: 'The best vacation we&apos;ve ever had. The views are breathtaking, and the amenities are world-class. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    country: 'United Kingdom',
    text: 'Exceptional service, luxurious accommodations, and unforgettable experiences. This resort exceeded all our expectations.',
    rating: 5,
  },
  {
    name: 'Chen Liu',
    country: 'Singapore',
    text: 'A perfect blend of luxury and nature. The wellness spa was incredible, and the food was outstanding. Thank you!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-black mb-4">
            Guest Reviews
          </h2>
          <p className="text-lg text-gray-600">Hear from our satisfied guests</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-lg bg-gray-light border-2 border-gray-lighter hover:border-accent-gold transition-all"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent-gold text-accent-gold"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Guest Info */}
              <div>
                <h4 className="font-display font-semibold text-black">
                  {testimonial.name}
                </h4>
                <p className="text-accent-gold text-sm">{testimonial.country}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/testimonials">
            <motion.button
              className="px-8 py-3 border-2 border-black text-black font-display font-semibold rounded hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, paddingRight: '2rem' }}
              whileTap={{ scale: 0.95 }}
            >
              View All Reviews
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
