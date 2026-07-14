'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Welcome() {
  const features = [
    { label: '15+ Years', value: 'Experience' },
    { label: 'Award Winning', value: 'Hospitality' },
    { label: 'Luxury', value: 'Suites' },
    { label: 'Nature', value: 'Views' },
    { label: 'Premium', value: 'Services' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="bg-black text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-accent-gold">
              Welcome to Paradise
            </h2>
            <p className="text-lg text-gray-lighter leading-relaxed mb-8">
              Our resort is a sanctuary of elegance and tranquility, where every moment is crafted to exceed your expectations. With over 15 years of experience in luxury hospitality, we&apos;ve perfected the art of creating unforgettable memories.
            </p>
            <p className="text-base text-gray-lighter leading-relaxed mb-8">
              From our award-winning accommodations to our world-class amenities, every detail reflects our commitment to excellence.
            </p>
            <motion.button
              className="px-8 py-3 bg-accent-gold text-black font-display font-semibold rounded hover:bg-accent-gold-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.button>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            className="relative h-96 md:h-full rounded-lg bg-gradient-to-br from-gray-dark to-black border border-accent-gold/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image 
                src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Resort Image" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
              <div className="text-center">
                <div className="text-6xl mb-4">🏨</div>
                <p className="text-gray-lighter">Resort Image</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 mt-20 pt-20 border-t border-gray-dark"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-accent-gold mb-2">
                {feature.label}
              </h3>
              <p className="text-gray-lighter text-sm">{feature.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
