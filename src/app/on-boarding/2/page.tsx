import OnBoardingScreen from "../components/OnBoardingScreen";
import { useTranslations } from "next-intl";

export default function OnBoardingHomePage2() {
  const t = useTranslations("onBoarding");
  return (
    <OnBoardingScreen
      logo_src="/images/on-boarding/Nutrition.png"
      text={[t("title2"), t("title2_2"), t("title2_3")]}
      next_path="/on-boarding/3"
    />
  );
}
