"use client";
import { Exercise } from "../../utils/utils";
import DashboardItem from "./DashboardItem";
import styles from "../../AddWorkout.module.scss";
import Button from "@/shared/components/buttons/Button";
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import { customToast } from "@/shared/components/toast/utils/notificationsBuilder";

interface DashboardProps {
  workoutInfo: Exercise[];
  setWorkoutInfo: Dispatch<SetStateAction<Exercise[]>>;
}

export default function Dashboard({
  workoutInfo,
  setWorkoutInfo,
}: DashboardProps) {
  const t = useTranslations("addWorkout");

  async function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // read from state
    const form = new FormData();
    form.append("workoutInfo", JSON.stringify(workoutInfo));
    const resp = await fetch("http://localhost:8080/users//workout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    if (resp.status === 201) {
      customToast("Training added successfuly!", "success");
    }else{
      customToast("Training added failed!", "error");
    }
  }

  return (
    <form className={styles.dashboard} onSubmit={(e) => formSubmitHandler(e)}>
      <h2>{t("workoutDashboardTitle")}</h2>
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
