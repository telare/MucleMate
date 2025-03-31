"use client";
import Button from "@/shared/components/buttons/Button";
import styles from "@shared/styles/components-styles/Form.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { z, ZodObject, ZodRawShape } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../../shared/components/FormField";
import { useRouter } from "next/navigation";
import Form from "next/form";
import { useTranslations } from "next-intl";

type AuthFormProps = {
  titleTexts: string[];
  schema: ZodObject<ZodRawShape>;
};

export default function AuthForm({ titleTexts, schema }: AuthFormProps) {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("auth");

  type Schema = z.infer<typeof schema>;

  const submitFnc = async (data: Schema) => {
    const resp = await fetch(`http://localhost:8080/auth/${pathname}`, data);
    if (resp.status === 201) return router.push("/personalization");
    router.push("/error");
  };

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const fields: string[] = Object.keys(schema._def.shape());
  return (
    <div className={styles.formCon}>
      <Form action="/home" onSubmit={methods.handleSubmit(submitFnc)}>
        {/* title */}
        <div className={styles.formCon__titleCon}>
          <h3>{titleTexts[0]}</h3>
          <p>{titleTexts[1]}</p>
        </div>
        {/* Social btns */}
        <div className={styles.formCon__socialBtns}>
          <Button fnc={() => {}} text="Twitter" type="button" />
          <Button fnc={() => {}} text="Google" type="button" />
        </div>
        <div className={styles.formCon__orCon}>
          <p>{t("or")}</p>
        </div>
        {/* inputs */}
        <FormProvider {...methods}>
          <div className={styles.formCon__inputFieldsCon}>
            {fields.map((field, i) => (
              <FormField
                translationContext="auth"
                key={i}
                placeholder={t(`form${field}Field`)}
                registerTitle={field}
                type="text"
              />
            ))}
          </div>
        </FormProvider>
        <div>
          <Button fnc={() => {}} text="Submit" type="submit" />
          <span>
            {pathname === "/sign-in" ? (
              <p>
                {t("withoutAccount")}{" "}
                <Link href="/sign-up">{t("titleSignUp")}</Link>
              </p>
            ) : (
              <p>
                {t("alreadyHaveAccount")}{" "}
                <Link href="/sign-in">{t("titleSignIn")}</Link>
              </p>
            )}
          </span>
        </div>
      </Form>
    </div>
  );
}
