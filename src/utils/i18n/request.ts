import { getRequestConfig } from "next-intl/server";
import { getCookieAction } from "../actions/cookieStoreActions";
export default getRequestConfig(
  async () => {
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
  // const userLang = await getCookieAction("lang");
  // if (userLang) {
  //   const locale = userLang;
  //   return {
  //     locale,
  //     messages: {
  //       ...(await import(`./messages/${locale}/auth.json`)).default,
  //       ...(await import(`./messages/${locale}/onBoarding.json`)).default,
  //       ...(await import(`./messages/${locale}/wellcome.json`)).default,
  //     },
  //   };
  // } else {
  //   const locale = "en";
  //   return {
  //     locale,
  //     messages: {
  //       ...(await import(`./messages/${locale}/auth.json`)).default,
  //       ...(await import(`./messages/${locale}/onBoarding.json`)).default,
  //       ...(await import(`./messages/${locale}/wellcome.json`)).default,
  //     },
  //   };
  // }
}
);
