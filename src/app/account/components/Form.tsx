"use client";
import FormField from "@/shared/components/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "../Account.module.scss";
import { PersonalizationSchemas } from "@/app/personalization/utils/data";
import AccountFormButtons from "./Buttons";
import {  useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import {
  getAll,
  UserGeneralInfoKeys,
  UserMetricsInfoKeys,
} from "@/lib/features/userSlice";
import { data } from "@/app/(auth)/utils/data";

const generalFieldsConfig = [
  {
    field: "name",
    registerTitle: "UserName",
    label: "Name",
    type: "text",
    translationContext: "auth",
  },
  {
    field: "email",
    registerTitle: "Email",
    label: "Email",
    type: "text",
    translationContext: "auth",
  },
  {
    field: "gender",
    registerTitle: "Gender",
    label: "Gender",
    type: "text",
    translationContext: "personalization",
  },
  {
    field: "goal",
    registerTitle: "Goal",
    label: "Goal",
    type: "text",
    translationContext: "personalization",
  },
];

const metricsConfig = [
  { field: "age", registerTitle: "Age", label: "Age", type: "number" },
  {
    field: "height",
    registerTitle: "Height",
    label: "Height",
    type: "number",
  },
  {
    field: "weight",
    registerTitle: "Weight",
    label: "Weight",
    type: "number",
  },
  {
    field: "ActivityLevel",
    registerTitle: "ActivityLevel",
    label: "Physical Activity Level",
    type: "number",
  },
];

export default function Form() {
  const [editMode, setEditMode] = useState(false);
  const userData = useAppSelector(getAll);
  const userAccountSchema = PersonalizationSchemas[0]
    .merge(PersonalizationSchemas[1])
    .merge(
      data["sign-up"].schema.pick({
        UserName: true,
        Email: true,
      })
    );

  type UserAccountSchema = z.infer<typeof userAccountSchema>;

  const methods = useForm<UserAccountSchema>({
    resolver: zodResolver(userAccountSchema),
  });
  function submitData(data: UserAccountSchema) {
  }

  return (
    <FormProvider {...methods}>
      <form
        className={styles.formContainer}
        onSubmit={methods.handleSubmit(submitData)}
      >
        <div className={styles.sectionsWrapper}>
          <div className={styles.sectionGroup}>
            <h1>General Information</h1>
            <div className={styles.fieldsGroup}>
              {generalFieldsConfig.map(
                ({ field, registerTitle, label, type, translationContext }) => (
                  <div key={registerTitle} className={styles.formField}>
                    <label htmlFor={registerTitle}>{label}</label>
                    <FormField
                      placeholder={
                        userData.generalInfo[field as UserGeneralInfoKeys]
                      }
                      registerTitle={registerTitle}
                      type={type}
                      disabled={!editMode}
                      translationContext={translationContext}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className={styles.sectionGroup}>
            <h1>Physical Information</h1>
            <div className={styles.fieldsGroup}>
              {metricsConfig.map(({ field, registerTitle, label, type }) => (
                <div key={registerTitle} className={styles.formField}>
                  <label htmlFor={registerTitle}>{label}</label>
                  <FormField
                    placeholder={String(
                      userData.metrics[field as UserMetricsInfoKeys]
                    )}
                    registerTitle={registerTitle}
                    type={type}
                    disabled={!editMode}
                    translationContext="personalization"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <AccountFormButtons editMode={editMode} setEditMode={setEditMode} />
        </div>
      </form>
    </FormProvider>
  );
}
