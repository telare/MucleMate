"use client";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";

export default function NavGreeting() {
  const userName = useAppSelector(
    (state: RootState) => state.user.generalInfo.name
  );
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <p>Hi, {hasMounted && userName}!</p>
    </>
  );
}
