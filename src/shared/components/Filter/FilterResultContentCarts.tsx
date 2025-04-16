import styles from "@shared/styles/components-styles/CategoryDisplay.module.scss";
import Cart, { CardProps } from "../Carts/Card";

interface FilterResultsContentCards {
  renderContent: CardProps[];
}

export default function FilterResultContentCarts({renderContent}: FilterResultsContentCards) {
  return (
    <div className={styles.category__ContentWrapper__CartsCon}>
      {Array(11)
        .fill(0)
        .map((_, index) => (
          <Cart
            key={index}
            id={1}
            description="sdss"
            title="Cart"
            imgSrc="./images/TestCardImg.png"
          />
        ))}
    </div>
  );
}
