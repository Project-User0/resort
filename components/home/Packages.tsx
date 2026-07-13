'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const packages = [
  {
    name: 'Honeymoon Package',
    duration: '5 Days / 4 Nights',
    price: '$2,999',
    features: [
      'Luxury suite with ocean view',
      'Romantic dinner for two',
      'Spa couples massage',
      'Private beach access',
      'Airport transfers',
    ],
    featured: false,
  },
  {
    name: 'Family Vacation',
    duration: '7 Days / 6 Nights',
    price: '$4,999',
    features: [
      'Premium family villa',
      'All-inclusive meals',
      'Kids club activities',
      'Water sports',
      'Guided tours',
    ],
    featured: true,
  },
  {
    name: 'Wellness Retreat',
    duration: '3 Days / 2 Nights',
    price: '$1,799',
    features: [
      'Deluxe room',
      'Daily yoga sessions',
      'Spa treatments',
      'Healthy meals',
      'Meditation sessions',
    ],
    featured: false,
  },
]

export default function Packages() {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Special Packages
          </h2>
          <p className="text-lg text-gray-lighter">Choose the perfect getaway</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              className={`relative p-8 rounded-lg transition-all ${
                pkg.featured
                  ? 'bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 border-2 border-accent-gold scale-105'
                  : 'bg-gray-dark border-2 border-gray-darker hover:border-accent-gold'
              }`}
              whileHover={{ y: pkg.featured ? 0 : -12 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {pkg.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="px-4 py-1 bg-accent-gold text-black font-display font-semibold text-sm rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                {pkg.name}
              </h3>
              <p className="text-accent-gold font-display text-sm mb-4">
                {pkg.duration}
              </p>

              <div className="mb-6 pb-6 border-b border-gray-darker">
                <span className="text-4xl font-serif font-bold text-accent-gold">
                  {pkg.price}
                </span>
                <span className="text-gray-lighter ml-2">per person</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-lighter">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 font-display font-semibold rounded transition-colors ${
                  pkg.featured
                    ? 'bg-accent-gold text-black hover:bg-accent-gold-dark'
                    : 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
