"use client";
import styles from "../Personalization.module.scss";
import { z, ZodEnum, ZodObject, ZodRawShape } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@shared/components/FormField";
import { useParams, useRouter } from "next/navigation";
import Form from "next/form";
import { useTranslations } from "next-intl";
import Button from "@/shared/components/buttons/Button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { setGender, setGoal, setMetrics, User } from "@/lib/features/userSlice";

interface PersonalizationFormProps {
  titleText: string[];
  schema: ZodObject<ZodRawShape>;
}

export default function PersonalizationForm({
  titleText,
  schema,
}: PersonalizationFormProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userId = useAppSelector(
    (state: RootState) => state.user.generalInfo.id
  );

  const { section } = useParams();
  const t = useTranslations("personalization");
  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const fields: string[] = Object.keys(schema._def.shape());
  type Schema = z.infer<typeof schema>;
  const nextPath = section === "1" ? "/personalization/2" : "/home";
  const token = localStorage.getItem("token");
  const submitFnc = async (userFormData: Schema) => {
    const resp = await fetch(
      `http://localhost:8080/personalization/${section}/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(userFormData),
      }
    );
    if (resp.ok) {
      if (section === "1") {
        dispatch(setGoal(userFormData.goal));
        dispatch(setGender(userFormData.gender));
      }else{
        dispatch(setMetrics(userFormData as User["metrics"]));
      }
      
      router.push(nextPath);
    } else {
      router.push("/error");
    }
  };

  return (
    <div className={styles.formContainer}>
      <FormProvider {...methods}>
        <Form action="" onSubmit={methods.handleSubmit(submitFnc)}>
          {/* title */}
          <div className={styles.titleContainer}>
            <h3>{t(titleText[0])}</h3>
            <p>{t(titleText[1])}</p>
          </div>
          {/* inputs */}
          <div className={styles.inputFieldsContainer}>
            {fields.map((field, i) => {
              if (schema.shape[field] instanceof ZodEnum) {
                const labels: string[] = schema.shape[field]._def.values;
                return labels.map((label, j) => (
                  <FormField
                    translationContext="personalization"
                    key={j}
                    value={label}
                    registerTitle={field}
                    label={`form${field}FieldOption${j + 1}`}
                    type={"radio"}
                    defaultChecked={j % 2 === 0 && true}
                  />
                ));
              } else {
                return (
                  <FormField
                    translationContext="personalization"
                    key={i}
                    placeholder={t(`form${field}Field`)}
                    registerTitle={field}
                    type="number"
                  />
                );
              }
            })}
          </div>
          <div className={styles.btnsContainer}>
            <Button
              type="submit"
              translation={{ context: "common", key: "submitBtn" }}
            />
          </div>
        </Form>
      </FormProvider>
    </div>
  );
}
