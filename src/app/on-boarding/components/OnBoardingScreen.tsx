"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../OnBoarding.module.scss";
import Button from "@/shared/components/buttons/Button";

export default function OnBoardingScreen({
  logo_src,
  text,
  btn_texts,
  next_path,
}: {
  logo_src: string;
  text: React.ReactNode;
  btn_texts: string[];
  next_path: string;
}) {
  const router = useRouter();
  return (
    <div className={styles.main__con}>
      <Image
        src="/images/wellcome-background-img.png"
        alt="background"
        fill
        className={styles.back__img}
      />
      <div className={styles.main__con__inner}>
        <Image
          src={logo_src}
          alt="logo"
          width={100}
          height={100}
          className={styles.logo}
        />
        <div>{text}</div>
        <div>
          <Button text={btn_texts[0]} fnc={() => router.back()}/> 
          <Button text={btn_texts[1]} fnc={() => router.push(next_path)} />
        </div>
      </div>
    </div>
  );
}
