"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../OnBoarding.module.scss";
import Button from "@/shared/components/buttons/Button";
import SkipBtn from "./SkipBtn";
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
    <div className={styles.main__con}>
      <div className={styles.theme_btn__con}>
        <ThemeBtn />
      </div>
      <Image
        src="/images/wellcome-background-img-3.jpg"
        alt="background"
        fill
        className={styles.back__img}
      />
      <SkipBtn />
      <div className={styles.main__con__inner}>
        <Image
          src={logo_src}
          alt="logo"
          width={100}
          height={100}
          className={styles.logo}
        />
        <div>
          {text.map((_, i) => (
            <h3 key={i}>{_}</h3>
          ))}
        </div>
        <div>
          <Button text={t("previous_btn")} fnc={() => router.back()} type="button" />
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
