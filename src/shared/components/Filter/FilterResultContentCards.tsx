import styles from "@shared/styles/components-styles/CategoryDisplay.module.scss";
import Card, { CardData } from "../Cards/Card";

interface FilterResultsContentCards {
  renderContent: CardData[];
}

export default function FilterResultContentCards({
  renderContent,
}: FilterResultsContentCards) {
  return (
    <div className={styles.CardsContainer}>
      {renderContent.map((card, i) => {
        if (i > 1) {
          return (
            <Card
              key={i}
              id={card.id}
              description={card.description}
              title={card.title}
              imageSrc={card.imageSrc}
            />
          );
        }
      })}
    </div>
  );
}
