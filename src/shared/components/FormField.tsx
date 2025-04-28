import { formErrorMessageBuilder } from "@/utils/functions";
import { useTranslations } from "next-intl";
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styles from "@shared/styles/components-styles/FormField.module.scss";
interface FormFieldsProps {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  registerTitle: string;
  translationContext: string;

  value?: string | number;
  label?: string;
  disabled?: boolean;
}

export default function FormField({
  placeholder,
  registerTitle,
  label,
  value,
  translationContext,
  type,
  disabled,
  ...rest
}: FormFieldsProps & InputHTMLAttributes<HTMLInputElement>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const t = useTranslations(translationContext);
  const errorMsg = errors[registerTitle]
    ? t(formErrorMessageBuilder(errors[registerTitle], registerTitle))
    : null;
  return (
    <div className={styles.mainCon}>
      <div className={styles.fieldCon}>
        {label && <label htmlFor={registerTitle}>{label}</label>}
        <input
          id={registerTitle}
          placeholder={placeholder && placeholder}
          type={type}
          defaultValue={value && value}
          aria-invalid={!!errors[registerTitle]}
          aria-describedby={
            errors[registerTitle] && `formFieldError${registerTitle}`
          }
          disabled={disabled}
          {...register(registerTitle)}
          {...rest}
        />
      </div>
      {errors[registerTitle] && (
        <span id={`formFieldError${registerTitle}`}>{errorMsg}</span>
      )}
    </div>
  );
}
