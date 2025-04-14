import ThemeBtn from "../buttons/ThemeBtn";
import styles from "@shared/styles/components-styles/Nav.module.scss";
import UserProfileBtn from "./btns/UserProfileBtn";
export default function NavControls() {
  return (
    <div className={styles.nav__MainCon__BtnsCon}>
      <div className={styles.nav__MainCon__BtnsCon__themeBtnCon}>
        <ThemeBtn />
      </div>
      <UserProfileBtn />
    </div>
  );
}
