"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Wellcome from "./components/Wellcome";
export default function RootPage() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      return router.replace("/on-boarding/1");
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [router]);
  return <Wellcome />;
}
