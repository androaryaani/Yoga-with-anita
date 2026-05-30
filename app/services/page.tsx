import Navbar from "@/components/navbar"
import WhyChooseUs from "@/components/why-choose-us"
import ServicesSection from "@/components/services-section"
import ZoomSessionsSection from "@/components/zoom-sessions"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: "Services - Get Ideal Health | Yoga with Anita",
  description: "Online yoga sessions, fitness programs, weight loss, hormonal health, PCOS/PCOD support, personalized diet plans by Anita",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <WhyChooseUs />
        <ServicesSection />
        <ZoomSessionsSection />
        <FAQSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
