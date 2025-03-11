import OnBoardingScreen from "../components/OnBoardingScreen";

export default function OnBoardingHomePage2() {
  const text: React.ReactNode = (
    <h3>
      Find Nutrition Tips <br /> That Fit Your Lifestyle
    </h3>
  );
  return (
    <OnBoardingScreen
      btn_texts={["Previous", "Next"]}
      logo_src="/images/on-boarding/Nutrition.png"
      text={text}
      next_path="/on-boarding/3"

    />
  );
}
