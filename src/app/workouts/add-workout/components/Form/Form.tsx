"use client";
import Button from "@/shared/components/buttons/Button";
import styles from "../../AddWorkout.module.scss";
import FormField from "@/shared/components/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Exercise, formFieldsRegisterTitles } from "../../utils/utils";
import Buttons from "./Buttons";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

interface FormProps {
  setWorkoutInfo: (exercise: Exercise) => void;
}

export default function Form({ setWorkoutInfo }: FormProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const schema = z.object({});

  type ExerciseSchema = z.infer<typeof schema>;

  const methods = useForm<ExerciseSchema>({
    resolver: zodResolver(schema),
  });

  function submitExerciseData() {}

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(submitExerciseData)}
        className={styles.form}
      >
        <h1>Add an exercise</h1>
        <div className={styles.mainContentWrapper}>
          <div className={styles.fieldsContainer}>
            {formFieldsRegisterTitles.map((title, i) => (
              <FormField
                type="text"
                key={i}
                registerTitle={title}
                placeholder={`Enter ${title}`}
                translationContext="addWorkout"
              />
            ))}
          </div>
          {/* date and time div */}
          <div className={styles.timeInfoContainer}>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className={styles.calendar}
            />
          </div>
        </div>
        <div className={styles.buttonsWrapper}>
          {/* setWorkoutInfo to BTNS */}
          <Buttons />
        </div>
      </form>
    </FormProvider>
  );
}
