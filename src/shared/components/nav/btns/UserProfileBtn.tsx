"use client";
import { UserProfileIcon } from "@/utils/icons/Icons";
import styles from "@shared/styles/components-styles/Nav.module.scss";
import { useRouter } from "next/navigation";
import Button from "@shared/components/buttons/Button";
export default function UserProfileBtn() {
  const router = useRouter();
  return (
    <Button
      icon={UserProfileIcon}
      style={styles.nav__MainCon__BtnsCon__Btn}
      type="button"
      fnc={() => {
        router.push("/account");
      }}
    />
  );
}
