import { SearchBtnIcon } from "@/utils/icons/Icons";
import Button from "@shared/components/buttons/Button";
import styles from "@shared/styles/components-styles/Search.module.scss";
export default function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Pull-ups, diet ..." />
      <Button type="submit" icon={SearchBtnIcon} style={styles.search__Btn} />
    </div>
  );
}
