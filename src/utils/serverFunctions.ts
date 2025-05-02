"use server";
import { cookies } from "next/headers";
export async function detectUserLang(): Promise<string | null> {
  const cookiesStore = await cookies();
  const userLang = cookiesStore.get("lang");
  if (userLang) return userLang.value.split(/[-_]/)[0].toLowerCase();

  return null;
}