type DashboardItemProps = {
  title: string;
  totalSets: number;
  repsPerSet: number;
  weightPerSet: number[];
};
export default function DashboardItem({
  title,
  totalSets,
  repsPerSet,
  weightPerSet,
}: DashboardItemProps) {
  return (
    <div>
      <h1>{title}</h1>
      {/* info for exercise */}
      <div>
        <h3>
          {totalSets} x {repsPerSet}
        </h3>
        <h3>{weightPerSet.join(", ")}</h3>
      </div>
    </div>
  );
}
