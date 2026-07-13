'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability.',
  },
  {
    question: 'Is breakfast included in the room rate?',
    answer: 'Breakfast is included in the room rate for all guests. A buffet is served daily from 6:30 AM to 10:00 AM at our main restaurant.',
  },
  {
    question: 'What are the cancellation policies?',
    answer: 'Cancellations must be made 7 days before arrival for a full refund. Cancellations made within 7 days may incur charges. Check your booking confirmation for specific terms.',
  },
  {
    question: 'Are pets allowed at the resort?',
    answer: 'We welcome pets with prior arrangement. Please contact us in advance to discuss pet policies and any applicable fees.',
  },
  {
    question: 'Is parking available at the resort?',
    answer: 'Yes, complimentary parking is available for all guests. We offer secure valet parking and self-parking options.',
  },
  {
    question: 'What are the Wi-Fi details?',
    answer: 'Free high-speed Wi-Fi is available throughout the resort. Please contact the front desk for the network name and password upon arrival.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">Find answers to common questions</p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="border-2 border-gray-lighter rounded-lg overflow-hidden hover:border-accent-gold transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-light hover:bg-accent-gold/10 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                whileHover={{ paddingRight: 28 }}
              >
                <span className="font-display font-semibold text-black">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent-gold flex-shrink-0" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 bg-white border-t border-gray-lighter">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
