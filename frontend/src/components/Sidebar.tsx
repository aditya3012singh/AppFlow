import React from 'react';
import type{ ComponentType } from '../types/types';
import DraggableItem from './DraggableItem';

type SidebarProps = {
  onDragStart: (e: React.DragEvent<HTMLDivElement>, type: ComponentType) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onDragStart }) => {
  const components: ComponentType[] = ['Button', 'Card', 'Text'];

  return (
    <div className="w-1/4 p-4 border-r bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Components</h2>
      {components.map((type) => (
        <DraggableItem key={type} type={type} onDragStart={onDragStart} />
      ))}
    </div>
  );
};

export default Sidebar;
