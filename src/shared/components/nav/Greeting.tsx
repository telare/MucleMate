"use client";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function NavGreeting() {
  const userName = useAppSelector(
    (state: RootState) => state.user.generalInfo.name
  );
  const t = useTranslations("nav");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <p>{t("greeting")}, {hasMounted && userName}!</p>
    </>
  );
}
