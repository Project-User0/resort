'use client'

import { motion } from 'framer-motion'
import { Heart, Cloud, Droplets } from 'lucide-react'

const treatments = [
  { icon: Heart, title: 'Massage', description: 'Therapeutic massage treatments' },
  { icon: Cloud, title: 'Yoga', description: 'Daily yoga and meditation sessions' },
  { icon: Droplets, title: 'Sauna & Steam', description: 'Traditional spa facilities' },
]

export default function WellnessSpa() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-black mb-6">
              Wellness & Spa
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Rejuvenate your mind, body, and soul at our world-class spa and wellness center. Our expert therapists provide personalized treatments using premium natural products.
            </p>

            {/* Treatments Grid */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {treatments.map((treatment, idx) => {
                const Icon = treatment.icon
                return (
                  <motion.div
                    key={idx}
                    className="flex gap-4 p-4 rounded-lg bg-gray-light border border-gray-lighter hover:border-accent-gold transition-all"
                    whileHover={{ x: 8 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 bg-white rounded-lg">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-black">{treatment.title}</h3>
                      <p className="text-gray-600 text-sm">{treatment.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.button
              className="px-8 py-3 bg-black text-white font-display font-semibold rounded hover:bg-accent-gold hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Spa Treatment
            </motion.button>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            className="relative h-96 rounded-lg bg-gradient-to-br from-pink-200 to-pink-400 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🧘</div>
              <p>Spa & Wellness</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
