# Task

## Title
Integrate Asset Search Toolbar (Google Fonts, Icons, Stock Images, Lottie, Icon Packs)

## Description
Implement a left-side toolbar that lets users search and add assets directly to their project: Google Fonts, Material Icons, Unsplash/Pexels images, Lottie animations, and free icon packs. The toolbar should provide live search, preview (thumbnail or animation), and allow one-click insertion into the layout/canvas.

**Acceptance Criteria:**
- Toolbar with tabs or filter for each asset type (Fonts, Icons, Images, Lottie, Icon Packs).
- Integrated search for each provider (API or local).
- Previews for all assets before adding (font sample, icon, image thumbnail, Lottie animation preview).
- One-click insert of asset into currently selected screen/composable.
- Handle API errors, loading states, and empty results.
- Tests for search, preview, and insertion logic.
- Document usage and provider/API limits.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 12: Implement Device and Orientation Preview

## Deliverables
- Asset search toolbar UI and logic.
- Provider integration code (Google Fonts, Icons, Unsplash/Pexels, Lottie).
- Tests for toolbar and provider integrations.
- Documentation for supported assets and usage.

## Estimated Effort
10 hours

## Assigned To
Adi

## Notes
- Cache search results where possible for better performance.
- Consider rate limits and API keys/secrets for providers.
- Use Material 3 design for toolbar and modals.
- Plan for extensibility (add new asset providers in future).

## Subtasks
- [ ] Design toolbar and tab/filter UI.
- [ ] Integrate Google Fonts search and preview.
- [ ] Integrate Material Icons search and preview.
- [ ] Integrate Unsplash/Pexels image search and preview.
- [ ] Integrate Lottie Files search and preview.
- [ ] Integrate icon pack search and preview.
- [ ] Implement asset insertion logic.
- [ ] Handle loading, error, and empty states.
- [ ] Write unit/integration tests.
- [ ] Document asset usage and APIs.