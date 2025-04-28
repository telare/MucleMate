"use client";
import Button from "@/shared/components/buttons/Button";
import styles from "./StatusPage.module.scss";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.statusPage}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <Button
        onClick={() => reset()}
        translation={{ context: "common", key: "tryAgainBtn" }}
      />
    </div>
  );
}
