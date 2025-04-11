import Image from "next/image";
import styles from "./Account.module.scss";
import FormField from "@/shared/components/FormField";
import { FormProvider } from "react-hook-form";
import Form from "./components/Form";
export default function AccountPage() {
  // const mockData2: {
  //   [key: string]: string | number;
  // } = {
  //   UserName: "User",
  //   Email: "test@gmail.com",
  //   Age: 0,
  //   Weight: 60,
  //   Height: 190,
  //   Goal: "Loose body fat",
  //   PhycialActivityLevel: 5,
  // };
  return (
    <div className={styles.account__Content}>
      <div className={styles.account__Content__ImgCon}>
        <Image alt="UserAccountImage" src={"/images/TestCartImg.png"} fill />
      </div>
      <Form />
    </div>
  );
}
