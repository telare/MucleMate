import { Layout } from "@/shared/types/types";
import styles from "./Home.module.scss";
import Nav from "@/shared/components/Nav";
import Search from "@/shared/components/Search";
export default function HomeLayout({ children }: Layout) {
  return (
    <div className={styles.home}>
      <Nav userName="User" />
      <Search />
      {children}
    </div>
  );
}
