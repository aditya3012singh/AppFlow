# Task

## Title
Implement User Authentication (Email/OTP, Google, GitHub)

## Description
Develop a secure authentication system supporting:
- Email/password sign up and login, with OTP (one-time password/email verification).
- Social login via Google and GitHub OAuth.
- Forgot/reset password and logout flows.
- Secure storage and management of auth tokens/sessions.
- Proper error handling and validation throughout.
- Future extensibility for additional social logins or SSO.

**Acceptance Criteria:**
- Working frontend and backend for all auth flows.
- Email verification via OTP on registration.
- Google and GitHub OAuth working and profile data stored.
- Forgot/reset password logic and UI implemented.
- Secure session/token storage (HTTPOnly cookies/JWT).
- All forms validated, with user-friendly error messages.
- Unit and integration tests for auth flows.

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 2: Set up CI/CD (Vercel/Netlify & GitHub Actions)
Task 3: Design Database Schema

## Deliverables
- Auth backend API (handlers/endpoints/middleware).
- Frontend UI for signup, login, forgot password, and social login.
- Integration with Google and GitHub OAuth.
- Secure token/session management.
- Test coverage for all paths.

## Estimated Effort
8 hours

## Assigned To
Adi

## Notes
- Use NextAuth.js, Auth0, or similar if available, otherwise use Passport.js or custom.
- Store passwords hashed (bcrypt).
- Environment variables for secrets/keys.
- Use a transactional email service (SendGrid, Resend) for OTP emails.

## Subtasks
- [ ] Set up user/auth tables in DB.
- [ ] Implement backend endpoints for:
    - Email/password signup/login
    - OTP email verification
    - Google OAuth
    - GitHub OAuth
    - Forgot/reset password
    - Logout
- [ ] Implement frontend UI for all flows.
- [ ] Integrate JWT or session cookies.
- [ ] Set up email sending for OTP.
- [ ] Validate forms and handle errors.
- [ ] Write unit/integration tests.