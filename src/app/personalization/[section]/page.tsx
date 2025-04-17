"use client";
import { useParams } from "next/navigation";
import PersonalizationForm from "../components/Form";
import {
  PersonalizationSchemas,
  titles,
} from "../utils/data";

export default function PersonalizatonPage() {
  const { section } = useParams();
  const index: number = Number(section) - 1;

  return (
    <PersonalizationForm
      schema={PersonalizationSchemas[index]}
      titleText={titles[index]}
    />
  );
}
