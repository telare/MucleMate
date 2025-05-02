"use client";
import styles from "../../AddWorkout.module.scss";
import FormField from "@/shared/components/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Exercise, formFieldsConfig } from "../../utils/utils";
import Buttons from "./Buttons";
import { Calendar } from "@/components/ui/calendar";
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";

interface FormProps {
  setExercises: Dispatch<SetStateAction<Exercise[]>>;
}

export default function Form({ setExercises }: FormProps) {
  const t = useTranslations("addWorkout");
  const schema = z.object({
    title: z.string().min(1),
    set: z
      .string()
      .transform((v) => Number(v))
      .pipe(z.number().min(1)),
    reps: z
      .string()
      .transform((v) => Number(v))
      .pipe(z.number().min(1)),
    weight: z
      .string()
      .transform((v) => Number(v))
      .pipe(z.number().min(1)),
    date: z.date(),
  });

  type ExerciseSchema = z.infer<typeof schema>;

  const methods = useForm<ExerciseSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: new Date(),
    },
  });

  function submitExerciseData(data: Exercise) {
    setExercises((prev: Exercise[]) => [...prev, data]);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(submitExerciseData)}
        className={styles.form}
      >
        <h2>{t("formTitle")}</h2>
        <div className={styles.mainContentWrapper}>
          <div className={styles.fieldsContainer}>
            {formFieldsConfig.map((field, i) => (
              <FormField
                type={field.type}
                key={i}
                label={`Enter ${field.name}`}
                registerTitle={field.name}
                placeholder={`Enter ${field.name}`}
                translationContext="addWorkout"
              />
            ))}
          </div>

          <div className={styles.timeInfoContainer}>
            <Controller
              control={methods.control}
              name="date"
              render={({ field }) => (
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  className={styles.calendar}
                />
              )}
            />
          </div>
        </div>
        <div className={styles.buttonsWrapper}>
          <Buttons />
        </div>
      </form>
    </FormProvider>
  );
}
