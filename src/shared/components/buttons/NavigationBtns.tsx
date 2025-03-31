import { useRouter } from "next/navigation";
import Button from "./Button";

type NavigationBtnsProps = {
  previousPathName: string;
  nextPathName: string;
};

export default function NavigationBtns({
  previousPathName,
  nextPathName,
}: NavigationBtnsProps) {
  const router = useRouter();
  return (
    <div>
      <Button
        fnc={() => {
          router.push(previousPathName);
        }}
        text="Previous"
        type="submit"
      />
      <Button
        fnc={() => {
          router.push(nextPathName);
        }}
        text="Next"
        type="submit"
      />
    </div>
  );
}
