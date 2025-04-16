"use client";
import Image from "next/image";
import styles from "@shared/styles/components-styles/Card.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type CardProps  = {
  id: number;
  description: string;
  title: string;
  imgSrc: string;
}

export default function Card({ title, imgSrc, description, id }: CardProps) {
  const pathname = usePathname();
  return (
    <Link href={`${pathname}/${id}`} >
      <div className={styles.card}>
        <div className={styles.card__imgCon}>
          <Image
            alt={`${title} preview`}
            src={imgSrc}
            fill
            className={styles.card__imgCon__image}
          />
        </div>
        <div className={styles.card__infoCon}>
          <h4 className={styles.card__infoCon__title}>{title}</h4>

          <p className={styles.card__infoCon__description}>{description}</p>
        </div>
      </div>
    </Link>
  );
}
