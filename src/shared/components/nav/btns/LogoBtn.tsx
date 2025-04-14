"use client";
import { useTheme } from "next-themes";
import Button from "../../buttons/Button";
import { useRouter } from "next/navigation";

export default function NavLogoBtn() {
  const router = useRouter();
  const { theme } = useTheme();
  return (
    <Button
      iconPath={`/images/Logo${theme === "dark" ? "" : "-dark"}.png`}
      type="button"
      fnc={() => {
        router.push("/home");
      }}
    />
  );
}
