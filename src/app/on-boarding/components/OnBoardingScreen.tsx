"use client";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import styles from "../OnBoarding.module.scss";
import SkipBtn from "../../../shared/components/buttons/SkipBtn";
import ThemeBtn from "@/shared/components/buttons/ThemeBtn";
import { useTranslations } from "next-intl";
import { logosSrc, titleText } from "../utils/data";
import Button from "@/shared/components/buttons/Button";

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
        className={styles.backImg}
      />

      <div className={styles.inner}>
        <div className={styles.themeBtnContainer}>
          <ThemeBtn />
        </div>
        <div className={styles.skipBtnContainer}>
          <SkipBtn pathToSkip="/sign-in" />
        </div>

        <Image
          src={logosSrc[index - 1]}
          alt="logo"
          width={100}
          height={100}
          className={styles.logo}
        />

        <div className={styles.textContainer}>
          {titleText[index - 1].map((_, i) => (
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
            onClick={() => router.push(path + nextStep)}
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
