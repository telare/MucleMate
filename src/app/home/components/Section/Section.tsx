"use client";
import styles from "../../Home.module.scss";
import { useTranslations } from "next-intl";
import CardsResult from "./CardsResult";
import { useEffect, useState } from "react";
import { CardData } from "@/shared/components/Cards/Card";
import { customToast } from "@/shared/components/toast/utils/notificationsBuilder";

interface SectionProps {
  title: string;
}

export default function Section({ title }: SectionProps) {
  const t = useTranslations("section");
  const token = localStorage.getItem("token");
  const [cardsData, setCardsData] = useState<CardData[]>([
    {
      id: 1,
      imageSrc: "./images/TestCardImg.png",
      title: "plank",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione perferendis animi laboriosam placeat consectetur aperiam temporibus est ullam provident, accusantium dolorum, expedita dolore eaque aliquam a adipisci. Containersectetur, consequuntur.",
    },
  ]);
  async function getCardsData(): Promise<CardData[]> {
    const resp = await fetch("http://localhost:8080/exercises", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const data = await resp.json();
    const content = data.data.content;
    return content;
  }
  useEffect(() => {
    try {
      getCardsData()
        .then((data) => setCardsData(data))
        .catch((e) => {
          throw new Error(e);
        });
    } catch (e) {
      customToast(`Error, try again. ${e}`, "error");
    }
    getCardsData();
  }, []);
  return (
    <section className={styles.section}>
      <h3>{t(`SectionTitle${title}`)}</h3>
      <CardsResult data={cardsData} />
    </section>
  );
}
