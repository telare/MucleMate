"use client";
import Button from "@/shared/components/buttons/Button";
import { useFormContext } from "react-hook-form";

export default function Buttons() {
  const { reset } = useFormContext();
  return (
    <>
      <Button
        type="submit"
        translation={{ context: "common", key: "submitBtn" }}
      />
      <Button
        type="reset"
        translation={{ context: "common", key: "cancelBtn" }}
        onClick={() => reset()}
      />
    </>
  );
}
