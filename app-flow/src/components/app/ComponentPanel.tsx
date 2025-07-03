'use client'

import { motion } from 'framer-motion'
import ComponentCard from './ComponentCard'

export default function ComponentPanel() {
  const componentCategories = [
    {
      name: 'Layouts',
      components: [
        { name: 'Scaffold', icon: 'scaffold' },
        { name: 'Column', icon: 'column' },
        { name: 'Row', icon: 'row' },
        { name: 'Box', icon: 'box' },
        { name: 'ConstraintLayout', icon: 'constraint-layout' },
        { name: 'Spacer', icon: 'spacer' }
      ]
    },
    {
      name: 'Controls',
      components: [
        { name: 'Button', icon: 'button' },
        { name: 'TextField', icon: 'text-field' },
        { name: 'Switch', icon: 'switch' },
        { name: 'Checkbox', icon: 'checkbox' },
        { name: 'Slider', icon: 'slider' },
        { name: 'DropdownMenu', icon: 'dropdown-menu' }
      ]
    },
    {
      name: 'Text & Media',
      components: [
        { name: 'Text', icon: 'text' },
        { name: 'Image', icon: 'image' },
        { name: 'Icon', icon: 'icon' },
        { name: 'Card', icon: 'card' }
      ]
    }
  ]

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 280, opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-bg-secondary border-r border-border overflow-hidden"
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="relative">
            <svg className="w-4 h-4 text-text-muted absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search components..."
              className="w-full bg-bg-tertiary border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-text-primary placeholder-text-muted focus:border-primary/50 focus:bg-bg-primary transition-colors"
            />
          </div>
        </div>

        {/* Component Categories */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {componentCategories.map((category, categoryIndex) => (
            <div key={category.name}>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-text-primary">{category.name}</h3>
                <button className="text-text-muted hover:text-text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Component Grid */}
              <div className="grid grid-cols-3 gap-2">
                {category.components.map((component, index) => (
                  <motion.div
                    key={component.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                  >
                    <ComponentCard 
                      name={component.name}
                      icon={component.icon}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}