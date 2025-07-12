# Task

## Title
Version History (Undo/Redo/Revert)

## Description
Implement a robust version history system for projects/screens, supporting undo/redo actions and the ability to revert to previous versions. Store diffs or snapshots efficiently. UI should allow users to view history, preview previous states, and revert if needed. Ensure performance and minimal storage impact.

**Acceptance Criteria:**
- Undo/redo support for all key actions in canvas/editor.
- Project/screen version history view, with timestamped entries.
- Users can preview and revert to a previous version.
- Efficient storage of history (diff-based or snapshot, as appropriate).
- UI feedback for undo/redo/history.
- Tests for history, undo, redo, and revert.
- Documentation for how history works.

## Type
Feature

## Status
Todo

## Priority
Medium

## Dependencies
Task 9: Build Drag-and-Drop Layout Canvas

## Deliverables
- Backend version history storage logic.
- Frontend UI for undo/redo and history view.
- Integration with canvas/editor state.
- Tests for undo/redo/history flows.
- Documentation for users.

## Estimated Effort
8 hours

## Assigned To
Adi

## Notes
- Use efficient storage (e.g., JSON patch/diff) to minimize DB size.
- Consider max history depth per user/plan.
- Add confirmation for revert actions.
- Integrate with undo/redo stack in canvas logic.

## Subtasks
- [ ] Design backend schema for version history.
- [ ] Implement backend logic for saving diffs/snapshots.
- [ ] Build frontend undo/redo/history UI.
- [ ] Implement preview/revert logic.
- [ ] Add user feedback (e.g., toasts, modals).
- [ ] Write unit/integration tests.
- [ ] Document version history.