import styles from "@shared/styles/components-styles/Nav.module.scss";
import Link from "next/link";
import { links } from "@/app/home/utils/data";
export default function NavLinks() {
  const linksKeys = Object.keys(links);
  const linksValues = Object.values(links);
  return (
    <div className={styles.nav__MainCon__LinksCon}>
      <ul>
        {linksKeys.map((linkKey, i) => (
          <li key={i}>
            <Link
              href={`/${linkKey.slice(0, 1).toLowerCase()}${linkKey.slice(1)}`}
            >
              {linkKey}
            </Link>
            {linksValues[i] && (
              <ul>
                {linksValues[i].map((linkValue, j) => (
                  <li key={j}>
                    <Link
                      href={`/${linkKey.toLowerCase()}/${linkValue.toLowerCase().split(" ").join("-")}`}
                    >
                      {linkValue}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
