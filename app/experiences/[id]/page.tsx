'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, Users, ArrowLeft, Calendar, ShieldCheck, MapPin, Compass } from 'lucide-react'
import { images } from '@/lib/images'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { use } from 'react'

interface PageProps {
  params: Promise<{ id: string }>
}

const experienceDetails = {
  '1': {
    title: 'Sunset Sailing',
    description: 'Experience the beauty of the ocean with a guided sailing adventure',
    fullDescription: 'Set sail into the pristine horizon on our luxury catamaran as the sun dips below the blue waters. This curated oceanic journey balances relaxation with sightseeing. Complete with seasonal organic refreshments, champagne, and a licensed navigation crew to guide your voyage.',
    duration: '3 hours',
    groupSize: 'Up to 12 guests',
    price: 145,
    location: 'Main Marina, Dock C',
    image: images.activities[0],
    features: ['Champagne Toast', 'Ocean Navigation', 'Certified Crew', 'Snack Platter'],
    itinerary: [
      { time: 'Pre-boarding', detail: 'Safety briefing and boarding drink reception at the lounge.' },
      { time: 'Hour 1-2', detail: 'Coastal cruise along historical cliffs and emerald coves.' },
      { time: 'Sunset Golden Hour', detail: 'Anchor drop for photo ops, champagne pouring, and light acoustic background ambiance.' },
    ],
    requirements: ['Minimum age 6+', 'Casual resort wear recommended', 'Boat deck friendly footwear.'],
  },
  '2': {
    title: 'Snorkeling Expedition',
    description: 'Explore vibrant coral reefs and marine life',
    fullDescription: 'Dive deep into an underwater wonderland teeming with marine biodiversity. Guided by professional marine biologists, you will explore pristine coral gardens, swim alongside protected sea turtle sanctuaries, and learn about the local marine restoration projects.',
    duration: '4 hours',
    groupSize: 'Up to 8 guests',
    price: 110,
    location: 'North Coral Reef Reserve',
    image: images.activities[1],
    features: ['Premium Snorkel Gear', 'Marine Biologist Guide', 'Boat Transit', 'Underwater Photos'],
    itinerary: [
      { time: '09:00 AM', detail: 'Gear fitting and reef ecology briefing.' },
      { time: '09:45 AM', detail: 'Speedboat transit out to the outer reef wall barrier.' },
      { time: '10:30 AM', detail: 'Guided drift snorkel across key oceanic wildlife zones.' },
    ],
    requirements: ['Basic swimming capability required', 'Reef-safe sunscreen only', 'Towels provided.'],
  },
  '3': {
    title: 'Mountain Hiking',
    description: 'Trek through scenic trails with breathtaking views',
    fullDescription: 'Challenge your senses and reconnect with raw nature. Traverse ancient trails under canopies of protected cedar pines, concluding at a breathtaking summit overlook that showcases panoramic vistas of the entire mountain range valley system.',
    duration: '5 hours',
    groupSize: 'Up to 10 guests',
    price: 85,
    location: 'Alpine Trail Basehead',
    image: images.activities[2],
    features: ['Professional Hiking Guides', 'Hydration Packs', 'Organic energy bars', 'Summit picnic lunch'],
    itinerary: [
      { time: 'Early Morning', detail: 'Trail map walkthrough and stretching session at trailhead.' },
      { time: 'Ascent phase', detail: 'Moderate incline trek with intermediate flora/fauna discovery breaks.' },
      { time: 'Summit rest', detail: 'Gourmet rustic box lunch served at the peak observation pavilion.' },
    ],
    requirements: ['Sturdy athletic or hiking shoes', 'Moderate physical fitness standard', 'Windbreaker jacket recommended.'],
  },
  '4': {
    title: 'Spa Wellness',
    description: 'Rejuvenate with our signature massage and wellness treatments',
    fullDescription: 'Unwind inside a custom sanctuary dedicated to comprehensive physiological alignment. Your therapy begins with a sensory herbal selection, transitioning into a localized signature hot stone massage, and finishing with active steam chamber aromatherapy treatments.',
    duration: '2 hours',
    groupSize: 'Individual',
    price: 180,
    location: 'Zen Wellness Pavilion',
    image: images.activities[3],
    features: ['Custom Essential Oils', 'Private Treatment Suites', 'Steam Room Access', 'Detox Elixirs'],
    itinerary: [
      { time: 'Arrival', detail: 'Personal consultations to dial in preferred essential oils and pressure metrics.' },
      { time: 'Therapy Block', detail: '60 min full-body custom massage coupled with hot basalt volcanic stones.' },
      { time: 'Recovery Lounge', detail: 'Complimentary herbal teas served beside organic relaxation pool.' },
    ],
    requirements: ['Arrive 15 minutes before booking', 'Robes and footwear provided', 'Notify staff of medical considerations.'],
  },
  '5': {
    title: 'Yoga Retreat',
    description: 'Find inner peace with daily yoga and meditation sessions',
    fullDescription: 'Balance your body, mind, and spirit over an open-air pavilion deck overlooking nature. Rooted in traditional Vinyasa and guided mindfulness breathing practices, this session adapts seamlessly to support both master yogis and brand new beginners.',
    duration: '1.5 hours',
    groupSize: 'Up to 15 guests',
    price: 45,
    location: 'Sunrise Sunrise Deck',
    image: images.activities[4],
    features: ['Premium Eco mats provided', 'Sound bowl meditation', 'Fresh juice bar credit', 'Certified Yogis'],
    itinerary: [
      { time: 'First 15 mins', detail: 'Grounding pranayama breathwork exercises.' },
      { time: 'Mid 60 mins', detail: 'Flow state body postures emphasizing core strength and deep flexibility.' },
      { time: 'Final 15 mins', detail: 'Savasana sound bowl integration and guided sensory reset.' },
    ],
    requirements: ['Flexible athletic wear recommended', 'Empty stomach preferred', 'Open to all difficulty levels.'],
  },
  '6': {
    title: 'Water Sports',
    description: 'Jet skiing, paddleboarding, and surfing lessons available',
    fullDescription: 'Get your adrenaline pumping right on the resort shoreline. From high-powered modern jet ski rentals to balancing paddleboard classes and specialized layout surfing instruction, our beachfront instructors keep your experience safe, dynamic, and full of action.',
    duration: 'Varies',
    groupSize: 'Individual',
    price: 95,
    location: 'Beachfront Watersports Shack',
    image: images.activities[5],
    features: ['Impact lifejackets', 'Premium equipment brands', '1-on-1 basic training', 'Dedicated safety jet ski watch'],
    itinerary: [
      { time: 'Check-In', detail: 'Safety sign-off and equipment pairing based on size.' },
      { time: 'Dry run', detail: '10 minute ground control technique training with assigned coach.' },
      { time: 'Water phase', detail: 'Open ocean water time with continuous beach marshal supervision.' },
    ],
    requirements: ['Must know how to swim confidently', 'Waiver completion mandatory', 'Water apparel needed.'],
  },
}

