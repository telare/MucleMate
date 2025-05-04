import Nav from "@/shared/components/nav/Nav";
import { Layout } from "@/shared/types/types";
import styles from "./Account.module.scss";
import Toast from "@/shared/components/toast/Toast";
export default function AccountPageLayout({ children }: Layout) {
  return (
    <div className={styles.accountContainer}>
      <Nav/>
      {children}
      <Toast/>
    </div>
  );
}
