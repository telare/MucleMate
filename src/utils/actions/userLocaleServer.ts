"use server";
import { cookies } from "next/headers";

type Messages = {
  [key: string]: string | Messages;
};

export async function detectUserServerLang(): Promise<string | null> {
  const cookiesStore = await cookies();
  const userLang = cookiesStore.get("lang");
  if (userLang) return userLang.value;
  return null;
}

export async function getUserLocalServerConfig(): Promise<{
  locale: string;
  messages: Record<string, Messages>;
}> {
  const userLang = await detectUserServerLang();
  const locale = userLang || "en-US";
  const messages = {
    wellcome: (await import(`../i18n/messages/${locale}/wellcome.json`))
      .default,
    auth: (await import(`../i18n/messages/${locale}/auth.json`)).default,
    onBoarding: (await import(`../i18n/messages/${locale}/onBoarding.json`))
      .default,
    personalization: (
      await import(`../i18n/messages/${locale}/personalization.json`)
    ).default,
    categoryFilter: (
      await import(`../i18n/messages/${locale}/categoryFilter.json`)
    ).default,
    addWorkout: (
      await import(`../i18n/messages/${locale}/addWorkout.json`)
    ).default,
    common: (await import(`../i18n/messages/${locale}/common.json`)).default,
  };

  return { locale, messages };
}
