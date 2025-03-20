"use client"
import { z } from "zod";
import AuthForm from "../components/Form";
export default function SignInPage() {
  const SignInSchema = z.object({
    Email: z.string().email({ message: "Invalid email address" }),
    Password: z
      .string()
      .min(6, { message: "At least 6 characters long" }),
  });
  return (
    <AuthForm
      schema={SignInSchema}
      titleTexts={[
        "Sign In",
        "It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum.",
      ]}
    />
  );
}
