'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, Users, MapPin, Star } from 'lucide-react'
import { images } from '@/lib/images'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/layout/PageHero'

const restaurants = [
  {
    name: 'Ocean Breeze',
    description: 'Fresh seafood with panoramic ocean views',
    cuisine: 'Seafood & Mediterranean',
    hours: '6:00 AM - 11:00 PM',
    capacity: '120 Guests',
    rating: 4.9,
    image: images.dining[0],
  },
  {
    name: 'Garden Terrace',
    description: 'International cuisine in a tropical garden setting',
    cuisine: 'International',
    hours: '7:00 AM - 10:30 PM',
    capacity: '150 Guests',
    rating: 4.8,
    image: images.dining[1],
  },
  {
    name: 'Sakura Lounge',
    description: 'Authentic Japanese and Asian fusion cuisine',
    cuisine: 'Japanese & Asian',
    hours: '5:00 PM - 11:00 PM',
    capacity: '80 Guests',
    rating: 4.9,
    image: images.dining[2],
  },
  {
    name: 'The Grill House',
    description: 'Premium steaks and fine dining experience',
    cuisine: 'Steakhouse',
    hours: '6:00 PM - Midnight',
    capacity: '100 Guests',
    rating: 4.8,
    image: images.dining[3],
  },
]

export default function DiningPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Culinary Experiences"
        subtitle="Exquisite dining from around the world"
        backgroundImage={images.heroPages.dining}
        showScroll={false}
      />

        {/* Restaurants Grid */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              {restaurants.map((restaurant, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group">
                    {/* Image */}
                    <div className="relative h-72 rounded-lg overflow-hidden mb-6 bg-gray-200">
                      <Image
                        src={restaurant.image}
                        alt={restaurant.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-3xl font-serif font-bold text-black mb-2">
                      {restaurant.name}
                    </h3>
                    <p className="text-accent-gold font-display font-semibold mb-2">
                      {restaurant.cuisine}
                    </p>
                    <p className="text-gray-700 text-lg mb-6">
                      {restaurant.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-accent-gold" />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Users className="w-5 h-5 text-accent-gold" />
                        <span>{restaurant.capacity}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-accent-gold text-accent-gold"
                            />
                          ))}
                        </div>
                        <span className="text-gray-600">{restaurant.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dining Services */}
            <motion.div
              className="bg-gray-light p-12 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-black mb-8 text-center">
                Special Dining Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Room Service',
                    description: '24/7 in-room dining with extensive menu options',
                  },
                  {
                    title: 'Private Beach Dining',
                    description: 'Romantic sunset dinners on the pristine beach',
                  },
                  {
                    title: 'Culinary Classes',
                    description: 'Learn to cook from our award-winning chefs',
                  },
                  {
                    title: 'Wine Pairing',
                    description: 'Expert sommelier-curated wine selections',
                  },
                  {
                    title: 'Dietary Customization',
                    description: 'Vegan, gluten-free, and special requirement options',
                  },
                  {
                    title: 'Event Catering',
                    description: 'Tailored menus for special occasions and conferences',
                  },
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-6 rounded-lg border border-gray-lighter"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-serif font-bold text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      <Footer />
    </main>
  )
}
