# App Flow — Entity Reference

This document lists all core entities for App Flow, including a description, all fields/parameters, relationships, and notes where relevant.  
**Format:**  
- Description  
- Fields  
- Relationships  
- Notes (if any)

---

## 1. User

**Description:**  
Represents an individual user account, including login, identity, and profile info. Drives authentication, personalization, and access control for all features.

**Fields:**
- `id`: Unique identifier (UUID)
- `email`: Email address
- `username`: Display username (unique)
- `displayName`: Full name or preferred display name
- `avatarUrl`: Profile image URL
- `passwordHash`: (if not OAuth) Hashed password
- `role`: User role (e.g., user, admin)
- `provider`: "email", "google", "github", etc.
- `status`: "active", "suspended", "deleted"
- `createdAt`: Timestamp of creation
- `updatedAt`: Last updated timestamp
- `lastLoginAt`: Last login timestamp
- `deletedAt`: Deletion timestamp (if soft delete)
- `planId`: Reference to Plan/Subscription
- `organizationIds`: Array of org/team IDs (if in teams)

**Relationships:**
- Can belong to multiple Organizations/Teams
- Has one Plan/Subscription (personal)
- Owns Projects, Templates, Themes, etc.
- Can be member/invited to Projects, Comments, etc.

---

## 2. Organization / Team

**Description:**  
Represents a team or organization for group collaboration, shared billing, and resource ownership.

**Fields:**
- `id`: Unique identifier (UUID)
- `name`: Organization/team name
- `slug`: URL-friendly name (for subdomain/links)
- `ownerId`: User ID of org/team owner
- `billingEmail`: Email for billing/receipts
- `planType`: "free" | "team" | "enterprise", etc.
- `createdAt`: Timestamp created
- `updatedAt`: Last updated
- `deletedAt`: (optional) Soft delete timestamp

**Relationships:**
- Has many OrganizationMembers
- Can own Projects, Templates, Assets, etc.
- Has one Plan/Subscription

**Notes:**
- Prepares for team billing, org-level permissions, and role-based access.

---

## 2a. OrganizationMember

**Description:**  
Links a user to an org/team with a specific role.

**Fields:**
- `id`: UUID
- `organizationId`: Reference to Organization
- `userId`: Reference to User
- `role`: "owner" | "admin" | "editor" | "viewer"
- `invitedById`: (optional) Who invited
- `status`: "active" | "invited" | "removed"
- `joinedAt`: Timestamp

**Relationships:**
- Belongs to one Organization, one User

---

## 3. Project

**Description:**  
A top-level design workspace containing screens, components, assets, and collaborators.

**Fields:**
- `id`: UUID
- `name`: Project name
- `slug`: URL-friendly name
- `description`: Project summary
- `ownerId`: User or Organization ID
- `isPublic`: Boolean (public/private)
- `createdAt`: Timestamp created
- `updatedAt`: Last updated
- `deletedAt`: (optional) Soft delete timestamp
- `themeId`: (optional) Reference to Theme
- `templateId`: (optional) Reference to Template
- `collaborators`: Array of User IDs or Invite objects

**Relationships:**
- Owned by User or Organization
- Has many Screens, Components, Assets, and Invites/Collaborators

---

## 4. Screen

**Description:**  
Represents a single app screen/layout within a project.

**Fields:**
- `id`: UUID
- `projectId`: Reference to Project
- `name`: Screen name
- `order`: Number (for ordering/screens)
- `createdAt`: Timestamp created
- `updatedAt`: Last updated
- `deletedAt`: (optional) Soft delete timestamp

**Relationships:**
- Belongs to a Project
- Has many Components

---

## 5. Component

**Description:**  
A UI element (Compose composable), reusable or unique, placed on a screen or global to a project.

**Fields:**
- `id`: UUID
- `projectId`: Reference to Project
- `screenId`: Reference to Screen (optional, for local components)
- `name`: Component name
- `type`: E.g., "Button", "CustomComposable"
- `properties`: JSON (all editable parameters)
- `modifiers`: JSON (Jetpack Compose modifiers)
- `children`: Array of Component IDs (for hierarchies)
- `order`: Number (for container children)
- `createdAt`: Timestamp created
- `updatedAt`: Last updated
- `deletedAt`: (optional) Soft delete timestamp

**Relationships:**
- Belongs to Project, optionally a Screen
- Can have children (hierarchy)

---

## 6. Asset

**Description:**  
Represents fonts, images, icons, or other files used in projects (uploaded or imported from sources).

