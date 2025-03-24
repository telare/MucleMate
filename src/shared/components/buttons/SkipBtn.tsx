"use client";
import Button from "@/shared/components/buttons/Button";
import { SkipBtnIcon } from "@/utils/icons/Icons";
import { useRouter } from "next/navigation";
export default function SkipBtn({ pathToSkip, style }: { pathToSkip: string, style:string }) {
  const router = useRouter();
  return (
    <Button
      icon={SkipBtnIcon}
      style={style}
      type="button"
      fnc={() => router.push(pathToSkip)}
    />
  );
}
