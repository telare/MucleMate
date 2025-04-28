import { Layout } from "@/shared/types/types";
import styles from "./Home.module.scss";
import Nav from "@/shared/components/nav/Nav";
import Search from "@/shared/components/Search/Search";
export default function HomeLayout({ children }: Layout) {
  return (
    <div className={styles.home}>
      <Nav />
      <Search />
      {children}
    </div>
  );
}
