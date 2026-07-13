'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Share2, Send, Music, Camera, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Rooms', href: '/rooms' },
        { label: 'Dining', href: '/dining' },
        { label: 'Gallery', href: '/gallery' },
      ],
    },
    {
      title: 'Experience',
      links: [
        { label: 'Experiences', href: '/experiences' },
        { label: 'Wellness & Spa', href: '/#wellness' },
        { label: 'Activities', href: '/#activities' },
        { label: 'Packages', href: '/#packages' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Inquiry', href: '/inquiry' },
        { label: 'FAQ', href: '/#faq' },
        { label: 'Testimonials', href: '/testimonials' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Camera, href: '#', label: 'Instagram' },
    { icon: Share2, href: '#', label: 'Facebook' },
    { icon: Music, href: '#', label: 'YouTube' },
    { icon: Send, href: '#', label: 'LinkedIn' },
    { icon: Heart, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4 text-accent-gold">
              Luxury Resort
            </h3>
            <p className="text-gray-lighter text-sm leading-relaxed mb-6">
              Your sanctuary of elegance and tranquility. Experience world-class hospitality.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-gray-light hover:text-accent-gold transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-display font-semibold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-lighter hover:text-accent-gold text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gray-dark mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-lighter text-sm">
            <p>&copy; 2024 Luxury Resort. All rights reserved.</p>
          </div>

          <div className="flex gap-6 text-gray-lighter text-sm">
            <Link href="#" className="hover:text-accent-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-accent-gold transition-colors">
              Cookies
            </Link>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-accent-gold hover:text-white transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <span className="text-sm">Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
