'use client'

import AppHeader from "@/components/app/AppHeader";
import AppCanvas from "@/components/app/AppCanvas";
import AppSidebar from "@/components/app/AppSidebar";
import ComponentPanel from "@/components/app/ComponentPanel";
import AppPropertiesPanel from "@/components/app/PropertyPanel";
import { useState } from "react";

export default function AppPage() {
  const [activeMenu, setActiveMenu] = useState<string>('components')
  const [isPanelOpen, setIsPanelOpen] = useState(true)

  return (
    <div className="h-screen bg-bg-primary overflow-hidden flex flex-col">
      {/* Header */}
      <AppHeader />
      
      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <AppSidebar 
          activeMenu={activeMenu} 
          setActiveMenu={setActiveMenu}
          isPanelOpen={isPanelOpen}
          setIsPanelOpen={setIsPanelOpen}
        />
        
        {/* Component Panel */}
        {isPanelOpen && activeMenu === 'components' && (
          <ComponentPanel />
        )}
        
        {/* Canvas Area */}
        <AppCanvas />
        
        {/* Properties Panel */}
        <AppPropertiesPanel />
      </div>
    </div>
  )
}