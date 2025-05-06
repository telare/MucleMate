import Card, { CardData } from "@/shared/components/Cards/Card";
import styles from "../../Home.module.scss";

interface CardsResult {
  data: CardData[];
}
export default function CardsResult({ data }: CardsResult) {
  return (
    <div className={styles.cardsContainer}>
      {data.map((cardData, i) => {
        if (i > 1) {
          return (
            <Card
              id={cardData.id}
              key={i}
              imageSrc={cardData.imageSrc}
              title={cardData.title}
              description={cardData.description}
            />
          );
        }
      })}
    </div>
  );
}
