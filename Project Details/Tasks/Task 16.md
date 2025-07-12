# Task

## Title
Add Custom Made Composables Library

## Description
Provide a library of unique, high-quality, pre-built composables (UI building blocks) for users to browse and use in their layouts. Composables should be organized, previewable, and well-documented. Export/copy code capability must be gated: free users can use them visually but only premium users can export/copy code. Display a premium lock icon and upgrade prompt where applicable.

**Acceptance Criteria:**
- Library of custom-made composables, each with:
    - Thumbnail/preview
    - Name and description
    - Usage instructions/props (where relevant)
- Composables categorized for easy browsing (e.g., Cards, Charts, Complex Lists, Loaders, etc.).
- Users can drag/drop composables into their layout.
- Export/copy code is gated for premium users; show premium lock icon and upgrade CTA for free users.
- Gating enforced in both frontend UI and backend export logic.
- Tests for library UI, drag/drop, and gating.
- Documentation for each composable and how to access/upgrade.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 10: Implement Jetpack Compose Elements Palette

## Deliverables
- Custom composables library UI and backend.
- Premium gating logic for export/copy.
- Component documentation.
- Tests for all flows.

## Estimated Effort
8 hours

## Assigned To
Adi

## Notes
- Store composables as JSON/config and code templates.
- Plan for future: users to contribute their own composables.
- Use Material 3 for all composable previews.
- Track usage/analytics for popular composables.

## Subtasks
- [ ] Curate and document initial set of custom composables.
- [ ] Build library browser UI (categorize, search, preview).
- [ ] Implement drag/drop from library to canvas.
- [ ] Add premium gating logic and lock icon.
- [ ] Implement backend export/copy gating.
- [ ] Write unit/integration tests.
- [ ] Document all composables and upgrade logic.