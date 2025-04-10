"use client";
import styles from "@shared/styles/components-styles/Form.module.scss";
import { z, ZodEnum, ZodObject, ZodRawShape } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@shared/components/FormField";
import { useRouter } from "next/navigation";
import Form from "next/form";
import { useTranslations } from "next-intl";
import Button from "@/shared/components/buttons/Button";

type PersonalizationFormProps = {
  titleTexts: string[];
  schema: ZodObject<ZodRawShape>;
};

export default function PersonalizationForm({
  titleTexts,
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
        <div className={styles.formCon__titleCon}>
          <h3>{titleTexts[0]}</h3>
          <p>{titleTexts[1]}</p>
        </div>
        {/* inputs */}
        <FormProvider {...methods}>
          <div className={styles.formCon__inputFieldsCon}>
            {fields.map((field) => {
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
              }
            })}
          </div>
        </FormProvider>
        <div className={styles.formCon__btnsCon}>
          <Button type="submit" text="Submit" />
        </div>
      </Form>
    </div>
  );
}
