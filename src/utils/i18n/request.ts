import { getRequestConfig } from "next-intl/server";
import { getUserLocaleConfig } from "../actions/userLocaleServer";
export default getRequestConfig(async () => {
  const userConfig = await getUserLocaleConfig();
  const locale = userConfig.locale;
  return { locale: locale, messages: userConfig.messages };
});
