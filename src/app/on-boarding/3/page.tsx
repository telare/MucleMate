import OnBoardingScreen from "../components/OnBoardingScreen";

export default function OnBoardingHomePage3() {
  return (
    <OnBoardingScreen
      btn_texts={["Previous", "Next"]}
      logo_src="/images/on-boarding/Community.png"
      text={["A Community For","You, Challenge","Yourself"]}
      next_path="/sign-in"
    />
  );
}
