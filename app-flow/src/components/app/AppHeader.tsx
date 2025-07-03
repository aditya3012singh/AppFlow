'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AppHeader() {
  const [selectedDevice, setSelectedDevice] = useState('Samsung Galaxy')
  const [zoomLevel, setZoomLevel] = useState(100)
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait')

  const devices = [
    'Samsung Galaxy',
    'iPhone 14 Pro',
    'Google Pixel',
    'OnePlus 11',
    'Custom Size'
  ]

  return (
    <header className="h-14 bg-bg-secondary border-b border-border flex items-center justify-between px-6 relative z-50">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        {/* Logo & Project Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                <path d="M4 3h8v1H4V3zM2 6h12v6H2V6zm1 1v4h10V7H3z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-lg font-semibold text-text-primary">Compose Flow</span>
          </div>
          
          <div className="h-6 w-px bg-border"></div>
          
          <div className="flex items-center space-x-3">
            <input 
              type="text" 
              defaultValue="Project Name"
              className="bg-transparent text-text-primary font-medium text-sm border-none outline-none focus:bg-bg-tertiary px-2 py-1 rounded transition-colors"
            />
            <div className="flex items-center space-x-2 text-xs text-text-muted">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Saved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex items-center space-x-4">
        {/* Device Selector */}
        <div className="relative">
          <select 
            value={selectedDevice}
            onChange={(e) => setSelectedDevice(e.target.value)}
            className="bg-bg-tertiary border border-border rounded-lg px-3 py-2 text-sm text-text-primary appearance-none cursor-pointer hover:border-primary/50 transition-colors min-w-[140px]"
          >
            {devices.map(device => (
              <option key={device} value={device}>{device}</option>
            ))}
          </select>
          <svg className="w-4 h-4 text-text-muted absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className="h-6 w-px bg-border"></div>

        {/* Zoom Controls */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setZoomLevel(Math.max(25, zoomLevel - 25))}
            className="w-8 h-8 bg-bg-tertiary border border-border rounded-md flex items-center justify-center hover:border-primary/50 transition-colors"
          >
            <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          
          <span className="text-sm text-text-primary font-medium min-w-[60px] text-center">
            {zoomLevel}%
          </span>
          
          <button 
            onClick={() => setZoomLevel(Math.min(200, zoomLevel + 25))}
            className="w-8 h-8 bg-bg-tertiary border border-border rounded-md flex items-center justify-center hover:border-primary/50 transition-colors"
          >
            <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        <div className="h-6 w-px bg-border"></div>

        {/* Orientation */}
        <button 
          onClick={() => setOrientation(orientation === 'portrait' ? 'landscape' : 'portrait')}
          className="w-8 h-8 bg-bg-tertiary border border-border rounded-md flex items-center justify-center hover:border-primary/50 transition-colors group"
        >
          <svg className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {orientation === 'portrait' ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 17h16M8 12h8" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M12 8v8" />
            )}
          </svg>
        </button>

        {/* Fit Button */}
        <button className="px-3 py-2 bg-bg-tertiary border border-border rounded-lg text-sm text-text-primary hover:border-primary/50 hover:bg-primary/5 transition-colors">
          Fit
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        {/* Fullscreen */}
        <button className="w-8 h-8 bg-bg-tertiary border border-border rounded-md flex items-center justify-center hover:border-primary/50 transition-colors group">
          <svg className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
          </svg>
        </button>

        {/* Export */}
        <button className="w-8 h-8 bg-bg-tertiary border border-border rounded-md flex items-center justify-center hover:border-primary/50 transition-colors group">
          <svg className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
        </button>

        {/* Settings */}
        <button className="w-8 h-8 bg-bg-tertiary border border-border rounded-md flex items-center justify-center hover:border-primary/50 transition-colors group">
          <svg className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Pro Badge */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white px-3 py-1 rounded-full text-xs font-bold">
          PRO
        </div>

        {/* Profile */}
        <button className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary-light/20 border border-primary/30 rounded-full flex items-center justify-center hover:border-primary/50 transition-colors">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </header>
  )
}