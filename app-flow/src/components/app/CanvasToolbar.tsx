'use client'

import { motion } from 'framer-motion'

export default function CanvasToolbar() {
  const toolGroups = [
    {
      name: 'History',
      tools: [
        { name: 'Undo', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z M3 7l9 6 9-6' },
        { name: 'Redo', icon: 'M21 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012-2z M21 7l-9 6-9-6' }
      ]
    },
    {
      name: 'Edit',
      tools: [
        { name: 'Copy', icon: 'M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17H18c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22H10c-1.105 0-2-.911-2-2.036V9.107z' },
        { name: 'Paste', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
        { name: 'Cut', icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' },
        { name: 'Delete', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' }
      ]
    },
    {
      name: 'Align',
      tools: [
        { name: 'Align Top', icon: 'M12 2v20M2 12h20' },
        { name: 'Align Bottom', icon: 'M12 2v20M2 12h20' },
        { name: 'Align Left', icon: 'M12 2v20M2 12h20' },
        { name: 'Align Right', icon: 'M12 2v20M2 12h20' }
      ]
    },
    {
      name: 'Actions',
      tools: [
        { name: 'Refresh', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-bg-secondary/90 backdrop-blur-lg border border-border rounded-xl p-3 shadow-xl"
    >
      <div className="flex items-center space-x-4">
        {toolGroups.map((group, groupIndex) => (
          <div key={group.name} className="flex items-center space-x-1">
            {group.tools.map((tool, toolIndex) => (
              <motion.button
                key={tool.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-bg-tertiary hover:bg-primary/20 border border-border hover:border-primary/50 rounded-lg flex items-center justify-center text-text-muted hover:text-primary transition-all duration-200 group relative"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tool.icon} />
                </svg>
                
                {/* Tooltip */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-bg-primary border border-border rounded-lg px-2 py-1 text-xs text-text-primary opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {tool.name}
                </div>
              </motion.button>
            ))}
            
            {/* Divider */}
            {groupIndex < toolGroups.length - 1 && (
              <div className="w-px h-6 bg-border mx-2"></div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}