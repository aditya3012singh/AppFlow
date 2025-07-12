# Task

## Title
Add Inline Documentation Links

## Description
Provide inline documentation and best practices directly in the App Studio editor. Add context-aware links, tooltips, and info modals for Jetpack Compose components, properties, and design best practices. Support linking to official Compose docs and custom guides/tutorials. Make these resources easily accessible without leaving the app.

**Acceptance Criteria:**
- Contextual help tooltips/info icons for all major components and properties.
- Links out to official Jetpack Compose docs and custom guides.
- Inline “best practice” tips for common design issues.
- Modal or sidebar for viewing documentation in-app.
- Configurable/helpful without being intrusive.
- Tests for link logic and help UI.
- Documentation for adding new docs/help items.

## Type
Feature

## Status
Todo

## Priority
Low

## Dependencies
Task 10: Implement Jetpack Compose Elements Palette

## Deliverables
- Inline documentation/help logic and UI.
- Links to external and internal docs.
- Tests for help features.
- Documentation for extending help system.

## Estimated Effort
5 hours

## Assigned To
Adi

## Notes
- Use a config/JSON to map components to doc links.
- Plan for localization.
- Make help easily dismissible.
- Add analytics for most used/helpful docs.

## Subtasks
- [ ] Map components/properties to documentation links.
- [ ] Implement tooltips/info icons in UI.
- [ ] Build modal/sidebar for in-app viewing.
- [ ] Add inline best practice tips.
- [ ] Write unit/integration tests.
- [ ] Document help/doc system for devs.