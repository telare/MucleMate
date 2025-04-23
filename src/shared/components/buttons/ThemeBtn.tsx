"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "@shared/styles/components-styles/themeBtn.module.scss";
import Button from "@shared/components/buttons/Button";
export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return (
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={styles.themeButtonWrapper}
      >
        <div className={styles.ball}></div>
      </Button>
    );
  }
  return null;
}
