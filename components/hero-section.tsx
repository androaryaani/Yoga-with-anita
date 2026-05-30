"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Play, Star, Users, Award, Clock } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/yoga-room-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Background Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm text-muted-foreground">8000+ Happy Followers</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Transform Your</span>
              <br />
              <span className="text-gradient">Body, Hormones</span>
              <br />
              <span className="text-foreground">& Lifestyle</span>
              <span className="text-primary"> Naturally</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Personalized yoga, wellness and nutrition coaching for sustainable weight loss, 
              hormonal balance, PCOS/PCOD support and stress management with Anita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <motion.a
                href="/#book"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow-primary hover:opacity-90 transition-opacity"
              >
                Book Free Consultation
              </motion.a>
              <motion.a
                href="/transformations"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-4 glass rounded-full font-medium text-lg hover:bg-secondary transition-colors"
              >
                <Play className="w-5 h-5 text-primary" />
                View Transformations
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center glass rounded-xl p-4">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-xs text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center glass rounded-xl p-4">
                <Award className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center glass rounded-xl p-4">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground">Result Guaranteed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Surya Namaskar Yoga Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-lg mx-auto">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl transform scale-90" />
              
              {/* Surya Namaskar Illustration */}
              <div className="relative w-full h-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/335c82f7f4de15b0a6cf30123bb3e1a9-0XoThQMxarraW1OmBsyVhOAB7YljCI.jpg"
                  alt="Surya Namaskar - Sun Salutation Yoga Poses"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:left-4 glass rounded-2xl p-4 max-w-[200px] z-10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-xs text-accent font-medium">Live Sessions</span>
                </div>
                <p className="text-sm text-foreground font-medium">Small steps create big changes</p>
              </motion.div>

              {/* Service Tags */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:right-4 glass rounded-2xl p-3 z-10"
              >
                <div className="flex flex-wrap gap-1 max-w-[150px]">
                  {['Hormone Balance', 'Weight Loss', 'PCOS Support'].map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-primary/20 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
