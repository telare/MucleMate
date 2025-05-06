export const initialrenderContentAPIState = [
  {
    id: 1,
    description: "",
    imageSrc: "",
    title: "",
  },
];

export const filterData = [
  {
    title: "Target Muscle Group",
    options: [
      { label: "Chest", value: "chest" },
      { label: "Back", value: "back" },
      { label: "Shoulders", value: "shoulders" },
      { label: "Biceps", value: "biceps" },
      { label: "Triceps", value: "triceps" },
      { label: "Legs", value: "legs" },
      { label: "Glutes & Hips", value: "glutes-hips" },
      { label: "Calves", value: "calves" },
      { label: "Core/Abs", value: "core-abs" },
    ],
  },
  {
    title: "Difficulty",
    options: [
      { label: "Easy", value: "easy" },
      { label: "Normal", value: "normal" },
      { label: "Hard", value: "hard" },
    ],
  },
];

export const sortBtnOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "A-Z", value: "asc" },
  { label: "Z-A", value: "desc" },
];
