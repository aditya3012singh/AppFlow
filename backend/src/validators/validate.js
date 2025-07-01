import {z} from "zod"

export const signupSchema=z.object({
    email: z.string().email(),
    name: z.string().min(4, "Name must be atleast 4 characters !!"),
    password: z.string().min(6,"Password must be atleast 6 characters")
})

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters!!")
});

export const otpVerifySchema=z.object({
    email:z.string().email(),
    otp:z.string().regex(/^\d{6}$/, "OTP must be exactly 6 digits")
})

export const updateProfileSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
});

export const createWorkspaceSchema = z.object({
  name: z.string().min(3, "Workspace name must be at least 3 characters"),
});

export const inviteMemberSchema = z.object({
  email: z.string().email(),
  role: z.enum(["owner", "admin", "member"]),
});

export const createProjectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  workspaceId: z.string().cuid("Invalid workspace ID"),
});

export const createColumnSchema = z.object({
  name: z.string().min(1, "Column name is required"),
  projectId: z.string().cuid("Invalid project ID"),
  position: z.number().min(0),
});

export const createTaskSchema = z.object({
  title: z.string().min(1, "Task title is required"),
  description: z.string().optional(),
  columnId: z.string().cuid("Invalid column ID"),
  authorId: z.string().cuid("Invalid author ID"),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  columnId: z.string().cuid().optional(),
});

export const addCommentSchema = z.object({
  taskId: z.string().cuid(),
  authorId: z.string().cuid(),
  content: z.string().min(1, "Comment cannot be empty"),
});

export const createLabelSchema = z.object({
  name: z.string().min(1),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Color must be a hex code"),
});

export const assignLabelSchema = z.object({
  taskId: z.string().cuid(),
  labelId: z.string().cuid(),
});

export const uploadFileSchema = z.object({
  name: z.string().min(1),
  url: z.string().url(),
});
