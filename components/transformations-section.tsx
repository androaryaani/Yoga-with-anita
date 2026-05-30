"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Timer, Award, Play, Star, Quote, X } from "lucide-react"
import { useState, useRef } from "react"
import Image from "next/image"

const stats = [
  { icon: TrendingUp, value: "12+", label: "Kg Average Weight Loss", suffix: "kg" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Timer, value: "3", label: "Months Average Duration", suffix: "months" },
  { icon: Award, value: "100%", label: "Result Guarantee" },
]

// Different tile sizes for variety - small, medium, large, wide, tall
type TileSize = "small" | "medium" | "large" | "wide" | "tall"

// Video file extensions
const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".avi", ".mkv"]

// Helper: detect if a file is a video from its extension
function isVideoFile(filename: string): boolean {
  return VIDEO_EXTENSIONS.some(ext => filename.toLowerCase().endsWith(ext))
}

interface GalleryItemType {
  id: number
  type: "video" | "image"
  src: string
  title: string
  size: TileSize
}

// ============================================================
// 📁 GALLERY CONFIG — Sirf yahan filenames update karo!
// Apni files public/gallery/ folder me rakhiye.
// Photo: 1.jpg, 2.png, 5.webp (kuch bhi image extension)
// Video: 3.mp4, 8.webm, 11.mov (kuch bhi video extension)
// Type AUTOMATICALLY detect hoga extension se.
// ============================================================
const galleryFiles: { file: string; title: string }[] = [
  { file: "1.mp4", title: "Group Yoga Session" },
  { file: "2.png", title: "Before and After" },
  { file: "3.png", title: "Before and After" },
  { file: "4.jpg", title: "Client Progress" },
  { file: "5.jpg", title: "Wellness Journey" },
  { file: "6.jpg", title: "Live Session" },
  { file: "7.jpg", title: "Transformation 1" },
  { file: "8.jpg", title: "Client Review" },
  { file: "9.jpg", title: "Yoga Class" },
  { file: "10.jpg", title: "Diet Plan Results" },
  { file: "11.jpg", title: "PCOS Recovery" },
  { file: "12.jpg", title: "Weight Loss Journey" },
  { file: "13.jpg", title: "Fitness Progress" },
  { file: "14.jpg", title: "Online Session" },
  { file: "15.jpg", title: "Before After" },
  { file: "16.jpg", title: "Healthy Lifestyle" },
  { file: "17.jpg", title: "Success Story" },
  { file: "18.jpg", title: "Transformation 2" },
  { file: "19.jpg", title: "Client Results" },
  { file: "20.jpg", title: "Testimonial Video" },
  { file: "21.jpg", title: "Group Class" },
  { file: "22.jpg", title: "Stretching" },
  { file: "23.jpg", title: "Meditation" },
  { file: "24.jpg", title: "Balance Pose" },
]

// Rotating size pattern for visual variety
const sizePattern: TileSize[] = ["large", "small", "tall", "wide", "medium", "small", "large", "medium", "tall", "small", "wide", "medium"]

// Build gallery array — type is auto-detected from extension
const resultsGallery: GalleryItemType[] = galleryFiles.map((item, index) => ({
  id: index + 1,
  type: isVideoFile(item.file) ? "video" : "image",
  src: `/gallery/${item.file}`,
  title: item.title,
  size: sizePattern[index % sizePattern.length],
}))

