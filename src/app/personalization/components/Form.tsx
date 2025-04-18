"use client";
import styles from "../Personalization.module.scss";
import { z, ZodEnum, ZodObject, ZodRawShape } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@shared/components/FormField";
import { useRouter } from "next/navigation";
import Form from "next/form";
import { useTranslations } from "next-intl";
import Button from "@/shared/components/buttons/Button";

interface PersonalizationFormProps {
  titleText: string[];
  schema: ZodObject<ZodRawShape>;
}

export default function PersonalizationForm({
  titleText,
  schema,
}: PersonalizationFormProps) {
  const router = useRouter();
  const t = useTranslations("personalization");
  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const fields: string[] = Object.keys(schema._def.shape());
  type Schema = z.infer<typeof schema>;

  const submitFnc = async (data: Schema) => {
    const resp = await fetch("http://localhost:8080/personalization", data);
    if (resp.status === 201) return router.push("/home");
    router.push("/error");
  };

  return (
    <div className={styles.formCon}>
      <Form action="" onSubmit={methods.handleSubmit(submitFnc)}>
        {/* title */}
        <div className={styles.titleCon}>
          <h3>{t(titleText[0])}</h3>
          <p>{t(titleText[1])}</p>
        </div>
        {/* inputs */}
        <FormProvider {...methods}>
          <div className={styles.inputFieldsCon}>
            {fields.map((field, i) => {
              if (schema.shape[field] instanceof ZodEnum) {
                const labels: string[] = schema.shape[field]._def.values;
                return labels.map((label, j) => (
                  <FormField
                    translationContext="personalization"
                    key={j}
                    placeholder={t(`form${field}FieldOption${j + 1}`)}
                    registerTitle={field}
                    label={label}
                    type={"radio"}
                  />
                ));
              } else {
                return (
                  <FormField
                    translationContext="personalization"
                    key={i}
                    placeholder={t(`form${field}FieldOption${i + 1}`)}
                    registerTitle={field}
                    label={field}
                    type="text"
                  />
                );
              }
            })}
          </div>
        </FormProvider>
        <div className={styles.btnsCon}>
          <Button type="submit" text="Submit" />
        </div>
      </Form>
    </div>
  );
}
