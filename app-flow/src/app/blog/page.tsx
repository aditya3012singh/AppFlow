'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'
import Header from "@/components/main/Header"
import Footer from "@/components/main/Footer"
import CTA from "@/components/main/CTA"
import { useAuth } from "@/features/auth"



interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  featuredImage: string
  category: {
    name: string
    slug: string
    color: string
  }
  author: {
    name: string
    avatar: string
    role: string
  }
  publishedAt: string
  readingTime: number
  featured: boolean
  tags: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  views: number
}

export default function BlogPage() {
  const { user, isLoggedIn } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'date' | 'popular' | 'reading-time'>('date')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  function handleLaunchApp() {
    if (isLoggedIn) {
      window.open('/app-flow', '_blank', 'noopener,noreferrer')
    }
  }

  const categories = [
    { id: 'all', name: 'All Posts', color: 'bg-primary/20 text-primary' },
    { id: 'tutorials', name: 'Tutorials', color: 'bg-success/20 text-success' },
    { id: 'tips', name: 'Tips & Tricks', color: 'bg-warning/20 text-warning' },
    { id: 'updates', name: 'Product Updates', color: 'bg-info/20 text-info' },
    { id: 'case-studies', name: 'Case Studies', color: 'bg-error/20 text-error' },
    { id: 'design', name: 'Design Patterns', color: 'bg-purple-500/20 text-purple-400' }
  ]

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      slug: 'building-first-android-app-with-appflow',
      title: 'Building Your First Android App with App Flow: A Complete Beginner\'s Guide',
      excerpt: 'Learn how to create your first Android app using App Flow\'s visual design tools. This comprehensive guide covers everything from setup to deployment.',
      featuredImage: '/api/placeholder/600/400',
      category: { name: 'Tutorials', slug: 'tutorials', color: 'bg-success/20 text-success' },
      author: { name: 'Sarah Chen', avatar: '/api/placeholder/40/40', role: 'Senior Developer' },
      publishedAt: '2024-03-15',
      readingTime: 12,
      featured: true,
      tags: ['beginner', 'tutorial', 'getting-started'],
      difficulty: 'beginner',
      views: 2847
    },
    {
      id: '2',
      slug: 'jetpack-compose-best-practices',
      title: '10 Jetpack Compose Best Practices Every Developer Should Know',
      excerpt: 'Discover essential Jetpack Compose patterns and practices that will make your code more maintainable, performant, and readable.',
      featuredImage: '/api/placeholder/600/400',
      category: { name: 'Tips & Tricks', slug: 'tips', color: 'bg-warning/20 text-warning' },
      author: { name: 'Marcus Rodriguez', avatar: '/api/placeholder/40/40', role: 'Lead Mobile Developer' },
      publishedAt: '2024-03-12',
      readingTime: 8,
      featured: true,
      tags: ['compose', 'best-practices', 'performance'],
      difficulty: 'intermediate',
      views: 1923
    },
    {
      id: '3',
      slug: 'design-to-code-workflow-guide',
      title: 'From Design to Code: A Complete Workflow Guide',
      excerpt: 'Streamline your development process with this comprehensive workflow that takes you from initial design concepts to production-ready code.',
      featuredImage: '/api/placeholder/600/400',
      category: { name: 'Case Studies', slug: 'case-studies', color: 'bg-error/20 text-error' },
      author: { name: 'Priya Patel', avatar: '/api/placeholder/40/40', role: 'UX Developer' },
      publishedAt: '2024-03-10',
      readingTime: 15,
      featured: true,
      tags: ['workflow', 'design-system', 'productivity'],
      difficulty: 'intermediate',
      views: 1654
    },
    {
      id: '4',
      slug: 'appflow-2-whats-new',
      title: 'App Flow 2.0: What\'s New and Improved',
      excerpt: 'Explore the exciting new features and improvements in App Flow 2.0, including enhanced collaboration tools and advanced export options.',
      featuredImage: '/api/placeholder/600/400',
      category: { name: 'Product Updates', slug: 'updates', color: 'bg-info/20 text-info' },
      author: { name: 'David Kim', avatar: '/api/placeholder/40/40', role: 'Product Manager' },
      publishedAt: '2024-03-08',
      readingTime: 6,
      featured: false,
      tags: ['product-update', 'features', 'collaboration'],
      difficulty: 'beginner',
      views: 987
    },
    {
      id: '5',
      slug: 'accessible-android-uis',
      title: 'Creating Accessible Android UIs: A Developer\'s Guide',
      excerpt: 'Learn how to build inclusive Android applications that work for everyone. Covers accessibility best practices and testing strategies.',
      featuredImage: '/api/placeholder/600/400',
      category: { name: 'Design Patterns', slug: 'design', color: 'bg-purple-500/20 text-purple-400' },
      author: { name: 'Anna Kowalski', avatar: '/api/placeholder/40/40', role: 'Accessibility Expert' },
      publishedAt: '2024-03-05',
      readingTime: 10,
      featured: false,
      tags: ['accessibility', 'inclusive-design', 'testing'],
      difficulty: 'intermediate',
      views: 743
    },
    {
      id: '6',
      slug: 'advanced-compose-animations',
      title: 'Advanced Animation Techniques in Jetpack Compose',
      excerpt: 'Master complex animations and transitions with this deep dive into Jetpack Compose\'s animation APIs and advanced techniques.',
      featuredImage: '/api/placeholder/600/400',
      category: { name: 'Tutorials', slug: 'tutorials', color: 'bg-success/20 text-success' },
      author: { name: 'James Wilson', avatar: '/api/placeholder/40/40', role: 'Android Specialist' },
      publishedAt: '2024-03-01',
      readingTime: 18,
      featured: false,
      tags: ['animations', 'advanced', 'compose'],
      difficulty: 'advanced',
      views: 1234
    }
  ]

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category.slug === selectedCategory)
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.views - a.views
        case 'reading-time':
          return a.readingTime - b.readingTime
        case 'date':
        default:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, sortBy, blogPosts])

  const featuredPosts = blogPosts.filter(post => post.featured)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-success/20 text-success'
      case 'intermediate': return 'bg-warning/20 text-warning'
      case 'advanced': return 'bg-error/20 text-error'
      default: return 'bg-text-muted/20 text-text-muted'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Fresh insights every week
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight"
              >
                Latest from the
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}App Flow{" "}
                </span>
                Blog
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed"
              >
                Discover Android development tips, Jetpack Compose tutorials, and the latest 
                product updates from our team of experts.
              </motion.p>

              {/* Blog Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{blogPosts.length}+</div>
                  <div className="text-text-muted">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-text-muted">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-text-muted">Categories</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-bg-secondary" ref={ref}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Featured
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {" "}Articles
                </span>
              </h2>
              <p className="text-text-secondary">
                Our most popular and recent posts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-bg-tertiary border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-bg-canvas to-bg-primary relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                        <svg className="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.category.color}`}>
                          {post.category.name}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(post.difficulty)}`}>
                          {post.difficulty}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 bg-bg-primary/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-text-primary">
                        {post.readingTime} min read
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-text-secondary leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full flex items-center justify-center mr-3">
                            <span className="text-primary font-semibold text-xs">
                              {post.author.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-text-primary">{post.author.name}</div>
                            <div className="text-xs text-text-muted">{formatDate(post.publishedAt)}</div>
                          </div>
                        </div>
                        <div className="flex items-center text-xs text-text-muted">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {post.views.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-16 bg-bg-primary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              {/* Search Bar */}
              <div className="flex flex-col lg:flex-row gap-6 mb-8">
                <div className="flex-1 relative">
                  <svg className="w-5 h-5 text-text-muted absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search articles, tutorials, and tips..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-bg-secondary border border-border rounded-xl pl-12 pr-4 py-4 text-text-primary placeholder-text-muted focus:border-primary/50 focus:bg-bg-tertiary transition-all duration-300"
                  />
                </div>

                {/* View Toggle */}
                <div className="flex items-center bg-bg-secondary border border-border rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' 
                        ? 'bg-primary text-white' 
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      viewMode === 'list' 
                        ? 'bg-primary text-white' 
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-8">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? category.color
                          : 'bg-bg-secondary border border-border text-text-secondary hover:border-primary/50 hover:text-text-primary'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-bg-secondary border border-border rounded-xl px-4 py-2 text-text-primary appearance-none cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <option value="date">Latest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="reading-time">Quick Reads</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="text-text-muted mb-8">
                Showing {filteredPosts.length} of {blogPosts.length} articles
                {searchQuery && (
                  <span> for "{searchQuery}"</span>
                )}
                {selectedCategory !== 'all' && (
                  <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
                )}
              </div>

              {/* Blog Posts Grid/List */}
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="group cursor-pointer"
                  >
                    <div className={`bg-bg-secondary border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}>
                      {/* Image */}
                      <div className={`bg-gradient-to-br from-bg-tertiary to-bg-canvas relative overflow-hidden ${
                        viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-video'
                      }`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary-light/15 flex items-center justify-center">
                          <svg className="w-12 h-12 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${post.category.color}`}>
                            {post.category.name}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3 bg-bg-primary/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-text-primary">
                          {post.readingTime} min
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(post.difficulty)}`}>
                            {post.difficulty}
                          </span>
                          <div className="flex items-center text-xs text-text-muted">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {post.views.toLocaleString()}
                          </div>
                        </div>

                        <h3 className={`font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300 ${
                          viewMode === 'list' ? 'text-lg line-clamp-2' : 'text-xl line-clamp-2'
                        }`}>
                          {post.title}
                        </h3>
                        
                        <p className={`text-text-secondary leading-relaxed mb-4 ${
                          viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-3'
                        }`}>
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full flex items-center justify-center mr-3">
                              <span className="text-primary font-semibold text-xs">
                                {post.author.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-text-primary">{post.author.name}</div>
                              <div className="text-xs text-text-muted">{formatDate(post.publishedAt)}</div>
                            </div>
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-primary hover:text-primary-light font-medium text-sm inline-flex items-center group"
                          >
                            Read More
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              {filteredPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center mt-12"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-border hover:border-primary text-text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300"
                  >
                    Load More Articles
                  </motion.button>
                </motion.div>
              )}

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center py-20"
                >
                  <div className="w-24 h-24 bg-bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    No articles found
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('all')
                    }}
                    className="text-primary hover:text-primary-light font-semibold"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Newsletter Subscription */}
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
                  Stay Updated
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                  Get the latest Android development tips and App Flow updates delivered to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-bg-secondary border border-border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:border-primary/50 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
                
                <p className="text-text-muted text-sm mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
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