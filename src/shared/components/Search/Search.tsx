"use client";
import { SearchBtnIcon } from "@/utils/icons/Icons";
import styles from "@shared/styles/components-styles/Search.module.scss";
import Button from "../buttons/Button";
import { MouseEvent } from "react";
export default function Search() {
  function searchSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const userQuery: string = e.currentTarget.value;
    fetch(`?q=${userQuery}`);

    // if status code 201, redirect to /workouts/search-results?id=id-from-response with this query in URL
  }

  return (
    <div className={styles.search}>
      <input type="text" placeholder="Pull-ups, diet ..." />
      <div className={styles.btnCon}>
        <Button
          type="submit"
          onClick={(e) => searchSubmit(e)}
          icon={SearchBtnIcon}
        />
      </div>
    </div>
  );
}
