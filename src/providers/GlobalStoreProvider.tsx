"use client";
import { Layout } from "@/shared/types/types";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import { useRef } from "react";

export default function GlobalStoreProvider({ children }: Layout) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
