// src/components/DraggableItem.tsx
import React from 'react';
import type { ComponentType } from '../types/types';

type DraggableItemProps = {
  type: ComponentType;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, type: ComponentType) => void;
};

const DraggableItem: React.FC<DraggableItemProps> = ({ type, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      className="cursor-grab p-2 mb-2 bg-white border rounded shadow-sm hover:bg-gray-100"
    >
      {type}
    </div>
  );
};

export default DraggableItem;
