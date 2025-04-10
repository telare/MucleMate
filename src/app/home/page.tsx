import Nav from "@/shared/components/Nav";
import styles from "./Home.module.scss";
import Search from "@/shared/components/Search";
import CategoryDisplay from "@/shared/components/CategoryDisplay";
export default function HomePage() {
  return (
    <div className={styles.home}>
      <Nav userName="User" />
      <Search />
      {/* info-slider */}
      
      {/* <Section title="Workouts" /> */}
      {/* <Section title="Nutrition" /> */}
      <CategoryDisplay title="Workouts"/>
      
      {/* <CategoryDisplay title="Workouts"/> */}
      {/* footer */}
    </div>
  );
}
