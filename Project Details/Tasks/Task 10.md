# Task

## Title
Implement Jetpack Compose Elements Palette

## Description
Build the palette of Jetpack Compose elements for the studio. Users should be able to select from layouts (Column, Row, Box, Scaffold, ConstraintLayout, etc.) and widgets (Text, Button, Image, Card, etc.), including Material 3 components. The palette should be searchable, well-categorized, and support drag-and-drop to the canvas.

**Acceptance Criteria:**
- Palette includes all core Compose layouts and widgets (see above).
- Material 3 components are included and clearly labeled.
- Elements are categorized (e.g., Layouts, Inputs, Navigation, Display, etc.).
- Palette is searchable and filterable.
- Supports drag-and-drop to canvas.
- Tooltips or short descriptions for each element.
- Tests for palette rendering, search/filter, and drag behavior.
- Palette extensible for custom components in future.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 9: Build Drag-and-Drop Layout Canvas

## Deliverables
- Palette UI and logic.
- Data/config for available elements.
- Drag-and-drop integration with canvas.
- Tests for palette functionality.

## Estimated Effort
10 hours

## Assigned To
Adi

## Notes
- Keep palette UX fast and keyboard-friendly.
- Use iconography and clear labels.
- Plan for localization of element names/descriptions.
- Keep palette decoupled from canvas for easy expansion.

## Subtasks
- [ ] List and categorize all Compose elements to support.
- [ ] Create data/config for palette.
- [ ] Build palette UI with search/filter.
- [ ] Implement drag-and-drop from palette to canvas.
- [ ] Add tooltips and descriptions.
- [ ] Write unit/integration tests.
- [ ] Document palette usage and API.