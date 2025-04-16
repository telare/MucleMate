"use client";
import styles from "@shared/styles/components-styles/CategoryDisplay.module.scss";
import Filter from "./Filter/Filter";
import FilterResultContentCarts from "./Filter/FilterResultContentCarts";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CardProps } from "./Carts/Card";
import { FieldValues } from "react-hook-form";

export default function CategoryDisplay() {
  // push this filter options into a body API / query params
  const [filterOptions, setFilterOptions] = useState<FieldValues | undefined>();

  const [renderContentAPI, setRenderContentAPI] = useState<CardProps[]>([
    {
      id: 1,
      description: "",
      imgSrc: "",
      title: "",
    },
  ]);
  const { section } = useParams();

  const filterData = [
    {
      title: "category title 1",
      options: ["Option 1", "Option 1", "Option 1"],
    },
    {
      title: "category title 2",
      options: ["Option 1", "Option 1", "Option 1"],
    },
  ];

  useEffect(() => {
    // fetch data from API and upd filterOptions state and then upd setRenderContentAPI state
    // console.log("filterOptions",filterOptions);
  }, [filterOptions]);

  return (
    <div className={styles.category}>
      <div className={styles.category__TitleCon}>
        <h1>{(section as string).toUpperCase().split("-").join(" ")}</h1>
      </div>
      <div className={styles.category__ContentWrapper}>
        <div className={styles.category__ContentWrapper__FilterCon}>
          <Filter categories={filterData} setFilterOptions={setFilterOptions} />
        </div>
        <FilterResultContentCarts renderContent={renderContentAPI} />
      </div>
    </div>
  );
}
