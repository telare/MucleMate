"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "@shared/styles/components-styles/themeBtn.module.scss";
export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return (
      <Button
        text=""
        type="button"
        style={styles.button}
        fnc={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div className={styles.ball}></div>
      </Button>
    );
  }
  return null;
}
