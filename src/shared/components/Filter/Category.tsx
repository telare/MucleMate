"use client";
import styles from "@shared/styles/components-styles/Filter.module.scss";
import FormField from "../FormField";
interface FilterCategory {
  title: string;
  options: string[];
}
export default function FilterCategory({ title, options }: FilterCategory) {
  return (
    <div className={styles.item}>
      <h6>{title}</h6>
      <div className={styles.optionsCon}>
        {options.map((opt, i) => (
          <div className={styles.option} key={i}>
            <FormField
              placeholder=""
              registerTitle={title}
              translationContext="category"
              type="checkbox"
              label={opt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
