import Image from "next/image";
import styles from "@shared/styles/components-styles/Cart.module.scss";

type CartProps = {
  title: string;
  imgSrc: string;
  description: string;
};

export default function Cart({ title, imgSrc, description }: CartProps) {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__imgCon}>
        <Image
          alt={`${title} preview`}
          src={imgSrc}
          fill
          className={styles.cart__imgCon__image}
        />
      </div>
      <div className={styles.cart__infoCon}>
        <h4 className={styles.cart__infoCon__title}>{title}</h4>
        <p className={styles.cart__infoCon__description}>{description}</p>
      </div>
    </div>
  );
}
