"use client";
import styles from "@shared/styles/components-styles/Filter.module.scss";
import { useMediaQuery } from "usehooks-ts";
import FilterBtns from "./Btns";
import FilterCategory from "./Category";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import Button from "../buttons/Button";
import { useState } from "react";
import { FilterIcon } from "@/utils/icons/Icons";
import { useTranslations } from "next-intl";

type FilterProps = {
  categories: {
    title: string;
    options: {
      label: string;
      value: string;
    }[];
  }[];
  setFilterOptions: (data: string[] | undefined) => void;
};
export default function Filter({ categories, setFilterOptions }: FilterProps) {
  const isMobile = useMediaQuery("(max-width: 420px)");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const methods = useForm();
  const t = useTranslations("category");

  function submitData(data: FieldValues) {
    const formattedFilterOptions = Object.entries(data).map(
      (option) => `${option[0].toLowerCase().split(" ").join("")}=${option[1]}`
    );
    setFilterOptions(formattedFilterOptions);
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
                title={t(
                  `filterOptionsTitle${category.title.split(" ").join("")}`
                )}
              />
            ))}
            <FilterBtns />
          </FormProvider>
        </form>
      )}
    </div>
  );
}
