# Task

## Title
Implement App Studio Protected Route

## Description
Create a protected route in the web application that restricts access to the main layout designer ("App Studio") to logged-in users only. Ensure that unauthenticated users are redirected to the login/signup page. If possible, show a loading state during auth checks and support redirecting users back to their intended page post-login.

**Acceptance Criteria:**
- `/studio` (or equivalent) route is only accessible to authenticated users.
- Unauthenticated users are redirected to login/signup.
- Show loading spinner/state while auth status is being determined.
- After successful login, users are redirected back to their original intended page.
- Add tests for access control and redirect logic.
- Ensure no sensitive data is loaded/exposed until user is authenticated.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 4: Implement User Authentication (Email/OTP, Google, GitHub)

## Deliverables
- Protected route logic in frontend.
- Redirect logic for unauthenticated users.
- Loading state component.
- Tests for protected route.

## Estimated Effort
3 hours

## Assigned To
Adi

## Notes
- Use Next.js middleware or route guards as appropriate.
- Store intended route in local/session storage for post-login redirect.
- Make sure any server-rendered data is protected (SSR).
- Document protected route logic for future devs.

## Subtasks
- [ ] Plan and implement route guard/middleware.
- [ ] Add loading state UI.
- [ ] Implement redirect for unauthenticated users.
- [ ] Add post-login redirect to original page.
- [ ] Write tests for protected route logic.
- [ ] Update documentation for protected routes.