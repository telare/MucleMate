export type Exercise = {
  title: string;
  set: number;
  reps: number;
  weight: number;
  date: Date;
};
export const formFieldsConfig: { name: string; type: string }[] = [
  { name: "title", type: "text" },
  { name: "set", type: "number" },
  { name: "reps", type: "number" },
  { name: "weight", type: "number" },
];
