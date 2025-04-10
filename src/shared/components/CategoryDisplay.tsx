"use client";
import Filter from "@shared/components/Filter";
import styles from "@shared/styles/components-styles/CategoryDisplay.module.scss";
import Cart from "@shared/components/Carts/Cart";
type CategoryDisplayProps = {
  title: string;
};

export default function CategoryDisplay({ title }: CategoryDisplayProps) {
  const filterData = [
    { title: "category title", options: ["Option 1", "Option 1", "Option 1"] },
    { title: "category title", options: ["Option 1", "Option 1", "Option 1"] },
  ];
  return (
    <div className={styles.category}>
      <div className={styles.category__TitleCon}>
        <h1>{title}</h1>
      </div>
      <div className={styles.category__ContentWrapper}>
        <div className={styles.category__ContentWrapper__FilterCon}>
          <Filter categories={filterData} />
        </div>
        {/* Carts */}
        <div className={styles.category__ContentWrapper__CartsCon}>
          <Cart
            description="sdss"
            title="Cart"
            imgSrc="./images/TestCartImg.png"
          />
          {Array(11)
            .fill(0)
            .map((_, index) => (
              <Cart
                key={index}
                description="sdss"
                title="Cart"
                imgSrc="./images/TestCartImg.png"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
