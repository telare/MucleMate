import OnBoardingScreen from "../components/OnBoardingScreen";

export default function OnBoardingHomePage2() {
  return (
    <OnBoardingScreen
      btn_texts={["Previous", "Next"]}
      logo_src="/images/on-boarding/Nutrition.png"
      text={["Find Nutrition", "Tips That Fit", "Your Lifestyle"]}
      next_path="/on-boarding/3"
    />
  );
}
