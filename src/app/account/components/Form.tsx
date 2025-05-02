"use client";
import FormField from "@/shared/components/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "../Account.module.scss";
import { PersonalizationSchemas } from "@/app/personalization/utils/data";
import AccountFormButtons from "./Buttons";
import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import {
  getAll,
  UserGeneralInfoKeys,
  UserMetricsInfoKeys,
} from "@/lib/features/userSlice";
import { data } from "@/app/auth/utils/data";
import { useTranslations } from "next-intl";
import { generalFieldsConfig, metricsConfig } from "../utils/utils";


export default function Form() {
  const t = useTranslations("account");
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
  function submitData(data: UserAccountSchema) {}

  return (
    <FormProvider {...methods}>
      <form
        className={styles.formContainer}
        onSubmit={methods.handleSubmit(submitData)}
      >
        <div className={styles.sectionsWrapper}>
          <div className={styles.sectionGroup}>
            <h1>{t("generalInformationTitle")}</h1>
            <div className={styles.fieldsGroup}>
              {generalFieldsConfig.map(
                ({ field, registerTitle, label, type, translationContext }) => (
                  <div key={registerTitle} className={styles.formField}>
                    <FormField
                      placeholder={
                        userData.generalInfo[field as UserGeneralInfoKeys]
                      }
                      registerTitle={registerTitle}
                      type={type}
                      label={`form${label}Field`}
                      disabled={!editMode}
                      translationContext={translationContext}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className={styles.sectionGroup}>
            <h1>{t("physicalInformationTitle")}</h1>
            <div className={styles.fieldsGroup}>
              {metricsConfig.map(({ field, registerTitle, label, type }) => (
                <div key={registerTitle} className={styles.formField}>
                  <FormField
                    placeholder={String(
                      userData.metrics[field as UserMetricsInfoKeys]
                    )}
                    registerTitle={registerTitle}
                    type={type}
                    label={`form${label}Field`}
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
