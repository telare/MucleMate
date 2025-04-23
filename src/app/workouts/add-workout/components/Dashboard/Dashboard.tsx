import { Exercise } from "../../utils/utils";
import DashboardItem from "./DashboardItem";
import styles from "../../AddWorkout.module.scss";
import Button from "@/shared/components/buttons/Button";

interface DashboardProps {
  workoutInfo: Exercise[];
}

export default function Dashboard({ workoutInfo }: DashboardProps) {
  function SubmitWorkoutData(e: React.FormEvent) {
    // fetch API to post the data
  }

  return (
    <form className={styles.dashboard} onSubmit={(e) => SubmitWorkoutData(e)}>
      <h1>Total Workout</h1>
      {workoutInfo.map((exercise, i) => (
        <DashboardItem
          key={i}
          title={exercise.title}
          repsPerSet={exercise.set}
          totalSets={exercise.reps}
          weightPerSet={exercise.weight}
        />
      ))}
      <div className={styles.buttonsWrapper}>
        <Button
          type="submit"
          translation={{ context: "common", key: "submitBtn" }}
        />
        <Button
          type="reset"
          translation={{ context: "common", key: "cancelBtn" }}
        />
      </div>
    </form>
  );
}
