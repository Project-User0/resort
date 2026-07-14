"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";
import { images } from "@/lib/images";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";

const experiences = [
  {
    title: "Sunset Sailing",
    description:
      "Experience the beauty of the ocean with a guided sailing adventure",
    duration: "3 hours",
    groupSize: "Up to 12 guests",
    image: images.activities[0],
  },
  {
    title: "Snorkeling Expedition",
    description: "Explore vibrant coral reefs and marine life",
    duration: "4 hours",
    groupSize: "Up to 8 guests",
    image: images.activities[1],
  },
  {
    title: "Mountain Hiking",
    description: "Trek through scenic trails with breathtaking views",
    duration: "5 hours",
    groupSize: "Up to 10 guests",
    image: images.activities[2],
  },
  {
    title: "Spa Wellness",
    description:
      "Rejuvenate with our signature massage and wellness treatments",
    duration: "2 hours",
    groupSize: "Individual",
    image: images.activities[3],
  },
  {
    title: "Yoga Retreat",
    description: "Find inner peace with daily yoga and meditation sessions",
    duration: "1.5 hours",
    groupSize: "Up to 15 guests",
    image: images.activities[4],
  },
  {
    title: "Water Sports",
    description: "Jet skiing, paddleboarding, and surfing lessons available",
    duration: "Varies",
    groupSize: "Individual",
    image: images.activities[5],
  },
];

export default function ExperiencesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Unforgettable Experiences"
        subtitle="Create lasting memories with our curated activities and adventures"
        backgroundImage={images.heroPages.experiences}
        showScroll={false}
      />
      <div>
        {/* Experiences Grid */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((experience, idx) => (
                <motion.div
                  key={idx}
                  className="group bg-white border border-gray-lighter rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-black mb-3">
                      {experience.title}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {experience.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 mb-6 pb-6 border-b border-gray-lighter">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-accent-gold" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4 text-accent-gold" />
                        <span className="text-sm">{experience.groupSize}</span>
                      </div>
                    </div>

                    {/* CTA */}

                    <Link
                      href={`/experiences/${idx + 1}`}
                      className="block w-full"
                    >
                      <motion.button
                        className="w-full px-4 py-2 border-1 border-black text-black font-display rounded hover:bg-black hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Experiences */}
        <section className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-4xl font-serif font-bold text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Seasonal Specials
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  season: "Summer",
                  activities:
                    "Beach volleyball, sunset cinema, tropical fruit tastings",
                },
                {
                  season: "Autumn",
                  activities:
                    "Hiking festivals, harvest celebrations, cooking workshops",
                },
                {
                  season: "Winter",
                  activities: "Indoor sports, wellness retreats, holiday galas",
                },
                {
                  season: "Spring",
                  activities: "Flower festivals, nature walks, spa specials",
                },
              ].map((seasonal, idx) => (
                <motion.div
                  key={idx}
                  className="border-2 border-accent-gold p-8 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-serif font-bold text-accent-gold mb-4">
                    {seasonal.season}
                  </h3>
                  <p className="text-gray-300">{seasonal.activities}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
