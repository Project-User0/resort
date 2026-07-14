'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Expand, ArrowRight, X } from 'lucide-react'
import { images } from '@/lib/images'

const galleryImages = images.gallery.slice(0, 8).map((img, idx) => ({
  title: ['Rooms', 'Pool', 'Dining', 'Spa', 'Nature', 'Activities', 'Night View', 'Gardens'][idx],
  image: img,
}))

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

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
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            Gallery
          </h2>
          <p className="text-base md:text-lg text-gray-lighter">Explore our beautiful resort</p>
        </motion.div>

        {/* Responsive Grid Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {galleryImages.map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative h-56 sm:h-64 rounded-lg overflow-hidden cursor-pointer bg-gray-700"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: idx * 0.04, duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setActiveImageIndex(idx)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center lg:opacity-0 group-hover:opacity-100 lg:bg-black/40 lg:group-hover:bg-black/60 transition-all duration-300"
              >
                <div className="text-center p-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-block p-2.5 bg-accent-gold/20 rounded-full mb-1.5"
                  >
                    <Expand className="w-5 h-5 text-accent-gold" />
                  </motion.div>
                  <h3 className="text-white font-serif text-lg md:text-xl font-bold">{item.title}</h3>
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
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/gallery" className="w-full sm:w-auto text-center">
            <motion.button
              className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-display font-semibold rounded hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Gallery
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Expanded Modal Overlay */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 cursor-zoom-out"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Responsive Close Button */}
            <button 
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors cursor-pointer z-50 touch-manipulation"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(null);
              }}
            >
              <X className="w-5 h-5 sm:w-6 h-6" />
            </button>

            {/* Fully Fluid Responsive Image Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="relative w-full max-w-5xl h-full flex items-center justify-center max-h-[75vh] sm:max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeImageIndex].image}
                alt={galleryImages[activeImageIndex].title}
                fill
                priority
                sizes="(max-w-1280px) 100vw, 1280px"
                className="object-contain pointer-events-none select-none"
              />
            </motion.div>
            
            {/* Title Block */}
            <motion.h4 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white font-serif text-lg sm:text-2xl font-semibold mt-6 text-center px-4"
            >
              {galleryImages[activeImageIndex].title}
            </motion.h4>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}