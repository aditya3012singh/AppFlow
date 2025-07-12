# Task

## Title
Set up User Profile and Account Management

## Description
Build the user profile and account management section for App Flow, allowing users to view and update their account details, manage subscription plan, check usage statistics, and perform sensitive actions (change password/email, delete account). The UI should be accessible from the app's main navigation and should only be accessible to authenticated users.

**Acceptance Criteria:**
- Profile page displays user info: name, email, avatar (if available), and plan status.
- Users can:
    - Edit name and avatar.
    - Change email address (with verification).
    - Change password (with current password verification).
    - Delete account (with confirmation/irreversible warning).
- Show current plan (free/premium), usage stats (e.g., exports remaining), and upgrade/renew options.
- Usage stats reflect backend data (e.g., number of exports this month).
- UI should be clean, responsive, and follow Material 3.
- Proper error/success handling and field validation.
- All sensitive actions require confirmation, and some require password re-entry.
- Backend endpoints for all account actions.
- Tests for all flows.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 4: Implement User Authentication (Email/OTP, Google, GitHub)

## Deliverables
- Frontend profile/account management pages.
- Backend endpoints for update/delete actions.
- Tests for frontend and backend logic.
- Documentation for using/changing profile features.

## Estimated Effort
5 hours

## Assigned To
Adi

## Notes
- Avatar upload can use a third-party service or basic upload.
- Email changes should always require re-verification.
- Use modals for confirmation (delete, password change).
- Show plan/usage stats in real-time if possible.
- Use backend to enforce security (e.g., no update without auth).
- Document profile/account endpoints for API docs.

## Subtasks
- [ ] Design profile/account page UI (Material 3).
- [ ] Build frontend for displaying and editing profile info.
- [ ] Implement backend endpoints for update and delete actions.
- [ ] Add password and email change flows (with confirmation).
- [ ] Add plan management and usage stats sections.
- [ ] Add delete account (with confirmation).
- [ ] Integrate avatar upload.
- [ ] Validate all forms and handle errors/success.
- [ ] Write unit/integration tests.
- [ ] Add documentation for profile/account management.