import ThemeBtn from "@/shared/components/buttons/ThemeBtn";
import styles from "./Auth.module.scss";
import { Layout } from "@/shared/types/types";
import Toast from "@/shared/components/toast/Toast";
export default function AuthLayout({ children }: Layout) {
  return (
    <div className={styles.authWrapper}>
      {children}
      <div className={styles.themeBtnContainer}>
        <ThemeBtn />
      </div>
      <Toast/>
    </div>
  );
}
