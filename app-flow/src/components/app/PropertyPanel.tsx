'use client'

import { motion } from 'framer-motion'

export default function AppPropertiesPanel() {
  return (
    <div className="w-80 bg-bg-secondary border-l border-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold text-text-primary">Properties</h2>
        <p className="text-sm text-text-muted">Configure selected component</p>
      </div>

      {/* Properties Content */}
      <div className="flex-1 p-4">
        <div className="text-center text-text-muted py-20">
          <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
          <p className="text-sm">Select a component to edit properties</p>
        </div>
      </div>
    </div>
  )
}