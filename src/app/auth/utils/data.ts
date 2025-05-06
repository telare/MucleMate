import { z } from "zod";

export const data = {
  "sign-in": {
    schema: z.object({
      email: z.string().email("Invalid email address"),
      password: z
        .string()
        .min(6, "At least 6 characters long")
        .max(16, "Maximum 16 characters long"),
    }),
    titles: ["titleSignIn", "subHeadingSignIn"],
  },
  "sign-up": {
    schema: z.object({
      username: z
        .string()
        .min(3, "At least 3 characters long")
        .max(10, "Maximum 10 characters long"),
      email: z.string().email("Invalid email address"),
      password: z
        .string()
        .min(6, "At least 6 characters long")
        .max(16, "Maximum 16 characters long"),
    }),
    titles: ["titleSignUp", "subHeadingSignUp"],
  },
};
