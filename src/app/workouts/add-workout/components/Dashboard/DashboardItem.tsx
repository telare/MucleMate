import styles from "../../AddWorkout.module.scss";

type DashboardItemProps = {
  title: string;
  totalSets: string;
  repsPerSet: string;
  weightPerSet: string;
};

export default function DashboardItem({
  title,
  totalSets,
  repsPerSet,
  weightPerSet,
}: DashboardItemProps) {
  return (
    <div className={styles.item}>
      <h1>{title}</h1>
      <div className={styles.info}>
        {totalSets} sets × {repsPerSet} reps
        {weightPerSet ? ` • ${weightPerSet}kg` : ""}
      </div>
    </div>
  );
}
