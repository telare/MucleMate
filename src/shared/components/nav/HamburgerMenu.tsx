"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";
import NavControls from "./Controls";
import NavLinks from "./Links";
import styles from "@shared/styles/components-styles/Nav.module.scss";

export default function HamburgerMenu() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className={styles.nav__Hamburger}>
      <Hamburger toggled={isActive} toggle={setIsActive} />

      {isActive && (
        <div className={styles.nav__Hamburger__Content}>
          <div className={styles.nav__Hamburger__Content__LinksCon}>
            <NavLinks />
          </div>
          <div className={styles.nav__Hamburger__Content__BtnsCon}>
            <NavControls />
          </div>
        </div>
      )}
    </div>
  );
}
