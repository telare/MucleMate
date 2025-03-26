import { getRequestConfig } from "next-intl/server";
import { getUserLocalServerConfig } from "../actions/userLocaleServer";
export default getRequestConfig(async () => {
  const userConfig = await getUserLocalServerConfig();
  const locale = userConfig.locale;
  return { locale: locale, messages: userConfig.messages };
});
