"use client";
import Image from "next/image";
import styles from "../Wellcome.module.scss";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { Device } from "@capacitor/device";
import { Preferences } from "@capacitor/preferences";
export default function Wellcome() {
  const [userLangDetected, IsUserLangDetected] = useState<boolean>(false);
  const t = useTranslations("wellcome");
  const { theme } = useTheme();

  useEffect(() => {
    async function getUserDeviceLang(): Promise<string> {
      const userLangResp = await Device.getLanguageCode();
      const userLang: string = userLangResp.value;
      return userLang;
    }

    async function setLangOnDevice(lang: string) {
      if (Capacitor.isNativePlatform()) {
        await Preferences.set({ key: "lang", value: lang });
      } else {
        document.cookie = `lang=${lang}`
      }
    }

    getUserDeviceLang()
      .then((userLang) => setLangOnDevice(userLang))
      .then(() => IsUserLangDetected(true));
  }, []);

  if (userLangDetected) {
    return (
      <div className={styles.main__con}>
        <div className={styles.main__info}>
          {theme === "light" ? (
            <Image
              src="/images/Logo.png"
              alt="logo"
              width={200}
              height={200}
              className={styles.logo}
            />
          ) : (
            <Image
              src="/images/Logo-dark.png"
              alt="logo"
              width={200}
              height={200}
              className={styles.logo}
            />
          )}
          <div>
            <h3>{t("title1")}</h3>
            <h1>MucleMate</h1>
            <h3>{t("title2")}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}
