"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../OnBoarding.module.scss";
import Button from "@/shared/components/buttons/Button";
import SkipBtn from "../../../shared/components/buttons/SkipBtn";
import ThemeBtn from "@/shared/components/buttons/ThemeBtn";
import { useTranslations } from "next-intl";

export default function OnBoardingScreen({
  logo_src,
  text,
  next_path,
}: {
  logo_src: string;
  text: string[];
  next_path: string;
}) {
  const router = useRouter();
  const t = useTranslations("onBoarding");
  return (
    <div className={styles.onBoarding}>
      <Image
        src="/images/wellcome-background-img-3.jpg"
        alt="background"
        fill
        className={styles.BackImg}
      />

      <div className={styles.onBoarding__inner}>
        <div className={styles.onBoarding__themeBtnCon}>
          <ThemeBtn />
        </div>
        <SkipBtn pathToSkip="/sign-in" style={styles.onBoarding__skipBtn} />
        <Image
          src={logo_src}
          alt="logo"
          width={100}
          height={100}
          className={styles.onBoarding__logo}
        />

        <div className={styles.onBoarding__textCon}>
          {text.map((_, i) => (
            <h3 key={i}>{_}</h3>
          ))}
        </div>

        <div className={styles.onBoarding__btnsCon}>
          <Button
            text={t("previous_btn")}
            fnc={() => router.back()}
            type="button"
          />
          <Button
            text={t("next_btn")}
            fnc={() => router.push(next_path)}
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
