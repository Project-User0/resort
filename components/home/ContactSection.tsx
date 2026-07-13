'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <motion.div
                className="flex gap-4 p-4 rounded-lg bg-gray-dark border border-gray-darker hover:border-accent-gold transition-all"
                whileHover={{ x: 8 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-accent-gold/10 rounded-lg">
                  <Phone className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">Phone</h3>
                  <p className="text-gray-lighter">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 p-4 rounded-lg bg-gray-dark border border-gray-darker hover:border-accent-gold transition-all"
                whileHover={{ x: 8 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-accent-gold/10 rounded-lg">
                  <Mail className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">Email</h3>
                  <p className="text-gray-lighter">info@luxuryresort.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 p-4 rounded-lg bg-gray-dark border border-gray-darker hover:border-accent-gold transition-all"
                whileHover={{ x: 8 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-accent-gold/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">Address</h3>
                  <p className="text-gray-lighter">123 Luxury Lane, Paradise Beach, PB 12345</p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 p-4 rounded-lg bg-gray-dark border border-gray-darker hover:border-accent-gold transition-all"
                whileHover={{ x: 8 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-accent-gold/10 rounded-lg">
                  <Clock className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">Hours</h3>
                  <p className="text-gray-lighter">24/7 Guest Services</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-display font-semibold text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-darker text-white rounded focus:border-accent-gold focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-display font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-darker text-white rounded focus:border-accent-gold focus:outline-none transition-colors"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-display font-semibold text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-darker text-white rounded focus:border-accent-gold focus:outline-none transition-colors"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-sm font-display font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-darker text-white rounded focus:border-accent-gold focus:outline-none transition-colors h-32 resize-none"
                  placeholder="Your message"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-accent-gold text-black font-display font-semibold rounded hover:bg-accent-gold-dark transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
