import { Layout } from "@/shared/types/types";
import styles from "./AddWorkouts.module.scss";
export default function AddWorkoutPageLayout({ children }: Layout) {
  return <div className={styles.addWorkout}>{children}</div>;
}