**Fields:**
- `id`: UUID
- `projectId`: Reference to Project
- `type`: "image", "svg", "font", "lottie", "icon"
- `name`: Asset name
- `source`: "uploaded", "google_fonts", etc.
- `url`: Storage location (cloud, CDN, etc.)
- `metadata`: JSON (dimensions, font family, etc.)
- `createdAt`: Timestamp created
- `updatedAt`: Last updated
- `deletedAt`: (optional) Soft delete timestamp

**Relationships:**
- Belongs to Project
- Used by Components or Themes

---

## 7. Theme

**Description:**  
A set of colors, typography, and shape tokens for consistent project styling. Can be public in the marketplace.

**Fields:**
- `id`: UUID
- `projectId`: Reference to Project (optional)
- `name`: Theme name
- `description`: Theme summary
- `colors`: JSON (palette)
- `typography`: JSON (font settings)
- `shapes`: JSON (shape settings)
- `isPublic`: Boolean
- `authorId`: User/Org ID
- `createdAt`: Timestamp created
- `updatedAt`: Last updated
- `deletedAt`: (optional) Soft delete timestamp

**Relationships:**
- Can be used by multiple Projects or Templates
- Can be listed in Marketplace

---

## 8. Template

**Description:**  
Reusable design setup: screens, components, assets, and theme. Can be public or private.

**Fields:**
- `id`: UUID
- `name`: Template name
- `description`: Template summary
- `previewImageUrl`: Screenshot or preview
- `screens`: Array of Screen IDs or JSON definition
- `components`: Array of Component IDs or JSON
- `assets`: Array of Asset IDs or JSON
- `themeId`: Reference to Theme (optional)
- `authorId`: User/Org ID
- `isPublic`: Boolean
- `tags`: Array of categories
- `downloads`: Number of times used/imported
- `likes`: Number of upvotes
- `createdAt`: Timestamp created
- `updatedAt`: Last updated
- `deletedAt`: (optional) Soft delete timestamp

**Relationships:**
- Can be listed in Marketplace
- Can be used to create Projects

---

## 9. Collaboration / Invite

**Description:**  
Enables sharing a project with others for view/copy (in v1). Tracks invitations and access.

**Fields:**
- `id`: UUID
- `projectId`: Project being shared
- `invitedUserId`: User ID (if registered)
- `email`: Email (for unregistered)
- `invitedById`: User who invited
- `role`: "viewer" (MVP) | "editor" (future)
- `status`: "pending", "accepted", "declined", "expired"
- `token`: Invite link token
- `createdAt`: Timestamp created
- `respondedAt`: (optional) Timestamp responded

**Relationships:**
- Links Project to invited Users

**Notes:**
- Extendable for granular roles in future

---

## 10. Version History

**Description:**  
Tracks changes for undo/redo and persistent versioning. Supports granular ephemeral (in-memory) history and durable saved versions.

### 10a. EphemeralHistoryStep (In-Memory/Session)

**Fields:**
- `id`: String (UUID or incremental)
- `timestamp`: Number (ms since epoch)
- `userId`: User making change
- `actionType`: "move", "editProperty", etc.
- `targetType`: "project", "screen", "component"
- `targetId`: Target entity ID
- `payload`: Change/diff object
- `previousState`: (optional) For undo
- `nextState`: (optional) For redo

### 10b. EphemeralHistoryStack

**Fields:**
- `undoStack`: Array of EphemeralHistoryStep
- `redoStack`: Array of EphemeralHistoryStep

**Relationships:**
- Per active session/project (not persisted)

### 10c. PersistentVersion (Database)

**Fields:**
- `id`: UUID
- `projectId`: Project
- `screenId`: (optional) Screen
- `componentId`: (optional) Component
- `createdById`: User who saved
- `versionNumber`: Sequential integer
- `changeType`: "commit", "checkpoint", "auto"
- `message`: (optional) Commit message
- `snapshot`: Full/diff JSON
- `createdAt`: Timestamp

**Relationships:**
- Belongs to Project, Screen, or Component

---

## 11. Marketplace / Community Listing

**Description:**  
Public sharing/discovery layer for templates, themes, components, assets. Enables likes, downloads, moderation, and curation.

**Fields:**
- `id`: UUID
- `entityType`: "template", "theme", "component", "asset"
- `entityId`: Reference to shared entity
- `authorId`: User/Org ID
- `isPublic`: Boolean
- `isFeatured`: Boolean (curated)
- `title`: Listing name
- `description`: Listing summary
- `tags`: Array of tags
- `previewImageUrl`: Screenshot/preview
- `downloads`: Number of downloads/imports
- `likes`: Number of likes/upvotes
- `ratings`: (optional) Aggregate rating
- `commentsCount`: (optional) Comment count
- `status`: "active", "pending", "removed", "flagged"
- `reportsCount`: Number of reports (moderation)
- `createdAt`: Timestamp created
- `updatedAt`: Last updated
- `deletedAt`: (optional) Soft delete timestamp

