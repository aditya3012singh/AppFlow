# Task

## Title
Develop Marketing Website (Landing, Features, Pricing, Blog, Docs, About, Contact)

## Description
Build a fully responsive, SEO-optimized marketing website for App Flow, including all required pages: landing, features, pricing, blog (with MDX support), documentation/help, about, and contact. Ensure fast loading, accessibility, and modern Material 3-inspired design. Integrate analytics and a working contact form.

**Acceptance Criteria:**
- All major pages implemented:
    - Landing
    - Features
    - Pricing
    - Blog (MDX/markdown posts)
    - Docs/Help
    - About
    - Contact (with working form)
- Responsive layout for mobile, tablet, desktop.
- Navigation and footer consistent and accessible.
- Analytics (Plausible or GA) integrated.
- SEO meta tags, sitemap, and robots.txt present.
- Contact form sends email or posts to webhook.
- Blog/docs support code highlighting and images.
- Accessibility checks pass (WCAG 2.1).

## Type
Feature

## Status
Todo

## Priority
High

## Dependencies
Task 1: Set up Git repository and Monorepo Structure

## Deliverables
- Marketing site code under `/apps/web`.
- All page routes and components.
- Blog/docs with MDX/markdown support.
- Analytics integration.
- SEO and accessibility features.
- Contact form backend and/or third-party integration.

## Estimated Effort
10 hours

## Assigned To
Adi

## Notes
- Use Next.js App Router for routing and static generation.
- Use Material 3 design system for components.
- Use a CMS or MDX for blog/docs if needed.
- Add OpenGraph/Twitter meta tags for better sharing.
- Use Formspree, Resend, or similar for contact form backend.

## Subtasks
- [ ] Set up routing and navigation components.
- [ ] Build landing, features, pricing, about, and contact pages.
- [ ] Implement blog with MDX/markdown support.
- [ ] Integrate documentation/help section.
- [ ] Add analytics (Plausible or GA).
- [ ] Configure SEO (meta tags, sitemap, robots.txt).
- [ ] Build and connect contact form logic.
- [ ] Test responsiveness and accessibility.