"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Rooms", href: "/rooms" },
    { label: "Dining", href: "/dining" },
    { label: "Experiences", href: "/experiences" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobile
          ? "bg-white shadow-lg"
          : isScrolled
            ? "bg-white shadow-lg"
            : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <motion.div
              className={`text-2xl font-serif font-bold ${
                isMobile || isScrolled ? "text-black" : "text-white"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Mayadevi Resort
            </motion.div>
          </Link>

          <div className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isMobile || isScrolled
                      ? "text-black hover:text-accent-gold"
                      : "text-white hover:text-accent-gold"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          <Link href="/reservation">
            <motion.button
              className="hidden xl:block px-6 py-2 bg-black text-white font-display rounded text-sm font-semibold hover:bg-accent-gold hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Now
            </motion.button>
          </Link>

          <motion.button
            className="xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className={`w-6 h-6 ${isMobile || isScrolled ? "text-black" : "text-white"}`} />
            )}
          </motion.button>
        </div>

        <motion.div
          className="xl:hidden overflow-hidden bg-white"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-4 pb-4 space-y-2">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-black hover:bg-gray-light rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Link href="/reservation" className="block px-4 py-2">
              <motion.button
                className="w-full mt-4 px-6 py-3 bg-black text-white font-display rounded text-sm font-semibold hover:bg-accent-gold hover:text-black transition-all"
                whileTap={{ scale: 0.95 }}
              >
                Reserve Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
