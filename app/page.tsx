import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import ImageSlider from '@/components/home/ImageSlider'
import Welcome from '@/components/home/Welcome'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Statistics from '@/components/home/Statistics'
import FeaturedRooms from '@/components/home/FeaturedRooms'
import Facilities from '@/components/home/Facilities'
import DiningExperience from '@/components/home/DiningExperience'
import WellnessSpa from '@/components/home/WellnessSpa'
import Activities from '@/components/home/Activities'
import Gallery from '@/components/home/Gallery'
import Testimonials from '@/components/home/Testimonials'
import FAQ from '@/components/home/FAQ'
import ContactSection from '@/components/home/ContactSection'
import Packages from '@/components/home/Packages'
import CTA from '@/components/home/CTA'

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <ImageSlider />
      <Welcome />
      <WhyChooseUs />
      <Statistics />
      <FeaturedRooms />
      <Facilities />
      <DiningExperience />
      <WellnessSpa />
      <Activities />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Packages />
      <CTA />
      <Footer />
    </main>
  )
}
