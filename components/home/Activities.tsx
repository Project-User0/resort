'use client'

import { motion } from 'framer-motion'
import { Waves, Bike, Compass, Music, Camera, Users } from 'lucide-react'

const activities = [
  { icon: Waves, title: 'Water Sports', description: 'Surfing, diving, and snorkeling' },
  { icon: Bike, title: 'Cycling', description: 'Scenic cycling tours' },
  { icon: Compass, title: 'Hiking', description: 'Nature trails and guided hikes' },
  { icon: Music, title: 'Live Music', description: 'Evening entertainment and performances' },
  { icon: Camera, title: 'Photography', description: 'Scenic photo spots and tours' },
  { icon: Users, title: 'Team Activities', description: 'Group bonding experiences' },
]

export default function Activities() {
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
            Activities & Experiences
          </h2>
          <p className="text-lg text-gray-lighter">Create unforgettable memories</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {activities.map((activity, idx) => {
            const Icon = activity.icon
            return (
              <motion.div
                key={idx}
                className="group p-8 rounded-lg bg-gray-dark border border-gray-darker hover:border-accent-gold transition-all"
                whileHover={{ y: -12, borderColor: '#C8A96A' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="mb-4 p-3 bg-accent-gold/10 rounded-lg inline-block group-hover:bg-accent-gold/20 transition-colors"
                  whileHover={{ rotate: 10 }}
                >
                  <Icon className="w-6 h-6 text-accent-gold" />
                </motion.div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-lighter">{activity.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
