import styles from "@shared/styles/components-styles/CategoryDisplay.module.scss";
import Cart, { CardProps } from "../Cards/Card";

interface FilterResultsContentCards {
  renderContent: Omit<CardProps, "linkPrefix">[];
  cardLinkPrefix:string; 
}

export default function FilterResultContentCards({renderContent,cardLinkPrefix}: FilterResultsContentCards) {
  return (
    <div className={styles.CardsContainer}>
      {Array(11)
        .fill(0)
        .map((_, index) => (
          <Cart
            key={index}
            id={1}
            description="sdss"
            title="Cart"
            imgSrc="./images/TestCardImg.png"
            linkPrefix={cardLinkPrefix}
          />
        ))}
    </div>
  );
}
