import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

type FormFieldsProps = {
  placeholder: string;
  registerTitle:string;
  type: "text" | "email" | "password";
};
export default function FormField({ placeholder, registerTitle, type }: FormFieldsProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const t = useTranslations("auth");
  return (
    <>
      <input placeholder={placeholder} type={type} {...register(registerTitle)} />
      {errors[registerTitle] && <span>{t(`form${registerTitle}FieldError`)}</span>}
    </>
  );
}
