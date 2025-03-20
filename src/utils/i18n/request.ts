import { getRequestConfig } from "next-intl/server";
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "ua";

  return {
    locale,
    messages: {
      ...(await import(`./messages/${locale}/auth.json`)).default,
      ...(await import(`./messages/${locale}/onBoarding.json`)).default,
      ...(await import(`./messages/${locale}/wellcome.json`)).default,
    },
  };
});
