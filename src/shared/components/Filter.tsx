import styles from "@shared/styles/components-styles/Filter.module.scss";

type FilterProps = {
  categories: {
    title: string;
    options: string[];
  }[];
};

export default function Filter({ categories }: FilterProps) {
  return (
    <form className={styles.filter}>
      <div className={styles.filter__Item}>
        <h6>Item Title</h6>
        <div className={styles.filter__Item__OptionsCon}>
          <div className={styles.filter__Item__OptionsCon__Option}>
            <label>
              <input type="checkbox" />
              <p>Option 1</p>
            </label>
          </div>
          <div className={styles.filter__Item__OptionsCon__Option}>
            <label>
              <input type="checkbox" />
              <p>Option 1</p>
            </label>
          </div>
          <div className={styles.filter__Item__OptionsCon__Option}>
            <label>
              <input type="checkbox" />
              <p>Option 1</p>
            </label>
          </div>
        </div>
      </div>
      {categories.map((category, i) => (
        <div className={styles.filter__Item} key={i}>
          <h6>{category.title}</h6>
          <div className={styles.filter__Item__OptionsCon}>
            {category.options.map((opt, i) => (
              <div className={styles.filter__Item__OptionsCon__Option} key={i}>
                <label>
                  <input type="checkbox" />
                  {opt}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* <div className={styles.filter__Item}>
        <h6>Item Title</h6>
        <div className={styles.filter__Item__OptionsCon}>
          <div className={styles.filter__Item__OptionsCon__Option}>
            <label>
              <input type="checkbox" />
              <p>Option 1</p>
            </label>
          </div>
          <div className={styles.filter__Item__OptionsCon__Option}>
            <label>
              <input type="checkbox" />
              <p>Option 1</p>
            </label>
          </div>
          <div className={styles.filter__Item__OptionsCon__Option}>
            <label>
              <input type="checkbox" />
              <p>Option 1</p>
            </label>
          </div>
        </div>
      </div> */}
    </form>
  );
}
