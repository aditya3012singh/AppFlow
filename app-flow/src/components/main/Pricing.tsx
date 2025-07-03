'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out Compose Flow",
      price: { monthly: 0, annual: 0 },
      features: [
        "Up to 3 projects",
        "Basic component library",
        "Code export",
        "Community support",
        "Basic templates"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      description: "For professional developers and small teams",
      price: { monthly: 29, annual: 25 },
      features: [
        "Unlimited projects",
        "Advanced component library",
        "Priority support",
        "Custom themes",
        "Team collaboration",
        "Advanced export options",
        "Custom components"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large teams and organizations",
      price: { monthly: 99, annual: 79 },
      features: [
        "Everything in Pro",
        "SSO integration",
        "Advanced security",
        "Custom deployment",
        "Dedicated support",
        "Training & onboarding",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url(`data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm30 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`)] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Simple,
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {" "}Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the plan that fits your needs. Start free and upgrade as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-bg-tertiary border border-border rounded-xl p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                isAnnual 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-success text-white text-xs px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary-light text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`bg-bg-tertiary border rounded-2xl p-8 h-full transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-xl shadow-primary/20 scale-105' 
                  : 'border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10'
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-text-primary">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-text-muted">
                      {plan.price.monthly > 0 ? '/month' : ''}
                    </span>
                    {isAnnual && plan.price.monthly > 0 && (
                      <div className="text-sm text-text-muted mt-1">
                        Billed annually (${plan.price.annual * 12}/year)
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-text-secondary">
                      <svg className="w-5 h-5 text-success mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-auto"
                >
                  <Link
                    href={plan.name === 'Enterprise' ? '/contact' : '/app'}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center block transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-xl hover:shadow-primary/25'
                        : 'border border-border text-text-primary hover:border-primary hover:bg-primary/5'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-4">
            Have questions about our pricing?
          </p>
          <Link
            href="#faq"
            className="text-primary hover:text-primary-light font-semibold inline-flex items-center group"
          >
            Check our FAQ
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}