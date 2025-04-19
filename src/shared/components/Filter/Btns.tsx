"use client";
import { useFormContext } from "react-hook-form";
import Button from "../buttons/Button";
import styles from "@shared/styles/components-styles/Filter.module.scss";

export default function FilterBtns() {
  const { reset } = useFormContext();
  return (
    <div className={styles.filter__buttonsCon}>
      <Button
        type="submit"
        translation={{
          context: "common",
          key: "submitBtn",
        }}
        className={styles.filter__buttonsCon__btn}
      />
      <Button
        type="reset"
        translation={{
          context: "common",
          key: "cancelBtn",
        }}
        className={styles.filter__buttonsCon__btn}
        onClick={() => reset()}
      />
    </div>
  );
}
