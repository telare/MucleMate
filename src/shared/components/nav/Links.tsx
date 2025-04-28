"use client";
import styles from "@shared/styles/components-styles/Nav.module.scss";
import Link from "next/link";
import { links } from "@/app/home/utils/data";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  isMobile: boolean;
}
export default function NavLinks({ isMobile }: NavLinksProps) {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [nestedLinksOpen, setNestedLinksOpen] = useState<boolean>(false);
  const linksKeys = Object.keys(links);
  const linksValues = Object.values(links);
  return (
    <ul className={styles.linksContainer}>
      {linksKeys.map((linkKey, i) => (
        <li
          key={i}
          className={
            pathname === `/${linkKey.toLocaleLowerCase()}`
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
                {linkKey}
              </Link>

              {linksValues[i].subLinks &&
                openIndex === i &&
                nestedLinksOpen && (
                  <ul>
                    {linksValues[i].subLinks.map((link, j) => (
                      <li key={j}>
                        <Link href={`/${linkKey.toLowerCase()}/${link.link}`}>
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
            </button>
          ) : (
            <>
              <Link
                href={`/${linkKey.slice(0, 1).toLowerCase()}${linkKey.slice(
                  1
                )}`}
              >
                {linkKey}
              </Link>

              {linksValues[i].subLinks && (
                <ul>
                  {linksValues[i].subLinks.map((link, j) => (
                    <li key={j}>
                      <Link href={`/${linkKey.toLowerCase()}/${link.link}`}>
                        {link.title}
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
