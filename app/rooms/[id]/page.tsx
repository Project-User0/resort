'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Users, Maximize2, Wifi, Wind, Bath, MapPin, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { images } from '@/lib/images'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { use, useState, useEffect } from 'react'

interface PageProps {
  params: Promise<{ id: string }>
}

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

export default function RoomDetailPage({ params }: PageProps) {
  const resolvedParams = use(params)
  
  const roomId = parseInt(resolvedParams.id, 10)
  const room = roomDetails[roomId as keyof typeof roomDetails]

  // Dynamic Background Loop Controls
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  useEffect(() => {
    if (!room) return
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % room.images.length)
    }, 6000) // Autoplay rotate image every 6 seconds
    return () => clearInterval(interval)
  }, [room])

  if (!room) {
    return (
      <main className="min-h-screen bg-white text-black">
        <Navbar />
        <div className="flex items-center justify-center pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-black mb-4">Room Not Found</h1>
            <Link href="/rooms" className="text-accent-gold hover:underline">
              Back to Rooms
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const handlePrevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % room.images.length)
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-black flex items-end">
        <div className="absolute inset-0 w-full h-full z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImgIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={room.images[currentImgIndex]}
                alt={`${room.name} space view ${currentImgIndex + 1}`}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <Link href="/rooms" className="inline-flex items-center gap-2 text-white/80 hover:text-accent-gold mb-4 transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Premium Rooms
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-3 drop-shadow-md">
              {room.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light drop-shadow">
              {room.description}
            </p>
          </div>

          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 self-start sm:self-auto">
            <button 
              onClick={handlePrevImage} 
              className="p-2 rounded-full text-white hover:text-accent-gold hover:bg-white/10 transition"
              aria-label="Previous room view"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-white/90 tracking-widest px-1 font-display min-w-[35px] text-center">
              {currentImgIndex + 1} / {room.images.length}
            </span>
            <button 
              onClick={handleNextImage} 
              className="p-2 rounded-full text-white hover:text-accent-gold hover:bg-white/10 transition"
              aria-label="Next room view"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                  ))}
                  <span className="text-gray-600 ml-2">(245 Verified Reviews)</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {room.fullDescription}
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12 py-8 border-y border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <div className="text-sm text-gray-500 mb-2">Occupancy</div>
                  <div className="text-2xl font-serif font-bold text-black">{room.occupancy}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">Room Size</div>
                  <div className="text-2xl font-serif font-bold text-black">{room.size}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">Price/Night</div>
                  <div className="text-2xl font-serif font-bold text-accent-gold">Rs. {room.price}</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-serif font-bold text-black mb-6">Room Features</h2>
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-serif font-bold text-black mb-6">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-accent-gold" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="mt-12 pt-12 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-bold text-black mb-6">What&apos;s Included</h2>
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

            <motion.div
              className="h-fit sticky top-32"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-black">
                <div className="mb-8">
                  <div className="text-sm text-gray-500 mb-2">Price per night</div>
                  <div className="text-4xl font-serif font-bold text-accent-gold mb-1">
                    Rs. {room.price}
                  </div>
                  <p className="text-sm text-gray-500">Plus taxes and fees</p>
                </div>

                <div className="space-y-3 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-4 h-4 text-black" />
                    <span>{room.occupancy}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Maximize2 className="w-4 h-4 text-black" />
                    <span>{room.size}</span>
                  </div>
                </div>

                <Link href="/reservation">
                  <motion.button
                    className="w-full px-6 py-2 bg-black text-white font-display rounded hover:bg-accent-gold hover:text-black transition-all duration-300 mb-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Reserve This Room
                  </motion.button>
                </Link>

                <motion.button
                  className="w-full px-6 py-2 border-1 border-black bg-transparent text-black font-display rounded hover:bg-black hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact for Inquiry
                </motion.button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}