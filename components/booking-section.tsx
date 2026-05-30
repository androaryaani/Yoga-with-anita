"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Send, User, Phone, Mail, Heart, Scale, CheckCircle, Clock, Loader2 } from "lucide-react"

const goals = [
  "Weight Loss",
  "Hormonal Balance",
  "PCOS/PCOD Support",
  "Stress Management",
  "General Fitness",
  "Yoga Practice",
  "Diet Planning",
  "Lifestyle Correction"
]

const sessions = [
  { day: "Monday", time: "9:00 AM - 6:00 PM", type: "Online Yoga Session", available: true },
  { day: "Tuesday", time: "9:00 AM - 6:00 PM", type: "Online Yoga Session", available: true },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM", type: "Online Yoga Session", available: true },
  { day: "Thursday", time: "9:00 AM - 6:00 PM", type: "Online Yoga Session", available: true },
  { day: "Friday", time: "9:00 AM - 6:00 PM", type: "Online Yoga Session", available: true },
  { day: "Saturday", time: "10:00 AM - 4:00 PM", type: "Special Weekend Session", available: true },
  { day: "Sunday", time: "Holiday", type: "Rest Day", available: false }
]

export default function BookingSection() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    phone: "",
    email: "",
    goal: "",
    healthIssues: "",
    message: "",
    wantsFreeTrial: "no", // "yes" or "no"
    trialDay: "" // selected day for free trial
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false)
        setStep(1)
        setFormData({
          name: "",
          age: "",
          weight: "",
          phone: "",
          email: "",
          goal: "",
          healthIssues: "",
          message: "",
          wantsFreeTrial: "no",
          trialDay: ""
        })
        setErrors({})
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [isSubmitted])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters"
    }

    const ageNum = parseInt(formData.age)
    if (!formData.age) {
      newErrors.age = "Age is required"
    } else if (isNaN(ageNum) || ageNum <= 0 || ageNum > 120) {
      newErrors.age = "Please enter a valid age (1-120)"
    }

    const weightNum = parseFloat(formData.weight)
    if (!formData.weight) {
      newErrors.weight = "Weight is required"
    } else if (isNaN(weightNum) || weightNum <= 20 || weightNum > 300) {
      newErrors.weight = "Please enter a valid weight (20-300 kg)"
    }

    const phoneRegex = /^\+?[0-9\s-]{10,15}$/
    if (!formData.phone.trim()) {
      newErrors.phone = "WhatsApp number is required"
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid WhatsApp number (at least 10 digits)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.goal) {
      newErrors.goal = "Please select a primary goal"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {}
    if (formData.wantsFreeTrial === "yes" && !formData.trialDay) {
      newErrors.trialDay = "Please select a day for your Free Trial Yoga Session"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep4 = () => {
    const newErrors: Record<string, string> = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const isStep1Valid = validateStep1()
    const isStep2Valid = validateStep2()
    const isStep3Valid = validateStep3()
    const isStep4Valid = validateStep4()

    if (!isStep1Valid) {
      setStep(1)
      return
    }
    if (!isStep2Valid) {
      setStep(2)
      return
    }
    if (!isStep3Valid) {
      setStep(3)
      return
    }
    if (!isStep4Valid) {
      setStep(4)
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error("Failed to submit form")
      }

      console.log("Submitted Form Data:", formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form", error)
      alert("There was an error submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return
    if (step === 2 && !validateStep2()) return
    if (step === 3 && !validateStep3()) return
    setStep(step + 1)
  }

  const prevStep = () => setStep(step - 1)

  if (isSubmitted) {
    return (
      <section id="book" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
            {formData.wantsFreeTrial === "yes" ? (
              <p className="text-muted-foreground mb-6">
                Your consultation request has been received and your <strong>Free Trial Yoga Session</strong> is scheduled for <strong>{formData.trialDay}</strong>. Anita will contact you on WhatsApp within 24 hours to share the Zoom link!
              </p>
            ) : (
              <p className="text-muted-foreground mb-6">
                Your consultation request has been received. Anita will contact you on WhatsApp within 24 hours to discuss your wellness goals.
              </p>
            )}
            <p className="text-sm text-primary font-medium">
              Get ready to start your wellness journey!
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="book" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Start Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Book <span className="text-gradient">Free Consultation</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fill out this form and Anita will connect with you on WhatsApp to discuss your wellness goals
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${step >= s ? 'bg-primary text-primary-foreground' : 'glass text-muted-foreground'
                }`}>
                {s}
              </div>
              {s < 4 && (
                <div className={`w-12 md:w-24 h-1 mx-2 rounded transition-all ${step > s ? 'bg-primary' : 'bg-border'
                  }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 md:p-8"
        >
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Personal Information</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 border focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors ${errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-border focus:border-primary'
                        }`}
                    />
                  </div>
                  {errors.name && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Age *</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Your age"
                    className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors ${errors.age ? 'border-rose-500 focus:border-rose-500' : 'border-border focus:border-primary'
                      }`}
                  />
                  {errors.age && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.age}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Current Weight (kg) *</label>
                  <div className="relative">
                    <Scale className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      placeholder="Your weight"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 border focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors ${errors.weight ? 'border-rose-500 focus:border-rose-500' : 'border-border focus:border-primary'
                        }`}
                    />
                  </div>
                  {errors.weight && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.weight}</p>}
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">WhatsApp Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 border focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors ${errors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-border focus:border-primary'
                        }`}
                    />
                  </div>
                  {errors.phone && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* Step 2: Goals */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Your Goals</h3>

              <div>
                <label className="block text-sm text-muted-foreground mb-3">What&apos;s your primary goal? *</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {goals.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, goal })
                        if (errors.goal) {
                          setErrors((prev) => ({ ...prev, goal: "" }))
                        }
                      }}
                      className={`p-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${formData.goal === goal
                          ? 'bg-primary text-primary-foreground'
                          : errors.goal
                            ? 'border border-rose-500 bg-secondary/50 text-foreground hover:border-rose-500'
                            : 'glass hover:border-primary/50'
                        }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
                {errors.goal && <p className="text-rose-500 text-xs mt-2 font-medium">{errors.goal}</p>}
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Any health issues we should know?</label>
                <div className="relative">
                  <Heart className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                  <textarea
                    name="healthIssues"
                    value={formData.healthIssues}
                    onChange={handleChange}
                    placeholder="E.g., PCOS, Thyroid, Diabetes, etc."
                    rows={3}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 py-4 glass rounded-xl font-medium hover:bg-secondary transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Free Trial Yoga Session */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Free Trial Yoga Session</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Would you like to book a Free Trial Yoga Session along with your consultation?
                </p>
              </div>

              {/* Free Trial Toggle Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, wantsFreeTrial: "yes" })
                    setErrors((prev) => ({ ...prev, trialDay: "" }))
                  }}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all ${formData.wantsFreeTrial === "yes"
                      ? "bg-primary/10 border-primary shadow-lg shadow-primary/5"
                      : "bg-secondary/50 border-border hover:border-primary/50"
                    }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">Yes, book my Free Trial</span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.wantsFreeTrial === "yes" ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground"
                      }`}>
                      {formData.wantsFreeTrial === "yes" && <span className="text-[10px]">✓</span>}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Choose an available day below to schedule a free trial yoga class.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, wantsFreeTrial: "no", trialDay: "" })
                    setErrors((prev) => ({ ...prev, trialDay: "" }))
                  }}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all ${formData.wantsFreeTrial === "no"
                      ? "bg-primary/10 border-primary shadow-lg shadow-primary/5"
                      : "bg-secondary/50 border-border hover:border-primary/50"
                    }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">No, only Consultation</span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.wantsFreeTrial === "no" ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground"
                      }`}>
                      {formData.wantsFreeTrial === "no" && <span className="text-[10px]">✓</span>}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Just book a free call to discuss goals and packages first.
                  </p>
                </button>
              </div>

              {/* Show Schedule Grid if Wants Free Trial is Yes */}
              {formData.wantsFreeTrial === "yes" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 pt-4 border-t border-border"
                >
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Select a Day for Free Trial</h4>
                    <p className="text-xs text-muted-foreground">
                      Yoga session will be scheduled at the timing shown on your selected day.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {sessions.map((session) => {
                      const isSelected = formData.trialDay === session.day
                      return (
                        <button
                          key={session.day}
                          type="button"
                          disabled={!session.available}
                          onClick={() => {
                            setFormData({ ...formData, trialDay: session.day })
                            setErrors((prev) => ({ ...prev, trialDay: "" }))
                          }}
                          className={`relative rounded-2xl p-4 text-left cursor-pointer transition-all duration-300 select-none border flex flex-col justify-between h-32 ${!session.available
                              ? "bg-muted/10 border-border/30 opacity-40 cursor-not-allowed"
                              : isSelected
                                ? "bg-primary/10 border-primary text-foreground shadow-lg shadow-primary/5"
                                : "bg-secondary/50 border-border hover:border-primary/50"
                            }`}
                        >
                          {session.available && (
                            <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border flex items-center justify-center transition-all ${isSelected ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground"
                              }`}>
                              {isSelected && <span className="text-[10px]">✓</span>}
                            </div>
                          )}

                          <div>
                            <div className={`font-semibold text-sm mb-1 ${isSelected ? "text-primary" : "text-foreground"
                              }`}>
                              {session.day}
                            </div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {session.time}
                            </div>
                          </div>

                          <div className="mt-auto">
                            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${!session.available
                                ? "bg-muted text-muted-foreground"
                                : isSelected
                                  ? "bg-primary/20 text-primary"
                                  : "bg-accent/15 text-accent"
                              }`}>
                              {session.type}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {errors.trialDay && (
                    <p className="text-rose-500 text-sm mt-2 font-medium">{errors.trialDay}</p>
                  )}
                </motion.div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 py-4 glass rounded-xl font-medium hover:bg-secondary transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Final Details */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Final Details</h3>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email Address (Optional)</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 border focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors ${errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-border focus:border-primary'
                      }`}
                  />
                </div>
                {errors.email && <p className="text-rose-500 text-xs mt-1 font-medium">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Anything else you&apos;d like to share?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your wellness journey..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 py-4 glass rounded-xl font-medium hover:bg-secondary transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
