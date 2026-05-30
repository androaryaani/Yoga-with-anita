"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Star, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "One Month Weightloss Program",
    originalPrice: 5000,
    price: 4099,
    duration: "1 month",
    popular: true,
    features: [
      "Online YOGA & exercise sessions",
      "Personalised meal plan",
      "Daily follow-up",
      "Weight lose tips and tricks",
      "100% result guarantee",
      "WhatsApp support",
      "Progress tracking",
    ],
    description: "Perfect for kickstarting your weight loss journey with full support"
  },
  {
    name: "3 Months Transformation",
    originalPrice: 12000,
    price: 9999,
    duration: "3 months",
    popular: false,
    features: [
      "Everything in 1 month plan",
      "Advanced yoga routines",
      "Hormonal health focus",
      "PCOS/PCOD support",
      "Stress management sessions",
      "Lifestyle correction",
      "Priority support",
      "Bonus: Recipe book",
    ],
    description: "Comprehensive transformation with sustainable results"
  },
  {
    name: "6 Months Complete Wellness",
    originalPrice: 20000,
    price: 16999,
    duration: "6 months",
    popular: false,
    features: [
      "Everything in 3 months plan",
      "Personal 1-on-1 sessions",
      "Family diet planning",
      "Mindfulness training",
      "Lifetime diet guidance",
      "VIP WhatsApp group",
      "Festival special plans",
      "Free maintenance support",
    ],
    description: "Complete lifestyle transformation for lasting wellness"
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Investment in Your Health
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient">Wellness Plan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Affordable programs designed for sustainable results. Your health is the best investment.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative glass rounded-3xl p-6 md:p-8 ${
                plan.popular ? 'border-primary/50 glow-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-lg text-muted-foreground line-through">₹{plan.originalPrice.toLocaleString()}</span>
                  <span className="text-4xl font-bold text-gradient">₹{plan.price.toLocaleString()}</span>
                </div>
                <span className="text-sm text-muted-foreground">for {plan.duration}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="/#book"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-center py-4 rounded-full font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground glow-primary' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">100% Result Guarantee or Full Support Until You Achieve Your Goals</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
