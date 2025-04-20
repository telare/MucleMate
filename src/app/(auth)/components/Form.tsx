"use client";
import styles from "../Auth.module.scss";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { z, ZodObject, ZodRawShape } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/shared/components/FormField";
import Form from "next/form";
import { useTranslations } from "next-intl";
import Button from "@/shared/components/buttons/Button";

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
    <div className={styles.formContainer}>
      <Form action="/home" onSubmit={methods.handleSubmit(submitFnc)}>
        {/* title */}
        <div className={styles.titleContainer}>
          <h3>{t(titleTexts[0])}</h3>
          <p>{t(titleTexts[1])}</p>
        </div>
        {/* Social btns */}
        <div className={styles.socialBtns}>
          <Button translation={{ context: "common", key: "socialBtnTwitter" }} />
          <Button translation={{ context: "common", key: "socialBtnGoogle" }} />
        </div>

        {/* replace to hr */}
        <div className={styles.orContainer}>
          <p>{t("or")}</p>
        </div>
        {/* inputs */}
        <FormProvider {...methods}>
          <div className={styles.inputFieldsContainer}>
            {fields.map((field, i) => (
              <FormField
                translationContainertext="auth"
                key={i}
                placeholder={t(`form${field}Field`)}
                registerTitle={field}
                type="text"
              />
            ))}
          </div>
        </FormProvider>
        <div className={styles.dontHaveAccountContainer}>
          <Button type="submit" translation={{ context: "common", key: "submitBtn" }} />
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
