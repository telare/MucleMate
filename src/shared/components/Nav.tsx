import styles from "@shared/styles/components-styles/Nav.module.scss";
import NavControls from "./nav/Controls";
import NavLogoBtn from "./nav/btns/LogoBtn";
import NavGreeting from "./nav/Greeting";
import NavLinks from "./nav/Links";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__LeftCon}>
        <div className={styles.nav__LeftCon__LogoCon}>
          <NavLogoBtn />
        </div>
        <NavGreeting />
      </div>

      <div className={styles.nav__MainCon}>
        <NavLinks/>
        <NavControls />
      </div>
    </nav>
  );
}
