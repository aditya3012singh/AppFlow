# Task

## Title
Analytics and Error Tracking

## Description
Set up analytics (e.g., Plausible, Amplitude, GA) and error tracking for both frontend (web) and backend. Track feature usage, user actions, exports, conversion funnel, and errors/exceptions. Ensure privacy/GDPR compliance and document all custom events/metrics for future analysis.

**Acceptance Criteria:**
- Analytics SDK integrated in frontend (web) and backend.
- Track key events: sign up, login, export, import, feature usage, conversion, etc.
- Error tracking SDK (e.g., Sentry) integrated for both web and backend.
- Custom events/metrics documented and tested.
- Privacy and GDPR compliance (opt-out, anonymization).
- Dashboard(s) for team to view analytics and errors.
- Tests for event tracking and error logging.

## Type
Setup

## Status
Todo

## Priority
High

## Dependencies
Task 1: Set up Git repository and Monorepo Structure  
Task 2: Set up CI/CD (Vercel/Netlify & GitHub Actions)

## Deliverables
- Analytics and error tracking integrated in code.
- Dashboards configured.
- Documentation for all events/metrics.
- Tests for tracking.

## Estimated Effort
4 hours

## Assigned To
Adi

## Notes
- Use environment variables for API keys.
- Avoid tracking sensitive data.
- Add opt-out for privacy.
- Use dashboards for ongoing monitoring.

## Subtasks
- [ ] Integrate analytics SDK (Plausible/Amplitude/GA) in frontend and backend.
- [ ] Integrate error tracking SDK (Sentry, etc.).
- [ ] Track key user events and feature usage.
- [ ] Configure dashboards.
- [ ] Ensure GDPR/privacy compliance.
- [ ] Write unit/integration tests.
- [ ] Document all events/metrics.