'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from "@/components/main/Header"
import Footer from "@/components/main/Footer"
import { useAuth } from "@/features/auth"



interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  plan: {
    type: 'free' | 'pro' | 'enterprise'
    status: 'active' | 'trialing' | 'expired' | 'canceled'
    renewsAt?: string
    canceledAt?: string
  }
  usage: {
    exportsUsed: number
    exportsLimit: number
    projectsCreated: number
    projectsLimit: number
    storageUsed: number // in MB
    storageLimit: number // in MB
  }
  createdAt: string
  lastLoginAt: string
  providers: ('email' | 'google' | 'github')[]
}

interface FormData {
  name: string
  email: string
}

interface PasswordData {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

interface FormErrors {
  name?: string
  email?: string
  currentPassword?: string
  newPassword?: string
  confirmPassword?: string
}

export default function ProfilePage() {
  const { user, isLoggedIn, signOut } = useAuth()
  const router = useRouter()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' })
  const [passwordData, setPasswordData] = useState<PasswordData>({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState({ profile: false, password: false, delete: false })
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteConfirmText, setDeleteConfirmText] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/')
      return
    }

    // Mock user profile data - replace with actual API call
    const mockProfile: UserProfile = {
      id: 'user_123456',
      name: user?.name || 'John Doe',
      email: user?.email || 'john@example.com',
      avatar: undefined,
      plan: {
        type: 'pro',
        status: 'active',
        renewsAt: '2024-04-15'
      },
      usage: {
        exportsUsed: 23,
        exportsLimit: 100,
        projectsCreated: 8,
        projectsLimit: 50,
        storageUsed: 245,
        storageLimit: 1000
      },
      createdAt: '2024-01-15',
      lastLoginAt: '2024-03-14',
      providers: ['email', 'google']
    }

    setUserProfile(mockProfile)
    setFormData({ name: mockProfile.name, email: mockProfile.email })
  }, [isLoggedIn, router, user])

  function handleLaunchApp() {
    window.open('/app-flow', '_blank', 'noopener,noreferrer')
  }

  const validateProfileForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validatePasswordForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!passwordData.currentPassword) {
      newErrors.currentPassword = 'Current password is required'
    }

    if (!passwordData.newPassword) {
      newErrors.newPassword = 'New password is required'
    } else if (passwordData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters'
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleProfileSave = async () => {
    if (!validateProfileForm()) return

    setIsLoading(prev => ({ ...prev, profile: true }))
    setErrorMessage('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      if (userProfile) {
        setUserProfile({ ...userProfile, name: formData.name, email: formData.email })
      }
      
      setSuccessMessage('Profile updated successfully!')
      setIsEditing(false)
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      setErrorMessage('Failed to update profile. Please try again.')
      setTimeout(() => setErrorMessage(''), 3000)
    } finally {
      setIsLoading(prev => ({ ...prev, profile: false }))
    }
  }

  const handlePasswordChange = async () => {
    if (!validatePasswordForm()) return

    setIsLoading(prev => ({ ...prev, password: true }))
    setErrorMessage('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSuccessMessage('Password changed successfully!')
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      setErrorMessage('Failed to change password. Please try again.')
      setTimeout(() => setErrorMessage(''), 3000)
    } finally {
      setIsLoading(prev => ({ ...prev, password: false }))
    }
  }

  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== 'DELETE') return

    setIsLoading(prev => ({ ...prev, delete: true }))

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Sign out and redirect
      signOut()
      router.push('/')
    } catch (error) {
      setErrorMessage('Failed to delete account. Please contact support.')
      setTimeout(() => setErrorMessage(''), 3000)
    } finally {
      setIsLoading(prev => ({ ...prev, delete: false }))
      setShowDeleteConfirm(false)
    }
  }

  const getPlanColor = (planType: string) => {
    switch (planType) {
      case 'pro': return 'bg-primary/20 text-primary'
      case 'enterprise': return 'bg-warning/20 text-warning'
      default: return 'bg-success/20 text-success'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-success'
      case 'trialing': return 'text-info'
      case 'expired': return 'text-error'
      case 'canceled': return 'text-warning'
      default: return 'text-text-muted'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (!isLoggedIn || !userProfile) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header handleLaunchApp={handleLaunchApp} />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6" ref={ref}>
          {/* Success/Error Messages */}
          <AnimatePresence>
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-24 right-6 bg-success/20 border border-success/30 rounded-xl p-4 z-50"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-success font-medium">{successMessage}</span>
                </div>
              </motion.div>
            )}

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-24 right-6 bg-error/20 border border-error/30 rounded-xl p-4 z-50"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-error mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-error font-medium">{errorMessage}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-bg-secondary border border-border rounded-2xl p-8 mb-8"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full flex items-center justify-center">
                    {userProfile.avatar ? (
                      <img src={userProfile.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <span className="text-primary font-bold text-2xl">
                        {userProfile.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>

                {/* User Info */}
                <div>
                  <h1 className="text-3xl font-bold text-text-primary mb-2">{userProfile.name}</h1>
                  <p className="text-text-secondary mb-3">{userProfile.email}</p>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getPlanColor(userProfile.plan.type)}`}>
                      {userProfile.plan.type.charAt(0).toUpperCase() + userProfile.plan.type.slice(1)} Plan
                    </span>
                    <span className={`text-sm font-medium ${getStatusColor(userProfile.plan.status)}`}>
                      {userProfile.plan.status.charAt(0).toUpperCase() + userProfile.plan.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                {!isEditing ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsEditing(true)}
                    className="bg-primary/20 text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary/30 transition-colors inline-flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit Profile
                  </motion.button>
                ) : (
                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleProfileSave}
                      disabled={isLoading.profile}
                      className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
                    >
                      {isLoading.profile ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Saving...
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Save Changes
                        </>
                      )}
                    </motion.button>
                    <button
                      onClick={() => {
                        setIsEditing(false)
                        setFormData({ name: userProfile.name, email: userProfile.email })
                        setErrors({})
                      }}
                      className="border border-border text-text-primary px-6 py-3 rounded-xl font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Account Details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-bg-secondary border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-text-primary mb-6">Account Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Display Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      disabled={!isEditing}
                      className={`w-full bg-bg-tertiary border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                        !isEditing ? 'cursor-not-allowed opacity-60' : ''
                      } ${errors.name ? 'border-error' : 'border-border hover:border-primary/30'}`}
                    />
                    {errors.name && (
                      <p className="text-error text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      disabled={!isEditing}
                      className={`w-full bg-bg-tertiary border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                        !isEditing ? 'cursor-not-allowed opacity-60' : ''
                      } ${errors.email ? 'border-error' : 'border-border hover:border-primary/30'}`}
                    />
                    {errors.email && (
                      <p className="text-error text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* User ID */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      User ID
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={userProfile.id}
                        disabled
                        className="flex-1 bg-bg-tertiary border border-border rounded-xl px-4 py-3 text-text-muted cursor-not-allowed"
                      />
                      <button
                        onClick={() => navigator.clipboard.writeText(userProfile.id)}
                        className="ml-2 p-3 bg-bg-tertiary border border-border rounded-xl text-text-muted hover:text-text-primary hover:border-primary/50 transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Registration Date */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Member Since
                    </label>
                    <input
                      type="text"
                      value={formatDate(userProfile.createdAt)}
                      disabled
                      className="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-3 text-text-muted cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Connected Accounts */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Connected Accounts</h3>
                  <div className="flex flex-wrap gap-3">
                    {userProfile.providers.map((provider) => (
                      <div key={provider} className="flex items-center bg-bg-tertiary border border-border rounded-lg px-3 py-2">
                        <div className="w-5 h-5 mr-2">
                          {provider === 'google' && (
                            <svg viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                          )}
                          {provider === 'github' && (
                            <svg className="text-text-primary" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          )}
                          {provider === 'email' && (
                            <svg className="text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          )}
                        </div>
                        <span className="text-text-primary text-sm font-medium capitalize">{provider}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Change Password */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-bg-secondary border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-text-primary mb-6">Change Password</h2>
                
                <div className="space-y-6">
                  {/* Current Password */}
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-text-primary mb-2">
                      Current Password
                    </label>
                    <input
                      id="currentPassword"
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                      className={`w-full bg-bg-tertiary border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                        errors.currentPassword ? 'border-error' : 'border-border hover:border-primary/30'
                      }`}
                      placeholder="Enter your current password"
                    />
                    {errors.currentPassword && (
                      <p className="text-error text-sm mt-1">{errors.currentPassword}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* New Password */}
                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-text-primary mb-2">
                        New Password
                      </label>
                      <input
                        id="newPassword"
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                        className={`w-full bg-bg-tertiary border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                          errors.newPassword ? 'border-error' : 'border-border hover:border-primary/30'
                        }`}
                        placeholder="Enter new password"
                      />
                      {errors.newPassword && (
                        <p className="text-error text-sm mt-1">{errors.newPassword}</p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-2">
                        Confirm Password
                      </label>
                      <input
                        id="confirmPassword"
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        className={`w-full bg-bg-tertiary border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                          errors.confirmPassword ? 'border-error' : 'border-border hover:border-primary/30'
                        }`}
                        placeholder="Confirm new password"
                      />
                      {errors.confirmPassword && (
                        <p className="text-error text-sm mt-1">{errors.confirmPassword}</p>
                      )}
                    </div>
                  </div>

                  {/* Password Requirements */}
                  <div className="bg-bg-tertiary rounded-xl p-4">
                    <h4 className="text-sm font-medium text-text-primary mb-2">Password Requirements:</h4>
                    <ul className="text-sm text-text-muted space-y-1">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        At least 8 characters long
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Include uppercase and lowercase letters
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Include at least one number
                      </li>
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePasswordChange}
                    disabled={isLoading.password}
                    className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
                  >
                    {isLoading.password ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Changing Password...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Change Password
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>

              {/* Danger Zone */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-bg-secondary border border-error/30 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-error mb-6">Danger Zone</h2>
                
                <div className="space-y-6">
                  <div className="border border-error/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Delete Account</h3>
                    <p className="text-text-secondary mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowDeleteConfirm(true)}
                      className="bg-error/20 text-error border border-error/30 px-6 py-3 rounded-xl font-medium hover:bg-error/30 transition-all duration-300 inline-flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete Account
                    </motion.button>
                  </div>

                  <div className="border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Sign Out</h3>
                    <p className="text-text-secondary mb-4">
                      Sign out of your account on this device.
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={signOut}
                      className="border border-border text-text-primary px-6 py-3 rounded-xl font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 inline-flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Plan & Usage */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-bg-secondary border border-border rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-text-primary mb-6">Plan & Usage</h3>
                
                <div className="space-y-6">
                  {/* Current Plan */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-text-secondary">Current Plan</span>
                      <span className={`px-2 py-1 rounded text-sm font-semibold ${getPlanColor(userProfile.plan.type)}`}>
                        {userProfile.plan.type.charAt(0).toUpperCase() + userProfile.plan.type.slice(1)}
                      </span>
                    </div>
                    {userProfile.plan.renewsAt && (
                      <p className="text-text-muted text-sm">
                        Renews on {formatDate(userProfile.plan.renewsAt)}
                      </p>
                    )}
                  </div>

                  {/* Usage Stats */}
                  <div className="space-y-4">
                    {/* Exports */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-text-secondary text-sm">Exports this month</span>
                        <span className="text-text-primary text-sm font-medium">
                          {userProfile.usage.exportsUsed}/{userProfile.usage.exportsLimit}
                        </span>
                      </div>
                      <div className="w-full bg-bg-tertiary rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary-light rounded-full h-2 transition-all duration-300"
                          style={{ width: `${(userProfile.usage.exportsUsed / userProfile.usage.exportsLimit) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-text-secondary text-sm">Projects</span>
                        <span className="text-text-primary text-sm font-medium">
                          {userProfile.usage.projectsCreated}/{userProfile.usage.projectsLimit}
                        </span>
                      </div>
                      <div className="w-full bg-bg-tertiary rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-success to-info rounded-full h-2 transition-all duration-300"
                          style={{ width: `${(userProfile.usage.projectsCreated / userProfile.usage.projectsLimit) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Storage */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-text-secondary text-sm">Storage</span>
                        <span className="text-text-primary text-sm font-medium">
                          {userProfile.usage.storageUsed}MB/{userProfile.usage.storageLimit}MB
                        </span>
                      </div>
                      <div className="w-full bg-bg-tertiary rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-warning to-error rounded-full h-2 transition-all duration-300"
                          style={{ width: `${(userProfile.usage.storageUsed / userProfile.usage.storageLimit) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Upgrade Button */}
                  {userProfile.plan.type === 'free' && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    >
                      Upgrade to Pro
                    </motion.button>
                  )}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-bg-secondary border border-border rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-text-primary mb-6">Quick Actions</h3>
                
                <div className="space-y-3">
                  <a
                    href="/docs"
                    className="flex items-center p-3 rounded-xl hover:bg-bg-tertiary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-info/20 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-text-primary group-hover:text-primary transition-colors">Documentation</h4>
                      <p className="text-text-muted text-sm">Learn how to use App Flow</p>
                    </div>
                  </a>

                  <a
                    href="/contact"
                    className="flex items-center p-3 rounded-xl hover:bg-bg-tertiary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-text-primary group-hover:text-primary transition-colors">Get Support</h4>
                      <p className="text-text-muted text-sm">Contact our support team</p>
                    </div>
                  </a>

                  <a
                    href="/pricing"
                    className="flex items-center p-3 rounded-xl hover:bg-bg-tertiary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-text-primary group-hover:text-primary transition-colors">View Plans</h4>
                      <p className="text-text-muted text-sm">Compare pricing options</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Delete Account Modal */}
        <AnimatePresence>
          {showDeleteConfirm && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                onClick={() => setShowDeleteConfirm(false)}
              />
              
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="bg-bg-secondary border border-border rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-text-primary text-center mb-4">
                      Delete Account
                    </h3>
                    
                    <p className="text-text-secondary text-center mb-6 leading-relaxed">
                      This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
                    </p>

                    <div className="bg-error/10 border border-error/20 rounded-xl p-4 mb-6">
                      <h4 className="font-semibold text-error mb-2">What will be deleted:</h4>
                      <ul className="text-error text-sm space-y-1">
                        <li>• All your projects and designs</li>
                        <li>• All uploaded assets</li>
                        <li>• Account settings and preferences</li>
                        <li>• Usage history and statistics</li>
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="deleteConfirm" className="block text-sm font-medium text-text-primary mb-2">
                        Type "DELETE" to confirm:
                      </label>
                      <input
                        id="deleteConfirm"
                        type="text"
                        value={deleteConfirmText}
                        onChange={(e) => setDeleteConfirmText(e.target.value)}
                        className="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-error/50 focus:border-error transition-all duration-200"
                        placeholder="Type DELETE here"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => {
                          setShowDeleteConfirm(false)
                          setDeleteConfirmText('')
                        }}
                        className="flex-1 border border-border text-text-primary py-3 rounded-xl font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        Cancel
                      </button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleDeleteAccount}
                        disabled={deleteConfirmText !== 'DELETE' || isLoading.delete}
                        className="flex-1 bg-error text-white py-3 rounded-xl font-medium hover:bg-error/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                      >
                        {isLoading.delete ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Deleting...
                          </>
                        ) : (
                          'Delete Account'
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}