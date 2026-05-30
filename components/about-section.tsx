"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Award, Users, Sparkles, Leaf } from "lucide-react"

const journey = [
  {
    year: "The Beginning",
    title: "My Wellness Journey Started",
    description: "Started my own transformation journey after struggling with hormonal issues and weight management."
  },
  {
    year: "Learning",
    title: "Certified Yoga Instructor",
    description: "Completed professional yoga certification and nutrition courses to help others on their wellness journey."
  },
  {
    year: "Growing",
    title: "Building Get Ideal Health",
    description: "Started helping clients online, combining yoga, nutrition, and lifestyle coaching for holistic wellness."
  },
  {
    year: "Today",
    title: "8000+ Followers Trust Us",
    description: "Transformed 500+ lives with personalized programs, continuing the mission of healthy India."
  }
]

const helpsWith = [
  "Hormone Balance",
  "Weight Management",
  "Nutrition & Diet Plans",
  "Yoga & Mindfulness",
  "Stress Management",
  "Wellness & Self Care"
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
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
            Meet Your Coach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Yoga with <span className="text-gradient">Anita</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Your guide to a healthier, happier life through yoga and wellness
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl transform scale-95" /> */}
              <div className="relative rounded-3xl overflow-hidden border border-border/50 w-full h-full">
                <Image
                  src="/images/anita.png"
                  alt="Anita - Yoga & Wellness Coach"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass rounded-2xl p-4"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Certified Coach</div>
                    <div className="text-xs text-muted-foreground">5+ Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              I Help With Complete Wellness
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Hi, I&apos;m Anita! I believe that small steps create big changes. My mission is to help you achieve 
              your health goals through personalized yoga sessions, balanced nutrition, and lifestyle coaching 
              that respects Indian culture and traditions.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you&apos;re struggling with weight management, hormonal imbalances like PCOS/PCOD, stress, 
              or simply want to adopt a healthier lifestyle, I&apos;m here to guide you every step of the way.
            </p>

            {/* What I Help With */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">I Help With:</h4>
              <div className="flex flex-wrap gap-2">
                {helpsWith.map((item) => (
                  <span 
                    key={item} 
                    className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm"
                  >
                    <Leaf className="w-4 h-4 text-accent" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center glass rounded-xl p-4">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-xl font-bold text-gradient">8000+</div>
                <div className="text-xs text-muted-foreground">Followers</div>
              </div>
              <div className="text-center glass rounded-xl p-4">
                <Heart className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-xl font-bold text-gradient">500+</div>
                <div className="text-xs text-muted-foreground">Lives Changed</div>
              </div>
              <div className="text-center glass rounded-xl p-4">
                <Sparkles className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-xl font-bold text-gradient">100%</div>
                <div className="text-xs text-muted-foreground">Dedication</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">My Journey</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 h-full">
                  <span className="text-primary text-sm font-medium">{item.year}</span>
                  <h4 className="text-lg font-semibold text-foreground mt-2 mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < journey.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
