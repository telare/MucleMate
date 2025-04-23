"use client";
import { useState } from "react";
import Form from "./components/Form/Form";
import { Exercise } from "./utils/utils";
import Dashboard from "./components/Dashboard/Dashboard";

export default function AddWorkoutPage() {
  const [workoutInfo, setWorkoutInfo] = useState<Exercise[]>([
    {
      title: "Exercise title",
      reps: "total",
      set: "total",
      weight: "total",
    },
  ]);
  return (
    <>
      <Dashboard workoutInfo={workoutInfo} />
      <Form setWorkoutInfo={() => setWorkoutInfo} />
    </>
  );
}
