"use client";
import Button from "@/shared/components/buttons/Button";
import styles from "../OnBoarding.module.scss";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
export default function SkipBtn() {
  const router = useRouter();
  const t = useTranslations("onBoarding");
  return <Button style={styles.skip__btn} text={t("skip_btn")} type="button" fnc={()=>router.push("/sign-in")}/>;
}