// Satisfied Clients Gallery
const satisfiedClients = [
  {
    id: 1,
    name: "shambhavi khanna",
    reviews: "Local Guide · 62 reviews",
    timeAgo: "a month ago",
    rating: 5,
    testimonial: "Life changing experience with my coach. Its been 4 years now and my life has changed completely. Lost 36kgs n 45inches. Dropped 4sizes. Apni habits change karne se itna acha change aya k aaj bhi follow karti hu. Thank u soooo much my coach 🙏",
    type: "image",
    imageSrc: "/gallery/2.png",
    avatar: "S",
  },
  {
    id: 2,
    name: "Umesh",
    reviews: "5 reviews",
    timeAgo: "a month ago",
    rating: 5,
    testimonial: "The yoga class 🧘 was refreshing and calming. The instructor gave clear guidance, making it easy to follow. It included stretching, poses, and breathing exercises that improved flexibility and reduced stress 🌿. The peaceful environment added to the experience. I felt relaxed, energized, and focused afterward 😌. Highly recommended 👍.",
    type: "text",
    avatar: "U",
  },
  {
    id: 3,
    name: "DIVYA CHOUDHARY",
    reviews: "1 review",
    timeAgo: "a month ago",
    rating: 5,
    testimonial: "My experience with an online yoga class was refreshing and calming. The instructor guided each step clearly, making it easy to follow at home. It improved my flexibility, reduced stress, and boosted my energy. Practicing daily in a peaceful environment was a great experience.",
    type: "text",
    avatar: "D",
  },
  {
    id: 4,
    name: "Mamta Makad",
    reviews: "1 review",
    timeAgo: "a month ago",
    rating: 5,
    testimonial: "Hello mera naam mamta h me anita ji se personal yoga session le rhi hu unka exercise karwane ka tarika bhut acha hai mujhe 2month ho gye h join kiye hue ko unke sath connect hokr bhut acha lga unka nature bhut acha h",
    type: "text",
    avatar: "M",
  },
  {
    id: 5,
    name: "Pawan Kumar gour",
    reviews: "1 review",
    timeAgo: "a month ago",
    rating: 5,
    testimonial: "मैंने कुछ महीने इनको जॉइन किया और मेरा अनुभव काफी अच्छा रहा। शुरू से ही इनका व्यवहार बहुत ही विनम्र और सपोर्टिव लगा। सिखाने का तरीका इतना आसान और समझने योग्य है कि हर चीज़ कंफर्टेबल लगती है।",
    type: "text",
    avatar: "P",
  },
  {
    id: 6,
    name: "Maina Devi",
    reviews: "1 review",
    timeAgo: "Edited a week ago",
    rating: 5,
    testimonial: "Main 4 mahinon se Anita Ji Se yoga kar rahi hun vah bahut achcha samjhati hai unse yoga karne se mujhe mere mein halkapan mahsus ho raha hai aur Dard bhi kam lag raha hai",
    type: "text",
    avatar: "M",
  },
]

// Get size classes based on tile size
function getSizeClasses(size: TileSize): string {
  switch (size) {
    case "small":
      return "w-36 h-36 md:w-48 md:h-48"
    case "medium":
      return "w-40 h-48 md:w-56 md:h-64"
    case "large":
      return "w-48 h-56 md:w-64 md:h-76"
    case "wide":
      return "w-56 h-36 md:w-80 md:h-52"
    case "tall":
      return "w-36 h-52 md:w-48 md:h-72"
    default:
      return "w-40 h-40 md:w-56 md:h-56"
  }
}

