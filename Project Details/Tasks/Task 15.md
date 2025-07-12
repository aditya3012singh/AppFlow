# Task

## Title
Implement Custom Themes Library & Theme Generator

## Description
Add a library of 1000+ custom-designed themes for Jetpack Compose and a theme generator that lets users create, preview, and export their own themes as `theme.kt` files. Gated: free users can use but not export/copy custom themes; export/copy is a premium feature. Theme generator should support color palette selection, typography, and Material 3 variables.

**Acceptance Criteria:**
- Theme library with 1000+ preset themes, browsable and previewable.
- Theme generator UI for custom palette, typography, and other Material 3 tokens.
- Live preview of themes on sample UI.
- Export/copy as `theme.kt` (for premium users only).
- Free users can use themes in the studio but not export/copy them.
- Secure and robust backend logic for export gating.
- Tests for theme library, generator, export, and gating logic.
- Documentation for theme features.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 8: Design UI Component Library (Material 3 Theme)

## Deliverables
- Theme library and generator UI.
- Export/copy backend logic with gating.
- Sample previews and documentation.
- Tests for all theme features.

## Estimated Effort
10 hours

## Assigned To
Adi

## Notes
- Use a config/JSON for theme presets.
- Use color pickers and typography selectors for generator.
- Display lock icons and upgrade prompts for gated features.
- Plan for import/export of user-generated themes.

## Subtasks
- [ ] Build theme library browser UI.
- [ ] Add theme preview and selection logic.
- [ ] Develop theme generator UI (color pickers, typography controls).
- [ ] Implement export/copy logic and gating (premium only).
- [ ] Backend for export and user plan check.
- [ ] Tests for all theme library/generator flows.
- [ ] Add documentation and sample code.