export default function ExperienceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const experienceId = resolvedParams.id
  const experience = experienceDetails[experienceId as keyof typeof experienceDetails]

  if (!experience) {
    return (
      <main className="min-h-screen bg-white text-black">
        <Navbar />
        <div className="flex items-center justify-center pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-black mb-4">Experience Not Found</h1>
            <Link href="/experiences" className="text-accent-gold hover:underline font-medium">
              Back to Experiences
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Header Section - Clean Static Background Layout */}
      <section className="relative w-full h-[60vh] min-h-[450px] overflow-hidden bg-black flex items-end">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            priority
            className="object-cover opacity-85"
          />
          {/* Shaded contrast protection layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
          <Link href="/experiences" className="inline-flex items-center gap-2 text-white/80 hover:text-accent-gold mb-4 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Experiences
          </Link>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-3 drop-shadow-md">
            {experience.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light drop-shadow">
            {experience.description}
          </p>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Primary content area */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* About text description */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-serif font-bold text-black mb-4">About the Experience</h2>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  {experience.fullDescription}
                </p>
              </motion.div>

              {/* What is Included features grid */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h2 className="text-2xl font-serif font-bold text-black mb-6">What&apos;s Included</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {experience.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <ShieldCheck className="w-5 h-5 text-accent-gold flex-shrink-0" />
                      <span className="text-gray-800 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Experience Journey Schedule Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="pt-4"
              >
                <h2 className="text-2xl font-serif font-bold text-black mb-6">Activity Itinerary</h2>
                <div className="border-l-2 border-gray-100 pl-6 space-y-6 ml-2">
                  {experience.itinerary.map((item, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent-gold border-2 border-white" />
                      <div className="text-sm font-display font-semibold text-accent-gold mb-1">{item.time}</div>
                      <p className="text-gray-700 text-sm">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements block */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-4 border-t border-gray-100"
              >
                <h2 className="text-2xl font-serif font-bold text-black mb-4">Important Information</h2>
                <ul className="space-y-2.5">
                  {experience.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>

            {/* Sticky Booking/Inquiry Card */}
            <motion.div
              className="h-fit lg:sticky lg:top-32"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-black">
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Price per person</div>
                  <div className="text-4xl font-serif font-bold text-accent-gold mb-1">
                    Rs. {experience.price}
                  </div>
                  <p className="text-xs text-gray-400">All equipment & gear rentals included</p>
                </div>

                {/* Logistics Info */}
                <div className="space-y-4 mb-8 pb-6 border-b border-gray-200 text-sm">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-4 h-4 text-accent-gold flex-shrink-0" />
                    <span><strong>Duration:</strong> {experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="w-4 h-4 text-accent-gold flex-shrink-0" />
                    <span><strong>Group Size:</strong> {experience.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-4 h-4 text-accent-gold flex-shrink-0" />
                    <span><strong>Meeting Spot:</strong> {experience.location}</span>
                  </div>
                </div>

                <Link href="/reservation">
                  <motion.button
                    className="w-full px-6 py-2 bg-black text-white font-display rounded hover:bg-accent-gold hover:text-black transition-all duration-300 mb-4 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.button>
                </Link>

                <motion.button
                  className="w-full px-6 py-2 border-1 border-black bg-transparent text-black font-display rounded hover:bg-black hover:text-white transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Check Private Group Rates
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