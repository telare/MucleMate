import styles from "@shared/styles/components-styles/Nav.module.scss";
import UserProfileBtn from "./btns/UserProfileBtn";
import ThemeBtn from "../buttons/ThemeBtn";
export default function NavControls() {
  return (
    <div className={styles.btnsContainer}>
      <ThemeBtn />
      <UserProfileBtn />
    </div>
  );
}
