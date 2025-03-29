import ThemeBtn from "@/shared/components/buttons/ThemeBtn";
import styles from "./Auth.module.scss";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.auth}>
      {children}
      <div className={styles.auth__themeBtnCon}>
        <ThemeBtn />
      </div>
    </div>
  );
}
