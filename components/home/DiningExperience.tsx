'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { images } from '@/lib/images'

const diningOptions = [
  {
    title: 'Fine Dining Restaurant',
    description: 'Elegant dining with gourmet cuisine',
    image: images.dining[0],
  },
  {
    title: 'International Buffet',
    description: 'Variety of international cuisines',
    image: images.dining[1],
  },
  {
    title: 'Rooftop Bar & Lounge',
    description: 'Dine under the stars with panoramic views',
    image: images.dining[2],
  },
  {
    title: 'Beach Side Dining',
    description: 'Direct beach access dining experience',
    image: images.dining[3],
  },
]

export default function DiningExperience() {
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
            Dining Experience
          </h2>
          <p className="text-lg text-gray-lighter">Culinary excellence at every bite</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {diningOptions.map((option, idx) => (
            <motion.div
              key={idx}
              className="group overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 overflow-hidden bg-gray-700">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-end"
                  whileHover={{ opacity: 0.9 }}
                >
                  <div className="p-8 w-full">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-100">{option.description}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/dining">
            <motion.button
              className="px-8 py-3 border-2 border-white text-white font-display font-semibold rounded hover:bg-white hover:text-black transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05, paddingRight: '2rem' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Restaurants
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
