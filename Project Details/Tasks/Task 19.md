# Task

## Title
Implement Collaboration (Sharing/View-Only - v1)

## Description
Enable project sharing and inviting teammates for view/copy-only access (no editing in v1). Users can invite others via email, manage access, and revoke invites. Shared users can browse and copy layouts/composables but cannot modify or export if not allowed by their plan. Access control enforced on backend and frontend.

**Acceptance Criteria:**
- UI for inviting teammates via email and managing invites.
- Invited users can view/copy project but not edit.
- Owner can revoke access or resend invites.
- Access control enforced for all protected actions.
- Notification/email for invitations.
- Tests for invite, access, and revoke flows.
- Documentation for sharing/collaboration usage.

## Type
Feature

## Status
Todo

## Priority
Medium

## Dependencies
Task 7: Implement App Studio Protected Route

## Deliverables
- Frontend collaboration/invite UI.
- Backend access control logic and invite management.
- Email notification system.
- Tests for all flows.
- Docs for users.

## Estimated Effort
7 hours

## Assigned To
Adi

## Notes
- Use unique invite links with expiration.
- Support for multiple viewers per project.
- Advance: log view activity for analytics.
- Plan for future real-time collab.

## Subtasks
- [ ] Build invite/manage UI in project page.
- [ ] Backend endpoints for invite, accept, revoke.
- [ ] Email notification logic.
- [ ] Access control middleware for protected actions.
- [ ] UI for shared user view/copy mode.
- [ ] Write unit/integration tests.
- [ ] Document sharing/collab features.