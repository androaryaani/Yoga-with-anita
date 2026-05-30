"use client"

import { motion } from "framer-motion"
import { Heart, Salad, Activity, Video, Leaf, Brain, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Salad,
    title: "Personalized Diet Plans",
    description: "Indian lifestyle friendly meal plans tailored to your body type and goals"
  },
  {
    icon: Heart,
    title: "Hormonal Health Focus",
    description: "Specialized support for PCOS, PCOD, thyroid and hormonal imbalances"
  },
  {
    icon: Clock,
    title: "Daily Follow-up",
    description: "Regular check-ins and guidance to keep you motivated and on track"
  },
  {
    icon: Video,
    title: "Live Zoom Sessions",
    description: "Interactive online yoga and exercise sessions from the comfort of home"
  },
  {
    icon: Leaf,
    title: "Indian Lifestyle Friendly",
    description: "Plans that respect Indian food habits, festivals and cultural preferences"
  },
  {
    icon: Activity,
    title: "Sustainable Weight Loss",
    description: "No crash diets - only healthy, maintainable lifestyle changes"
  },
  {
    icon: Brain,
    title: "Stress Management",
    description: "Yoga and mindfulness techniques to reduce stress and anxiety"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join 8000+ followers on our wellness journey together"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Wellness Journey <span className="text-gradient">Starts Here</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer a holistic approach to health that combines ancient Indian wisdom with modern science
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
