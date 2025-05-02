"use client";
import { Exercise } from "../../utils/utils";
import DashboardItem from "./DashboardItem";
import styles from "../../AddWorkout.module.scss";
import Button from "@/shared/components/buttons/Button";
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";

interface DashboardProps {
  workoutInfo: Exercise[];
  setWorkoutInfo: Dispatch<SetStateAction<Exercise[]>>;
}

export default function Dashboard({
  workoutInfo,
  setWorkoutInfo,
}: DashboardProps) {
  const t = useTranslations("addWorkout");

  function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // read from state
  }

  return (
    <form className={styles.dashboard} onSubmit={(e) => formSubmitHandler(e)}>
      <h2>{t("titleField")}</h2>
      {workoutInfo.map((exercise, i) => (
        <DashboardItem
          key={i}
          title={exercise.title}
          reps={exercise.set}
          sets={exercise.reps}
          weight={exercise.weight}
        />
      ))}
      <div className={styles.buttonsWrapper}>
        <Button
          type="submit"
          translation={{ context: "common", key: "submitBtn" }}
        />
        <Button
          type="reset"
          onClick={() =>
            setWorkoutInfo([
              {
                title: "Exercise title",
                reps: 12,
                set: 1,
                weight: 100,
                date: new Date(),
              },
            ])
          }
          translation={{ context: "common", key: "cancelBtn" }}
        />
      </div>
    </form>
  );
}
