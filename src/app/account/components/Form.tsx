"use client";
import FormField from "@/shared/components/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "../Account.module.scss";
import { PersonalizationSchemas } from "@/app/personalization/utils/data";
import AccountFormButtons from "./Buttons";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  getAll,
  setAll,
  User,
  UserGeneralInfoKeys,
  UserMetricsInfoKeys,
} from "@/lib/features/userSlice";
import { data } from "@/app/auth/utils/data";
import { useTranslations } from "next-intl";
import { generalFieldsConfig, metricsConfig } from "../utils/utils";
import { customToast } from "@/shared/components/toast/utils/notificationsBuilder";
import { RootState } from "@/lib/store";

export default function Form() {
  const t = useTranslations("account");
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);
  const userStoreData = useAppSelector((state: RootState) => state.user);
  // console.log(userStoreData)
  const userAccountSchema = PersonalizationSchemas[0]
    .merge(PersonalizationSchemas[1])
    .merge(
      data["sign-up"].schema.pick({
        username: true,
        email: true,
      })
    );

  type UserAccountSchema = z.infer<typeof userAccountSchema>;
  const methods = useForm<UserAccountSchema>({
    resolver: zodResolver(userAccountSchema),
  });
  const token = localStorage.getItem("token");
  async function submitData(userFormData: UserAccountSchema) {
    const resp = await fetch(
      `http://localhost:8080/users/${userStoreData.generalInfo.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userFormData),
      }
    );
    if (resp.ok) {
      dispatch(setAll(userFormData as User));
      setEditMode(false);
      customToast("Account detailes updated!", "success");
    } else {
      customToast("Account detailes failed!", "error");
    }
  }

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
                ({ field, registerTitle, type, translationContext }) => (
                  <div key={registerTitle} className={styles.formField}>
                    <FormField
                      registerTitle={registerTitle}
                      type={type}
                      defaultValue={
                        userStoreData.generalInfo[field as UserGeneralInfoKeys]
                      }
                      label={`form${registerTitle}Field`}
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
              {metricsConfig.map(({ field, registerTitle, type }) => (
                <div key={registerTitle} className={styles.formField}>
                  <FormField
                    registerTitle={registerTitle}
                    type={type}
                    defaultValue={String(
                      userStoreData.metrics[field as UserMetricsInfoKeys]
                    )}
                    label={`form${registerTitle}Field`}
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
