'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from "@/components/main/Header"
import Footer from "@/components/main/Footer"
import CTA from "@/components/main/CTA"
import { useAuth } from "@/features/auth"



interface TeamMember {
  name: string
  role: string
  bio: string
  avatar: string
  social: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

interface Value {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

interface Milestone {
  year: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function AboutPage() {
  const { user, isLoggedIn } = useAuth()
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  function handleLaunchApp() {
    if (isLoggedIn) {
      window.open('/app-flow', '_blank', 'noopener,noreferrer')
    }
  }

  const teamMembers: TeamMember[] = [
    {
      name: 'Aditya Singh',
      role: 'Founder & CEO',
      bio: 'Passionate about making Android development accessible to everyone. Previously led mobile teams at top tech companies.',
      avatar: '/api/placeholder/150/150',
      social: {
        linkedin: 'https://linkedin.com/in/aditya-singh',
        github: 'https://github.com/gitPushAditya',
        twitter: 'https://twitter.com/aditya_singh'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Product',
      bio: 'Product designer turned product leader. Obsessed with creating tools that developers actually love to use.',
      avatar: '/api/placeholder/150/150',
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen',
        github: 'https://github.com/sarahchen',
        twitter: 'https://twitter.com/sarah_chen'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Engineer',
      bio: 'Full-stack engineer with 8+ years building developer tools. Jetpack Compose enthusiast and open source contributor.',
      avatar: '/api/placeholder/150/150',
      social: {
        linkedin: 'https://linkedin.com/in/marcus-rodriguez',
        github: 'https://github.com/marcus-r',
        twitter: 'https://twitter.com/marcus_codes'
      }
    },
    {
      name: 'Priya Patel',
      role: 'Head of Design',
      bio: 'Design systems expert who believes great design should be invisible. Previously designed products used by millions.',
      avatar: '/api/placeholder/150/150',
      social: {
        linkedin: 'https://linkedin.com/in/priya-patel',
        github: 'https://github.com/priya-p',
        twitter: 'https://twitter.com/priya_designs'
      }
    },
    {
      name: 'David Kim',
      role: 'Developer Relations',
      bio: 'Community builder and developer advocate. Helps developers succeed with App Flow through education and support.',
      avatar: '/api/placeholder/150/150',
      social: {
        linkedin: 'https://linkedin.com/in/david-kim',
        github: 'https://github.com/david-kim',
        twitter: 'https://twitter.com/david_dev'
      }
    },
    {
      name: 'Emma Wilson',
      role: 'Head of Growth',
      bio: 'Growth strategist with a developer mindset. Focused on helping more teams discover the power of visual UI development.',
      avatar: '/api/placeholder/150/150',
      social: {
        linkedin: 'https://linkedin.com/in/emma-wilson',
        github: 'https://github.com/emma-w',
        twitter: 'https://twitter.com/emma_growth'
      }
    }
  ]

  const values: Value[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Developer First',
      description: 'Every decision we make starts with asking: "Will this make developers\' lives better?" We build for the people who build the future.',
      color: 'text-primary'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Craftsmanship',
      description: 'We believe in the power of well-crafted tools. Every pixel, every interaction, every line of code is designed with care and attention to detail.',
      color: 'text-success'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Open Collaboration',
      description: 'The best ideas come from working together. We foster open communication, shared ownership, and collective problem-solving.',
      color: 'text-info'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible in developer tooling. Innovation isn\'t just about technology—it\'s about reimagining workflows.',
      color: 'text-warning'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Trust & Transparency',
      description: 'We earn trust through consistent delivery, honest communication, and by always putting our users\' success before our own.',
      color: 'text-error'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Continuous Growth',
      description: 'We\'re always learning, iterating, and improving. Both our product and our team evolve based on feedback and new insights.',
      color: 'text-purple-400'
    }
  ]

  const milestones: Milestone[] = [
    {
      year: '2023',
      title: 'The Idea',
      description: 'Frustrated with the gap between design and development, we started building the visual Android development tool we always wanted.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      year: '2024',
      title: 'First Launch',
      description: 'Released App Flow to early adopters. The response was overwhelming—developers loved the visual approach to Jetpack Compose.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      year: '2024',
      title: '10K+ Users',
      description: 'Reached our first major milestone with over 10,000 developers using App Flow to build better Android UIs faster.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      year: '2025',
      title: 'Team Growth',
      description: 'Expanded our team with world-class talent. Built a culture focused on developer experience and product excellence.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      year: '2025',
      title: 'The Future',
      description: 'We\'re just getting started. Our vision is to become the standard tool for Android UI development worldwide.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ]

  const pressLogos = [
    { name: 'TechCrunch', logo: '/api/placeholder/120/40' },
    { name: 'Product Hunt', logo: '/api/placeholder/120/40' },
    { name: 'Android Developer', logo: '/api/placeholder/120/40' },
    { name: 'Developer Week', logo: '/api/placeholder/120/40' },
    { name: 'Hacker News', logo: '/api/placeholder/120/40' },
    { name: 'Dev.to', logo: '/api/placeholder/120/40' }
  ]

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header handleLaunchApp={handleLaunchApp} />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
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
            <div className="absolute inset-0 bg-[url(`data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`)] opacity-50"></div>
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
                Empowering Android creators worldwide
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight"
              >
                Building the Future of
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Android Development
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed"
              >
                We believe every developer should have access to powerful, intuitive tools that make building 
                beautiful Android UIs a joy, not a chore. That's why we created App Flow.
              </motion.p>

              {/* Mission Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-text-muted">Developers Trust Us</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200K+</div>
                  <div className="text-text-muted">UIs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-text-muted">Countries</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-bg-secondary" ref={ref}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Our
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Story
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                App Flow was born from a simple frustration: why is building Android UIs so difficult when the tools should make it easy?
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-bg-tertiary border border-border rounded-2xl p-8 mb-12"
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-6">
                    In early 2023, our founder Aditya was working on an Android project and spent hours wrestling with 
                    complex Jetpack Compose layouts. Despite being an experienced developer, simple UI changes required 
                    mental gymnastics to translate design concepts into code.
                  </p>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    "There has to be a better way," he thought. Visual design tools existed for web development, 
                    but Android developers were still writing UI code from scratch. What if you could design Android 
                    interfaces visually and get clean, production-ready Compose code?
                  </p>
                  
                  <p className="text-text-secondary leading-relaxed">
                    That idea became App Flow. We set out to bridge the gap between design and development, 
                    creating a tool that respects both the creative process and the technical realities of 
                    Android development. Today, thousands of developers use App Flow to build better UIs faster.
                  </p>
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Our Journey</h3>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-6">
                        <div className="text-primary">
                          {milestone.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-primary font-bold text-lg mr-4">{milestone.year}</span>
                          <h4 className="text-xl font-semibold text-text-primary">{milestone.title}</h4>
                        </div>
                        <p className="text-text-secondary leading-relaxed">{milestone.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-bg-primary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Our
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Values
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                These principles guide everything we do, from product decisions to how we interact with our community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-bg-secondary border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${value.color} bg-current/20 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={value.color}>
                        {value.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Meet Our
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Team
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                We're a diverse group of designers, engineers, and product builders united by our passion for developer tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredMember(member.name)}
                  onHoverEnd={() => setHoveredMember(null)}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-bg-tertiary border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    {/* Avatar */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-primary font-bold text-2xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-primary to-primary-light rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-primary font-medium mb-4">
                      {member.role}
                    </p>
                    
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-bg-secondary border border-border rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:border-primary/50 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-bg-secondary border border-border rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:border-primary/50 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-bg-secondary border border-border rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:border-primary/50 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Join Team CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-16"
            >
              <div className="bg-bg-tertiary border border-border rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Want to Join Our Team?
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  We're always looking for talented individuals who share our passion for developer tools and creating exceptional user experiences.
                </p>
                <motion.a
                  href="/careers"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 inline-flex items-center"
                >
                  View Open Positions
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Press & Recognition */}
        <section className="py-20 bg-bg-primary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Featured
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}In
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                We're proud to be recognized by leading tech publications and the developer community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-4xl mx-auto"
            >
              {pressLogos.map((press, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-bg-secondary border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-20 h-8 bg-gradient-to-r from-text-muted/20 to-text-muted/10 rounded flex items-center justify-center">
                    <span className="text-text-muted text-xs font-medium">{press.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto mt-16"
            >
              <div className="bg-bg-secondary border border-border rounded-2xl p-8 text-center">
                <svg className="w-12 h-12 text-primary/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <blockquote className="text-xl md:text-2xl text-text-secondary font-medium leading-relaxed mb-6">
                  "App Flow has completely transformed how our team approaches Android UI development. 
                  The visual design process paired with clean code generation has saved us countless hours."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Jane Developer</div>
                    <div className="text-text-muted text-sm">Senior Android Engineer, TechCorp</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-20 bg-bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                The
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Future
                </span>
              </h2>
              
              <div className="bg-gradient-to-br from-bg-tertiary/80 to-bg-primary/80 backdrop-blur-xl border border-border rounded-3xl p-12">
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8">
                  We're just getting started. Our vision is to become the standard tool that every Android developer 
                  reaches for when building user interfaces. We want to eliminate the friction between having an idea 
                  and seeing it come to life on screen.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">Platform Integration</h3>
                    <p className="text-text-muted text-sm">Seamless integration with Android Studio and other dev tools</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">AI-Powered Design</h3>
                    <p className="text-text-muted text-sm">Smart suggestions and automated layout generation</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-info/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">Global Community</h3>
                    <p className="text-text-muted text-sm">A thriving ecosystem of developers and designers</p>
                  </div>
                </div>

                <p className="text-text-primary font-medium">
                  Want to be part of this journey? Join thousands of developers who are already building the future with App Flow.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <CTA handleLaunchApp={handleLaunchApp} />
      </main>

      <Footer />
    </div>
  )
}