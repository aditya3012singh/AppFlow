# Task

## Title
Enforce Usage Limits and Gating (Freemium)

## Description
Implement logic to enforce export limits for free users (5 exports per month) and gate premium features (such as unlimited exports, theme/composable export, etc.). Show clear upgrade prompts when users hit a limit or try to access premium features. Track usage per user, reset limits monthly, and ensure backend enforcement (not just frontend). Integration with user plan management and UI feedback for limits/warnings is required.

**Acceptance Criteria:**
- Free users are limited to 5 exports per month (count resets automatically on the 1st of each month).
- Attempting to export beyond the limit shows an upgrade prompt/CTA.
- Premium features (e.g., exporting custom themes/composables) are gated with visible upgrade UI.
- Backend enforces all limits and gates (cannot be bypassed by API calls).
- Usage tracking is reliable and robust (per user, per month).
- Plan and usage status visible in user profile/account section.
- Email/notification sent on limit reached (optional/advanced).
- Unit and integration tests for gating/limit logic.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 4: Implement User Authentication (Email/OTP, Google, GitHub)  
Task 17: Implement Export & Code Generation (kt file, bundled zip)

## Deliverables
- Backend logic and DB fields for usage tracking and gating.
- Frontend UI for upgrade prompts and usage status.
- Tests for all limit/gating flows.
- Documentation for freemium model and gating.

## Estimated Effort
4 hours

## Assigned To
Adi

## Notes
- Store “exportsThisMonth” and “planType” in user DB.
- Use cron job or scheduled function for monthly reset.
- Show prominent upgrade CTA on hitting any gate.
- Prevent export API from being called if user is over limit.
- Plan for future: other gated features, advanced plans.

## Subtasks
- [ ] Add DB fields for tracking user exports and plan type.
- [ ] Implement backend enforcement and reset logic.
- [ ] Implement frontend upgrade CTA/warning for limits/gates.
- [ ] Integrate with profile/account management UI.
- [ ] Tests for backend and frontend gating.
- [ ] Document gating logic and upgrade flow.