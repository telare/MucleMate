import Cart from "@/shared/components/Carts/Cart";
import styles from "../Home.module.scss";

type SectionProps = {
  title: string;
};

export default function Section({ title }: SectionProps) {
  return (
    <section className={styles.home__Section}>
      <h3>{title}</h3>
      <div className={styles.home__Section__CartsCon}>
        <Cart
          imgSrc="./images/TestCartImg.png"
          title="plank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione perferendis animi laboriosam placeat consectetur aperiam temporibus est ullam provident, accusantium dolorum, expedita dolore eaque aliquam a adipisci. Consectetur, consequuntur."
        />
        <Cart
          imgSrc="./images/TestCartImg.png"
          title="plank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione perferendis animi laboriosam placeat consectetur aperiam temporibus est ullam provident, accusantium dolorum, expedita dolore eaque aliquam a adipisci. Consectetur, consequuntur."
        />
        <Cart
          imgSrc="./images/TestCartImg.png"
          title="plank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione perferendis animi laboriosam placeat consectetur aperiam temporibus est ullam provident, accusantium dolorum, expedita dolore eaque aliquam a adipisci. Consectetur, consequuntur."
        />
        <Cart
          imgSrc="./images/TestCartImg.png"
          title="plank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione perferendis animi laboriosam placeat consectetur aperiam temporibus est ullam provident, accusantium dolorum, expedita dolore eaque aliquam a adipisci. Consectetur, consequuntur."
        />
        <Cart
          imgSrc="./images/TestCartImg.png"
          title="plank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione perferendis animi laboriosam placeat consectetur aperiam temporibus est ullam provident, accusantium dolorum, expedita dolore eaque aliquam a adipisci. Consectetur, consequuntur."
        />
        <Cart
          imgSrc="./images/TestCartImg.png"
          title="plank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione perferendis animi laboriosam placeat consectetur aperiam temporibus est ullam provident, accusantium dolorum, expedita dolore eaque aliquam a adipisci. Consectetur, consequuntur."
        />
        <Cart
          imgSrc="./images/TestCartImg.png"
          title="plank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione perferendis animi laboriosam placeat consectetur aperiam temporibus est ullam provident, accusantium dolorum, expedita dolore eaque aliquam a adipisci. Consectetur, consequuntur."
        />
        <Cart
          imgSrc="./images/TestCartImg.png"
          title="plank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione perferendis animi laboriosam placeat consectetur aperiam temporibus est ullam provident, accusantium dolorum, expedita dolore eaque aliquam a adipisci. Consectetur, consequuntur."
        />
      </div>
    </section>
  );
}
