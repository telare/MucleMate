"use client";
import AuthForm from "../components/Form";
import { SignUpSchema } from "../utils/schemas";

export default function SignUpPage() {
  return (
    <AuthForm
      schema={SignUpSchema}
      titleTexts={["titleSignUp", "subHeadingSignUp"]}
    />
  );
}
