import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import BookingSection from "@/components/booking-section"
import InstagramSection from "@/components/instagram-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BookingSection />
      <InstagramSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
