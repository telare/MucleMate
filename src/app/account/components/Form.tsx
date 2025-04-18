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
    physical: ["Weight", "Height", "Goal", "Physical Activity Level"],
  };

  type UserAccountSchema = z.infer<typeof userAccountSchema>;

  const methods = useForm<UserAccountSchema>({
    resolver: zodResolver(userAccountSchema),
  });

  return (
    <FormProvider {...methods}>
      <form className={styles.formContainer}>
        <div className={styles.sectionsWrapper}>
          {/* <div className={styles.sectionGroup}>
            <h1 className={styles.sectionTitle}>General Information</h1>
            <div className={styles.fieldsGroup}>
              {userDataFields.general.map((field, i) => (
                <div className={styles.formField} key={i}>
                  <label htmlFor={field}>{field}</label>
                  <FormField
                    placeholder={field}
                    registerTitle={field}
                    type="text"
                    disabled={!editMode}
                    translationContext="personalization"
                  />
                </div>
              ))}
            </div>
          </div> */}
          <div className={styles.sectionGroup}>
            <h1>General Information</h1>
            <div className={styles.fieldsGroup}>
              {userDataFields.general.map((field, i) => (
                <div className={styles.formField} key={i}>
                  <label htmlFor={field}>{field}</label>
                  <FormField
                    placeholder={field}
                    registerTitle={field}
                    type="text"
                    disabled={!editMode}
                    translationContext="personalization"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sectionGroup}>
            <h1>Physical Information</h1>
            <div className={styles.fieldsGroup}>
              {userDataFields.physical.map((field, i) => (
                <div className={styles.formField} key={i}>
                  <label htmlFor={field}>{field}</label>
                  <FormField
                    placeholder={field}
                    registerTitle={field}
                    type="text"
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
