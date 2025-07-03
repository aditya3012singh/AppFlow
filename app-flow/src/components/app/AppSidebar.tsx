'use client'

import { motion } from 'framer-motion'

interface AppSidebarProps {
  activeMenu: string
  setActiveMenu: (menu: string) => void
  isPanelOpen: boolean
  setIsPanelOpen: (open: boolean) => void
}

export default function AppSidebar({ 
  activeMenu, 
  setActiveMenu, 
  isPanelOpen, 
  setIsPanelOpen 
}: AppSidebarProps) {
  
  const menuItems = [
    {
      id: 'components',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      label: 'Components'
    },
    {
      id: 'layers',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      label: 'Layers'
    },
    {
      id: 'assets',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Assets'
    },
    {
      id: 'pages',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: 'Pages'
    }
  ]

  const handleMenuClick = (menuId: string) => {
    if (activeMenu === menuId && isPanelOpen) {
      setIsPanelOpen(false)
    } else {
      setActiveMenu(menuId)
      setIsPanelOpen(true)
    }
  }

  return (
    <div className="w-12 bg-bg-tertiary border-r border-border flex flex-col items-center py-4 space-y-2">
      {menuItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => handleMenuClick(item.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group relative ${
            activeMenu === item.id && isPanelOpen
              ? 'bg-primary text-white shadow-lg'
              : 'bg-transparent text-text-muted hover:text-text-primary hover:bg-bg-secondary'
          }`}
        >
          {item.icon}
          
          {/* Tooltip */}
          <div className="absolute left-12 bg-bg-primary border border-border rounded-lg px-2 py-1 text-xs text-text-primary opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            {item.label}
          </div>
        </motion.button>
      ))}
    </div>
  )
}