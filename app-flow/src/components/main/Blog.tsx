'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blogPosts = [
    {
      id: 1,
      title: "Building Responsive Layouts with Jetpack Compose",
      excerpt: "Learn how to create adaptive UIs that work perfectly across all screen sizes and orientations using Compose Flow's responsive design tools.",
      author: "Sarah Chen",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "Mar 15, 2024",
      readTime: "8 min read",
      category: "Tutorial",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "From Design to Code: Streamlining Your Workflow",
      excerpt: "Discover how leading development teams are using Compose Flow to bridge the gap between design and implementation.",
      author: "Marcus Rodriguez",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "Mar 12, 2024",
      readTime: "6 min read",
      category: "Case Study",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 3,
      title: "Advanced Animation Techniques in Jetpack Compose",
      excerpt: "Master complex animations and transitions with our comprehensive guide to Compose animations and state management.",
      author: "Priya Patel",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "Mar 10, 2024",
      readTime: "12 min read",
      category: "Advanced",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 4,
      title: "Performance Optimization Best Practices",
      excerpt: "Tips and tricks for building lightning-fast UIs that provide smooth user experiences.",
      author: "David Kim",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "Mar 8, 2024",
      readTime: "10 min read",
      category: "Performance",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Component Library Design Patterns",
      excerpt: "Build reusable, maintainable component libraries with these proven design patterns.",
      author: "Anna Kowalski",
      authorAvatar: "/api/placeholder/40/40",
      publishDate: "Mar 5, 2024",
      readTime: "7 min read",
      category: "Design",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  const getCategoryColor = (category: string) => {
    const colors = {
      Tutorial: 'bg-primary/20 text-primary',
      'Case Study': 'bg-success/20 text-success',
      Advanced: 'bg-warning/20 text-warning',
      Performance: 'bg-error/20 text-error',
      Design: 'bg-info/20 text-info'
    }
    return colors[category as keyof typeof colors] || 'bg-text-muted/20 text-text-muted'
  }

  return (
    <section id="blog" className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url(`data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.02'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 110-30 15 15 0 010 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`)] opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Latest from our
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {" "}Blog
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest tips, tutorials, and insights from the world of Android development
          </p>
        </motion.div>

        {/* Featured Posts */}
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
              <Link href={`/blog/${post.id}`}>
                <div className="bg-bg-tertiary border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-bg-canvas to-bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                      <svg className="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
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
                    <div className="flex items-center justify-between text-sm text-text-muted">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full flex items-center justify-center mr-3">
                          <span className="text-primary font-semibold text-xs">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>{post.publishDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Recent Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8">Recent Posts</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-bg-primary border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 flex">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h4>
                      
                      <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-xs text-text-muted">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.publishDate}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <div className="w-24 h-24 bg-gradient-to-br from-bg-tertiary to-bg-canvas rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center border border-border hover:border-primary text-text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300 group"
            >
              View All Posts
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
        </motion.div>
      </div>
    </section>
  )
}