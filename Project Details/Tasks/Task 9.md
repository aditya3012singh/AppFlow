# Task

## Title
Build Drag-and-Drop Layout Canvas

## Description
Create the main drag-and-drop layout canvas for the App Studio. This canvas should allow users to add, move, and arrange UI elements from a palette onto the design surface. Features include snap-to-guides, alignment, padding/margin adjustment, multi-screen/tabs support, and undo/redo. Support for responsive and pixel-perfect design preview.

**Acceptance Criteria:**
- Users can drag UI elements from a palette to the canvas.
- Elements can be moved, resized, nested, and deleted.
- Snap-to-guides and smart alignment implemented.
- Padding, margin, and properties adjustable via context or side panel.
- Multi-screen/tabs support (switch between screens, add/remove screens).
- Undo/redo functionality.
- Canvas supports responsive and pixel-perfect preview.
- State persists between sessions (local storage or backend).
- Tests for drag-and-drop, undo/redo, and layout logic.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 8: Design UI Component Library (Material 3 Theme)

## Deliverables
- Drag-and-drop canvas component.
- Palette of draggable elements.
- Layout state management logic.
- Undo/redo and multi-screen support.
- Tests for all critical canvas interactions.

## Estimated Effort
20 hours

## Assigned To
Adi

## Notes
- Consider using a library (e.g., react-dnd) for drag-and-drop, or custom if more control is needed.
- Use CSS grid/flex for layout, but ensure code generation compatibility.
- Make canvas modular for future enhancements (e.g., constraint layout).
- Store layout state efficiently.

## Subtasks
- [ ] Design and implement drag-and-drop canvas.
- [ ] Create palette of draggable elements.
- [ ] Implement snap-to-guides and alignment.
- [ ] Add property/context panel for selected elements.
- [ ] Support multi-screen/tabs and screen switching.
- [ ] Implement undo/redo logic.
- [ ] Persist layout state between sessions.
- [ ] Write unit/integration tests.
- [ ] Document usage and API.