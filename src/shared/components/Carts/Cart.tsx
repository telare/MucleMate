import Image from "next/image";
import styles from "@shared/styles/components-styles/Cart.module.scss";
type Cart = {
  title: string;
  imgSrc: string;
  description: string;
};
export default function Cart({ title, imgSrc, description }: Cart) {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__ImgCon}>
        <Image alt={`${title}Cart__Img`} src={imgSrc} fill />
      </div>
      <div className={styles.cart__InfoCon}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
