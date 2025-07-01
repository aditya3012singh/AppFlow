// src/types.ts
export type ComponentType = 'Button' | 'Card' | 'Text';

export type DroppedElement = {
  id: number;
  type: ComponentType;
};
