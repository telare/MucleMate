import { useTranslations } from "next-intl";
import OnBoardingScreen from "../components/OnBoardingScreen";

export default function OnBoardingHomePage1() {
  const t = useTranslations("onBoarding");
  return (
    <OnBoardingScreen
      logo_src="/images/on-boarding/WorkOut.png"
      text={[t("title1"), t("title1_2"), t("title1_3")]}
      next_path="/on-boarding/2"
    />
  );
}
