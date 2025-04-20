import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "A-Z", value: "asc" },
  { label: "Z-A", value: "desc" },
];
interface SortBtnProps {
  setActiveSortMode: (mode: string) => void;
  activeSortMode: string;
}

export default function SortBtn({
  setActiveSortMode,
  activeSortMode,
}: SortBtnProps) {
  return (
    <Select value={activeSortMode} onValueChange={setActiveSortMode}>
      <SelectTrigger>
        <SelectValue placeholder={activeSortMode}></SelectValue>
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
