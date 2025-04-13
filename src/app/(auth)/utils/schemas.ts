import { z } from "zod";
export const SignUpSchema = z.object({
  UserName: z
    .string()
    .min(3, "At least 3 characters long")
    .max(10, "Maximum 10 characters long"),
  Email: z.string().email("Invalid email address"),
  Password: z
    .string()
    .min(6, "At least 6 characters long")
    .max(16, "Maximum 16 characters long"),
});

export const SignInSchema = z.object({
  Email: z.string().email("Invalid email address"),
  Password: z
    .string()
    .min(6, "At least 6 characters long")
    .max(16, "Maximum 16 characters long"),
});
