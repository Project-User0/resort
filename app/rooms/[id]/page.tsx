'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Users, Maximize2, Wifi, Wind, Bath, MapPin, ArrowLeft } from 'lucide-react'
import { images } from '@/lib/images'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const roomDetails = {
  1: {
    name: 'Deluxe Suite',
    description: 'Spacious suite with ocean view and private balcony',
    fullDescription: 'Experience luxury and comfort in our Deluxe Suite. Featuring a spacious layout with breathtaking ocean views and a private balcony, this room offers the perfect blend of elegance and functionality. Enjoy premium amenities and personalized service during your stay.',
    price: 299,
    occupancy: '2 Guests',
    size: '45 m²',
    images: [images.rooms[0], images.rooms[1], images.rooms[2]],
    amenities: ['King Bed', 'Balcony', 'Bath Tub', 'Free Wi-Fi', 'Air Conditioning', 'Smart TV', 'Mini Bar', 'Workspace'],
    features: [
      { icon: Wifi, label: 'High-Speed Wi-Fi' },
      { icon: Wind, label: 'Climate Control' },
      { icon: Bath, label: 'Premium Bath' },
      { icon: MapPin, label: 'Scenic View' },
    ],
    highlights: [
      'Premium bedding and linens',
      '24-hour room service',
      'Complimentary toiletries',
      'Coffee and tea maker',
      'Work desk with ergonomic chair',
      'Flat-screen television',
    ],
  },
  2: {
    name: 'Presidential Villa',
    description: 'Ultimate luxury with private pool and lounge area',
    fullDescription: 'The Presidential Villa is our most exclusive accommodation, designed for discerning guests seeking the ultimate luxury experience. With a private infinity pool, spacious lounge area, and dedicated butler service, this villa offers unparalleled comfort and elegance.',
    price: 699,
    occupancy: '4 Guests',
    size: '120 m²',
    images: [images.rooms[1], images.rooms[2], images.rooms[3]],
    amenities: ['Private Pool', 'Lounge', 'Butler Service', 'Chef Kitchen', 'Spa Bath', 'Multiple Bedrooms', 'Concierge', 'Premium Entertainment'],
    features: [
      { icon: Wifi, label: 'Smart Home Technology' },
      { icon: Wind, label: 'Climate Control' },
      { icon: Bath, label: 'Spa Suite' },
      { icon: MapPin, label: 'Garden View' },
    ],
    highlights: [
      'Private infinity pool',
      'Full kitchen facilities',
      'Multiple bedrooms and bathrooms',
      'Personal butler service',
      'Home theater system',
      'Premium spa amenities',
    ],
  },
  3: {
    name: 'Ocean Front Room',
    description: 'Direct beach access with stunning sunset views',
    fullDescription: 'Wake up to the sound of waves in our Ocean Front Room. Direct beach access combined with stunning sunset views creates an unforgettable tropical experience. This room is perfect for those seeking to be close to the sea.',
    price: 449,
    occupancy: '3 Guests',
    size: '60 m²',
    images: [images.rooms[2], images.rooms[3], images.rooms[0]],
    amenities: ['Beach Access', 'Sunset View', 'Spa Bath', 'Terrace', 'Ocean View', 'Premium Bedding', 'Refreshment Bar', 'Entertainment System'],
    features: [
      { icon: Wifi, label: 'High-Speed Wi-Fi' },
      { icon: Wind, label: 'Natural Ventilation' },
      { icon: Bath, label: 'Spa Bath' },
      { icon: MapPin, label: 'Beachfront' },
    ],
    highlights: [
      'Direct beach access',
      'Sunset view terrace',
      'Luxury spa bathroom',
      'Beachfront cocktail bar access',
      'Water sports equipment rental',
      'Sunset dinner service',
    ],
  },
  4: {
    name: 'Mountain Retreat',
    description: 'Cozy room nestled in nature with panoramic views',
    fullDescription: 'Escape to serenity in our Mountain Retreat. Nestled in nature with panoramic mountain and forest views, this cozy room offers the perfect sanctuary for those seeking peace and tranquility away from the bustling city.',
    price: 349,
    occupancy: '2 Guests',
    size: '50 m²',
    images: [images.rooms[3], images.rooms[0], images.rooms[1]],
    amenities: ['Mountain View', 'Fireplace', 'Jacuzzi', 'Balcony', 'Nature View', 'Aromatherapy', 'Reading Nook', 'Coffee Station'],
    features: [
      { icon: Wifi, label: 'Wi-Fi Available' },
      { icon: Wind, label: 'Fresh Mountain Air' },
      { icon: Bath, label: 'Jacuzzi Tub' },
      { icon: MapPin, label: 'Mountain View' },
    ],
    highlights: [
      'Panoramic mountain views',
      'Cozy fireplace',
      'Private jacuzzi tub',
      'Forest trail access',
      'Yoga & meditation area',
      'Nature-inspired décor',
    ],
  },
}

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  const roomId = parseInt(params.id)
  const room = roomDetails[roomId as keyof typeof roomDetails]

  if (!room) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Room Not Found</h1>
            <Link href="/rooms" className="text-accent-gold hover:underline">
              Back to Rooms
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      <div className="pt-32">
        {/* Hero Section with Image Gallery */}
        <section className="bg-black py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link href="/rooms" className="inline-flex items-center gap-2 text-white hover:text-accent-gold mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Rooms
            </Link>

            {/* Main Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="md:col-span-2 h-96 md:h-[500px] relative rounded-lg overflow-hidden">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {room.images.slice(1).map((img, idx) => (
                  <div key={idx} className="h-40 md:h-[240px] relative rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${room.name} ${idx + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Room Details */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-5xl md:text-6xl font-serif font-bold text-black mb-4">
                    {room.name}
                  </h1>
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                    ))}
                    <span className="text-gray-600 ml-2">(245 Reviews)</span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {room.fullDescription}
                  </p>
                </motion.div>

                {/* Room Specs */}
                <motion.div
                  className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-gray-lighter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div>
                    <div className="text-sm text-gray-600 mb-2">Occupancy</div>
                    <div className="text-2xl font-serif font-bold">{room.occupancy}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">Room Size</div>
                    <div className="text-2xl font-serif font-bold">{room.size}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">Price/Night</div>
                    <div className="text-2xl font-serif font-bold text-accent-gold">${room.price}</div>
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-serif font-bold mb-6">Room Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {room.features.map((feature, idx) => {
                      const Icon = feature.icon
                      return (
                        <div key={idx} className="text-center">
                          <Icon className="w-8 h-8 text-accent-gold mx-auto mb-3" />
                          <p className="text-sm text-gray-700">{feature.label}</p>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>

                {/* Amenities */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-2xl font-serif font-bold mb-6">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-gray-light rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-accent-gold" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Highlights */}
                <motion.div
                  className="mt-12 pt-12 border-t border-gray-lighter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h2 className="text-2xl font-serif font-bold mb-6">What&apos;s Included</h2>
                  <ul className="space-y-3">
                    {room.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Booking Card */}
              <motion.div
                className="h-fit sticky top-32"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-light p-8 rounded-lg border border-gray-lighter">
                  <div className="mb-8">
                    <div className="text-sm text-gray-600 mb-2">Price per night</div>
                    <div className="text-4xl font-serif font-bold text-accent-gold mb-1">
                      ${room.price}
                    </div>
                    <p className="text-sm text-gray-600">Plus taxes and fees</p>
                  </div>

                  <div className="space-y-3 mb-8 pb-8 border-b border-gray-lighter">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="w-4 h-4" />
                      <span>{room.occupancy}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Maximize2 className="w-4 h-4" />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  <Link href="/reservation">
                    <motion.button
                      className="w-full px-6 py-3 bg-black text-white font-display font-semibold rounded hover:bg-accent-gold hover:text-black transition-all duration-300 mb-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Reserve This Room
                    </motion.button>
                  </Link>

                  <motion.button
                    className="w-full px-6 py-3 border-2 border-black text-black font-display font-semibold rounded hover:bg-black hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact for Inquiry
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
