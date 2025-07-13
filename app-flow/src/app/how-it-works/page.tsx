'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from "@/components/main/Header"
import Footer from "@/components/main/Footer"
import CTA from "@/components/main/CTA"
import { useAuth } from "@/features/auth"


export default function HowItWorksPage() {
  const { user, isLoggedIn } = useAuth()
  const [activeStep, setActiveStep] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  function handleLaunchApp() {
    if (isLoggedIn) {
      window.open('/app-flow', '_blank', 'noopener,noreferrer')
    } else {
      // Handle sign-in flow
    }
  }

  const workflowSteps = [
    {
      number: "01",
      title: "Choose Your Components",
      shortDesc: "Start with our comprehensive component library",
      description: "Browse through 50+ pre-built Jetpack Compose components including layouts, inputs, navigation, and Material 3 elements. Our searchable palette makes finding the right component effortless.",
      extendedDesc: "Every component follows Material Design guidelines and Android best practices. From basic Text and Button components to complex Scaffold layouts and ConstraintLayouts, everything you need is at your fingertips.",
      tips: [
        "Use the search function to quickly find components",
        "Components are organized by category for easy browsing",
        "All components are Material 3 compliant",
        "Preview components before adding them to your design"
      ],
      benefits: [
        "Save time with pre-built components",
        "Ensure design consistency",
        "Follow Material Design guidelines",
        "Access to latest Compose components"
      ],
      videoTitle: "Component Library Walkthrough",
      image: "/api/placeholder/600/400"
    },
    {
      number: "02", 
      title: "Design with Drag & Drop",
      shortDesc: "Create layouts visually with intuitive drag-and-drop",
      description: "Simply drag components from the palette onto your canvas. Our intelligent layout system provides snap guides, alignment helpers, and real-time feedback to ensure pixel-perfect designs.",
      extendedDesc: "The visual editor feels familiar like Figma or Sketch, but generates real Android code. You can nest components, create complex layouts, and see exactly how your UI will look on different screen sizes.",
      tips: [
        "Use snap guides for perfect alignment",
        "Hold Shift to maintain aspect ratios",
        "Right-click for quick actions and properties",
        "Use keyboard shortcuts for faster workflow"
      ],
      benefits: [
        "No coding required for UI design",
        "Visual feedback prevents layout errors",
        "Faster iteration than traditional coding",
        "Intuitive for designers and developers"
      ],
      videoTitle: "Drag & Drop Design Demo",
      image: "/api/placeholder/600/400"
    },
    {
      number: "03",
      title: "Customize Properties",
      shortDesc: "Fine-tune every detail with the properties panel",
      description: "Use our comprehensive properties panel to customize colors, spacing, typography, and behavior. Every Jetpack Compose modifier is available through an intuitive interface.",
      extendedDesc: "The properties panel dynamically updates based on your selected component, showing only relevant options. Make changes and see them reflected instantly in the preview.",
      tips: [
        "Properties are grouped logically for easy navigation",
        "Use the color picker for consistent theming",
        "Spacing controls support both dp and responsive values",
        "Typography settings sync with your theme"
      ],
      benefits: [
        "Complete control over component behavior",
        "Real-time visual feedback",
        "Access to all Compose modifiers",
        "Type-safe property validation"
      ],
      videoTitle: "Properties Panel Deep Dive",
      image: "/api/placeholder/600/400"
    },
    {
      number: "04",
      title: "Preview Across Devices",
      shortDesc: "Test your design on multiple devices and orientations",
      description: "Preview your layouts on various Android devices, screen sizes, and orientations. See how your UI adapts to different form factors including phones, tablets, and foldables.",
      extendedDesc: "Our device preview includes popular Android devices with accurate screen dimensions, safe areas, and orientation handling. Test edge cases before you build.",
      tips: [
        "Test both portrait and landscape orientations",
        "Check tablet layouts for proper scaling",
        "Verify foldable device compatibility",
        "Use custom dimensions for specific targets"
      ],
      benefits: [
        "Catch layout issues early",
        "Ensure responsive design",
        "Support all Android form factors",
        "Accurate device simulation"
      ],
      videoTitle: "Multi-Device Preview Guide",
      image: "/api/placeholder/600/400"
    },
    {
      number: "05",
      title: "Export Production Code",
      shortDesc: "Generate clean, production-ready Jetpack Compose code",
      description: "Export your complete design as clean, optimized Jetpack Compose code. Get individual components, complete screens, or entire projects with all assets and themes included.",
      extendedDesc: "The generated code follows Android development best practices, includes proper imports, and is indistinguishable from hand-written code. Export options include GitHub integration for seamless workflow integration.",
      tips: [
        "Export individual components for reusability",
        "Use complete project export for new apps",
        "GitHub integration streamlines team workflows",
        "All assets and themes are included automatically"
      ],
      benefits: [
        "Production-ready code output",
        "No manual cleanup required",
        "Follows Android best practices",
        "Seamless development integration"
      ],
      videoTitle: "Code Export & Integration",
      image: "/api/placeholder/600/400"
    }
  ]

  const features = [
    {
      icon: "⚡",
      title: "10x Faster Development",
      description: "Build UIs in minutes instead of hours"
    },
    {
      icon: "🎯",
      title: "Pixel Perfect Accuracy",
      description: "What you design is exactly what you get"
    },
    {
      icon: "🔧",
      title: "Developer Friendly",
      description: "Clean code that passes any code review"
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "Built specifically for Android development"
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
            <div className="absolute inset-0 bg-[url(`data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`)] opacity-50"></div>
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
                Complete Workflow Guide
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight"
              >
                How
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}App Flow{" "}
                </span>
                Works
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed max-w-4xl mx-auto"
              >
                From concept to production-ready code in 5 simple steps. 
                Discover how App Flow transforms your Android UI development workflow forever.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              >
                <motion.button
                  onClick={handleLaunchApp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 inline-flex items-center group"
                >
                  Start Building Free
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-border hover:border-primary text-text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/5 transition-all duration-300 inline-flex items-center group"
                >
                  Watch Demo
                  <svg
                    className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <div className="text-lg font-semibold text-text-primary mb-1">{feature.title}</div>
                    <div className="text-sm text-text-muted">{feature.description}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workflow Steps */}
        <section className="py-24 bg-bg-secondary" ref={ref}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                The Complete
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Workflow
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Follow these 5 steps to transform your UI development process and build amazing Android apps faster than ever
              </p>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-16"
            >
              <div className="flex items-center space-x-4 bg-bg-tertiary rounded-full p-2">
                {workflowSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-bg-secondary text-text-muted hover:text-text-primary'
                    }`}
                  >
                    {step.number}
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="space-y-32">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                      <div className="h-px w-20 bg-gradient-to-r from-primary to-primary-light"></div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-text-secondary leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <p className="text-text-muted leading-relaxed">
                        {step.extendedDesc}
                      </p>
                    </div>

                    {/* Tips Section */}
                    <div className="bg-bg-tertiary border border-border rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Pro Tips
                      </h4>
                      <ul className="space-y-2">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start text-text-secondary text-sm">
                            <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-4">Key Benefits:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-text-secondary">
                            <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="bg-bg-primary border border-border rounded-2xl p-8 shadow-xl">
                        {/* Main Visual */}
                        <div className="aspect-video bg-gradient-to-br from-bg-tertiary to-bg-canvas rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                              </svg>
                            </div>
                            <p className="text-text-muted text-sm">Step {step.number} Preview</p>
                          </div>
                          
                          {/* Overlay for future interaction */}
                          <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
                              Interactive Demo
                            </button>
                          </div>
                        </div>

                        {/* Video Placeholder */}
                        <div className="bg-bg-secondary border border-border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-sm font-semibold text-text-primary">{step.videoTitle}</h5>
                            <span className="bg-warning/20 text-warning text-xs px-2 py-1 rounded-full">Coming Soon</span>
                          </div>
                          <p className="text-xs text-text-muted">
                            Video tutorial showing this step in detail
                          </p>
                        </div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-light rounded-3xl opacity-20 blur-xl -z-10"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-24 bg-bg-primary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Watch It in
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Action
                </span>
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                See the complete workflow in action with our comprehensive video tutorials and interactive demos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Main Demo Video */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
              >
                <div className="bg-bg-secondary border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-bg-tertiary to-bg-canvas rounded-xl flex items-center justify-center relative overflow-hidden mb-6">
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </motion.div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">Complete Workflow Demo</h3>
                      <p className="text-text-muted text-sm">15 minute comprehensive walkthrough</p>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-warning/20 text-warning px-3 py-1 rounded-full text-xs font-semibold">
                      Coming Soon
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    Full Workflow Walkthrough
                  </h4>
                  <p className="text-text-secondary mb-4">
                    Watch as we build a complete Android app UI from scratch using App Flow's visual tools.
                  </p>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Real-time design process
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Code generation demonstration
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Tips and best practices
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Tutorial Series */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-6">Tutorial Series</h3>
                
                {workflowSteps.slice(0, 3).map((step, index) => (
                  <div key={index} className="bg-bg-secondary border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary mb-1">{step.videoTitle}</h4>
                        <p className="text-text-muted text-sm">{step.shortDesc}</p>
                      </div>
                      <div className="bg-warning/20 text-warning px-2 py-1 rounded text-xs font-semibold">
                        Soon
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-bg-tertiary border border-border rounded-xl p-6 text-center">
                  <h4 className="font-semibold text-text-primary mb-2">Get Notified</h4>
                  <p className="text-text-muted text-sm mb-4">
                    Be the first to know when our video tutorials are ready
                  </p>
                  <button className="bg-primary/20 text-primary px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary/30 transition-colors">
                    Notify Me
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-text-primary mb-8">
                Need More Help?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-bg-tertiary border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">FAQ</h4>
                  <p className="text-text-muted text-sm">Common questions and answers</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-bg-tertiary border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Documentation</h4>
                  <p className="text-text-muted text-sm">Detailed guides and references</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-bg-tertiary border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h8z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">Support</h4>
                  <p className="text-text-muted text-sm">Get help from our team</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <CTA handleLaunchApp={handleLaunchApp} />
      </main>

      <Footer />
    </div>
  )
}