// Gallery Item Component — handles both images and videos automatically
function GalleryItem({ item, onClick }: { item: GalleryItemType, onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (item.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => { })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (item.type === "video" && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const sizeClasses = getSizeClasses(item.size)

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${sizeClasses} flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group border border-border/30 bg-muted/20 shadow-md hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/40 transition-all duration-500 ease-out`}
    >
      {item.type === "video" ? (
        <video
          ref={videoRef}
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
          className="transition-all duration-500 group-hover:scale-105"
        />
      ) : (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
          className="transition-all duration-700 ease-out group-hover:scale-105"
        />
      )}

      {/* Premium Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Play button for videos */}
      {item.type === "video" && !isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
            <Play className="w-4 h-4 text-primary-foreground fill-primary-foreground ml-0.5" />
          </div>
        </div>
      )}

      {/* Modern Card Info Tag on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="glass px-3 py-2 rounded-xl border border-primary/20 backdrop-blur-md">
          <span className="text-[9px] uppercase tracking-widest text-primary font-bold">Transformation</span>
          <p className="text-foreground font-semibold text-xs md:text-sm truncate mt-0.5">{item.title}</p>
        </div>
      </div>
    </div>
  )
}

export default function TransformationsSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedReviewImage, setSelectedReviewImage] = useState<string | null>(null)
  const [row1Paused, setRow1Paused] = useState(false)
  const [row2Paused, setRow2Paused] = useState(false)

  // Duplicate gallery for seamless loop - need 3x for smooth infinite scroll
  const row1Items = [...resultsGallery, ...resultsGallery, ...resultsGallery]
  const row2Items = [...resultsGallery].reverse()
  const row2Duplicated = [...row2Items, ...row2Items, ...row2Items]

  return (
    <section id="transformations" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
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
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Transformations</span> That Inspire
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real stories from real people who transformed their lives with us
          </p>
        </motion.div>

        {/* Stats/KPIs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Gallery Section - Auto Scrolling Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our <span className="text-gradient">Results Gallery</span>
            </h3>
            <p className="text-muted-foreground">Watch our journey and real transformations</p>
          </div>

          {/* Auto-scrolling Marquee - Row 1 (Left to Right) */}
          <div
            className="relative overflow-hidden mb-4"
            onMouseEnter={() => setRow1Paused(true)}
            onMouseLeave={() => setRow1Paused(false)}
          >
            <div
              className="flex gap-3 items-center"
              style={{
                animation: "scroll-left 40s linear infinite",
                animationPlayState: row1Paused ? "paused" : "running",
                width: "fit-content",
              }}
            >
              {row1Items.map((item, index) => (
                <GalleryItem
                  key={`row1-${item.id}-${index}`}
                  item={item}
                  onClick={() => setSelectedImage(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Auto-scrolling Marquee - Row 2 (Right to Left) */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setRow2Paused(true)}
            onMouseLeave={() => setRow2Paused(false)}
          >
            <div
              className="flex gap-3 items-center"
              style={{
                animation: "scroll-right 45s linear infinite",
                animationPlayState: row2Paused ? "paused" : "running",
                width: "fit-content",
              }}
            >
              {row2Duplicated.map((item, index) => (
                <GalleryItem
                  key={`row2-${item.id}-${index}`}
                  item={item}
                  onClick={() => setSelectedImage(item.id)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Satisfied Clients Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              <span className="text-gradient">Satisfied Clients</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feedback From Our Practitioners. People often ask us how yoga can improve their lives.
              Read about how yoga has impacted the lives of our practitioners through these testimonials.
            </p>
          </div>

          {/* Clients Gallery - Masonry Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {satisfiedClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                {/* Client Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
                    {client.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{client.name}</h4>
                    <p className="text-xs text-muted-foreground">{client.reviews}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= Math.floor(client.rating)
                              ? "text-primary fill-primary"
                              : star - 0.5 <= client.rating
                                ? "text-primary fill-primary/50"
                                : "text-muted-foreground"
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{client.timeAgo}</span>
                    </div>
                  </div>
                </div>



                {/* Image Thumbnail for image type */}
                {client.type === "image" && client.imageSrc && (
                  <div 
                    className="relative rounded-xl overflow-hidden mb-4 group cursor-pointer"
                    onClick={() => setSelectedReviewImage(client.imageSrc)}
                  >
                    <div className="aspect-square bg-muted relative">
                      <Image
                        src={client.imageSrc}
                        alt={`${client.name} transformation`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                )}

                {/* Testimonial */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                    {client.testimonial}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Reviews Button */}
          <div className="flex justify-center mt-10">
            <motion.a
              href="https://www.google.com/search?q=Get+ideal+health+Yoga+%26+Wellness+Bikaner"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View More Reviews
            </motion.a>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Ready to start your transformation?</p>
          <motion.a
            href="/#book"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow-primary"
          >
            Start Your Journey Today
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {(selectedImage || selectedReviewImage) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => { setSelectedImage(null); setSelectedReviewImage(null); }}
        >
          <button
            onClick={() => { setSelectedImage(null); setSelectedReviewImage(null); }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
            {(() => {
              if (selectedReviewImage) {
                return (
                  <img
                    src={selectedReviewImage}
                    alt="Review Image"
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                  />
                )
              }
              const selectedItem = resultsGallery.find(g => g.id === selectedImage)
              if (!selectedItem) return null
              if (selectedItem.type === "video") {
                return (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                  />
                )
              }
              return (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                />
              )
            })()}
          </div>
        </motion.div>
      )}
    </section>
  )
}
