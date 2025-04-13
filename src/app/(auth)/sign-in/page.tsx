"use client";
import AuthForm from "../components/Form";
import { SignInSchema } from "../utils/schemas";
export default function SignInPage() {
  return (
    <AuthForm
      schema={SignInSchema}
      titleTexts={["titleSignIn", "subHeadingSignIn"]}
    />
  );
}
