export const onBoardingConfig: {
  titleTranslationKeys: string[];
  logoSrc: string;
}[] = [
  {
    titleTranslationKeys: ["title1", "title1_2", "title1_3"],
    logoSrc: "/images/on-boarding/WorkOut.png",
  },
  {
    titleTranslationKeys: ["title2", "title2_2", "title2_3"],
    logoSrc: "/images/on-boarding/Nutrition.png",
  },
  {
    titleTranslationKeys: ["title3", "title3_2", "title3_3"],
    logoSrc: "/images/on-boarding/Community.png",
  },
] as const;
