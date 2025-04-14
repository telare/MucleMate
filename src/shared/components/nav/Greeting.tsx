import styles from "@shared/styles/components-styles/Nav.module.scss";

export default function NavGreeting() {
// receive username from store
  return (
    <div className={styles.nav__LeftCon__GreetingCon}>
      <p>Hi, user!</p>
    </div>
  );
}
