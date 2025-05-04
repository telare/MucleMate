"use client";
import styles from "../Auth.module.scss";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { z, ZodObject, ZodRawShape } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/shared/components/FormField";
import Form from "next/form";
import { useTranslations } from "next-intl";
import Button from "@/shared/components/buttons/Button";
import { useAppDispatch } from "@/lib/hooks";
import { customToast } from "@/shared/components/toast/utils/notificationsBuilder";
import { setName } from "@/lib/features/userSlice";

type AuthFormProps = {
  titleTexts: string[];
  schema: ZodObject<ZodRawShape>;
};

export default function AuthForm({ titleTexts, schema }: AuthFormProps) {
  const { section } = useParams();
  const router = useRouter();
  const t = useTranslations("auth");
  const dispatch = useAppDispatch();
  type Schema = z.infer<typeof schema>;

  const submitFnc = async (data: Schema) => {
    // dispatch user id
    customToast("Auth passed successfuly, wellcome!", "success");
    router.push("/personalization/1");
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
          <Button
            translation={{ context: "common", key: "socialBtnTwitter" }}
          />
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
                translationContext="auth"
                key={i}
                placeholder={t(`form${field}Field`)}
                registerTitle={field}
                type="text"
              />
            ))}
          </div>
        </FormProvider>
        <div className={styles.dontHaveAccountContainer}>
          <Button
            type="submit"
            translation={{ context: "common", key: "submitBtn" }}
          />
          <span>
            {section === "sign-in" ? (
              <p>
                {t("withoutAccount")}{" "}
                <Link href="sign-up">{t("titleSignUp")}</Link>
              </p>
            ) : (
              <p>
                {t("alreadyHaveAccount")}{" "}
                <Link href="sign-in">{t("titleSignIn")}</Link>
              </p>
            )}
          </span>
        </div>
      </Form>
    </div>
  );
}
