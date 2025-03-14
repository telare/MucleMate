"use client";
import Button from "@/shared/components/buttons/Button";
import styles from "../Form.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { z, ZodObject, ZodRawShape } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./FormField";
import { useRouter } from "next/navigation";
type AuthFormProps = {
  titleTexts: string[];
  schema: ZodObject<ZodRawShape>;
};
export default function AuthForm({ titleTexts, schema }: AuthFormProps) {
  const pathname = usePathname();
  const router = useRouter();
  const submitFnc = async () => {
    const resp = await fetch(`/auth/${pathname}`);
    if (resp.status === 201) return router.push("/home");
    router.push("/error");
  };

  type Schema = z.infer<typeof schema>;
  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const fields: string[] = Object.keys(schema._def.shape());
  return (
    <>
      <div className={styles.main__con}>
        <form onSubmit={methods.handleSubmit(submitFnc)}>
          {/* title */}
          <div className={styles.title__con}>
            <h3>{titleTexts[0]}</h3>
            <p>{titleTexts[1]}</p>
          </div>
          {/* Social btns */}
          <div className={styles.social__btns}>
            <Button fnc={() => {}} text="Twitter" type="button" />
            <Button fnc={() => {}} text="Google" type="button" />
          </div>
          <div className={styles.or__con}><p>or</p></div>
          {/* inputs */}
          <FormProvider {...methods}>
            <div className={styles.input_fields__con}>
              {fields.map((field, i) => (
                <FormField key={i} placeholder={field} type="text" />
              ))}
            </div>
          </FormProvider>
          <div>
            <Button fnc={() => {}} text="Submit" type="submit" />
            <span>
              {pathname === "/sign-in" ? (
                <p>
                  Don’t have account? <Link href="/sign-up">Sign Up</Link>
                </p>
              ) : (
                <p>
                  Do you have account? <Link href="/sign-in">Sign In</Link>
                </p>
              )}
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
