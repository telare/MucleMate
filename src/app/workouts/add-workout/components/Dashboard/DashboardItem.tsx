import styles from "../../AddWorkout.module.scss";

interface DashboardItemProps {
  title: string;
  sets: number;
  reps: number;
  weight: number;
}

export default function DashboardItem({
  title,
  sets,
  reps,
  weight,
}: DashboardItemProps) {
  return (
    <div className={styles.item}>
      <h3>{title}</h3>
      <div className={styles.info}>
        {sets} sets × {reps} reps
        {weight ? ` • ${weight}kg` : ""}
      </div>
    </div>
  );
}
