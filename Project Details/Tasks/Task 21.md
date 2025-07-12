# Task

## Title
Add Templates Library & Asset Library

## Description
Curate and implement a library of pre-built screen templates and a reusable asset library (icons, images, vectors) for users. Allow users to browse, preview, and import templates/assets directly into their projects. Templates should be categorized (e.g., onboarding, login, dashboard) and assets tagged for easy search. Support drag-and-drop or one-click import into user projects. 

**Acceptance Criteria:**
- A library of screen templates, each with preview, name, and description.
- Assets library with icons, images, vectors, each with preview, tags, and license.
- Browsing, search, and filter capability for both templates and assets.
- Users can import templates/assets into their projects with one click or drag-and-drop.
- Imported templates/assets appear in the user’s project and are usable in the layout canvas.
- Proper licensing/attribution for third-party assets.
- Tests for browsing, searching, importing flows.
- Documentation for using the template and asset libraries.

## Type
Feature

## Status
Todo

## Priority
Medium

## Dependencies
Task 10: Implement Jetpack Compose Elements Palette  
Task 13: Integrate Asset Search Toolbar (Google Fonts, Icons, Stock Images, Lottie, Icon Packs)

## Deliverables
- Templates & assets data/config files.
- UI for browsing, previewing, and importing.
- Import logic into user projects.
- Tests for all flows.
- Documentation.

## Estimated Effort
7 hours

## Assigned To
Adi

## Notes
- Use a JSON/config for storing template/asset metadata.
- Assets should be stored in cloud storage (S3/GCS) with URLs.
- Plan for future: allow user-generated templates/assets.
- Show license/attribution where required.
- Add analytics for most used templates/assets.

## Subtasks
- [ ] Curate and document initial set of templates and assets.
- [ ] Build UI for library browsing, search, and preview.
- [ ] Implement import logic (drag-and-drop/one-click).
- [ ] Display license/attribution where required.
- [ ] Integrate with layout canvas/project state.
- [ ] Write unit/integration tests.
- [ ] Document usage and library structure.