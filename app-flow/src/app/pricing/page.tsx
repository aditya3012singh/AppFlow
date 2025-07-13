// app-flow/src/app/pricing/page.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from "@/components/main/Header"
import Footer from "@/components/main/Footer"
import CTA from "@/components/main/CTA"
import { useAuth } from "@/features/auth"


export default function PricingPage() {
  const { isLoggedIn } = useAuth()
  const [isAnnual, setIsAnnual] = useState(true)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  function handleLaunchApp() {
    if (isLoggedIn) {
      window.open('/app-flow', '_blank', 'noopener,noreferrer')
    } else {
      // Handle sign-in flow
    }
  }

  const plans = [
    {
      id: 'free',
      name: "Free",
      description: "Perfect for trying out App Flow and small projects",
      price: { monthly: 0, annual: 0 },
      badge: "Get Started",
      badgeColor: "bg-success/20 text-success",
      features: [
        "Up to 3 projects",
        "Basic component library (20+ components)",
        "Drag & drop interface",
        "Device preview",
        "Code export (5 exports/month)",
        "Community support",
        "Basic templates",
        "Standard themes"
      ],
      limitations: [
        "Limited to 5 exports per month",
        "Basic components only",
        "Community support only"
      ],
      cta: "Start Free",
      ctaStyle: "border border-border hover:border-primary text-text-primary hover:bg-primary/5",
      popular: false,
      highlight: false
    },
    {
      id: 'pro',
      name: "Pro",
      description: "For professional developers and growing teams",
      price: { monthly: 29, annual: 25 },
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-primary to-primary-light text-white",
      features: [
        "Everything in Free",
        "Unlimited projects",
        "Advanced component library (50+ components)",
        "Custom components",
        "Team collaboration (up to 10 members)",
        "Advanced themes & theme generator",
        "Priority support",
        "Advanced export options",
        "GitHub integration",
        "Version history",
        "Custom templates",
        "Accessibility checker",
        "Real-time collaboration"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      ctaStyle: "bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-xl hover:shadow-primary/25",
      popular: true,
      highlight: true
    },
    {
      id: 'enterprise',
      name: "Enterprise",
      description: "For large teams and organizations with advanced needs",
      price: { monthly: 99, annual: 79 },
      badge: "Advanced",
      badgeColor: "bg-warning/20 text-warning",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "SSO integration (SAML, OAuth)",
        "Advanced security & compliance",
        "Custom deployment options",
        "Dedicated account manager",
        "Priority phone support",
        "Custom training & onboarding",
        "SLA guarantee (99.9% uptime)",
        "Custom integrations",
        "Advanced analytics",
        "White-label options",
        "API access"
      ],
      limitations: [],
      cta: "Contact Sales",
      ctaStyle: "border border-border hover:border-warning text-text-primary hover:bg-warning/5",
      popular: false,
      highlight: false
    }
  ]

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "What happens to my projects if I downgrade?",
      answer: "Your projects remain safe. You'll just have access to fewer features until you upgrade again."
    },
    {
      question: "Is there a free trial for Pro?",
      answer: "Yes! You get a 14-day free trial of Pro features when you sign up."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans."
    }
  ]

  const trustBadges = [
    { text: "30-day money back guarantee", icon: "🛡️" },
    { text: "No setup fees", icon: "💳" },
    { text: "Cancel anytime", icon: "✋" },
    { text: "99.9% uptime SLA", icon: "⚡" }
  ]

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header handleLaunchApp={handleLaunchApp} />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary"></div>
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-96 h-96 bg-primary-light/8 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                No hidden fees • Cancel anytime
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight"
              >
                Simple,
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Transparent{" "}
                </span>
                Pricing
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed"
              >
                Start free and grow with us. No credit card required to get started.
                Upgrade anytime to unlock powerful features.
              </motion.p>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
              >
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2 text-text-muted">
                    <span className="text-lg">{badge.icon}</span>
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Billing Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-flex items-center bg-bg-secondary border border-border rounded-xl p-1 mb-16"
              >
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    !isAnnual 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                    isAnnual 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Annual
                  <span className="absolute -top-2 -right-2 bg-success text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                    Save 20%
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 bg-bg-secondary" ref={ref}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onHoverStart={() => setHoveredPlan(plan.id)}
                  onHoverEnd={() => setHoveredPlan(null)}
                  className="relative group"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`${plan.badgeColor} px-4 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  
                  <div className={`relative bg-bg-tertiary border rounded-2xl p-8 h-full transition-all duration-300 ${
                    plan.highlight 
                      ? 'border-primary shadow-xl shadow-primary/20 scale-105' 
                      : 'border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10'
                  } ${hoveredPlan === plan.id ? 'transform -translate-y-2' : ''}`}>
                    
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-text-secondary mb-6">
                        {plan.description}
                      </p>
                      
                      <div className="mb-6">
                        <motion.span 
                          key={`${plan.id}-${isAnnual}`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-5xl font-bold text-text-primary"
                        >
                          ${isAnnual ? plan.price.annual : plan.price.monthly}
                        </motion.span>
                        <span className="text-text-muted">
                          {plan.price.monthly > 0 ? '/month' : ''}
                        </span>
                        {isAnnual && plan.price.monthly > 0 && (
                          <div className="text-sm text-text-muted mt-1">
                            <span className="line-through">${plan.price.monthly}/month</span>
                            <span className="text-success ml-2">Save ${(plan.price.monthly - plan.price.annual) * 12}/year</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-text-primary mb-4">What&apos;s included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-text-secondary">
                            <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {plan.limitations.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-border">
                          <h5 className="text-sm font-medium text-text-muted mb-3">Limitations:</h5>
                          <ul className="space-y-2">
                            {plan.limitations.map((limitation, limitIndex) => (
                              <li key={limitIndex} className="flex items-start text-text-muted">
                                <svg className="w-4 h-4 text-text-muted mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span className="text-xs">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${plan.ctaStyle}`}
                    >
                      {plan.cta}
                    </motion.button>

                    {plan.id === 'pro' && (
                      <p className="text-xs text-text-muted text-center mt-3">
                        14-day free trial • No credit card required
                      </p>
                    )}

                    {plan.id === 'free' && (
                      <p className="text-xs text-text-muted text-center mt-3">
                        No credit card required
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Comparison Note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-16"
            >
              <p className="text-text-secondary mb-4">
                Need a detailed feature comparison?
              </p>
              <button className="text-primary hover:text-primary-light font-semibold inline-flex items-center group">
                View Complete Feature Matrix
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-text-secondary">
                  Got questions? We&apos;ve got answers.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-bg-secondary border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-text-primary mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center mt-12"
              >
                <p className="text-text-secondary mb-4">
                  Still have questions?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary/20 text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/30 transition-colors">
                    Contact Support
                  </button>
                  <button className="border border-border text-text-primary px-6 py-3 rounded-lg font-medium hover:border-primary hover:bg-primary/5 transition-all duration-300">
                    View All FAQs
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="py-16 bg-bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-bg-tertiary/80 to-bg-primary/80 backdrop-blur-xl border border-border rounded-3xl p-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Need Something Custom?
                </h2>
                <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                  We work with enterprise teams to create custom solutions that fit your specific needs.
                  Get dedicated support, custom integrations, and more.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-text-primary mb-1">Dedicated Support</h3>
                    <p className="text-text-muted text-sm">Priority support with SLA</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-text-primary mb-1">Custom Integration</h3>
                    <p className="text-text-muted text-sm">API access and custom workflows</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-text-primary mb-1">Enterprise Security</h3>
                    <p className="text-text-muted text-sm">SSO, compliance, and more</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 inline-flex items-center"
                >
                  Schedule a Demo
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        <CTA handleLaunchApp={handleLaunchApp} />
      </main>

      <Footer />
    </div>
  )
}