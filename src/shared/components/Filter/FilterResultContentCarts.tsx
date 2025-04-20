import styles from "@shared/styles/components-styles/CategoryDisplay.module.scss";
import Cart, { CardProps } from "../Carts/Card";

interface FilterResultsContentCards {
  renderContent: Omit<CardProps, "linkPrefix">[];
  cardLinkPrefix:string; 
}

export default function FilterResultContentCarts({renderContent,cardLinkPrefix}: FilterResultsContentCards) {
  return (
    <div className={styles.cartsContainer}>
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
