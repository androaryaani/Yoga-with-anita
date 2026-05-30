"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Leaf, Mail, Instagram, Clock, MapPin, Phone, Heart } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Transformations", href: "/transformations" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 flex flex-col items-center text-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
              <div>
                <span className="text-xl font-bold text-gradient">Get Ideal Health</span>
                <span className="block text-xs text-muted-foreground">Yoga with Anita</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xl">
              Transform your body, hormones & lifestyle naturally with personalized yoga and nutrition coaching.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <li>
                <a 
                  href="mailto:getidealhealthwithus@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  getidealhealthwithus@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/get_ideal_health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4 text-primary" />
                  @get_ideal_health
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="w-4 h-4 text-primary" />
                Mon - Sat: 9:00 AM - 6:00 PM
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm max-w-sm text-left">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>opposite ramdev temple, Mukta Prasad Colony, sector no.4, M P Colony, Bikaner, Rajasthan 334001</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              © 2024 Get Ideal Health. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Anita
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Small steps create big changes
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
