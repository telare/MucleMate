import { Layout } from "@/shared/types/types";
import styles from "./AddWorkout.module.scss";
export default function AddWorkoutPageLayout({ children }: Layout) {
  return (
    <div className={styles.addWorkout}>
      {children}
    </div>
  );
}
