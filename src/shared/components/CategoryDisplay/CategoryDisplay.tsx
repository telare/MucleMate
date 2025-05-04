"use client";
import styles from "@shared/styles/components-styles/CategoryDisplay.module.scss";
import Filter from "../Filter/Filter";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CardProps } from "../Cards/Card";
import FilterResultContentCards from "../Filter/FilterResultContentCards";
import ControlsBar from "../Filter/ControlsBar";
import { filterData, initialrenderContentAPIState } from "./utils/utils";
import { useTranslations } from "next-intl";
import { customToast } from "../toast/utils/notificationsBuilder";

export default function CategoryDisplay() {
  // push this filter options into a body API / query params
  const [filterOptions, setFilterOptions] = useState<string[] | undefined>();
  const [activeSortMode, setActiveSortMode] = useState<string>("newest");
  const [renderContentAPI, setRenderContentAPI] = useState<
    Omit<CardProps, "linkPrefix">[]
  >(initialrenderContentAPIState);
  const { section } = useParams();
  const t = useTranslations("category");

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // async function fetchExercises({
  //   id,
  //   filterOptions,
  // }: {
  //   id?: string;
  //   filterOptions?: string[];
  // }): Promise<CardProps, "linkPrefix">[]> {
  //   if (id) {
  //     const resp = await fetch("http://localhost:8080/exercises");
  //     return resp.json();
  //   }
  //   const resp = await fetch(
  //     `http://localhost:8080/exercises?${(filterOptions as string[]).join("&")}`
  //   );
  //   return resp.json();
  // }

  // useEffect(() => {
  //   if (id) {
  //     try {
  //       fetchExercises({ id })
  //         .then((data) => setRenderContentAPI(data))
  //         .catch((e) => {
  //           throw new Error(e);
  //         });
  //     } catch (e) {
  //       customToast(`Error in fetching: ${e}`, "error");
  //     }
  //   }
  // }, [id]);

  // useEffect(() => {
  //   if (filterOptions) {
  //     try {
  //       fetchExercises({filterOptions})
  //         .then((data) => setRenderContentAPI(data))
  //         .catch((e) => {
  //           throw new Error(e);
  //         });
  //     } catch (e) {
  //       customToast(`Error in fetching: ${e}`, "error");
  //     }
  //   }
  // }, [filterOptions]);

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
