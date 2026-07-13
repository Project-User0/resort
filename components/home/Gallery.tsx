'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Expand, ArrowRight } from 'lucide-react'
import { images } from '@/lib/images'

const galleryImages = images.gallery.slice(0, 8).map((img, idx) => ({
  title: ['Rooms', 'Pool', 'Dining', 'Spa', 'Nature', 'Activities', 'Night View', 'Gardens'][idx],
  image: img,
}))

export default function Gallery() {
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
            Gallery
          </h2>
          <p className="text-lg text-gray-lighter">Explore our beautiful resort</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {galleryImages.map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer bg-gray-700"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all"
                whileHover={{ opacity: 0.9 }}
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="inline-block p-3 bg-accent-gold/20 rounded-full mb-2"
                  >
                    <Expand className="w-6 h-6 text-accent-gold" />
                  </motion.div>
                  <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/gallery">
            <motion.button
              className="px-8 py-3 border-2 border-white text-white font-display font-semibold rounded hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, paddingRight: '2rem' }}
              whileTap={{ scale: 0.95 }}
            >
              View All Gallery
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
