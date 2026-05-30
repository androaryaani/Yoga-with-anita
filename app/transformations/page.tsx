import Navbar from "@/components/navbar"
import TransformationsSection from "@/components/transformations-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: "Transformations - Get Ideal Health | Yoga with Anita",
  description: "Real client transformations and success stories from Get Ideal Health wellness programs",
}

export default function TransformationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <TransformationsSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
