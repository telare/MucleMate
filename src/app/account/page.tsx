import Image from "next/image";
import styles from "./Account.module.scss";
import Form from "./components/Form";
export default function AccountPage() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.profileSection}>
        <div className={styles.imageContainer}>
          <Image alt="UserAccountImage" src={"/images/TestCardImg.png"} fill priority />
        </div>
          <Form />
      </div>
    </div>
  );
}
