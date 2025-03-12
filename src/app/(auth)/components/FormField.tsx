import { useFormContext } from "react-hook-form";

type FormFieldsProps = {
  placeholder: string;
  type: "text" | "email" | "password";
};
export default function FormField({ placeholder, type }: FormFieldsProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input placeholder={placeholder} type={type} {...register(placeholder)} />
      {errors[placeholder] && <span>{errors[placeholder].message as string}</span>}
    </>
  );
}
