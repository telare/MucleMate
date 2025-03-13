"use client";
import Button from "@/shared/components/buttons/Button";
import styles from "../OnBoarding.module.scss";
import { useRouter } from "next/navigation";
export default function SkipBtn() {
  const router = useRouter();
  return <Button style={styles.skip__btn} text="Skip" type="button" fnc={()=>router.push("/sign-in")}/>;
}
