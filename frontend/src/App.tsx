import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import type { DroppedElement, ComponentType } from './types/types';

const App: React.FC = () => {
  const [elements, setElements] = useState<DroppedElement[]>([]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    type: ComponentType
  ) => {
    e.dataTransfer.setData('componentType', type);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const type = e.dataTransfer.getData('componentType') as ComponentType;
    const newElement: DroppedElement = { id: Date.now(), type };
    setElements((prev) => [...prev, newElement]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onDragStart={handleDragStart} />
      <Canvas onDrop={handleDrop}>
        {elements.map((el) => (
          <div
            key={el.id}
            className="p-2 m-2 border rounded bg-blue-100 text-blue-800"
          >
            {el.type}
          </div>
        ))}
      </Canvas>
    </div>
  );
};

export default App;
