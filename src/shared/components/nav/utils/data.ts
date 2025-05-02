type Links = {
  title:string;
  mainPath:string,
  subLinks?:{
    title:string;
    path:string;
  }[]
}[]


export const links:Links = [
  {
    title: "home",
    mainPath: "/home",
  },
  {
    title: "workouts",
    mainPath: "/workouts",
    subLinks: [
      {
        title: "ForMen",
        path: "/for-men",
      },
      {
        title: "ForWomen",
        path: "/for-women",
      },
      {
        title: "All",
        path: "/all",
      },
      {
        title: "AddWorkout",
        path: "/add-workout",
      },
    ],
  },
] as const;
