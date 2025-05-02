"use server";

import { detectUserLang } from "../serverFunctions";

export type Messages = {
  [key: string]: string | Messages;
};

export async function getUserLocaleConfig(): Promise<{
  locale: string;
  messages: Record<string, Messages>;
}> {
  const userLang = await detectUserLang();
  const locale = userLang || "en";
  const messages = {
    wellcome: (await import(`../i18n/messages/${locale}/wellcome.json`))
      .default,
    auth: (await import(`../i18n/messages/${locale}/auth.json`)).default,
    onBoarding: (await import(`../i18n/messages/${locale}/onBoarding.json`))
      .default,
    personalization: (
      await import(`../i18n/messages/${locale}/personalization.json`)
    ).default,
    category: (await import(`../i18n/messages/${locale}/category.json`))
      .default,
    addWorkout: (await import(`../i18n/messages/${locale}/addWorkout.json`))
      .default,
    nav: (await import(`../i18n/messages/${locale}/nav.json`)).default,
    account: (await import(`../i18n/messages/${locale}/account.json`)).default,
    section: (await import(`../i18n/messages/${locale}/section.json`)).default,
    common: (await import(`../i18n/messages/${locale}/common.json`)).default,
  };

  return { locale, messages };
}
