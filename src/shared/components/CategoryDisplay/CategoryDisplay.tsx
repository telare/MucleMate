"use client";
import styles from "@shared/styles/components-styles/CategoryDisplay.module.scss";
import Filter from "../Filter/Filter";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CardProps } from "../Cards/Card";
import { FieldValues } from "react-hook-form";
import FilterResultContentCards from "../Filter/FilterResultContentCards";
import ControlsBar from "../Filter/ControlsBar";
import { filterData, initialrenderContentAPIState } from "./utils/utils";
import { useTranslations } from "next-intl";

export default function CategoryDisplay() {
  // push this filter options into a body API / query params
  const [filterOptions, setFilterOptions] = useState<FieldValues | undefined>();
  const [activeSortMode, setActiveSortMode] = useState<string>("newest");
  const [renderContentAPI, setRenderContentAPI] = useState<
    Omit<CardProps, "linkPrefix">[]
  >(initialrenderContentAPIState);
  const { section } = useParams();
  const t = useTranslations("category");

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    // 1. Check for id, if true fetch only that card
    // 2. Update current renderContentAPI
  }, []);

  useEffect(() => {
    // 1. Based on filter fetch cards' data
    // 2. Update renderContentAPI
  }, [filterOptions]);

  const title: string =
    typeof section === "string"
      ? (section as string).toLowerCase().split("-").join("")
      : "";

  return (
    <div className={styles.category}>
      <div className={styles.titleContainer}>
        <h1>{t(`title${title}`)}</h1>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.controlsBar}>
          <ControlsBar
            activeSortMode={activeSortMode}
            setActiveSortMode={setActiveSortMode}
          />
        </div>

        <div className={styles.filterContainer}>
          <Filter categories={filterData} setFilterOptions={setFilterOptions} />
        </div>
        <FilterResultContentCards
          renderContent={renderContentAPI}
          cardLinkPrefix={section as string}
        />
      </div>
    </div>
  );
}
