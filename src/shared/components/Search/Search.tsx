"use client";
import { SearchBtnIcon } from "@/utils/icons/Icons";
import styles from "@shared/styles/components-styles/Search.module.scss";
import Button from "../buttons/Button";
import { MouseEvent, useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>("");
  function searchSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // fetch(`?q=${searchValue}`);

    // if status code 201, redirect to /workouts/search-results?id=id-from-response with this query in URL
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Pull-ups, plank ..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
      />
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
