"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
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
      <button
        onClick={() => {
          router.push("/home");
        }}
      >
        <Image
          alt="Account Link Btn Logo"
          src={`/images/Logo${theme === "dark" ? "" : "-dark"}.png`}
          fill
        />
      </button>
    );
  }
  return null;
}
