import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortBtnOptions } from "./CategoryDisplay/utils/utils";
import { useTranslations } from "next-intl";


interface SortBtnProps {
  setActiveSortMode: (mode: string) => void;
  activeSortMode: string;
}

export default function SortBtn({
  setActiveSortMode,
  activeSortMode,
}: SortBtnProps) {
  const t = useTranslations("category");
  return (
    <Select value={activeSortMode} onValueChange={setActiveSortMode}>
      <SelectTrigger>
        <SelectValue placeholder={activeSortMode}></SelectValue>
      </SelectTrigger>
      <SelectContent>
        {sortBtnOptions.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {t(`sortBtnOption${opt.label}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
