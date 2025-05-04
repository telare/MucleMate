"use client";
import styles from "../Personalization.module.scss";
import { z, ZodEnum, ZodObject, ZodRawShape } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@shared/components/FormField";
import { useParams,  useRouter } from "next/navigation";
import Form from "next/form";
import { useTranslations } from "next-intl";
import Button from "@/shared/components/buttons/Button";
import { useAppDispatch } from "@/lib/hooks";

interface PersonalizationFormProps {
  titleText: string[];
  schema: ZodObject<ZodRawShape>;
}

export default function PersonalizationForm({
  titleText,
  schema,
}: PersonalizationFormProps) {
  const router = useRouter();
  const { section } = useParams();
  const t = useTranslations("personalization");
  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const fields: string[] = Object.keys(schema._def.shape());
  type Schema = z.infer<typeof schema>;
  const nextPath = section === "1" ? "/personalization/2" : "/home";

  const submitFnc = async (data: Schema) => {
    //dispacth user id
    const resp = await fetch(`http://localhost:8080/personalization/${section}/${id}`, data);
    if (resp.status === 201) {
      // dispatch data to store 
      router.push(nextPath);
    }
    router.push("/error");
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
