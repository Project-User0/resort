'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { images } from '@/lib/images'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/layout/PageHero'

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Photo Gallery"
        subtitle="Explore the beauty and elegance of our resort through stunning photography"
        backgroundImage={images.heroPages.gallery}
        showScroll={false}
      />
        {/* Gallery Grid */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, staggerChildren: 0.05 }}
            >
              {images.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="group relative overflow-hidden rounded-lg aspect-square bg-gray-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      <Footer />
    </main>
  )
}
