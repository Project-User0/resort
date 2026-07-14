"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Users, Home, ArrowLeft, Send } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { images } from "@/lib/images";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "",
    specialRequests: "",
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your Web3Forms access key
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          guests: formData.guests,
          roomType: formData.roomType,
          specialRequests: formData.specialRequests,
          subject: "New Reservation Request",
        }),
      });

      if (response.ok) {
        setSubmitStatus(
          "Reservation request submitted successfully! We will confirm your booking shortly.",
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: "2",
          roomType: "",
          specialRequests: "",
          terms: false,
        });
        setTimeout(() => setSubmitStatus(""), 5000);
      } else {
        setSubmitStatus("Failed to submit reservation. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("Error submitting reservation. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <Navbar />
      <PageHero
        title="Reserve Your Stay"
        subtitle="Complete this form to book your mayadevi resort experience"
        backgroundImage={images.heroPages.rooms}
        showScroll={false}
      />

      {/* Reservation Form */}
      <section className="bg-white py-20 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-black mb-6">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-black placeholder-gray-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-black placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-black placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-black placeholder-gray-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="border-t border-gray-lighter pt-8">
              <h2 className="text-2xl font-serif font-bold text-black mb-6">
                Booking Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Number of Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-gray-700"
                  >
                    <option value="1" className="bg-white text-black">1 Guest</option>
                    <option value="2" className="bg-white text-black">2 Guests</option>
                    <option value="3" className="bg-white text-black">3 Guests</option>
                    <option value="4" className="bg-white text-black">4 Guests</option>
                    <option value="5" className="bg-white text-black">5+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Home className="w-4 h-4 inline mr-2" />
                    Room Type *
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-gray-700"
                  >
                    <option value="" className="bg-white text-black">Select a room type</option>
                    <option value="deluxe" className="bg-white text-black">Deluxe Suite</option>
                    <option value="presidential" className="bg-white text-black">Presidential Villa</option>
                    <option value="oceanfront" className="bg-white text-black">Ocean Front Room</option>
                    <option value="mountain" className="bg-white text-black">Mountain Retreat</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="border-t border-gray-lighter pt-8">
              <h2 className="text-2xl font-serif font-bold text-black mb-6">
                Special Requests
              </h2>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-black placeholder-gray-400"
                placeholder="Let us know if you have any special requests or requirements..."
              />
              <p className="text-sm text-gray-600 mt-2">
                Dietary requirements, room preferences, special occasions, etc.
              </p>
            </div>

            {/* Terms & Conditions */}
            <div className="border-t border-gray-lighter pt-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 mt-1 rounded border-gray-lighter accent-accent-gold cursor-pointer"
                />
                <span className="text-sm text-gray-700 select-none">
                  I agree to the terms and conditions and privacy policy. I
                  understand that a confirmation email will be sent upon
                  submission of this form.
                </span>
              </label>
            </div>

            {/* Status Message */}
            {submitStatus && (
              <motion.div
                className={`p-4 rounded-lg text-center font-medium ${
                  submitStatus.includes("successfully")
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitStatus}
              </motion.div>
            )}

            {/* Submit Button */}
            <div className="border-t border-gray-lighter pt-8 flex gap-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-2 bg-black text-white font-display rounded-lg hover:bg-accent-gold hover:text-black transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Submitting..." : "Complete Reservation"}
              </motion.button>
              <Link href="/rooms" className="flex-1">
                <motion.button
                  type="button"
                  className="w-full px-6 py-2 border-1 border-black text-black font-display rounded-lg hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Rooms
                </motion.button>
              </Link>
            </div>
          </motion.form>
        </div>
      </section>
      <Footer />
    </main>
  );
}