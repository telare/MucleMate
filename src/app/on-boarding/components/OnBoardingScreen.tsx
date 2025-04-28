"use client";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import styles from "../OnBoarding.module.scss";
import SkipBtn from "../../../shared/components/buttons/SkipBtn";
import ThemeBtn from "@/shared/components/buttons/ThemeBtn";
import { useTranslations } from "next-intl";
import { onBoardingConfig } from "../utils/data";
import Button from "@/shared/components/buttons/Button";

export default function OnBoardingScreen() {
  const t = useTranslations("onBoarding");
  const router = useRouter();
  const pathname = usePathname();
  const { section } = useParams();

  const basePath: string = pathname.split("/").slice(0, -1).join("/");
  const index: number = Number(section);
  const configLength: number = Object.keys(onBoardingConfig).length;
  const nextStep: string =
    (section as string) !== `${configLength}`
      ? `${basePath}/${index + 1}`
      : "/auth/sign-in";

  return (
    <div className={styles.onBoarding}>
      <Image
        src="/images/wellcome-background-img-3.jpg"
        alt="background"
        fill
        className={styles.backImg}
      />

      <div className={styles.inner}>
        <div className={styles.themeBtnContainer}>
          <ThemeBtn />
        </div>
        <div className={styles.skipBtnContainer}>
          <SkipBtn skipDestination="/auth/sign-in" />
        </div>

        <Image
          src={onBoardingConfig[index - 1].logoSrc}
          alt="logo"
          width={100}
          height={100}
          className={styles.logo}
        />

        <div className={styles.textContainer}>
          {onBoardingConfig[index - 1].titleTranslationKeys.map((_, i) => (
            <h3 key={i}>{t(_)}</h3>
          ))}
        </div>

        <div className={styles.btnsContainer}>
          <Button
            onClick={() => router.back()}
            translation={{
              context: "common",
              key: "previousBtn",
            }}
          />
          <Button
            onClick={() =>
              index === configLength ? router.replace(nextStep) : router.push(nextStep)
            }
            translation={{
              context: "common",
              key: "nextBtn",
            }}
          />
        </div>
      </div>
    </div>
  );
}
