"use client";
import { UserProfileIcon } from "@/utils/icons/Icons";
import styles from "@shared/styles/components-styles/Nav.module.scss";
import { useRouter } from "next/navigation";
export default function UserProfileBtn() {
  const router = useRouter();
  return (
    <button
      className={styles.nav__MainCon__BtnsCon__Btn}
      onClick={() => {
        router.push("/account");
      }}
    >
      {UserProfileIcon}
    </button>
  );
}
