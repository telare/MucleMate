"use client";
import styles from "@shared/styles/components-styles/CategoryDisplay.module.scss";
import Filter from "./Filter/Filter";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CardProps } from "./Carts/Card";
import { FieldValues } from "react-hook-form";
import FilterResultContentCarts from "./Filter/FilterResultContentCarts";
import SortBtn from "./SortBtn";

export default function CategoryDisplay() {
  // push this filter options into a body API / query params
  const [filterOptions, setFilterOptions] = useState<FieldValues | undefined>();
  const [activeSortmode, setActiveSortMode] = useState<string>("newest");
  const [renderContentAPI, setRenderContentAPI] = useState<
    Omit<CardProps, "linkPrefix">[]
  >([
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
  const title: string =
    typeof section === "string"
      ? (section as string).toUpperCase().split("-").join(" ")
      : "";
  return (
    <div className={styles.category}>
      <div className={styles.titleContainer}>
        <h1>{title}</h1>
      </div>

      <div className={styles.contentWrapper}>
        {/* inside standalone component */}
        <div className={styles.controlsBar}>
          {/* <Filter categories={filterData} setFilterOptions={setFilterOptions} /> */}

          <SortBtn
            setActiveSortMode={setActiveSortMode}
            activeSortMode={activeSortmode}
          />
        </div>

        <div className={styles.filterContainer}>
          <Filter categories={filterData} setFilterOptions={setFilterOptions} />
        </div>
        <FilterResultContentCarts
          renderContent={renderContentAPI}
          cardLinkPrefix={section as string}
        />
      </div>
    </div>
  );
}
