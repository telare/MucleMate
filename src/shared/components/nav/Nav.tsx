import styles from "@shared/styles/components-styles/Nav.module.scss";
import NavControls from "./Controls";
import NavLogoBtn from "./btns/LogoBtn";
import NavGreeting from "./Greeting";
import NavLinks from "./Links";
import HamburgerMenu from "./HamburgerMenu";

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
        <NavLinks />
        <NavControls />
      </div>
      <HamburgerMenu />
    </nav>
  );
}
