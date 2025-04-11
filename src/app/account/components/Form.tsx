"use client";

import FormField from "@/shared/components/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "../Account.module.scss";

export default function Form() {
  const mockData: string[] = [
    "UserName",
    "Email",
    "Age",
    "Weight",
    "Height",
    "Goal",
    "Phycial Activity Level",
  ];

  const userAccountSchema = z.object({
    userName: z.string().min(1, "UserName is required"),
    email: z.string().email("Invalid email address"),
    age: z.number().min(1, "Age is required"),
    weight: z.number().min(1, "Weight is required"),
    height: z.number().min(1, "Height is required"),
    goal: z.string().min(1, "Goal is required"),
    physicalActivityLevel: z
      .string()
      .min(1, "Physical Activity Level is required"),
  });

  type UserAccountSchema = z.infer<typeof userAccountSchema>;
  const methods = useForm<UserAccountSchema>({
    resolver: zodResolver(userAccountSchema),
  });
  return (
    <FormProvider {...methods}>
      <form className={styles.account__Content__ProfileDataCon}>
        {mockData.map((data, i) => (
          <div
            className={styles.account__Content__ProfileDataCon__Item}
            key={i}
          >
            <label htmlFor={data}>{data}</label>
            <FormField
              placeholder={data}
              registerTitle={data}
              type="text"
              disabled
              translationContext="personalization"
            />
          </div>
        ))}
      </form>
    </FormProvider>
  );
}
