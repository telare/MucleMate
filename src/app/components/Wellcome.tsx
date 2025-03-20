import Image from "next/image";
import styles from "../Wellcome.module.scss";
import { useTranslations } from "next-intl";
export default function Wellcome() {
  const  t  = useTranslations("wellcome");
  return (
    <div className={styles.main__con}>
      <Image
        src="/images/wellcome-background-img.png"
        alt="logo"
        fill
        className={styles.back__img}
      />
      <div className={styles.main__info}>
        <Image
          src="/images/Logo.png"
          alt="logo"
          width={200}
          height={200}
          className={styles.logo}
        />
        <div>
          <h3>{t("title1")}</h3>
          <h1>MucleMate</h1>
          <h3>{t("title2")}</h3>
        </div>
      </div>
    </div>
  );
}
