import React from 'react';
import { useDroppable } from '@dnd-kit/core';

type CanvasProps = {
  children: React.ReactNode;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
};

const Canvas: React.FC<CanvasProps> = ({ children, onDrop }) => {
  const { setNodeRef } = useDroppable({ id: 'canvas' });

  return (
    <div
      ref={setNodeRef}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      className="flex-1 p-4 min-h-screen bg-white"
    >
      <h2 className="text-lg font-semibold mb-4">Canvas</h2>
      <div className="border border-dashed border-gray-400 p-4 min-h-[300px]">
        {children}
      </div>
    </div>
  );
};

export default Canvas;
