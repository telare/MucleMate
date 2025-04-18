import Card from "@/shared/components/Carts/Card";
import styles from "../Home.module.scss";

interface SectionProps  {
  title: string;
};

export default function Section({ title }: SectionProps) {
  return (
    <section className={styles.home__Section}>
      <h3>{title}</h3>
      <div className={styles.home__Section__CardsCon}>
        {Array(14).fill(0,0,14).map((_, index) => (
          <Card
            id={index}
            key={index}
            imgSrc="./images/TestCardImg.png"
            title="plank"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione perferendis animi laboriosam placeat consectetur aperiam temporibus est ullam provident, accusantium dolorum, expedita dolore eaque aliquam a adipisci. Consectetur, consequuntur."
            linkPrefix={title.toLowerCase()}
          />
        ))}
      </div>
    </section>
  );
}
