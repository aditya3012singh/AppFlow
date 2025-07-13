
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from "@/components/main/Header"
import Footer from "@/components/main/Footer"
import CTA from "@/components/main/CTA"
import { useAuth } from "@/features/auth"


export default function FeaturesPage() {
  const { user, isLoggedIn } = useAuth()
  const [activeCategory, setActiveCategory] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  function handleLaunchApp() {
    window.open('/app-flow', '_blank', 'noopener,noreferrer')
  }

  const categories = [
    { id: 'all', name: 'All Features', icon: '🚀' },
    { id: 'design', name: 'Design Tools', icon: '🎨' },
    { id: 'development', name: 'Development', icon: '⚡' },
    { id: 'collaboration', name: 'Collaboration', icon: '👥' },
    { id: 'export', name: 'Export & Share', icon: '📤' },
    { id: 'integrations', name: 'Integrations', icon: '🔗' }
  ]

  const features = [
    // Design Tools
    {
      id: 'drag-drop',
      category: 'design',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
        </svg>
      ),
      title: 'Drag & Drop Interface',
      description: 'Intuitive visual editor that feels like designing in Figma but generates real Jetpack Compose code.',
      benefits: ['No coding required', 'Visual design workflow', 'Instant feedback', 'Smart snap guides'],
      premium: false
    },
    {
      id: 'live-preview',
      category: 'design',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Real-time Preview',
      description: 'See your designs come to life instantly with live preview across different device sizes and orientations.',
      benefits: ['Instant visual feedback', 'Multi-device preview', 'Orientation testing', 'Responsive design'],
      premium: false
    },
    {
      id: 'device-preview',
      category: 'design',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Device & Orientation Preview',
      description: 'Preview layouts on various Android devices, screen sizes, and orientations including foldables.',
      benefits: ['Multiple device presets', 'Custom screen sizes', 'Foldable support', 'Safe area testing'],
      premium: false
    },
    {
      id: 'theme-generator',
      category: 'design',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
        </svg>
      ),
      title: 'Theme Generator',
      description: 'Create custom Material 3 themes with color palettes, typography, and export as theme.kt files.',
      benefits: ['Material 3 compliance', 'Custom color palettes', 'Typography control', 'Export to code'],
      premium: true
    },

    // Development
    {
      id: 'code-generation',
      category: 'development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Production-Ready Code',
      description: 'Export clean, optimized Jetpack Compose code that follows Android best practices and conventions.',
      benefits: ['Clean code output', 'Best practices', 'No manual cleanup', 'Industry standards'],
      premium: false
    },
    {
      id: 'component-library',
      category: 'development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Component Library',
      description: '50+ pre-built Jetpack Compose components ready to use, from basic buttons to complex layouts.',
      benefits: ['50+ components', 'Material 3 design', 'Customizable', 'Production ready'],
      premium: false
    },
    {
      id: 'custom-components',
      category: 'development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: 'Custom Components',
      description: 'Browse and use unique, professionally made composables with full customization options.',
      benefits: ['Professional designs', 'Unique components', 'Full customization', 'Premium quality'],
      premium: true
    },
    {
      id: 'property-editor',
      category: 'development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: 'Advanced Property Editor',
      description: 'Fine-tune every aspect of your components with full access to Jetpack Compose modifiers and properties.',
      benefits: ['Complete control', 'All modifiers', 'Live updates', 'Visual editing'],
      premium: false
    },

    // Collaboration
    {
      id: 'team-sharing',
      category: 'collaboration',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Team Collaboration',
      description: 'Share designs with your team, collaborate in real-time, and maintain design consistency across projects.',
      benefits: ['Real-time collaboration', 'Team permissions', 'Design systems', 'Version control'],
      premium: true
    },
    {
      id: 'version-history',
      category: 'collaboration',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Version History',
      description: 'Track changes, revert to previous versions, and never lose your work with comprehensive version control.',
      benefits: ['Change tracking', 'Easy reverts', 'Branch history', 'Safe collaboration'],
      premium: true
    },

    // Export & Share
    {
      id: 'code-export',
      category: 'export',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Multi-format Export',
      description: 'Export as individual .kt files, complete project bundles, or copy code snippets instantly.',
      benefits: ['Multiple formats', 'Complete projects', 'Code snippets', 'Asset bundling'],
      premium: false
    },
    {
      id: 'github-integration',
      category: 'export',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      ),
      title: 'GitHub Integration',
      description: 'Export code directly to your GitHub repositories with automatic commit messages and branch management.',
      benefits: ['Direct export', 'Auto commits', 'Branch management', 'Team workflows'],
      premium: true
    },

    // Integrations
    {
      id: 'asset-search',
      category: 'integrations',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Asset Integration',
      description: 'Search and use Google Fonts, Material Icons, stock images, Lottie animations, and icon packs directly.',
      benefits: ['Google Fonts', 'Material Icons', 'Stock images', 'Lottie animations'],
      premium: false
    },
    {
      id: 'accessibility',
      category: 'development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Accessibility Checker',
      description: 'Automatic accessibility testing for color contrast, touch targets, and WCAG compliance.',
      benefits: ['WCAG compliance', 'Color contrast', 'Touch targets', 'Real-time feedback'],
      premium: false
    },
    {
      id: 'android-studio',
      category: 'integrations',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Android Studio Plugin',
      description: 'Seamless integration with Android Studio for direct import/export of UI components.',
      benefits: ['Direct integration', 'Import/export', 'Seamless workflow', 'IDE support'],
      premium: true,
      comingSoon: true
    }
  ]

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory)

  const highlightFeatures = [
    {
      id: 'design-to-code',
      title: 'From Design to Code in Seconds',
      description: 'Our visual editor bridges the gap between design and development. Create beautiful UIs with drag-and-drop simplicity, then export production-ready Jetpack Compose code that follows industry best practices.',
      image: '/api/placeholder/600/400',
      benefits: ['10x faster development', 'Zero manual coding', 'Industry best practices', 'Instant export']
    },
    {
      id: 'real-time-collaboration',
      title: 'Collaborate in Real-Time',
      description: 'Work with your team seamlessly. Share projects, collaborate in real-time, maintain design systems, and keep everyone aligned with powerful collaboration features.',
      image: '/api/placeholder/600/400',
      benefits: ['Real-time editing', 'Team permissions', 'Design systems', 'Version control']
    },
    {
      id: 'comprehensive-export',
      title: 'Export Anywhere, Anytime',
      description: 'Export your designs as complete Jetpack Compose projects, individual components, or push directly to GitHub. Multiple export formats ensure you can use your designs however you need.',
      image: '/api/placeholder/600/400',
      benefits: ['Multiple formats', 'GitHub integration', 'Complete projects', 'Asset bundling']
    }
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
              className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Complete Feature Overview
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight"
              >
                All the Features You Need to Build
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Beautiful Android UIs
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed max-w-4xl mx-auto"
              >
                Discover everything App Flow offers - from visual design tools to production-ready code export. 
                Build faster, collaborate better, and ship amazing Android apps.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                <motion.button
                  onClick={handleLaunchApp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 inline-flex items-center group"
                >
                  Try App Flow Free
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-text-muted">Core Features</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-text-muted">UI Components</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-text-muted">Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-text-muted">Code Compatible</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="py-16 bg-bg-secondary" ref={ref}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Browse by Category
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Explore features organized by functionality to find exactly what you need
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'bg-bg-tertiary border border-border text-text-secondary hover:border-primary/50 hover:text-text-primary'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="bg-bg-tertiary border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                    {/* Premium Badge */}
                    {feature.premium && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-primary-light text-white text-xs px-2 py-1 rounded-full font-semibold">
                        PRO
                      </div>
                    )}
                    
                    {/* Coming Soon Badge */}
                    {feature.comingSoon && (
                      <div className="absolute top-4 right-4 bg-warning text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Coming Soon
                      </div>
                    )}

                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-text-secondary leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-text-muted">
                          <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-24 bg-bg-primary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Feature
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Highlights
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Deep dive into our most powerful features that make App Flow the ultimate Android UI development tool
              </p>
            </motion.div>

            <div className="space-y-24">
              {highlightFeatures.map((highlight, index) => (
                <motion.div
                  key={highlight.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="h-px w-16 bg-gradient-to-r from-primary to-primary-light"></div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
                      {highlight.title}
                    </h3>
                    
                    <p className="text-lg text-text-secondary leading-relaxed">
                      {highlight.description}
                    </p>

                    <ul className="space-y-3">
                      {highlight.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-text-secondary">
                          <svg className="w-5 h-5 text-success mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="bg-bg-secondary border border-border rounded-2xl p-8 shadow-xl">
                        <div className="aspect-video bg-gradient-to-br from-bg-tertiary to-bg-canvas rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                              </svg>
                            </div>
                            <p className="text-text-muted text-sm">Feature Preview</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-light rounded-3xl opacity-20 blur-xl -z-10"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-24 bg-bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Free vs
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Pro Features
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Start free and upgrade when you need advanced features for professional development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-bg-tertiary border border-border rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Free Plan</h3>
                  <div className="text-4xl font-bold text-text-primary mb-4">$0</div>
                  <p className="text-text-secondary">Perfect for getting started</p>
                </div>

                <ul className="space-y-4">
                  {features.filter(f => !f.premium).slice(0, 8).map((feature, index) => (
                    <li key={index} className="flex items-center text-text-secondary">
                      <svg className="w-5 h-5 text-success mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature.title}
                    </li>
                  ))}
                  <li className="flex items-center text-text-muted">
                    <svg className="w-5 h-5 text-text-muted mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    5 exports per month
                  </li>
                </ul>

                <button
                  onClick={handleLaunchApp}
                  className="w-full mt-8 border border-border text-text-primary py-3 rounded-xl font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Start Free
                </button>
              </motion.div>

              {/* Pro Plan */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-primary/10 to-primary-light/10 border-2 border-primary/50 rounded-2xl p-8 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary-light text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Pro Plan</h3>
                  <div className="text-4xl font-bold text-text-primary mb-4">$29</div>
                  <p className="text-text-secondary">Everything you need for professional development</p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Free
                  </li>
                  {features.filter(f => f.premium).map((feature, index) => (
                    <li key={index} className="flex items-center text-text-secondary">
                      <svg className="w-5 h-5 text-success mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature.title}
                    </li>
                  ))}
                  <li className="flex items-center text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited exports
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <svg className="w-5 h-5 text-success mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                </ul>

                <button className="w-full mt-8 bg-gradient-to-r from-primary to-primary-light text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
                  Start Pro Trial
                </button>
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