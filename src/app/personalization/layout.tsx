import ThemeBtn from "@/shared/components/buttons/ThemeBtn";
import { Layout } from "@/shared/types/types";
import styles from "./Personalization.module.scss";
export default function PersonalizationPageLayout({ children }: Layout) {
  return (
    <div className={styles.personalization}>
      {children}
      <div className={styles.personalization__themeBtnCon}>
        <ThemeBtn />
      </div>
    </div>
  );
}
