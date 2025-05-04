"use client";
import styles from "@shared/styles/components-styles/Filter.module.scss";
import FormField from "../FormField";
interface FilterCategory {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
}
export default function FilterCategory({ title, options }: FilterCategory) {
  return (
    <div className={styles.item}>
      <h6>{title}</h6>
      <div className={styles.optionsCon}>
        {options.map((opt, i) => (
          <div className={styles.option} key={i}>
            <FormField
              registerTitle={title}
              translationContext="category"
              type="checkbox"
              defaultValue={opt.value}
              label={`filterOption${opt.label.split(" ").join("")}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
