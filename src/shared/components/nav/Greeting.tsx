"use client";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import styles from "@shared/styles/components-styles/Nav.module.scss";
import { useEffect, useState } from "react";

export default function NavGreeting() {
  const userName = useAppSelector((state: RootState) => state.user.generalInfo.name);
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className={styles.greetingContainer}>
      <p>Hi, {hasMounted && userName}!</p>
    </div>
  );
}
