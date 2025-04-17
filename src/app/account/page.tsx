import Image from "next/image";
import styles from "./Account.module.scss";
import Form from "./components/Form";
export default function AccountPage() {
  return (
    <div className={styles.account__Content}>
      <div className={styles.account__Content__ProfileDataCon}>
        <div className={styles.account__Content__ProfileDataCon__ImgCon}>
          <Image alt="UserAccountImage" src={"/images/TestCardImg.png"} fill priority />
        </div>
          <Form />
      </div>
    </div>
  );
}
