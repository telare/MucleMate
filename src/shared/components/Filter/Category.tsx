"use client";
import styles from "@shared/styles/components-styles/Filter.module.scss";
import FormField from "../FormField";
interface FilterCategory {
  title: string;
  options: string[];
}
export default function FilterCategory({ title, options }: FilterCategory) {
  return (
    <div className={styles.filter__item}>
      <h6>{title}</h6>
      <div className={styles.filter__item__optionsCon}>
        {options.map((opt, i) => (
          <div className={styles.filter__item__optionsCon__option} key={i}>
            {/* <label>
                <input type="checkbox"/>
                {opt}
              </label> */}
            <FormField
              placeholder=""
              registerTitle={title}
              translationContext="categoryFilter"
              type="checkbox"
              label={opt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
