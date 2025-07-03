'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Android Developer",
      company: "TechCorp Inc.",
      avatar: "/api/placeholder/60/60",
      content: "Compose Flow has completely transformed our UI development process. What used to take hours now takes minutes. The exported code is clean and follows all the best practices we'd write ourselves.",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Lead Mobile Developer",
      company: "StartupXYZ",
      avatar: "/api/placeholder/60/60",
      content: "As a small team, we needed to move fast without compromising quality. Compose Flow lets us prototype and iterate on designs instantly while generating production-ready code.",
      rating: 5,
      featured: true
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Mobile Architect",
      company: "Enterprise Solutions",
      avatar: "/api/placeholder/60/60",
      content: "The drag-and-drop interface is intuitive, but what impressed me most is how it generates code that passes our strict code review standards. It's like having a senior developer on the team.",
      rating: 5,
      featured: true
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Frontend Developer",
      company: "Digital Agency",
      avatar: "/api/placeholder/60/60",
      content: "I was skeptical about visual UI builders, but Compose Flow changed my mind. The code output is exactly what I would write manually, but generated in seconds.",
      rating: 5,
      featured: false
    },
    {
      id: 5,
      name: "Anna Kowalski",
      role: "Product Designer",
      company: "Design Studio",
      avatar: "/api/placeholder/60/60",
      content: "Finally, a tool that bridges the gap between design and development. I can create pixel-perfect UIs and developers get clean, implementable code.",
      rating: 5,
      featured: false
    },
    {
      id: 6,
      name: "David Kim",
      role: "CTO",
      company: "MobileFirst",
      avatar: "/api/placeholder/60/60",
      content: "Our development velocity increased by 300% after adopting Compose Flow. The ROI was immediate and the team loves using it.",
      rating: 5,
      featured: false
    }
  ]

  const featuredTestimonials = testimonials.filter(t => t.featured)
  const allTestimonials = testimonials

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Loved by
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {" "}Developers
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers who are building faster with Compose Flow
          </p>
        </motion.div>

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-bg-secondary border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-warning fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-text-secondary leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-text-muted text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-bg-secondary border border-border rounded-2xl p-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-text-muted">Happy Developers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-text-muted">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-text-muted">Projects Created</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-text-muted">Would Recommend</div>
          </div>
        </motion.div>

        {/* Additional Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              More Success Stories
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.slice(3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bg-tertiary border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-text-muted text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}