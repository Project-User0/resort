'use client'

import { motion } from 'framer-motion'
import {
  Home,
  Waves,
  Heart,
  Utensils,
  MapPin,
  Dumbbell,
  Wifi,
  Plane,
  Bed,
  Clock,
  Leaf,
  Flame,
} from 'lucide-react'

const features = [
  { icon: Home, title: 'Luxury Rooms', description: 'Elegantly designed suites with premium amenities' },
  { icon: Waves, title: 'Infinity Pool', description: 'Olympic-size pool overlooking the landscape' },
  { icon: Heart, title: 'Spa & Wellness', description: 'Full-service spa and wellness center' },
  { icon: Utensils, title: 'Fine Dining', description: 'Award-winning restaurants and bars' },
  { icon: MapPin, title: 'Ocean View', description: 'Breathtaking views from every room' },
  { icon: Dumbbell, title: 'Adventure Activities', description: 'Water sports and outdoor adventures' },
  { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout the resort' },
  { icon: Plane, title: 'Airport Pickup', description: 'Complimentary airport transfer service' },
  { icon: Bed, title: 'Private Villas', description: 'Exclusive villas with private pools' },
  { icon: Clock, title: '24/7 Concierge', description: 'Round-the-clock guest services' },
  { icon: Leaf, title: 'Eco-Friendly', description: 'Sustainable and environmentally conscious' },
  { icon: Flame, title: 'Room Service', description: 'In-room dining with world-class cuisine' },
]

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-black mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the exceptional amenities and services that set our resort apart
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                className="group p-6 bg-gray-light rounded-lg border border-gray-lighter hover:border-accent-gold transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(200, 169, 106, 0.15)' }}
              >
                <motion.div
                  className="mb-4 inline-block p-3 bg-white rounded-lg group-hover:bg-accent-gold transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-xl font-display font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
