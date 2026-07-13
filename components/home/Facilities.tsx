'use client'

import { motion } from 'framer-motion'
import { Waves, Dumbbell, Home, Utensils, Heart, Users } from 'lucide-react'

const facilities = [
  { icon: Waves, title: 'Swimming Pool', description: 'Olympic-size infinity pool' },
  { icon: Heart, title: 'Spa', description: 'Premium spa treatments' },
  { icon: Dumbbell, title: 'Gym', description: 'State-of-the-art fitness center' },
  { icon: Utensils, title: 'Restaurant', description: 'Fine dining restaurant' },
  { icon: Home, title: 'Bar', description: 'Full-service bar & lounge' },
  { icon: Users, title: 'Conference Hall', description: 'Event spaces available' },
]

export default function Facilities() {
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
            Resort Facilities
          </h2>
          <p className="text-lg text-gray-600">Experience world-class amenities</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {facilities.map((facility, idx) => {
            const Icon = facility.icon
            return (
              <motion.div
                key={idx}
                className="relative p-8 rounded-lg bg-gray-light border-2 border-gray-lighter hover:border-accent-gold transition-all"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 p-3 bg-white rounded-lg inline-block">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-black mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
