"use client";
import styles from "@shared/styles/components-styles/Filter.module.scss";
import { useMediaQuery } from "usehooks-ts";
import FilterBtns from "./Btns";
import FilterCategory from "./Category";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import Button from "../buttons/Button";
import { useEffect, useState } from "react";
import { FilterIcon } from "@/utils/icons/Icons";

type FilterProps = {
  categories: {
    title: string;
    options: string[];
  }[];
  setFilterOptions: (data: FieldValues | undefined) => void;
};
export default function Filter({ categories, setFilterOptions }: FilterProps) {
  const isMobile = useMediaQuery("(max-width: 420px)");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const methods = useForm();

  function submitData(data: FieldValues) {
    setFilterOptions(Object.values(data));
  }

  // useEffect(()=>{
  //   if (isMobile) setIsOpen(false);
  // },[isMobile]);
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.btnWrapper}>
        <Button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          icon={FilterIcon}
        />
      </div>
      {isOpen && (
        <form
          className={styles.filter}
          onSubmit={methods.handleSubmit(submitData)}
        >
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
      )}
    </div>
  );
}
