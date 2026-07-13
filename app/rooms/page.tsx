'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Users, Maximize2, MapPin, Filter } from 'lucide-react'
import { images } from '@/lib/images'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/layout/PageHero'

const allRooms = [
  {
    id: 1,
    name: 'Deluxe Suite',
    description: 'Spacious suite with ocean view and private balcony',
    price: 299,
    occupancy: '2 Guests',
    size: '45 m²',
    image: images.rooms[0],
    amenities: ['King Bed', 'Balcony', 'Bath Tub'],
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 2,
    name: 'Presidential Villa',
    description: 'Ultimate luxury with private pool and lounge area',
    price: 699,
    occupancy: '4 Guests',
    size: '120 m²',
    image: images.rooms[1],
    amenities: ['Private Pool', 'Lounge', 'Butler Service'],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Ocean Front Room',
    description: 'Direct beach access with stunning sunset views',
    price: 449,
    occupancy: '3 Guests',
    size: '60 m²',
    image: images.rooms[2],
    amenities: ['Beach Access', 'Sunset View', 'Spa Bath'],
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Mountain Retreat',
    description: 'Cozy room nestled in nature with panoramic views',
    price: 349,
    occupancy: '2 Guests',
    size: '50 m²',
    image: images.rooms[3],
    amenities: ['Mountain View', 'Fireplace', 'Jacuzzi'],
    rating: 4.6,
    reviews: 123,
  },
]

export default function RoomsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Rooms & Suites"
        subtitle="Experience luxury accommodations designed for your comfort and relaxation."
        backgroundImage={images.heroPages.rooms}
        showScroll={false}
      />

        {/* Rooms Grid */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {allRooms.map((room) => (
                <motion.div
                  key={room.id}
                  className="group bg-white border border-gray-lighter rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  {/* Room Image */}
                  <div className="relative h-72 overflow-hidden bg-gray-200">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent-gold text-black px-4 py-2 rounded-full font-display font-semibold">
                      ${room.price}/night
                    </div>
                  </div>

                  {/* Room Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-black mb-2">
                      {room.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{room.description}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {room.rating} ({room.reviews} reviews)
                      </span>
                    </div>

                    {/* Room Details */}
                    <div className="flex gap-6 mb-6 pb-6 border-b border-gray-lighter">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-accent-gold" />
                        <span className="text-sm text-gray-600">{room.occupancy}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-accent-gold" />
                        <span className="text-sm text-gray-600">{room.size}</span>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {room.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-light text-gray-700 px-3 py-1 rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <Link href={`/rooms/${room.id}`}>
                      <motion.button
                        className="w-full px-6 py-3 border-2 border-black text-black font-display font-semibold rounded hover:bg-black hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      <Footer />
    </main>
  )
}
