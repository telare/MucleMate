"use client";
import { Dispatch, SetStateAction } from "react";
import SortBtn from "../SortBtn";

interface ControlsBarProps {
  activeSortMode: string;
  setActiveSortMode: Dispatch<SetStateAction<string>>;
}

export default function ControlsBar({
  activeSortMode,
  setActiveSortMode,
}: ControlsBarProps) {
  return (
    <>
      {/* <Filter categories={filterData} setFilterOptions={setFilterOptions} /> */}

      <SortBtn
        setActiveSortMode={setActiveSortMode}
        activeSortMode={activeSortMode}
      />
    </>
  );
}
