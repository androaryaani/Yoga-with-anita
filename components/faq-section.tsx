"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Is this online or offline coaching?",
    answer: "All our sessions are conducted online via Zoom. This allows you to join from the comfort of your home, anywhere in India or abroad. You get the same personalized attention as in-person sessions."
  },
  {
    question: "Is personalized diet plan included?",
    answer: "Yes! Every program includes a personalized diet plan tailored to your body type, health conditions, food preferences, and Indian lifestyle. The diet plan is adjusted based on your progress."
  },
  {
    question: "Do you provide PCOS/PCOD support?",
    answer: "Absolutely! We specialize in hormonal health including PCOS, PCOD, thyroid issues, and other hormonal imbalances. Our yoga therapy and nutrition guidance are specifically designed to address these conditions."
  },
  {
    question: "How does daily follow-up work?",
    answer: "We provide daily check-ins via WhatsApp. You share your meals, exercise, and progress. Anita personally reviews and provides guidance, motivation, and adjustments to your plan as needed."
  },
  {
    question: "Is there a refund policy?",
    answer: "We offer 100% result guarantee. If you follow the program sincerely and don&apos;t see results, we continue supporting you for free until you achieve your goals. Your success is our priority."
  },
  {
    question: "Is the yoga suitable for beginners?",
    answer: "Yes! Our sessions are designed for all levels - from complete beginners to advanced practitioners. We modify poses according to your fitness level and any physical limitations you may have."
  },
  {
    question: "What are the session timings?",
    answer: "Sessions are available Monday to Saturday, 9:00 AM to 6:00 PM. We offer flexible timing options to fit your schedule. Weekend batches are also available for working professionals."
  },
  {
    question: "Can I join from outside India?",
    answer: "Yes! We have clients from UAE, USA, UK, Canada, and other countries. The online format makes it easy to join from anywhere. We can adjust session timings based on your timezone."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Got questions? We&apos;ve got answers!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-foreground font-medium pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  openIndex === index ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="https://wa.me/919999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-primary hover:bg-secondary transition-colors"
          >
            Chat with us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
