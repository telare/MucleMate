import OnBoardingScreen from "../components/OnBoardingScreen";
import { useTranslations } from "next-intl";

export default function OnBoardingHomePage3() {
  const t = useTranslations("onBoarding");

  return (
    <OnBoardingScreen
      logo_src="/images/on-boarding/Community.png"
      text={[t("title3"), t("title3_2"), t("title3_3")]}
      next_path="/sign-in"
    />
  );
}
