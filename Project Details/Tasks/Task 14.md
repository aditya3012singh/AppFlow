# Task

## Title
Support Asset Import (SVG, PNG, JPG, etc.)

## Description
Enable users to import and use their own images and SVGs in their layouts from local files. Handle file upload, preview, and storage in cloud storage. Allow users to add imported assets to any screen or composable. Ensure safe upload (file type/size validation), and show error/loading states as needed.

**Acceptance Criteria:**
- Users can upload images (SVG, PNG, JPG, etc.) via UI.
- File type and size validated on upload.
- Upload progress and error handling visible to user.
- Uploaded assets stored in cloud storage (e.g., S3/GCS).
- Uploaded assets available in asset browser and can be inserted into layout.
- Thumbnail/preview generated for each uploaded asset.
- Backend endpoints for upload and asset management.
- Tests for upload, preview, and insertion.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 13: Integrate Asset Search Toolbar (Google Fonts, Icons, Stock Images, Lottie, Icon Packs)

## Deliverables
- Frontend upload/import UI.
- Backend endpoints and cloud storage integration.
- Asset browser and insertion logic.
- Tests for upload and asset handling.

## Estimated Effort
5 hours

## Assigned To
Adi

## Notes
- Use signed URLs or direct upload to cloud storage for security.
- Store asset metadata (type, size, user, upload date) in DB.
- Limit file size per user plan.
- Plan for future video/audio asset types.

## Subtasks
- [ ] Build upload/import UI component.
- [ ] Implement file type/size validation logic.
- [ ] Integrate with cloud storage (S3/GCS).
- [ ] Save asset metadata in DB.
- [ ] Generate and display asset previews/thumbnails.
- [ ] Add uploaded assets to asset browser.
- [ ] Implement insertion logic into layout.
- [ ] Write unit/integration tests.
- [ ] Document upload/import process.