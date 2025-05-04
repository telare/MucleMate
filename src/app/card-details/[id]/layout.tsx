import Nav from "@/shared/components/nav/Nav";
import { Layout } from "@/shared/types/types";
import styles from "@shared/styles/components-styles/CardDetailPage.module.scss";
export default function AccountPageLayout({ children }: Layout) {
  return (
    <div className={styles.cardDetailPage}>
      <Nav />
      {children}
    </div>
  );
}
