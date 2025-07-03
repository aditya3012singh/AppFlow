'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is Compose Flow and how does it work?",
      answer: "Compose Flow is a visual design tool that lets you create Android UIs using drag-and-drop components. You simply drag Jetpack Compose components onto a canvas, customize their properties, and export production-ready Kotlin code. It's like Figma but for Android development - you get the visual design experience with real, usable code output."
    },
    {
      question: "Do I need to know Jetpack Compose to use Compose Flow?",
      answer: "No! While having Jetpack Compose knowledge helps, Compose Flow is designed to be beginner-friendly. The visual interface guides you through the design process, and you'll naturally learn Compose patterns as you use the tool. We also provide extensive documentation and tutorials to help you get started."
    },
    {
      question: "How clean is the exported code?",
      answer: "The exported code follows Android development best practices and is indistinguishable from hand-written code. It uses proper naming conventions, includes necessary imports, follows Material Design guidelines, and is optimized for performance. Many developers report that the generated code passes their strict code review standards."
    },
    {
      question: "Can I import existing Compose code into Compose Flow?",
      answer: "Currently, Compose Flow focuses on the design-to-code workflow. However, we're working on code import functionality that will allow you to visualize and modify existing Compose layouts. This feature is planned for our next major release."
    },
    {
      question: "What devices and screen sizes are supported?",
      answer: "Compose Flow supports all Android screen sizes and orientations. You can preview your designs on phones, tablets, foldables, and even custom screen dimensions. The responsive design tools help ensure your layouts work perfectly across all target devices."
    },
    {
      question: "Is there a free trial or free plan?",
      answer: "Yes! We offer a free plan that includes up to 3 projects, basic components, and code export functionality. For more advanced features like unlimited projects, premium components, and team collaboration, you can upgrade to our Pro plan with a 14-day free trial."
    },
    {
      question: "How does team collaboration work?",
      answer: "Pro and Enterprise plans include real-time collaboration features. Team members can work on the same project simultaneously, leave comments, share design systems, and maintain consistent styling across projects. Enterprise plans also include advanced permission management and SSO integration."
    },
    {
      question: "Can I use custom fonts and colors?",
      answer: "Absolutely! You can upload custom fonts, define color palettes, and create reusable design tokens. The Pro plan includes advanced theming capabilities that let you create and share design systems across your team."
    },
    {
      question: "What's the difference between the plans?",
      answer: "The Free plan is perfect for individual developers learning Jetpack Compose. The Pro plan adds unlimited projects, advanced components, team features, and priority support. Enterprise includes additional security, compliance, and administrative features for large organizations."
    },
    {
      question: "How do I get support if I need help?",
      answer: "We offer multiple support channels: community forums for all users, email support for Pro users, and dedicated support for Enterprise customers. We also have extensive documentation, video tutorials, and a growing library of templates and examples."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-light/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {" "}Questions
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Compose Flow. Can't find the answer you're looking for? 
            <a href="/contact" className="text-primary hover:text-primary-light ml-1">Reach out to our team</a>.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-bg-secondary border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-bg-tertiary/50 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-text-muted group-hover:text-primary transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="border-t border-border pt-4">
                          <p className="text-text-secondary leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-bg-secondary border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Our team is here to help. Get in touch and we'll respond as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 inline-flex items-center"
                >
                  Contact Support
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/docs"
                  className="border border-border hover:border-primary text-text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300 inline-flex items-center"
                >
                  View Documentation
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}