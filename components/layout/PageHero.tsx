'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  showScroll?: boolean
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  showScroll = true,
}: PageHeroProps) {
  return (
    <section
      className="relative h-[70vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
        </motion.div>

        {subtitle && (
          <motion.p
            className="text-lg md:text-xl text-gray-100 max-w-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Scroll Indicator */}
      {showScroll && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 opacity-70" />
        </motion.div>
      )}
    </section>
  )
}
