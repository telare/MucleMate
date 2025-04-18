import Image from "next/image";
import styles from "@shared/styles/components-styles/Card.module.scss";
import Link from "next/link";

export type CardProps = {
  id: number;
  description: string;
  title: string;
  imgSrc: string;
  linkPrefix: string;
};

export default function Card({
  title,
  imgSrc,
  description,
  id,
  linkPrefix,
}: CardProps) {
  return (
    <Link href={`${linkPrefix}/${id}`} className={styles.card}>
      <div className={styles.card__imgCon}>
        <Image
          alt={`${title} preview`}
          src={imgSrc}
          fill
          priority
          className={styles.card__imgCon__image}
        />
      </div>
      <div className={styles.card__infoCon}>
        <h4 className={styles.card__infoCon__title}>{title}</h4>
        <p className={styles.card__infoCon__description}>{description}</p>
      </div>
    </Link>
  );
}
