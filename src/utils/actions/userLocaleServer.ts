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
  try {
    const userLang = await detectUserServerLang();
    if (userLang) {
      const locale = userLang;
      const messages = {
        wellcome: (await import(`../i18n/messages/${userLang}/wellcome.json`))
          .default,
        onBoarding: (
          await import(`../i18n/messages/${userLang}/onBoarding.json`)
        ).default,
        auth: (await import(`../i18n/messages/${userLang}/auth.json`)).default,
      };
      return { locale, messages };
    }
    return {
      locale: "en",
      messages: {
        wellcome: (await import("../i18n/messages/en/wellcome.json")).default,
        onBoarding: (await import("../i18n/messages/en/onBoarding.json"))
          .default,
        auth: (await import("../i18n/messages/en/auth.json")).default,
      },
    };
  } catch (e) {
    return {
      locale: "en",
      messages: {
        wellcome: (await import("../i18n/messages/en/wellcome.json")).default,
        onBoarding: (await import("../i18n/messages/en/onBoarding.json"))
          .default,
        auth: (await import("../i18n/messages/en/auth.json")).default,
      },
    };
  }
}
