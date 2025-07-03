'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function HowItWorks({ handleLaunchApp }: { handleLaunchApp: () => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      title: "Drag Components",
      description: "Choose from our extensive library of Jetpack Compose components and drag them onto your canvas.",
      image: "/api/placeholder/400/300"
    },
    {
      number: "02", 
      title: "Customize Properties",
      description: "Fine-tune colors, spacing, typography, and behavior using our intuitive properties panel.",
      image: "/api/placeholder/400/300"
    },
    {
      number: "03",
      title: "Preview & Test",
      description: "See your design come to life with real-time preview across different devices and screen sizes.",
      image: "/api/placeholder/400/300"
    },
    {
      number: "04",
      title: "Export Code",
      description: "Generate clean, production-ready Jetpack Compose code that you can directly use in your project.",
      image: "/api/placeholder/400/300"
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            How It
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From concept to code in minutes. Our streamlined workflow makes UI development effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="h-px w-16 bg-gradient-to-r from-primary to-primary-light"></div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
                  {step.title}
                </h3>
                
                <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                  {step.description}
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-4"
                >
                  <button className="text-primary hover:text-primary-light font-semibold inline-flex items-center group">
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </motion.div>
              </div>

              {/* Image/Demo */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="bg-bg-secondary border border-border rounded-2xl p-8 shadow-xl">
                    {/* Placeholder for demo content */}
                    <div className="aspect-video bg-gradient-to-br from-bg-tertiary to-bg-canvas rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                          </svg>
                        </div>
                        <p className="text-text-muted text-sm">Interactive Demo</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-light rounded-3xl opacity-20 blur-xl -z-10"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={handleLaunchApp}
              className="inline-flex items-center bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group"
            >
              Start Building Now
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}