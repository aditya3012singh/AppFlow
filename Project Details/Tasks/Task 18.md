# Task

## Title
Implement Export & Code Generation (kt file, bundled zip)

## Description
Allow users to export their designed screens as production-ready Jetpack Compose code. Export should include all relevant files (screens, assets, themes) bundled as a zip. Additionally, support copy-to-clipboard for code snippets. For free users, enforce export limits (e.g., 5 files/month) and implement gating. The export process must handle dependency imports and generate clean, readable, and idiomatic Kotlin/Compose code.

**Acceptance Criteria:**
- Full screen export as `.kt` files with correct structure and imports.
- All assets (images, SVGs, fonts, etc.) and themes included in export bundle (zip).
- Copy-to-clipboard for current screen’s code.
- Export/copy gating and limits enforced for free users (premium unlocks unlimited).
- UI feedback for export completion, errors, and limits.
- Backend logic for generating and bundling files.
- Tests for code generation, export zip, and gating.
- Documentation for export process and file structure.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 11: Add Property and Modifier Editing Panel  
Task 15: Implement Custom Themes Library & Theme Generator  
Task 16: Add Custom Made Composables Library

## Deliverables
- Export and code generation backend logic.
- Frontend export/copy UI.
- Gating/limit logic for free/premium users.
- Tests for export and code generation.
- Documentation.

## Estimated Effort
10 hours

## Assigned To
Adi

## Notes
- Use a template engine for code generation (e.g., mustache/handlebars for Kotlin).
- Ensure all dependencies/imports are included.
- Generate README inside export zip.
- Track export usage per user for freemium gating.

## Subtasks
- [ ] Implement code generator for Jetpack Compose (.kt files).
- [ ] Build logic for bundling assets/themes/screens into zip.
- [ ] Add copy-to-clipboard for code snippets.
- [ ] Integrate gating/export limits for free users.
- [ ] UI feedback for export status and errors.
- [ ] Write unit/integration tests.
- [ ] Document export structure and process.