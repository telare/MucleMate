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

export default function Form() {
  const t = useTranslations("account");
  const dispatch = useAppDispatch();
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
  async function submitData(data: UserAccountSchema) {
    const req = fetch(
      `http://localhost:8080/users/${userData.generalInfo.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      }
    );
    const resp = await req;
    if (resp.status === 200) {
      dispatch(setAll(data as User));
      setEditMode(false);
      customToast("Account detailes updated!", "success");
    }else{
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
                ({ field, registerTitle, label, type, translationContext }) => (
                  <div key={registerTitle} className={styles.formField}>
                    <FormField
                      registerTitle={registerTitle}
                      type={type}
                      defaultValue={
                        userData.generalInfo[field as UserGeneralInfoKeys]
                      }
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
                    registerTitle={registerTitle}
                    type={type}
                    defaultValue={String(
                      userData.metrics[field as UserMetricsInfoKeys]
                    )}
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
