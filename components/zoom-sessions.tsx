"use client"

import { motion } from "framer-motion"
import { Calendar, Video, Clock, Users } from "lucide-react"

const sessions = [
  {
    day: "Monday",
    time: "9:00 AM - 6:00 PM",
    type: "Online Yoga Session",
    platform: "Zoom",
    available: true
  },
  {
    day: "Tuesday",
    time: "9:00 AM - 6:00 PM",
    type: "Online Yoga Session",
    platform: "Zoom",
    available: true
  },
  {
    day: "Wednesday",
    time: "9:00 AM - 6:00 PM",
    type: "Online Yoga Session",
    platform: "Zoom",
    available: true
  },
  {
    day: "Thursday",
    time: "9:00 AM - 6:00 PM",
    type: "Online Yoga Session",
    platform: "Zoom",
    available: true
  },
  {
    day: "Friday",
    time: "9:00 AM - 6:00 PM",
    type: "Online Yoga Session",
    platform: "Zoom",
    available: true
  },
  {
    day: "Saturday",
    time: "10:00 AM - 4:00 PM",
    type: "Special Weekend Session",
    platform: "Zoom",
    available: true
  },
  {
    day: "Sunday",
    time: "Holiday",
    type: "Rest Day",
    platform: "-",
    available: false
  }
]

const features = [
  {
    icon: Video,
    title: "Live Interactive Sessions",
    description: "Real-time guidance with corrections and personal attention"
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Book sessions according to your schedule convenience"
  },
  {
    icon: Users,
    title: "Small Batch Size",
    description: "Personalized attention in small groups or 1-on-1 sessions"
  },
  {
    icon: Calendar,
    title: "Regular Follow-ups",
    description: "Daily check-ins and progress tracking via WhatsApp"
  }
]

export default function ZoomSessionsSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
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
            Live Zoom Sessions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join Our <span className="text-gradient">Online Classes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transform from the comfort of your home with live interactive yoga and fitness sessions
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Weekly Schedule removed */}
        <div className="mt-8 text-center">
            <motion.a
              href="/#book"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold"
            >
              <Video className="w-5 h-5" />
              Book Your Session Now
            </motion.a>
          </div>
      </div>
    </section>
  )
}
