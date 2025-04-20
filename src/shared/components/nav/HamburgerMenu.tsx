"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";
import NavControls from "./Controls";
import NavLinks from "./Links";
import styles from "@shared/styles/components-styles/Nav.module.scss";

export default function HamburgerMenu() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className={styles.hamburger}>
      <Hamburger toggled={isActive} toggle={setIsActive} />

      {isActive && (
        <div className={styles.contentWrapper}>
          <NavLinks isMobile />
          <div className={styles.btnsContainer}>
            <NavControls />
          </div>
        </div>
      )}
    </div>
  );
}
