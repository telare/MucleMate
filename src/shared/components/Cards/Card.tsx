import Image from "next/image";
import styles from "@shared/styles/components-styles/Card.module.scss";
import Link from "next/link";

export type CardProps = {
  id: number;
  description: string;
  title: string;
  imgSrc: string;
};

export default function Card({
  title,
  imgSrc,
  description,
  id,
}: CardProps) {
  return (
    <Link href={`/card-details/${id}`} className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          alt={`${title} preview`}
          src={imgSrc}
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
