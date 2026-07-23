'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Users, Maximize2, ArrowRight } from 'lucide-react'
import { images } from '@/lib/images'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Suite',
    description: 'Spacious suite with ocean view and private balcony',
    occupancy: '2 Guests',
    size: '45 m²',
    price: '299',
    image: images.rooms[0],
    amenities: ['King Bed', 'Balcony', 'Bath Tub'],
  },
  {
    id: 2,
    name: 'Presidential Villa',
    description: 'Ultimate luxury with private pool and lounge area',
    occupancy: '4 Guests',
    size: '120 m²',
    price: '699',
    image: images.rooms[1],
    amenities: ['Private Pool', 'Lounge', 'Butler Service'],
  },
  {
    id: 3,
    name: 'Ocean Front Room',
    description: 'Direct beach access with stunning sunset views',
    occupancy: '3 Guests',
    size: '60 m²',
    price: '449',
    image: images.rooms[2],
    amenities: ['Beach Access', 'Sunset View', 'Spa Bath'],
  },
  {
    id: 4,
    name: 'Mountain Retreat',
    description: 'Cozy room nestled in nature with panoramic views',
    occupancy: '2 Guests',
    size: '50 m²',
    price: '349',
    image: images.rooms[3],
    amenities: ['Mountain View', 'Fireplace', 'Jacuzzi'],
  },
]

export default function FeaturedRooms() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            Featured Rooms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of luxuriously appointed rooms designed for comfort and elegance
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              className="group bg-white rounded-lg overflow-hidden border border-gray-lighter hover:border-accent-gold transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -12 }}
            >
              {/* Room Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Room Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-black mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{room.description}</p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.slice(0, 2).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-light text-gray-700 px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Room Details */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-lighter">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.occupancy}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize2 className="w-4 h-4" />
                    <span>{room.size}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-3xl font-serif font-bold text-accent-gold">
                     Rs {room.price}
                    </span>
                    <span className="text-gray-600 text-sm">/night</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent-gold text-accent-gold"
                      />
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link href={`/rooms/${room.id}`} className="flex-1">
                    <motion.button
                      className="w-full px-4 py-2 border-2 border-black text-black font-display font-semibold rounded hover:bg-black hover:text-white transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/rooms">
            <motion.button
              className="px-8 py-3 border-2 border-black text-black font-display font-semibold rounded hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, paddingRight: '2rem' }}
              whileTap={{ scale: 0.95 }}
            >
              View All Rooms
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
