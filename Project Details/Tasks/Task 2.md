# Task

## Title
Set up CI/CD (Vercel/Netlify & GitHub Actions)

## Description
Configure continuous integration and deployment for both frontend and backend. Use Vercel or Netlify for automatic deployments and GitHub Actions for linting, type-checking, building, and running tests on all pushes and PRs. Ensure environment variable management is secure and document the process clearly.

**Acceptance Criteria:**
- Repo connected to Vercel or Netlify for both `/apps/web` and `/apps/backend`.
- Automatic deployments triggered on main branch push and PRs.
- GitHub Actions workflows for:
    - Linting (ESLint, Prettier)
    - Type checking (TypeScript)
    - Running unit/integration tests (Jest/React Testing Library, or backend equivalent)
    - Building web and backend
    - (Optional) Deploy preview for PRs
- `.env.example` present for both frontend and backend, with documentation.
- Environment variables managed in Vercel/Netlify dashboard (never committed).
- CI/CD status badges in `README.md`.
- Documented troubleshooting steps and commands in `README.md`.
- Both web and backend can deploy and serve a basic “Hello World” page.

## Type
Setup

## Status
Todo

## Priority
High

## Dependencies
Task 1: Set up Git repository and Monorepo Structure

## Deliverables
- Working CI/CD pipelines (GitHub Actions YAML, Vercel/Netlify config).
- `.env.example` files for apps.
- Updated `README.md` with CI/CD and deployment instructions.
- Status badge in README.

## Estimated Effort
2 hours

## Assigned To
Adi

## Notes
- Use official Next.js and Node.js workflows as a base.
- Set up caching for dependencies if using Turborepo/Nx.
- Use secrets for API keys and sensitive variables.
- Add branch protection for main branch if appropriate.

## Subtasks
- [ ] Link repo to Vercel/Netlify, configure both apps for deployment.
- [ ] Add and configure environment variables in Vercel/Netlify dashboard.
- [ ] Add `.env.example` for frontend and backend, with clear comments.
- [ ] Write GitHub Actions workflows for:
    - Lint (ESLint, Prettier)
    - Type check (TypeScript)
    - Test (Jest, etc.)
    - Build frontend/backend
- [ ] Test workflows by pushing to a test branch.
- [ ] Add CI/CD status badges to `README.md`.
- [ ] Document the CI/CD pipelines and troubleshooting in `README.md`.