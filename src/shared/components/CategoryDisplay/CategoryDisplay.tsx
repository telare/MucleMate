"use client";
import styles from "@shared/styles/components-styles/CategoryDisplay.module.scss";
import Filter from "../Filter/Filter";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CardData } from "../Cards/Card";
import FilterResultContentCards from "../Filter/FilterResultContentCards";
import ControlsBar from "../Filter/ControlsBar";
import { filterData, initialrenderContentAPIState } from "./utils/utils";
import { useTranslations } from "next-intl";
import { customToast } from "../toast/utils/notificationsBuilder";

export default function CategoryDisplay() {
  // push this filter options into a body API / query params
  const [filterOptions, setFilterOptions] = useState<string[] | undefined>();
  const [activeSortMode, setActiveSortMode] = useState<string>("newest");
  const [renderContentAPI, setRenderContentAPI] = useState<CardData[]>(
    initialrenderContentAPIState
  );
  const { section } = useParams();
  const t = useTranslations("category");

  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  // const searchParams = useSearchParams();
  // const searchQuery = searchParams.get("q");
  const token = localStorage.getItem("token");

  async function fetchExercises({
    id,
    filterOptions,
  }: {
    id?: string;
    filterOptions?: string[];
  }): Promise<CardData[]> {
    let fetchURL: string = "http://localhost:8080/exercises";
    if (id || filterOptions) {
      // console.log(id || filterOptions);
      fetchURL = `http://localhost:8080/exercises${id ? `/${id}` : `?${(filterOptions as string[]).join("&")}`}`;
      // console.log(fetchURL)
    }
    const resp = await fetch(
      // `http://localhost:8080/exercises${id ? `?${(filterOptions as string[]).join("&")}` : ""}`,
      fetchURL,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await resp.json();
    return data.data.content;
  }

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

  useEffect(() => {
    if (filterOptions) {
      try {
        fetchExercises({ filterOptions })
          .then((data) => setRenderContentAPI(data))
          .catch((e) => {
            throw new Error(e);
          });
      } catch (e) {
        customToast(`Error in fetching: ${e}`, "error");
      }
    } else {
      try {
        fetchExercises({})
          .then((data) => setRenderContentAPI(data))
          .catch((e) => {
            throw new Error(e);
          });
      } catch (e) {
        customToast(`Error in fetching: ${e}`, "error");
      }
    }
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
        <FilterResultContentCards renderContent={renderContentAPI} />
      </div>
    </div>
  );
}
