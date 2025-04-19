import { SearchBtnIcon } from "@/utils/icons/Icons";
import styles from "@shared/styles/components-styles/Search.module.scss";
import Button from "./buttons/Button";
export default function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Pull-ups, diet ..." />
      <div className={styles.search__BtnCon}>
        <Button type="submit" icon={SearchBtnIcon}/>
      </div>
    </div>
  );
}
