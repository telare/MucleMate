import { Layout } from "@/shared/types/types";
import styles from "./AddWorkout.module.scss";
import Toast from "@/shared/components/toast/Toast";
export default function AddWorkoutPageLayout({ children }: Layout) {
  return (
    <div className={styles.addWorkout}>
      {children}
      <Toast/>
    </div>
  );
}
