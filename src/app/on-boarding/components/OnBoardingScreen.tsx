"use client";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import styles from "../OnBoarding.module.scss";
import Button from "@/shared/components/buttons/Button";
import SkipBtn from "../../../shared/components/buttons/SkipBtn";
import ThemeBtn from "@/shared/components/buttons/ThemeBtn";
import { useTranslations } from "next-intl";
import { logosSrc, titleText } from "../utils/data";

export default function OnBoardingScreen() {
  const t = useTranslations("onBoarding");

  const router = useRouter();
  const pathname = usePathname();
  const { section } = useParams();
  const path = pathname.split("/").slice(0, -1).join("/");

  const index: number = Number(section);

  const nextStep: string =
    index !== titleText.length ? `/${index + 1}` : "/sign-in";

  if (isNaN(index) || index < 1 || index > titleText.length) {
    router.replace("/sign-in");
    return null;
  }
  return (
    <div className={styles.onBoarding}>
      <Image
        src="/images/wellcome-background-img-3.jpg"
        alt="background"
        fill
        className={styles.onBoarding__backImg}
      />

      <div className={styles.onBoarding__inner}>
        <div className={styles.onBoarding__inner__themeBtnCon}>
          <ThemeBtn />
        </div>
        <SkipBtn
          pathToSkip="/sign-in"
          style={styles.onBoarding__inner__skipBtn}
        />
        <Image
          src={logosSrc[index - 1]}
          alt="logo"
          width={100}
          height={100}
          className={styles.onBoarding__inner__logo}
        />

        <div className={styles.onBoarding__inner__textCon}>
          {titleText[index - 1].map((_, i) => (
            <h3 key={i}>{t(_)}</h3>
          ))}
        </div>

        <div className={styles.onBoarding__inner__btnsCon}>
          <Button
            text={t("previous_btn")}
            fnc={() => router.back()}
            type="button"
          />
          <Button
            text={t("next_btn")}
            fnc={() => router.push(path + nextStep)}
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
