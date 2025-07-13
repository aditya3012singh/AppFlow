'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'
import Header from "@/components/main/Header"
import Footer from "@/components/main/Footer"
import CTA from "@/components/main/CTA"
import { useAuth } from "@/features/auth"



interface DocSection {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  articles: DocArticle[]
  color: string
}

interface DocArticle {
  id: string
  title: string
  description: string
  content: string
  category: string
  tags: string[]
  lastUpdated: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  readingTime: number
  featured?: boolean
}

export default function DocsPage() {
  const { user, isLoggedIn } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedArticle, setSelectedArticle] = useState<DocArticle | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['getting-started']))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  function handleLaunchApp() {
    if (isLoggedIn) {
      window.open('/app-flow', '_blank', 'noopener,noreferrer')
    }
  }

  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Everything you need to begin your App Flow journey',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'text-success',
      articles: [
        {
          id: 'welcome',
          title: 'Welcome to App Flow',
          description: 'Introduction to App Flow and what you can build',
          content: `# Welcome to App Flow

App Flow is the fastest way to design and build Android UIs with Jetpack Compose. Whether you're a seasoned developer or just starting out, App Flow makes UI development intuitive and efficient.

## What is App Flow?

App Flow is a visual design tool that lets you create Android layouts using drag-and-drop components. Unlike traditional design tools, App Flow generates production-ready Jetpack Compose code that you can use directly in your Android projects.

## Key Features

- **Visual Design Interface**: Drag and drop components to build your UI
- **Real-time Code Generation**: See your Compose code update as you design
- **Device Preview**: Test your layouts on different screen sizes
- **Team Collaboration**: Work together on designs and share feedback
- **Export Options**: Export code, images, or push directly to GitHub

## Who is App Flow for?

- **Android Developers**: Speed up your UI development workflow
- **UI/UX Designers**: Create designs that developers can actually use
- **Product Teams**: Collaborate on designs and iterate quickly
- **Students**: Learn Jetpack Compose through visual design

Ready to get started? Let's build your first app!`,
          category: 'getting-started',
          tags: ['introduction', 'overview', 'basics'],
          lastUpdated: '2024-03-15',
          difficulty: 'beginner',
          readingTime: 3,
          featured: true
        },
        {
          id: 'quick-start',
          title: 'Quick Start Guide',
          description: 'Build your first UI in 5 minutes',
          content: `# Quick Start Guide

Get up and running with App Flow in just a few minutes. This guide will walk you through creating your first Android UI.

## Step 1: Create Your Account

1. Visit [app-flow.com](/) and click "Launch App"
2. Sign up with your email or use Google/GitHub
3. Verify your email address
4. Welcome to App Flow!

## Step 2: Create Your First Project

\`\`\`kotlin
// Your project will generate code like this
@Composable
fun MyFirstScreen() {
    Column(
        modifier = Modifier.fillMaxSize()
    ) {
        Text("Hello, App Flow!")
    }
}
\`\`\`

1. Click "New Project" in the dashboard
2. Choose a template or start from scratch
3. Name your project
4. Click "Create Project"

## Step 3: Design Your UI

1. **Add Components**: Drag components from the palette
2. **Customize Properties**: Use the properties panel to modify colors, spacing, and more
3. **Preview**: See how your UI looks on different devices
4. **Export**: Generate Compose code when you're ready

## Next Steps

- Explore the [Component Library](/docs/components)
- Learn about [Exporting Code](/docs/export)
- Join our [Community](https://discord.gg/appflow)

That's it! You've created your first App Flow project.`,
          category: 'getting-started',
          tags: ['quickstart', 'tutorial', 'beginner'],
          lastUpdated: '2024-03-12',
          difficulty: 'beginner',
          readingTime: 5,
          featured: true
        }
      ]
    },
    {
      id: 'studio-features',
      title: 'Studio Features',
      description: 'Master the App Flow studio and all its capabilities',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'text-primary',
      articles: [
        {
          id: 'canvas-basics',
          title: 'Canvas Basics',
          description: 'Learn how to use the design canvas effectively',
          content: `# Canvas Basics

The canvas is where your design comes to life. Learn how to navigate and use all its features effectively.

## Canvas Overview

The canvas represents your Android screen. You can:
- Add components by dragging from the palette
- Select and move components around
- Resize components by dragging handles
- Delete components with the Delete key

## Navigation

- **Pan**: Click and drag on empty space
- **Zoom**: Use mouse wheel or zoom controls
- **Fit to Screen**: Click the fit button in the toolbar

## Component Hierarchy

Components can contain other components:

\`\`\`kotlin
Column {
    Text("Header")
    Row {
        Button("Cancel")
        Button("Save")
    }
}
\`\`\`

## Shortcuts

- \`Ctrl+C\` - Copy selected component
- \`Ctrl+V\` - Paste component
- \`Delete\` - Delete selected component
- \`Ctrl+Z\` - Undo
- \`Ctrl+Y\` - Redo`,
          category: 'studio-features',
          tags: ['canvas', 'navigation', 'basics'],
          lastUpdated: '2024-03-10',
          difficulty: 'beginner',
          readingTime: 4
        }
      ]
    },
    {
      id: 'exporting',
      title: 'Exporting Code',
      description: 'Generate and export production-ready Jetpack Compose code',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'text-info',
      articles: [
        {
          id: 'export-basics',
          title: 'Export Basics',
          description: 'Learn how to export your designs as Compose code',
          content: `# Export Basics

App Flow generates clean, production-ready Jetpack Compose code that you can use directly in your Android projects.

## Export Options

### 1. Copy to Clipboard
Quick way to copy individual components or screens:
1. Select the component you want to export
2. Click "Copy Code" in the properties panel
3. Paste into your IDE

### 2. Download as File
Export complete screens as .kt files:
1. Click the "Export" button in the toolbar
2. Choose "Download as File"
3. Select the components to include
4. Download the .kt file

### 3. GitHub Integration
Push code directly to your repository:
1. Connect your GitHub account
2. Choose your repository and branch
3. Click "Push to GitHub"
4. Your code is automatically committed

## Generated Code Structure

\`\`\`kotlin
@Composable
fun MyScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        Text(
            text = "Welcome",
            style = MaterialTheme.typography.headlineMedium
        )
        
        Button(
            onClick = { /* TODO */ },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text("Get Started")
        }
    }
}
\`\`\`

## Best Practices

- **Clean Code**: Generated code follows Android conventions
- **Performance**: Optimized for Compose performance
- **Maintainable**: Easy to read and modify
- **Accessible**: Includes accessibility modifiers where appropriate`,
          category: 'exporting',
          tags: ['export', 'code', 'compose'],
          lastUpdated: '2024-03-08',
          difficulty: 'intermediate',
          readingTime: 6,
          featured: true
        }
      ]
    },
    {
      id: 'account-billing',
      title: 'Account & Billing',
      description: 'Manage your account, subscription, and billing',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'text-warning',
      articles: [
        {
          id: 'manage-account',
          title: 'Managing Your Account',
          description: 'Update profile, change password, and account settings',
          content: `# Managing Your Account

Keep your App Flow account secure and up-to-date with these account management features.

## Profile Settings

Update your personal information:
1. Go to [Profile Settings](/profile)
2. Click "Edit Profile"
3. Update your name, email, or avatar
4. Click "Save Changes"

## Security

### Change Password
1. Go to Profile Settings
2. Scroll to "Change Password"
3. Enter current and new password
4. Click "Change Password"

### Two-Factor Authentication
Enable 2FA for additional security:
1. Go to Security Settings
2. Click "Enable 2FA"
3. Scan QR code with authenticator app
4. Enter verification code

## Connected Accounts

Link social accounts for easy sign-in:
- **Google**: Single sign-on with Google account
- **GitHub**: Connect for GitHub integration features
- **Discord**: Join our community discussions

## Privacy Settings

Control your data and privacy:
- **Profile Visibility**: Choose who can see your profile
- **Project Sharing**: Set default sharing permissions
- **Data Export**: Download your account data
- **Account Deletion**: Permanently delete your account`,
          category: 'account-billing',
          tags: ['account', 'profile', 'security'],
          lastUpdated: '2024-03-05',
          difficulty: 'beginner',
          readingTime: 4
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      color: 'text-error',
      articles: [
        {
          id: 'common-issues',
          title: 'Common Issues',
          description: 'Solutions to frequently encountered problems',
          content: `# Common Issues

Here are solutions to the most common issues App Flow users encounter.

## Export Issues

### "Export Failed" Error
**Problem**: Export button shows error message
**Solution**: 
1. Check your internet connection
2. Try exporting a smaller selection
3. Clear browser cache and retry
4. Contact support if issue persists

### Generated Code Doesn't Compile
**Problem**: Exported Compose code has compilation errors
**Solution**:
1. Ensure you have the latest Compose version
2. Check for missing imports
3. Verify Material3 dependencies are included

\`\`\`kotlin
// Required dependencies in build.gradle
implementation "androidx.compose.ui:ui:$compose_version"
implementation "androidx.compose.material3:material3:$material3_version"
\`\`\`

## Canvas Issues

### Components Not Dragging
**Problem**: Can't drag components from palette
**Solution**:
1. Refresh the browser page
2. Check if browser has JavaScript enabled
3. Try a different browser
4. Disable browser extensions temporarily

### Slow Performance
**Problem**: Canvas feels sluggish or unresponsive
**Solution**:
1. Close other browser tabs
2. Reduce zoom level
3. Simplify complex layouts
4. Use Chrome or Edge for best performance

## Account Issues

### Can't Sign In
**Problem**: Unable to log into your account
**Solution**:
1. Check email and password are correct
2. Try password reset
3. Check if account is verified
4. Contact support for help

### Missing Projects
**Problem**: Projects not showing in dashboard
**Solution**:
1. Check if you're signed into correct account
2. Projects might be in a different workspace
3. Check if projects were accidentally deleted
4. Contact support to restore deleted projects

## Browser Support

App Flow works best with:
- **Chrome**: Recommended browser
- **Edge**: Full feature support
- **Firefox**: Good compatibility
- **Safari**: Basic support (some features limited)

## Still Need Help?

If you can't find a solution here:
1. Check our [FAQ](/docs/faq)
2. Search the documentation
3. Ask in our [Discord community](https://discord.gg/appflow)
4. [Contact our support team](/contact)`,
          category: 'troubleshooting',
          tags: ['troubleshooting', 'issues', 'help'],
          lastUpdated: '2024-03-01',
          difficulty: 'beginner',
          readingTime: 7
        }
      ]
    }
  ]

  const allArticles = docSections.flatMap(section => section.articles)

  const filteredArticles = useMemo(() => {
    let filtered = allArticles

    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    return filtered
  }, [searchQuery, selectedCategory, allArticles])

  const featuredArticles = allArticles.filter(article => article.featured)

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId)
      } else {
        newSet.add(sectionId)
      }
      return newSet
    })
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-success/20 text-success'
      case 'intermediate': return 'bg-warning/20 text-warning'
      case 'advanced': return 'bg-error/20 text-error'
      default: return 'bg-text-muted/20 text-text-muted'
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // Could add a toast notification here
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const renderMarkdown = (content: string) => {
    // Simple markdown rendering - in production, use a proper markdown parser
    const lines = content.split('\n')
    const elements: React.ReactNode[] = []
    let isCodeBlock = false
    let codeLanguage = ''
    let codeContent = ''

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (isCodeBlock) {
          // End code block
          elements.push(
            <div key={index} className="relative">
              <pre className="bg-bg-tertiary border border-border rounded-xl p-4 overflow-x-auto">
                <code className={`language-${codeLanguage}`}>{codeContent}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(codeContent)}
                className="absolute top-2 right-2 p-2 bg-bg-secondary border border-border rounded-lg text-text-muted hover:text-text-primary hover:border-primary/50 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          )
          isCodeBlock = false
          codeContent = ''
        } else {
          // Start code block
          codeLanguage = line.slice(3)
          isCodeBlock = true
        }
      } else if (isCodeBlock) {
        codeContent += line + '\n'
      } else if (line.startsWith('# ')) {
        elements.push(<h1 key={index} className="text-3xl font-bold text-text-primary mb-6">{line.slice(2)}</h1>)
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={index} className="text-2xl font-bold text-text-primary mb-4 mt-8">{line.slice(3)}</h2>)
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-xl font-semibold text-text-primary mb-3 mt-6">{line.slice(4)}</h3>)
      } else if (line.startsWith('- ')) {
        elements.push(<li key={index} className="text-text-secondary ml-4">{line.slice(2)}</li>)
      } else if (line.match(/^\d+\. /)) {
        elements.push(<li key={index} className="text-text-secondary ml-4">{line.replace(/^\d+\. /, '')}</li>)
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(<p key={index} className="text-text-primary font-semibold mb-3">{line.slice(2, -2)}</p>)
      } else if (line.trim()) {
        elements.push(<p key={index} className="text-text-secondary leading-relaxed mb-4">{line}</p>)
      }
    })

    return elements
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header handleLaunchApp={handleLaunchApp} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
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

          <div className="container mx-auto px-6 relative z-10" ref={ref}>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Comprehensive guides and tutorials
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight"
              >
                Documentation &
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Help Center
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed"
              >
                Everything you need to design, build, and export amazing Android UIs with App Flow.
                From quick start guides to advanced techniques.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="max-w-2xl mx-auto mb-12"
              >
                <div className="relative">
                  <svg className="w-6 h-6 text-text-muted absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-bg-secondary border border-border rounded-xl pl-12 pr-4 py-4 text-text-primary placeholder-text-muted focus:border-primary/50 focus:bg-bg-tertiary transition-all duration-300 text-lg"
                  />
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{allArticles.length}+</div>
                  <div className="text-text-muted">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{docSections.length}</div>
                  <div className="text-text-muted">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-text-muted">Support</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {!selectedArticle && featuredArticles.length > 0 && (
          <section className="py-16 bg-bg-secondary">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Quick
                  <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                    {" "}Start
                  </span>
                </h2>
                <p className="text-text-secondary">
                  Get started with these essential guides
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="bg-bg-tertiary border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                      <div className="flex items-center mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(article.difficulty)}`}>
                          {article.difficulty}
                        </span>
                        <span className="text-text-muted text-sm ml-auto">
                          {article.readingTime} min read
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                        {article.title}
                      </h3>
                      
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {article.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-bg-secondary rounded text-xs text-text-muted">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="text-primary font-medium text-sm inline-flex items-center group">
                          Read Guide
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Content */}
        <section className="py-16 bg-bg-primary">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Sidebar */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="lg:sticky lg:top-8">
                  {/* Mobile Toggle */}
                  <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden w-full bg-bg-secondary border border-border rounded-xl p-4 mb-4 flex items-center justify-between text-text-primary"
                  >
                    <span className="font-medium">Documentation Menu</span>
                    <svg className={`w-5 h-5 transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {(isSidebarOpen || window.innerWidth >= 1024) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-bg-secondary border border-border rounded-2xl p-6 overflow-hidden"
                      >
                        <nav className="space-y-2">
                          {/* All Articles */}
                          <button
                            onClick={() => {
                              setSelectedCategory(null)
                              setSelectedArticle(null)
                            }}
                            className={`w-full text-left p-3 rounded-xl transition-colors ${
                              !selectedCategory && !selectedArticle 
                                ? 'bg-primary/20 text-primary' 
                                : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                            }`}
                          >
                            All Documentation
                          </button>

                          {/* Categories */}
                          {docSections.map((section) => (
                            <div key={section.id}>
                              <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full flex items-center justify-between p-3 rounded-xl text-text-primary hover:bg-bg-tertiary transition-colors"
                              >
                                <div className="flex items-center">
                                  <div className={`${section.color} mr-3`}>
                                    {section.icon}
                                  </div>
                                  <span className="font-medium">{section.title}</span>
                                </div>
                                <svg className={`w-4 h-4 transition-transform duration-300 ${openSections.has(section.id) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>

                              <AnimatePresence>
                                {openSections.has(section.id) && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="ml-6 mt-2 space-y-1 overflow-hidden"
                                  >
                                    {section.articles.map((article) => (
                                      <button
                                        key={article.id}
                                        onClick={() => {
                                          setSelectedArticle(article)
                                          setSelectedCategory(section.id)
                                        }}
                                        className={`w-full text-left p-2 rounded-lg text-sm transition-colors ${
                                          selectedArticle?.id === article.id
                                            ? 'bg-primary/20 text-primary'
                                            : 'text-text-muted hover:text-text-primary hover:bg-bg-tertiary'
                                        }`}
                                      >
                                        {article.title}
                                      </button>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </nav>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  {selectedArticle ? (
                    /* Article View */
                    <motion.div
                      key={selectedArticle.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-bg-secondary border border-border rounded-2xl p-8"
                    >
                      {/* Article Header */}
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <button
                            onClick={() => setSelectedArticle(null)}
                            className="text-text-muted hover:text-text-primary mr-4"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <div className="flex items-center space-x-3">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(selectedArticle.difficulty)}`}>
                              {selectedArticle.difficulty}
                            </span>
                            <span className="text-text-muted text-sm">
                              {selectedArticle.readingTime} min read
                            </span>
                            <span className="text-text-muted text-sm">
                              Updated {formatDate(selectedArticle.lastUpdated)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {selectedArticle.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-bg-tertiary rounded text-xs text-text-muted">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="prose prose-lg max-w-none">
                        {renderMarkdown(selectedArticle.content)}
                      </div>

                      {/* Article Footer */}
                      <div className="mt-12 pt-8 border-t border-border">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-text-primary mb-2">
                              Was this helpful?
                            </h3>
                            <div className="flex items-center space-x-2">
                              <button className="flex items-center px-3 py-2 bg-success/20 text-success rounded-lg hover:bg-success/30 transition-colors">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                Yes
                              </button>
                              <button className="flex items-center px-3 py-2 bg-error/20 text-error rounded-lg hover:bg-error/30 transition-colors">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                </svg>
                                No
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-text-muted text-sm mb-2">Need more help?</p>
                            <a
                              href="/contact"
                              className="text-primary hover:text-primary-light font-semibold inline-flex items-center"
                            >
                              Contact Support
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    /* Documentation Overview */
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Search Results */}
                      {searchQuery && (
                        <div className="mb-8">
                          <h2 className="text-2xl font-bold text-text-primary mb-4">
                            Search Results for "{searchQuery}"
                          </h2>
                          <p className="text-text-muted mb-6">
                            Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                      )}

                      {/* Documentation Sections */}
                      <div className="space-y-8">
                        {docSections.map((section) => {
                          const sectionArticles = searchQuery ? 
                            filteredArticles.filter(article => article.category === section.id) :
                            section.articles

                          if (searchQuery && sectionArticles.length === 0) return null

                          return (
                            <motion.div
                              key={section.id}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              className="bg-bg-secondary border border-border rounded-2xl p-8"
                            >
                              <div className="flex items-center mb-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${section.color} bg-current/20`}>
                                  <div className={section.color}>
                                    {section.icon}
                                  </div>
                                </div>
                                <div>
                                  <h3 className="text-2xl font-bold text-text-primary mb-1">
                                    {section.title}
                                  </h3>
                                  <p className="text-text-secondary">
                                    {section.description}
                                  </p>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {sectionArticles.map((article) => (
                                  <motion.div
                                    key={article.id}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-bg-tertiary border border-border rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-all duration-300"
                                    onClick={() => setSelectedArticle(article)}
                                  >
                                    <div className="flex items-center justify-between mb-3">
                                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(article.difficulty)}`}>
                                        {article.difficulty}
                                      </span>
                                      <span className="text-text-muted text-sm">
                                        {article.readingTime} min
                                      </span>
                                    </div>
                                    
                                    <h4 className="text-lg font-semibold text-text-primary mb-2 hover:text-primary transition-colors">
                                      {article.title}
                                    </h4>
                                    
                                    <p className="text-text-secondary text-sm line-clamp-2">
                                      {article.description}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>

                      {/* No Results */}
                      {searchQuery && filteredArticles.length === 0 && (
                        <div className="text-center py-20">
                          <div className="w-24 h-24 bg-bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-text-primary mb-4">
                            No articles found
                          </h3>
                          <p className="text-text-secondary mb-6">
                            Try adjusting your search terms or browse our categories above.
                          </p>
                          <button
                            onClick={() => setSearchQuery('')}
                            className="text-primary hover:text-primary-light font-semibold"
                          >
                            Clear search
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        {!selectedArticle && (
          <section className="py-16 bg-bg-secondary">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-bg-tertiary/80 to-bg-primary/80 backdrop-blur-xl border border-border rounded-3xl p-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                    Still Need Help?
                  </h2>
                  <p className="text-xl text-text-secondary mb-8">
                    Can't find what you're looking for? Our support team is here to help you succeed.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-text-primary mb-2">Contact Support</h3>
                      <p className="text-text-muted text-sm">Get help from our expert team</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-text-primary mb-2">Join Community</h3>
                      <p className="text-text-muted text-sm">Connect with other developers</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-info/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-text-primary mb-2">Video Tutorials</h3>
                      <p className="text-text-muted text-sm">Watch step-by-step guides</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 inline-flex items-center justify-center"
                    >
                      Contact Support
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-border hover:border-primary text-text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300 inline-flex items-center justify-center"
                    >
                      Join Discord
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        <CTA handleLaunchApp={handleLaunchApp} />
      </main>

      <Footer />
    </div>
  )
}