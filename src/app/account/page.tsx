import Image from "next/image";
import styles from "./Account.module.scss";
export default function AccountPage() {
  const mockData: string[] = [
    "UserName",
    "Email",
    "Age",
    "Weight",
    "Height",
    "Goal",
    "Phycial Activity Level",
  ];
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
      <div className={styles.account__Content__ProfileDataCon}>
        {mockData.map((data, i) => (
          <div
            className={styles.account__Content__ProfileDataCon__Item}
            key={i}
          >
            <label htmlFor={data}>{data}</label>
            {/* <FormField
              placeholder={data}
              registerTitle={data}
              defaultValue={data}
              disabled={true}
              type="text"
              translationContext="personalization"
            /> */}
            <input type="text" id={data} disabled defaultValue={data} />
          </div>
        ))}
      </div>
    </div>
  );
}
