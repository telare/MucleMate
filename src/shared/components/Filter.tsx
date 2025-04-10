import styles from "@shared/styles/components-styles/Filter.module.scss";
import Button from "./buttons/Button";
type FilterProps = {
  categories: {
    title: string;
    options: string[];
  }[];
  onSubmit: () => void;
};
export default function Filter({ categories, onSubmit }: FilterProps) {
  return (
    <form className={styles.filter} onSubmit={onSubmit}>
      {categories.map((category, i) => (
        <div className={styles.filter__item} key={i}>
          <h6>{category.title}</h6>
          <div className={styles.filter__item__optionsCon}>
            {category.options.map((opt, i) => (
              <div className={styles.filter__item__optionsCon__option} key={i}>
                <label>
                  <input type="checkbox" />
                  {opt}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* btns */}
      <div className={styles.filter__buttonsCon}>
        <Button type="submit" text="Submit" style={styles.filter__buttonsCon__btn}/>
        <Button type="reset" text="Reset" style={styles.filter__buttonsCon__btn}/>
      </div>
    </form>
  );
}