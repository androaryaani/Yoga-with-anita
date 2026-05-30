import Navbar from "@/components/navbar"
import PricingSection from "@/components/pricing-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: "Pricing - Get Ideal Health | Yoga with Anita",
  description: "Affordable wellness programs - 1 Month, 3 Months, 6 Months packages with online yoga, personalized diet, and daily follow-up",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <PricingSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
