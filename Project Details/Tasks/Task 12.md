# Task

## Title
Implement Device and Orientation Preview

## Description
Enable users to preview their layouts on various Android devices, screen sizes, and orientations. The preview should accurately reflect how the UI will look on common devices (Pixel, Samsung, tablets, foldables) and in both portrait and landscape. Users can switch devices/orientations instantly, and the preview panel must update accordingly.

**Acceptance Criteria:**
- Device preview panel supports multiple Android devices (Pixel, Samsung, tablets, foldables).
- Supports orientation toggle (portrait/landscape).
- Accurate scaling and safe area insets for each device.
- Quick device/orientation switcher UI.
- Preview updates instantly when a new device/orientation is selected.
- Add custom device support (advanced/future).
- Tests for rendering and correct preview logic.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 11: Add Property and Modifier Editing Panel

## Deliverables
- Device/Orientation preview panel.
- Device presets and scaling logic.
- Tests for preview logic/UI.
- Documentation for using device preview.

## Estimated Effort
6 hours

## Assigned To
Adi

## Notes
- Use official device specs for preset dimensions/insets.
- Plan for expanding the device list in the future.
- Consider simulating safe area cutouts/notches if possible.
- Should be performant and not slow down canvas.

## Subtasks
- [ ] Gather device specs (dimensions, insets) for key Android devices.
- [ ] Design and implement device/orientation switcher UI.
- [ ] Implement scaling and orientation logic for preview.
- [ ] Ensure accurate safe area simulation.
- [ ] Test for correct rendering on all presets.
- [ ] Document usage and add help/tooltips.