'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/layout/PageHero'
import { images } from '@/lib/images'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    country: 'United States',
    rating: 5,
    text: 'Absolutely magical! The resort exceeded all my expectations. The staff was incredibly attentive and the rooms were pristine. I\'ll definitely be coming back!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    country: 'Singapore',
    rating: 5,
    text: 'What an incredible experience. The dining was world-class, and the spa treatments were the best I\'ve ever had. Truly a five-star resort in every way.',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    country: 'United Kingdom',
    rating: 5,
    text: 'The perfect honeymoon destination! Romantic, luxurious, and every detail was thoughtfully considered. We can\'t thank the team enough.',
  },
  {
    id: 4,
    name: 'David Martinez',
    country: 'Spain',
    rating: 4,
    text: 'Beautiful property with stunning views. The amenities are top-notch and the service is exceptional. A truly memorable vacation!',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    country: 'Australia',
    rating: 5,
    text: 'Best resort I\'ve ever visited! The attention to detail is extraordinary. From check-in to check-out, everything was perfect. Highly recommended!',
  },
  {
    id: 6,
    name: 'Robert Taylor',
    country: 'Canada',
    rating: 5,
    text: 'Simply outstanding! The resort offers everything a luxury traveler could desire. The beach access and water activities were fantastic.',
  },
  {
    id: 7,
    name: 'Sophie Laurent',
    country: 'France',
    rating: 5,
    text: 'Un resort magnifique! The elegance and sophistication are unmatched. Every moment was pure luxury. I felt like royalty!',
  },
  {
    id: 8,
    name: 'James Thompson',
    country: 'United Kingdom',
    rating: 4,
    text: 'Wonderful stay with excellent service. The pool area is beautiful and the food options are diverse. Would definitely recommend.',
  },
  {
    id: 9,
    name: 'Maria Garcia',
    country: 'Mexico',
    rating: 5,
    text: 'Absolutely stunning resort! The sunset views are breathtaking and the staff makes you feel so welcomed. This is my happy place!',
  },
  {
    id: 10,
    name: 'Alexander Petrov',
    country: 'Russia',
    rating: 5,
    text: 'The level of luxury here is exceptional. Every room has a stunning view, and the hospitality is second to none. Fantastic experience!',
  },
  {
    id: 11,
    name: 'Caroline Dubois',
    country: 'Belgium',
    rating: 5,
    text: 'A true paradise! The resort is immaculate, the staff is incredibly friendly, and the cuisine is exquisite. Couldn\'t ask for more!',
  },
  {
    id: 12,
    name: 'Antonio Romano',
    country: 'Italy',
    rating: 4,
    text: 'Bellissimo! The resort captures the essence of luxury living. The spa facilities are world-class and the views are spectacular.',
  },
  {
    id: 13,
    name: 'Jennifer Lee',
    country: 'South Korea',
    rating: 5,
    text: 'Perfect in every way! The resort combines modern luxury with natural beauty. The staff\'s attention to detail is remarkable.',
  },
  {
    id: 14,
    name: 'William Brown',
    country: 'United States',
    rating: 5,
    text: 'Exceeded expectations completely! The amenities are top-tier, the food is delicious, and the views are absolutely stunning.',
  },
  {
    id: 15,
    name: 'Nicole Hansen',
    country: 'Denmark',
    rating: 5,
    text: 'A dream come true! The resort is pristine, the staff is welcoming, and every moment was filled with relaxation and joy.',
  },
  {
    id: 16,
    name: 'Lucas Silva',
    country: 'Brazil',
    rating: 5,
    text: 'Incrível! The resort offers the perfect blend of adventure and relaxation. The beaches are pristine and the service is impeccable.',
  },
  {
    id: 17,
    name: 'Victoria Mueller',
    country: 'Germany',
    rating: 4,
    text: 'Excellent resort with outstanding service. The facilities are modern and well-maintained. Great value for the experience offered.',
  },
  {
    id: 18,
    name: 'Marco Rossi',
    country: 'Italy',
    rating: 5,
    text: 'Magnifico! This resort is a masterpiece of luxury and elegance. Every element is carefully curated for maximum comfort and pleasure.',
  },
  {
    id: 19,
    name: 'Catherine Lefevre',
    country: 'France',
    rating: 5,
    text: 'Exceptional resort experience! The cuisine is world-class, the spa is rejuvenating, and the entire atmosphere is serene and luxurious.',
  },
  {
    id: 20,
    name: 'Hiroshi Yamamoto',
    country: 'Japan',
    rating: 5,
    text: '素晴らしい! The resort represents the pinnacle of luxury hospitality. The attention to aesthetics and comfort is truly remarkable.',
  },
  {
    id: 21,
    name: 'Amanda Scott',
    country: 'Ireland',
    rating: 4,
    text: 'Fantastic resort with a warm, welcoming atmosphere. The staff goes above and beyond to make guests feel special.',
  },
  {
    id: 22,
    name: 'Klaus Schulz',
    country: 'Austria',
    rating: 5,
    text: 'Wunderbar! Everything about this resort is premium quality. From the architecture to the service, it\'s all five-star excellence.',
  },
  {
    id: 23,
    name: 'Priya Patel',
    country: 'India',
    rating: 5,
    text: 'Simply heavenly! The resort offers world-class amenities and authentic Indian hospitality. A truly memorable experience.',
  },
  {
    id: 24,
    name: 'Francesco Bianchi',
    country: 'Italy',
    rating: 5,
    text: 'Straordinario! The resort is a sanctuary of luxury and refinement. Every detail speaks to the passion for perfection.',
  },
  {
    id: 25,
    name: 'Elena Volkova',
    country: 'Russia',
    rating: 5,
    text: 'Magnificent property! The elegance, the service, the food - everything is absolutely first-class. A true luxury experience!',
  },
]

export default function TestimonialsPage() {
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
        title="Guest Reviews"
        subtitle="What our guests are saying about their experiences"
        backgroundImage={images.heroPages.testimonials}
        showScroll={false}
      />
      <div>
        {/* Statistics */}
        <section className="bg-gray-light py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
              {[
                { number: '4.8', label: 'Average Rating' },
                { number: '1000+', label: 'Reviews' },
                { number: '98%', label: 'Satisfaction' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-serif font-bold text-accent-gold">
                    {stat.number}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white border border-gray-lighter p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent-gold text-accent-gold"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="border-t border-gray-lighter pt-4">
                    <p className="font-serif font-bold text-black">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.country}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
