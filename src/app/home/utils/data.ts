export const links = {
  Home: {
    subLinks: false,
  },
  Workouts: {
    subLinks: [
      { title: "For Men", link: "for-men" },
      { title: "For Women", link: "for-women" },
      { title: "All", link: "all" },
      { title: "+ Add a workout", link: "add-workout" },
    ],
  },
} as const;
