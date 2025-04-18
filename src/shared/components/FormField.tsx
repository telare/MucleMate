import { formErrorMessageBuilder } from "@/utils/functions";
import { useTranslations } from "next-intl";
import { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";
import styles from "@shared/styles/components-styles/FormField.module.scss";
interface FormFieldsProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  registerTitle: string;
  translationContext: string;

  label?: string;
  disabled?: boolean;
}

export default function FormField({
  placeholder,
  registerTitle,
  label,
  translationContext,
  type,
  disabled,
}: FormFieldsProps) {
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
      <div className={styles.mainCon__FieldCon}>
        {label && <label htmlFor={registerTitle}>{label}</label>}
        <input
          id={registerTitle}
          placeholder={placeholder}
          type={type}
          value={label}
          aria-invalid={!!errors[registerTitle]}
          aria-describedby={
            errors[registerTitle] && `formFieldError${registerTitle}`
          }
          disabled={disabled}
          {...register(registerTitle)}
        />
      </div>
      {errors[registerTitle] && (
        <span id={`formFieldError${registerTitle}`}>{errorMsg}</span>
      )}
    </div>
  );
}
