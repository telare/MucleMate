import Nav from "@/shared/components/Nav";
import Search from "@/shared/components/Search";
import { Layout } from "@/shared/types/types";
import styles from "./Workouts.module.scss";
export default function WorkoutsPageLayout({ children }: Layout) {
  return (
    <div className={styles.workouts}>
      <Nav/>
      <Search />
      {children}
    </div>
  );
}
