"use client";
import styles from "@shared/styles/components-styles/Filter.module.scss";
import FilterBtns from "./Btns";
import FilterCategory from "./Category";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

type FilterProps = {
  categories: {
    title: string;
    options: string[];
  }[];
  setFilterOptions: (data: FieldValues | undefined) => void;
};
export default function Filter({ categories, setFilterOptions }: FilterProps) {
  const methods = useForm();
  
  function submitData(data: FieldValues) {
    setFilterOptions(Object.values(data));
  }
  return (
    <form className={styles.filter} onSubmit={methods.handleSubmit(submitData)}>
      <FormProvider {...methods}>
        {categories.map((category, i) => (
          <FilterCategory
            key={i}
            options={category.options}
            title={category.title}
          />
        ))}
        <FilterBtns />
      </FormProvider>
    </form>
  );
}
