'use client'

import { motion } from 'framer-motion'
import CanvasToolbar from './CanvasToolbar'

export default function AppCanvas() {
  return (
    <div className="flex-1 bg-bg-canvas relative overflow-hidden">
      {/* Canvas Content */}
      <div className="h-full flex items-center justify-center p-8">
        {/* Left Add Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-16 h-16 border-2 border-dashed border-border rounded-xl flex items-center justify-center text-text-muted hover:border-primary/50 hover:text-primary transition-all duration-200 mr-8"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.button>

        {/* Mobile Wireframe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-80 h-[600px] bg-bg-secondary border border-border rounded-3xl shadow-2xl relative overflow-hidden"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            const componentName = e.dataTransfer.getData('text/plain')
            console.log('Dropped component:', componentName)
            // Handle component drop logic here
          }}
        >
          {/* Mobile Content Area */}
          <div className="w-full h-full flex items-center justify-center text-text-muted">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              <p className="text-sm opacity-60">Drag components here</p>
            </div>
          </div>
        </motion.div>

        {/* Right Add Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-16 h-16 border-2 border-dashed border-border rounded-xl flex items-center justify-center text-text-muted hover:border-primary/50 hover:text-primary transition-all duration-200 ml-8"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.button>
      </div>

      {/* Floating Toolbar */}
      <CanvasToolbar />
    </div>
  )
}