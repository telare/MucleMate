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
    title: "Home",
    mainPath: "/home",
  },
  {
    title: "Workouts",
    mainPath: "/workouts",
    subLinks: [
      {
        title: "For men",
        path: "/for-men",
      },
      {
        title: "For women",
        path: "/for-women",
      },
      {
        title: "All",
        path: "/all",
      },
      {
        title: "+ Add workout",
        path: "/add-workout",
      },
    ],
  },
] as const;
