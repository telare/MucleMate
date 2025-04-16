"use client";
import { useTheme } from "next-themes";
import Button from "../../buttons/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavLogoBtn() {
  const router = useRouter();
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (isMounted) {
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
  return null;
}
