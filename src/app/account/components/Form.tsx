"use client";

import FormField from "@/shared/components/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "../Account.module.scss";
import { PersonalizationSchemas } from "@/app/personalization/utils/data";
import AccountFormButtons from "./Buttons";
import { useState } from "react";

export default function Form() {
  const [editMode, setEditMode] = useState<boolean>(false);
  const userAccountSchema = PersonalizationSchemas[0].merge(
    PersonalizationSchemas[1]
  );
  const userDataFields = {
    general: ["UserName", "Email", "Age"],
    physical: ["Weight", "Height", "Goal", "Phycial Activity Level"],
  };

  type UserAccountSchema = z.infer<typeof userAccountSchema>;
  const methods = useForm<UserAccountSchema>({
    resolver: zodResolver(userAccountSchema),
  });
  return (
    <FormProvider {...methods}>
      <form className={styles.account__Content__ProfileDataCon__FormCon}>
        <div
          className={
            styles.account__Content__ProfileDataCon__FormCon__FormFieldsCon
          }
        >
          {userDataFields.general.map((field, i) => (
            <div
              className={
                styles.account__Content__ProfileDataCon__FormCon__FormFieldsCon__FormField
              }
              key={i}
            >
              <label htmlFor={field}>{field}</label>
              <FormField
                placeholder={field}
                registerTitle={field}
                type="text"
                disabled={editMode}
                translationContext="personalization"
              />
            </div>
          ))}
          {userDataFields.physical.map((field, i) => (
            <div
              className={
                styles.account__Content__ProfileDataCon__FormCon__FormFieldsCon__FormField
              }
              key={i}
            >
              <label htmlFor={field}>{field}</label>
              <FormField
                placeholder={field}
                registerTitle={field}
                type="text"
                disabled={editMode}
                translationContext="personalization"
              />
            </div>
          ))}
        </div>

        <div
          className={styles.account__Content__ProfileDataCon__FormCon__BtnsCon}
        >
          <AccountFormButtons editMode={editMode} setEditMode={setEditMode} />
        </div>
      </form>
    </FormProvider>
  );
}
