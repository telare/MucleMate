import ThemeBtn from "@/shared/components/buttons/ThemeBtn";
import styles from "./Auth.module.scss";
import { Layout } from "@/shared/types/types";
export default function AuthLayout({ children }: Layout) {
  return (
    <div className={styles.auth}>
      {children}
      <div className={styles.auth__themeBtnCon}>
        <ThemeBtn />
      </div>
    </div>
  );
}
