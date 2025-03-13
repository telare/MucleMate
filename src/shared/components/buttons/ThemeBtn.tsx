"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "@shared/styles/components-styles/themeBtn.module.scss";
export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  function themeBtnFnc(): void {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return (
      <Button
        text=""
        type="button"
        style={styles.button}
        fnc={() => themeBtnFnc()}
      >
        <div
          className={
            theme === "dark"
              ? [styles.ball, styles.active__ball].join(" ")
              : [styles.ball, styles.non__active__ball].join(" ")
          }
        ></div>
      </Button>
    );
  }
  return null;
}
