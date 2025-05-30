"use client";
import styles from "@shared/styles/components-styles/CardDetailPage.module.scss";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CardDetails {
  imageSrc: string;
  title: string;
  description: string;
}

export default function CartDetailPage() {
  const { id } = useParams();
  const initialData = {
    imageSrc: "/images/wellcome-background-img-2.png",
    title: "Title",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget luctus massa, bibendum facilisis augue. In laoreet posuere tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sapien massa, efficitur id egestas vitae, dictum eu risus. Etiam sed ultricies lorem. Praesent volutpat leo id odio vulputate, vitae mattis felis porta. Suspendisse vulputate velit non dui maximus mollis. Etiam imperdiet sem mauris, ut dapibus nulla porttitor non. In id nisi id dolor viverra eleifend. Nullam lacinia ex in turpis vehicula, quis porta mi tincidunt. Vestibulum gravida, neque quis tincidunt interdum, elit dolor ornare augue, eget suscipit ligula metus consectetur nibh. Aliquam in hendrerit justo, ac vestibulum elit. Morbi nec leo mollis, congue lacus quis, viverra ligula. Quisque interdum sem tellus. Duis blandit ut nulla eget consequat. Maecenas vulputate arcu in nisi volutpat consequat. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vel libero vel arcu varius consectetur. Morbi a purus dapibus dolor porta vestibulum. Pellentesque aliquet sapien tortor, tristique maximus neque finibus at. Vestibulum porta maximus pretium. Mauris eget nisi a sapien aliquet eleifend in non mi. Praesent porta bibendum vestibulum. Aliquam tristique fringilla neque, in pellentesque elit vestibulum eget. ",
  };
  const [data, setData] = useState<CardDetails>(initialData);
  const token = localStorage.getItem("token");
  async function getCardDetails(id: string) {
    const resp = await fetch(`http://localhost:8080/exercises/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await resp.json();
    setData(data.data);
  }
  useEffect(() => {
    getCardDetails(id as string);
  }, [id]);
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={data.imageSrc}
          alt={`${data.title} full view`}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.decriptionWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>{data.title}</h1>
        </div>
        <div className={styles.description}>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
