"use client";
import { UserProfileIcon } from "@/utils/icons/Icons";
import styles from "@shared/styles/components-styles/Nav.module.scss";
import { useRouter } from "next/navigation";
import Button from "../../buttons/Button";
export default function UserProfileBtn() {
  const router = useRouter();
  return (
    <Button
      className={styles.btn}
      onClick={() => {
        router.push("/account");
      }}
      icon={UserProfileIcon}
    />
  );
}
