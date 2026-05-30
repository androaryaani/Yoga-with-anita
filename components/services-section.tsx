"use client"

import { motion } from "framer-motion"
import { Scale, Heart, Activity, Video, Salad, Brain, Sparkles, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Scale,
    title: "Weight Loss Coaching",
    description: "Sustainable weight loss through personalized diet plans and exercise routines. No crash diets, only healthy lifestyle changes that last.",
    benefits: ["Personalized meal plans", "Daily follow-ups", "Weight tracking", "100% result guarantee"],
    color: "primary"
  },
  {
    icon: Heart,
    title: "Hormonal Health & PCOS/PCOD Support",
    description: "Specialized programs for hormonal imbalances, PCOS, PCOD, thyroid issues with yoga therapy and nutrition guidance.",
    benefits: ["Hormone balancing diet", "Therapeutic yoga", "Lifestyle correction", "Regular monitoring"],
    color: "accent"
  },
  {
    icon: Video,
    title: "Online Yoga Sessions",
    description: "Live interactive yoga sessions via Zoom from the comfort of your home. Suitable for beginners to advanced practitioners.",
    benefits: ["Live Zoom classes", "Flexible timings", "All levels welcome", "Recorded sessions"],
    color: "primary"
  },
  {
    icon: Salad,
    title: "Personalized Diet Plans",
    description: "Indian lifestyle friendly nutrition plans tailored to your body type, preferences, and health goals.",
    benefits: ["Indian food based", "Festival friendly", "Easy to follow", "Balanced nutrition"],
    color: "accent"
  },
  {
    icon: Brain,
    title: "Stress Management & Mindfulness",
    description: "Yoga and meditation techniques to manage stress, anxiety, and improve mental well-being.",
    benefits: ["Breathing exercises", "Meditation guidance", "Sleep improvement", "Mental clarity"],
    color: "primary"
  },
  {
    icon: Activity,
    title: "Lifestyle Correction",
    description: "Complete lifestyle transformation addressing sleep, eating habits, exercise routines and daily wellness practices.",
    benefits: ["Routine planning", "Habit building", "Energy boost", "Overall wellness"],
    color: "accent"
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            I Help With <span className="text-gradient">Complete Wellness</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Online yoga session, fitness program, weightloss, weight management, hormonal health, 
            Lifestyle disorders, balanced and personalized diet and yoga
          </p>
        </motion.div>

        {/* Services Grid - Zig Zag Layout */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              {/* Icon Card */}
              <div className="lg:w-1/3 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className={`w-48 h-48 rounded-3xl glass flex items-center justify-center ${
                    service.color === 'primary' ? 'glow-primary' : 'glow-accent'
                  }`}
                >
                  <service.icon className={`w-20 h-20 ${
                    service.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                  {service.benefits.map((benefit) => (
                    <span 
                      key={benefit} 
                      className={`flex items-center gap-2 px-4 py-2 rounded-full glass text-sm ${
                        service.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`}
                    >
                      <Sparkles className="w-4 h-4" />
                      {benefit}
                    </span>
                  ))}
                </div>
                <motion.a
                  href="/#book"
                  whileHover={{ x: 5 }}
                  className={`inline-flex items-center gap-2 font-medium ${
                    service.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
