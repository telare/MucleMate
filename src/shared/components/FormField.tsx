import { useTranslations } from "next-intl";
import { HTMLInputTypeAttribute } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  useFormContext,
} from "react-hook-form";

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
  function errorMessageBuilder(
    errorType: FieldError | Merge<FieldError, FieldErrorsImpl>,
    registerTitle: string
  ): string {
    switch (errorType.type) {
      case "invalid_type":
      case "invalid_string":
        return t(`form${registerTitle}FieldInvalidError`);
      case "too_small":
        return t(`form${registerTitle}FieldMinError`);
      case "too_big":
        return t(`form${registerTitle}FieldMaxError`);
      case "required":
        return t(`form${registerTitle}FieldRequiredError`);
      default:
        return "";
    }
  }
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
            {errorMessageBuilder(errors[registerTitle], registerTitle)}
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
        <span>{errorMessageBuilder(errors[registerTitle], registerTitle)}</span>
      )}
    </>
  );
}
