import ThemeBtn from "@/shared/components/buttons/ThemeBtn";
import styles from "./Auth.module.scss";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.auth_main__con}>
      {children}
      <div className={styles.theme_btn__con}>
        <ThemeBtn />
      </div>
    </div>
  );
}
