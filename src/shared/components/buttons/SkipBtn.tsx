"use client";
import styles from "@/shared/styles/components-styles/SkipBtn.module.scss";
import { SkipBtnIcon } from "@/utils/icons/Icons";
import { useRouter } from "next/navigation";
import Button from "@/shared/components/buttons/Button";

type SkipBtnProps = {
  skipDestination: string;
};

export default function SkipBtn({ skipDestination }: SkipBtnProps) {
  const router = useRouter();
  return (
    <Button
      className={styles.skipBtn}
      onClick={() => router.push(skipDestination)}
      icon={SkipBtnIcon}
    />
  );
}
