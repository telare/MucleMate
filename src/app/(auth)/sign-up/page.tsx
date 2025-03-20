"use client"
import { z } from "zod";
import AuthForm from "../components/Form";

export default function SignUpPage() {
  const SignUpSchema = z.object({
    Username: z
      .string()
      .min(3, { message: "At least 3 characters long" }),
    Email: z.string().email({ message: "Invalid email address" }),
    Password: z
      .string()
      .min(6, { message: "At least 6 characters long" }),
  });
  return (
    <AuthForm
      schema={SignUpSchema}
      titleTexts={[
        "Sign Up",
        "It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum.",
      ]}
    />
  );
}
