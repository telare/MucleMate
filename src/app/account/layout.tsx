import Nav from "@/shared/components/nav/Nav";
import { Layout } from "@/shared/types/types";
import styles from "./Account.module.scss";
export default function AccountPageLayout({ children }: Layout) {
  return (
    <div className={styles.accountContainer}>
      <Nav/>
      {children}
    </div>
  );
}
