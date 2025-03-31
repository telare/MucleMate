"use client";
import { z } from "zod";
import AuthForm from "../components/Form";
import { useTranslations } from "next-intl";

export default function SignUpPage() {
  const t = useTranslations("auth");
  const SignUpSchema = z.object({
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
  return (
    <AuthForm
      schema={SignUpSchema}
      titleTexts={[t("titleSignUp"), t("subHeadingSignUp")]}
    />
  );
}
