"use client";
import { z } from "zod";
import AuthForm from "../components/Form";
import { useTranslations } from "next-intl";
export default function SignInPage() {
  const t = useTranslations("auth");
  const SignInSchema = z.object({
    Email: z.string().email("Invalid email address"),
    Password: z
      .string()
      .min(6, "At least 6 characters long")
      .max(16, "Maximum 16 characters long"),
  });
  return (
    <AuthForm
      schema={SignInSchema}
      titleTexts={[t("titleSignIn"), t("subHeadingSignIn")]}
    />
  );
}
