'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Users, Globe, Leaf } from 'lucide-react'
import { images } from '@/lib/images'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/layout/PageHero'

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional service and maintaining the highest standards in hospitality.',
    },
    {
      icon: Users,
      title: 'Guest-Centric',
      description: 'Every decision we make is guided by our desire to exceed guest expectations and create lasting memories.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are dedicated to environmental responsibility and sustainable tourism practices.',
    },
    {
      icon: Globe,
      title: 'Inclusivity',
      description: 'We welcome guests from around the world and celebrate diverse cultures and perspectives.',
    },
  ]

  return (
    <main>
      <Navbar />
      <PageHero
        title="About Our Resort"
        subtitle="A Legacy of Mayadevi and Hospitality"
        backgroundImage={images.heroPages.about}
        showScroll={false}
      />

      <div>
        {/* Story Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-serif font-bold text-black mb-6">
                  Our Story
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Founded in 1985, our mayadevi resort has been a beacon of hospitality and excellence for nearly four decades. What began as a small boutique property has evolved into a world-class destination, welcoming guests from every corner of the globe.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our journey has been defined by a commitment to innovation, sustainability, and an unwavering dedication to creating unforgettable experiences for our guests. Today, we stand as one of the most respected resort brands in the industry.
                </p>
              </motion.div>
              <motion.div
                className="relative h-96 rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src={images.featured[0]}
                  alt="Resort Story"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-black">
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={idx}
                    className="bg-white p-8 rounded-lg border border-gray-lighter text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                    <h3 className="text-xl font-serif font-bold text-black mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-black mb-4">
                Recognition & Awards
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { year: '2023', award: 'World\'s Best Resort' },
                { year: '2023', award: 'Luxury Hospitality Excellence' },
                { year: '2022', award: 'Best Environmental Initiative' },
                { year: '2022', award: 'World Leading Destination Resort' },
                { year: '2021', award: 'Best Culinary Experience' },
                { year: '2021', award: 'Five-Star Excellence Award' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-8 border-2 border-accent-gold rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-accent-gold font-serif font-bold text-sm mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black">
                    {item.award}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-4">
                Our Expert Team
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Comprising over 500 dedicated professionals committed to delivering exceptional service and creating memorable experiences for every guest.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { number: '500+', label: 'Team Members' },
                  { number: '40', label: 'Nationalities' },
                  { number: '25', label: 'Years Experience' },
                  { number: '100%', label: 'Satisfaction Rate' },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl font-serif font-bold text-accent-gold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
