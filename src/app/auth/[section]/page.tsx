"use client";
import { useParams } from "next/navigation";
import AuthForm from "../components/Form";
import { data } from "../utils/data";
type SectionKeys = keyof typeof data;

export default function SignInPage() {
  const { section } = useParams();
  const sections = Object.keys(data);
  if (sections && Object.keys(data).includes(section as string)) {
    return (
      <AuthForm
        schema={data[section as SectionKeys].schema}
        titleTexts={data[section as SectionKeys].titles}
      />
    );
  }
  return null;
}