**Relationships:**
- Linked to shared entity (template, theme, etc.)
- Authored by User/Organization
- May have Comments/Reports

**Notes:**
- Syncs with `isPublic` on core entities
- Moderation uses `status`, `reportsCount`

---

## 12. Notification

**Description:**  
Tracks user notifications for real-time and asynchronous events such as mentions, invitations to projects, comment replies, export completion, usage limit warnings, etc. Improves collaboration and user engagement.

**Fields:**
- `id`: Unique identifier (UUID)
- `recipientId`: User to notify
- `type`: Notification type (`"mention"`, `"invite"`, `"comment_reply"`, `"export_ready"`, `"usage_limit"`, etc.)
- `actorId`: (optional) User who triggered the notification
- `projectId`: (optional) Related project
- `entityType`: (optional) `"comment"`, `"project"`, `"screen"`, etc.
- `entityId`: (optional) ID of the referenced entity
- `message`: (optional) Notification text (template + data)
- `data`: (optional) JSON payload for context/deeplink
- `isRead`: Boolean; mark as read/unread
- `createdAt`: Timestamp sent
- `readAt`: (optional) Timestamp read
- `deletedAt`: (optional) Soft delete timestamp

**Relationships:**
- Linked to a User (recipient)
- Optionally references actor and related entities (project, comment, etc.)

---

## 13. AccessibilityReport

**Description:**  
Stores the results of accessibility checks run on screens/components, including warnings and errors to help teams build accessible UIs.

**Fields:**
- `id`: UUID
- `projectId`: Reference to project
- `screenId`: (optional) Reference to screen
- `componentId`: (optional) Reference to component
- `checkedById`: (optional) User or system
- `status`: "pass", "warning", "fail"
- `issues`: Array of issues/warnings (type, message, severity, affected element, suggestion)
- `summary`: (optional) Summary of report
- `checkedAt`: Timestamp of check

**Relationships:**
- Linked to Project/Screen/Component

---

## 14. Plan / Subscription

**Description:**  
Represents a user's or team's plan (free, premium, team) for feature gating, usage tracking, and billing.

**Fields:**
- `id`: UUID
- `userId`: Reference to user (or organization/team)
- `planType`: "free", "premium", "team", etc.
- `status`: "active", "trialing", "canceled", "expired"
- `startedAt`: Plan start date
- `expiresAt`: (optional) Plan end date
- `renewalAt`: (optional) Next billing date
- `usage`: JSON/object (e.g., exportsThisMonth, projectsCreated, etc.)
- `limits`: JSON/object (per plan type; e.g., maxExports, maxProjects)
- `paymentProviderId`: (optional) Stripe/etc. reference
- `createdAt`: Timestamp created
- `updatedAt`: Timestamp updated
- `canceledAt`: (optional) Timestamp canceled

**Relationships:**
- Linked to User or Organization/Team

**Notes:**
- One active plan per user (or org/team)
- Updated on upgrade/downgrade/cancel

---

# Notes

- **Extensible:** Entities/fields can be extended for future features (comments, audit log, etc.)
- **Soft Deletes:** `deletedAt` used for non-destructive removal.
- **Organization/Team:** Structure is in place for future multi-user, team, and org features.
- **Marketplace/Community:** Listing is a layer on top of core assets for sharing/discoverability.

---

## Export

**Description:**  
Tracks export actions performed by users, such as exporting screens, projects, themes, or components as `.kt` files, zipped bundles, or exporting directly to external destinations like GitHub. Useful for audit, enforcing usage limits, troubleshooting, and enabling async/large export flows.

**Fields:**
- `id`: Unique identifier (UUID)
- `userId`: Reference to the user who initiated the export
- `projectId`: (optional) Project being exported
- `screenId`: (optional) Screen being exported
- `componentId`: (optional) Component being exported
- `exportType`: Type of export (`"zip"`, `"kt_file"`, `"github"`, etc.)
- `status`: Export status (`"pending"`, `"completed"`, `"failed"`)
- `fileUrl`: (optional) Download URL for the exported artifact (for zips, files)
- `repoUrl`: (optional) External repo URL (e.g., GitHub export)
- `error`: (optional) Error message if export failed
- `createdAt`: Timestamp when the export was initiated
- `completedAt`: (optional) Timestamp when the export finished
- `metadata`: (optional) JSON with additional context (e.g., export options, file sizes)

**Relationships:**
- Linked to User (who performed the export)
- Optionally linked to Project, Screen, or Component
- May reference an external destination (repoUrl)

**Notes:**
- Enables async export flows (user can check export status)
- Useful for enforcing export limits and providing export/download history
- Not always required for MVP if all exports are simple/synchronous, but recommended for auditability and premium features
