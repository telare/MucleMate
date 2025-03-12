import OnBoardingScreen from "../components/OnBoardingScreen";

export default function OnBoardingHomePage3() {
  const text: React.ReactNode = (
    <h3>
      A Community For <br /> You, Challenge <br /> Yourself
    </h3>
  );
  return (
    <OnBoardingScreen
      btn_texts={["Previous", "Next"]}
      logo_src="/images/on-boarding/Community.png"
      text={text}
      next_path="/sign-in"
    />
  );
}
