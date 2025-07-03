'use client'

import { motion } from 'framer-motion'

interface ComponentCardProps {
  name: string
  icon: string
}

export default function ComponentCard({ name, icon }: ComponentCardProps) {
  // Simple icon mapping - you can replace with your SVG icons
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.JSX.Element } = {
      scaffold: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-secondary">
          <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="8" y="6" width="8" height="2" rx="0.5" stroke="currentColor"/>
          <rect x="8" y="16" width="8" height="1" rx="0.5" stroke="currentColor"/>
          <circle cx="18" cy="16" r="2" stroke="currentColor"/>
        </svg>
      ),
      column: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-secondary">
          <rect x="8" y="4" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="10" y="6" width="4" height="2" rx="0.5" stroke="currentColor"/>
          <rect x="10" y="10" width="4" height="2" rx="0.5" stroke="currentColor"/>
          <rect x="10" y="14" width="4" height="2" rx="0.5" stroke="currentColor"/>
        </svg>
      ),
      row: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-secondary">
          <rect x="4" y="8" width="16" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="6" y="10" width="2" height="4" rx="0.5" stroke="currentColor"/>
          <rect x="10" y="10" width="2" height="4" rx="0.5" stroke="currentColor"/>
          <rect x="14" y="10" width="2" height="4" rx="0.5" stroke="currentColor"/>
        </svg>
      ),
      box: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-secondary">
          <rect x="6" y="6" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="8" y="8" width="8" height="6" rx="0.5" stroke="currentColor" opacity="0.5"/>
          <circle cx="12" cy="12" r="2" stroke="currentColor"/>
        </svg>
      ),
      button: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-secondary">
          <rect x="6" y="10" width="12" height="6" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="9" y="12" width="6" height="1" rx="0.5" stroke="currentColor"/>
        </svg>
      ),
      text: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-secondary">
          <rect x="4" y="8" width="12" height="1" rx="0.5" stroke="currentColor"/>
          <rect x="4" y="11" width="16" height="1" rx="0.5" stroke="currentColor"/>
          <rect x="4" y="14" width="10" height="1" rx="0.5" stroke="currentColor"/>
        </svg>
      ),
      default: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-secondary">
          <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="2" stroke="currentColor"/>
        </svg>
      )
    }
    return icons[iconName] || icons.default
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="bg-bg-primary border border-border rounded-lg p-3 cursor-pointer hover:border-primary/50 transition-all duration-200 group"
      draggable
    >
      {/* Icon */}
      <div
        className="w-8 h-8 bg-bg-tertiary rounded-md flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors"
        onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
          e.dataTransfer.setData('text/plain', name)
        }}
        draggable
      >
        {getIcon(icon)}
      </div>
      {/* Name */}
      <div className="text-xs text-text-primary font-medium text-center leading-tight">
        {name}
      </div>
    </motion.div>
  )
}