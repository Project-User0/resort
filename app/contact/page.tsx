"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { images } from "@/lib/images";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus(""), 3000);
      } else {
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Navbar />
      <PageHero
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out with any questions or inquiries."
        backgroundImage={images.heroPages.contact}
        showScroll={false}
      />
      {/* Content Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-black mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-black mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 123-4568</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-accent-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-black mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">info@mayadeviresort.com</p>
                    <p className="text-gray-600">
                      reservations@mayadeviresort.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-black mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      M5QQ+M7H, Mahendra Hwy, Banaganga
                    </p>
                    <p className="text-gray-600">Kapilvastu, Nepal</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-accent-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-black mb-1">
                      Hours
                    </h3>
                    <p className="text-gray-600">
                      Sunday - Friday: 8:00 AM - 8:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday - Sunday: 9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <motion.div
                className="mt-12 rounded-lg overflow-hidden border border-gray-lighter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <iframe
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2146652340547!2d-74.00601592345041!3d40.71282557138067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e207a305%3A0x82c4a5e6e7e5d5e5!2sLuxury%20Resort!5e0!3m2!1sen!2sus!4v1234567890"
                />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-black mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 text-black">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-black placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
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

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-black placeholder-gray-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-gray-700"
                  >
                    <option value="" className="bg-white text-black">
                      Select a subject
                    </option>
                    <option value="booking" className="bg-white text-black">
                      Booking Inquiry
                    </option>
                    <option value="event" className="bg-white text-black">
                      Event Planning
                    </option>
                    <option value="feedback" className="bg-white text-black">
                      Feedback
                    </option>
                    <option value="complaint" className="bg-white text-black">
                      Complaint
                    </option>
                    <option value="other" className="bg-white text-black">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-lighter rounded-lg focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold bg-white text-black placeholder-gray-400"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Status Message */}
                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg text-center font-medium ${
                      submitStatus.includes("success")
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitStatus}
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-black text-white font-display font-semibold rounded-lg hover:bg-accent-gold hover:text-black transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
