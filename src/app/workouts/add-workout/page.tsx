"use client";
import { useState } from "react";
import Form from "./components/Form/Form";
import { Exercise } from "./utils/utils";
import Dashboard from "./components/Dashboard/Dashboard";

export default function AddWorkoutPage() {
  const [workoutInfo, setWorkoutInfo] = useState<Exercise[]>([
    {
      title: "Exercise title",
      reps: 12,
      set: 1,
      weight: 100,
      date: new Date(),
    },
  ]);
  return (
    <>
      <Dashboard workoutInfo={workoutInfo} setWorkoutInfo={setWorkoutInfo}/>
      <Form setExercises={setWorkoutInfo} />
    </>
  );
}
