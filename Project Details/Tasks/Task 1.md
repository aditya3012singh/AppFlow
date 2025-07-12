# Task

## Title
Set up Git repository and Monorepo Structure

## Description
Initialize a new Git repository for App Flow. Establish a monorepo structure to support both the Next.js frontend (web studio/marketing site) and the backend (Node.js/Serverless), and prepare for scalable team collaboration and cloud deployment.

**Acceptance Criteria:**
- New GitHub repository created (public or private as required).
- Monorepo folder structure created:
    - `/apps/web`: Next.js frontend (studio + marketing)
    - `/apps/backend`: Node.js/Express or Serverless backend API
    - `/packages/shared`: (optional) Shared code/libraries
    - Root workspace configuration for pnpm/yarn/npm, matching monorepo tool
- Essential project files are present:
    - `README.md` with project overview and structure documentation.
    - `LICENSE` (MIT by default, or as decided).
    - `.gitignore` (covers Node, Next.js, backend, OS-specific files).
    - `.editorconfig` for consistent code formatting.
    - `CODEOWNERS` (if team or open-source).
    - Vercel/Netlify config files (`vercel.json`, `netlify.toml`) if needed.
- First commit pushed to the remote repository.
- Root and app-level folders ready for independent setup (e.g., `package.json` or equivalent in each).
- Instructions for installing dependencies and running each app in the `README.md`.

## Type
Setup

## Status
Done

## Priority
High

## Dependencies
None

## Deliverables
- Initial commit on main branch.
- Monorepo directory structure present and documented.
- All base files in place (`README.md`, `.gitignore`, `LICENSE`, etc.).

## Estimated Effort
2 hours

## Assigned To
Adi

## Notes
- Use Vercel or Netlify starter template for Next.js if possible.
- Choose and initialize pnpm/yarn/npm workspaces or a monorepo manager (e.g., Turborepo, Nx) based on preference.
- Clearly comment the repo and folder structure in `README.md`.
- Set up main, develop, and feature branch conventions in `README.md`.
- If using Turborepo or Nx, add their config files at root.
- Add placeholder files (e.g., `index.tsx`, `index.js`) to ensure folders are tracked by Git.

## Subtasks
- [ ] Create new GitHub repository (choose public/private).
- [ ] Clone repository locally.
- [ ] Initialize monorepo tool (Turborepo, Nx, or pnpm/yarn workspaces).
- [ ] Set up folder structure:
    - `/apps/web` for Next.js frontend
    - `/apps/backend` for backend API
    - `/packages/shared` for shared code (optional)
- [ ] Add and fill out `README.md` with structure and setup instructions.
- [ ] Add `.gitignore` (Node, Next.js, backend, OS files).
- [ ] Add `LICENSE` file (MIT or as decided).
- [ ] Add `.editorconfig`.
- [ ] Add `CODEOWNERS` file (if needed).
- [ ] Add initial Vercel/Netlify configuration files.
- [ ] Add placeholder files to ensure folders are tracked.
- [ ] Commit and push all files to the remote repository (main branch).
- [ ] Document structure, commands, and next steps in README.