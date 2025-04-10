import { formErrorMessageBuilder } from "@/utils/functions";
import { useTranslations } from "next-intl";
import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

type FormFieldsProps = {
  placeholder: string;
  registerTitle: string;
  label?: string;
  translationContext: string;
  type: HTMLInputTypeAttribute;
};
export default function FormField({
  placeholder,
  registerTitle,
  label,
  translationContext,
  type,
}: FormFieldsProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const t = useTranslations(translationContext);
  if (label) {
    return (
      <>
        <label>
          <input type="radio" {...register(registerTitle)} />
          <p>{label}</p>
        </label>
        {errors[registerTitle] && (
          <span>
            {t(formErrorMessageBuilder(errors[registerTitle], registerTitle))}
          </span>
        )}
      </>
    );
  }
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        {...register(registerTitle)}
      />
      {errors[registerTitle] && (
        <span>
          t({formErrorMessageBuilder(errors[registerTitle], registerTitle)})
        </span>
      )}
    </>
  );
}
