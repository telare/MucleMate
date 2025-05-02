"use client";
import styles from "@shared/styles/components-styles/Nav.module.scss";
import Link from "next/link";
import { links } from "@/shared/components/nav/utils/data";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface NavLinksProps {
  isMobile: boolean;
}
export default function NavLinks({ isMobile }: NavLinksProps) {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [nestedLinksOpen, setNestedLinksOpen] = useState<boolean>(false);
  
  return (
    <ul className={styles.linksContainer}>
      {links.map((link, i) => (
        <li
          key={i}
          className={
            pathname === link.mainPath
              ? styles.activeLink
              : undefined
          }
        >
          {isMobile ? (
            <button
              onClick={() => {
                setOpenIndex(isMobile ? i : 0);
                setNestedLinksOpen(!nestedLinksOpen);
              }}
            >
              <Link
                // href={`/${linkKey.slice(0, 1).toLowerCase()}${linkKey.slice(1)}`}
                href={""}
              >
              {t(`${link.title}Link`)}
              </Link>

              {link.subLinks &&
                openIndex === i &&
                nestedLinksOpen && (
                  <ul>
                    {link.subLinks.map((subLink, j) => (
                      <li key={j}>
                        <Link href={link.mainPath ? link.mainPath + subLink.path : subLink.path}>
                          {t(`${link.title}Link${subLink.title}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
            </button>
          ) : (
            <>
              <Link
                href={link.mainPath}
              >
                {t(`${link.title}Link`)}
              </Link>

              {link.subLinks && (
                <ul>
                  {link.subLinks.map((subLink, j) => (
                    <li key={j}>
                      <Link href={link.mainPath ? link.mainPath + subLink.path : subLink.path}>
                      {t(`${link.title}Link${subLink.title}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
