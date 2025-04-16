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
        text="Submit"
        style={styles.filter__buttonsCon__btn}
      />
      <Button
        type="reset"
        text="Reset"
        style={styles.filter__buttonsCon__btn}
        fnc={()=>reset()}
      />
    </div>
  );
}
