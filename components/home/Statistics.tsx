'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  number: number
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { number: 500, label: 'Luxury Rooms', suffix: '+' },
  { number: 50000, label: 'Happy Guests', suffix: '+' },
  { number: 20, label: 'Awards', suffix: '+' },
  { number: 15, label: 'Years Experience', suffix: '+' },
  { number: 100, label: 'Customer Satisfaction', suffix: '%' },
]

const Counter = ({ stat }: { stat: Stat }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepValue = stat.number / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setCount(Math.min(Math.round(stepValue * currentStep), stat.number))

      if (currentStep >= steps) {
        clearInterval(timer)
        setCount(stat.number)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, stat.number])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-5xl md:text-6xl font-serif font-bold text-accent-gold mb-2">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="text-lg text-black font-display">{stat.label}</p>
    </motion.div>
  )
}

export default function Statistics() {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <Counter key={idx} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
