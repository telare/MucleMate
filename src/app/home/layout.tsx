import { Layout } from "@/shared/types/types";
import styles from "./Home.module.scss";
export default function HomeLayout({ children }: Layout) {
  return <div className={styles.home}>{children}</div>;
}
