import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export function errorMessageBuilder(
  errorType: FieldError | Merge<FieldError, FieldErrorsImpl>,
  registerTitle: string
): string {
  switch (errorType.type) {
    case "invalid_type":
    case "invalid_string":
      return `form${registerTitle}FieldInvalidError`;
    case "too_small":
      return `form${registerTitle}FieldMinError`;
    case "too_big":
      return `form${registerTitle}FieldMaxError`;
    case "required":
      return `form${registerTitle}FieldRequiredError`;
    default:
      return "";
  }
}
