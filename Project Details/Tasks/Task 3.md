# Task

## Title
Design Database Schema

## Description
Design a complete, scalable relational database schema for App Flow. Include all tables/entities needed for users, projects, screens, components/composables, assets (images, fonts, icons), themes, collaboration (invites/sharing), and export history/usage limits. Ensure it supports premium/free user features, access control, and can grow with new features (e.g., marketplace, version history).

**Acceptance Criteria:**
- ERD created using dbdiagram.io, draw.io, or similar.
- SQL schema or ORM model files for:
    - User (auth, profile, roles, plan, usage stats)
    - Project (name, owner, collaborators)
    - Screen (name, project, layout tree/structure)
    - Component/Composable (type, props, parent/child, screen linkage)
    - Asset (type, URL, metadata, owner)
    - Theme (preset/custom, colors, linked to project/screen)
    - Collaboration/Invite (project, user, role, status)
    - Export history (user, project, date, export type)
- All relationships (1:N, N:M) mapped, with foreign keys and indices.
- Table/field documentation for each entity.
- Future extensibility for features like versioning, templates, and marketplace.
- Schema reviewed and approved before implementation.

## Type
Feature

## Status
Done

## Priority
High

## Dependencies
Task 1: Set up Git repository and Monorepo Structure

## Deliverables
- Database ERD (PDF, PNG, or link).
- SQL schema or ORM model files.
- Table and field documentation.

## Estimated Effort
5 hours

## Assigned To
Adi

## Notes
- Use PostgreSQL as the primary target.
- Consider soft deletes and audit fields (`createdAt`, `updatedAt`, `deletedAt`).
- Plan for asset storage via external URLs (e.g., S3).
- Use UUIDs for primary keys.
- Document any decisions/assumptions.

## Subtasks
- [x] Identify all entities and their relationships.
- [x] Draft ERD diagram.
- [x] Write SQL or ORM models for each table/entity.
- [x] Define indices and foreign keys.
- [x] Document all tables/fields and relationships.
- [x] Review ERD and schema with stakeholders.