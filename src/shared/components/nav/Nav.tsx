import styles from "@shared/styles/components-styles/Nav.module.scss";
import NavControls from "./Controls";
import NavLogoBtn from "./btns/LogoBtn";
import NavGreeting from "./Greeting";
import NavLinks from "./Links";
import HamburgerMenu from "./HamburgerMenu";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftContainer}>
        <div className={styles.logoContainer}>
          <NavLogoBtn />
        </div>
        <div className={styles.greetingContainer}>
          <NavGreeting />
        </div>
      </div>

      <div className={styles.mainContainer}>
        <NavLinks isMobile={false} />
        <NavControls />
      </div>
      <HamburgerMenu />
    </nav>
  );
}
