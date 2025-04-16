"use client";
import styles from "@shared/styles/components-styles/CardDetailPage.module.scss";
import Image from "next/image";
import { useEffect } from "react";

export default function CartDetailPage() {
  const mockData = {
    imgSrc: "/images/wellcome-background-img-2.png",
    title: "Title",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget luctus massa, bibendum facilisis augue. In laoreet posuere tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sapien massa, efficitur id egestas vitae, dictum eu risus. Etiam sed ultricies lorem. Praesent volutpat leo id odio vulputate, vitae mattis felis porta. Suspendisse vulputate velit non dui maximus mollis. Etiam imperdiet sem mauris, ut dapibus nulla porttitor non. In id nisi id dolor viverra eleifend. Nullam lacinia ex in turpis vehicula, quis porta mi tincidunt. Vestibulum gravida, neque quis tincidunt interdum, elit dolor ornare augue, eget suscipit ligula metus consectetur nibh. Aliquam in hendrerit justo, ac vestibulum elit. Morbi nec leo mollis, congue lacus quis, viverra ligula. Quisque interdum sem tellus. Duis blandit ut nulla eget consequat. Maecenas vulputate arcu in nisi volutpat consequat. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vel libero vel arcu varius consectetur. Morbi a purus dapibus dolor porta vestibulum. Pellentesque aliquet sapien tortor, tristique maximus neque finibus at. Vestibulum porta maximus pretium. Mauris eget nisi a sapien aliquet eleifend in non mi. Praesent porta bibendum vestibulum. Aliquam tristique fringilla neque, in pellentesque elit vestibulum eget. ",
  };
  useEffect(() => {
    //fetching data & upd internal state for displaying a data
  }, []);
  return (
    <div className={styles.cardDetailPage}>
      {/* Centered image/carousel */}
      <div className={styles.cardDetailPage__imageContainer}>
        <Image
          src={mockData.imgSrc}
          alt={`${mockData.title} full view`}
          fill
          className={styles.cardDetailPage__imageContainer__image}
        />
      </div>

      {/* Main content */}
      <div className={styles.cardDetailPage__content}>
        <div className={styles.cardDetailPage__content__header}>
          <h1 className={styles.cardDetailPage__content__header__title}>
            {mockData.title}
          </h1>

          <p className={styles.cardDetailPage__content__header__description}>
            {mockData.description}
          </p>
        </div>
      </div>
    </div>
  );
}
