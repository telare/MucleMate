"use client";
import Image from "next/image";
import styles from "../Wellcome.module.scss";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Wellcome() {
  const [mounted, setMounted] = useState<boolean>(false);
  const t = useTranslations("wellcome");
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    const userLang: string = navigator.language || "en";
    document.cookie = `lang=${userLang}`;
    setTheme(systemTheme || "dark");
    setMounted(true);
  }, []);

  if (mounted) {
    return (
      <div className={styles.wellcome}>
        <Image
          src={theme === "dark" ? "/images/Logo-dark.png" : "/images/Logo.png"}
          alt="logo"
          width={200}
          height={200}
          className={styles.logo}
        />
        <div>
          <h3>{t("title1")}</h3>
          <h1>MucleMate</h1>
          <h3>{t("title2")}</h3>
        </div>
      </div>
    );
  }
  return null;
}
