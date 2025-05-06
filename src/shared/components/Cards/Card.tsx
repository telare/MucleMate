import Image from "next/image";
import styles from "@shared/styles/components-styles/Card.module.scss";
import Link from "next/link";

export type CardData = {
  id: number;
  description: string;
  title: string;
  imageSrc: string;
};

export default function Card({
  title,
  imageSrc,
  description,
  id,
}: CardData) {
  return (
    <Link href={`/card-details/${id}`} className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          alt={`${title} preview`}
          src={imageSrc}
          fill
          priority
          className={styles.image}
        />
      </div>
      <div className={styles.infoContainer}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}
