import DashboardItem from "./DashboardItem";

type WorkoutInfo = {
  exerciseTitle: string;
  exerciseSets: number;
  exerciseReps: number;
  exerciseWeight: number;
}[];
type DashboardProps = {
  workoutInfo: WorkoutInfo;
};
export default function Dashboard({ workoutInfo }: DashboardProps) {
  return (
    <div>
      {workoutInfo.map((exercise, i) => (
        <DashboardItem
          title={exercise.exerciseTitle}
          repsPerSet={exercise.exerciseSets}
          totalSets={exercise.exerciseReps}
          weightPerSet={exercise.exerciseWeight}
        />
      ))}
    </div>
  );
}
