import OnBoardingScreen from "../components/OnBoardingScreen";

export default function OnBoardingHomePage1() {
  // const text: React.ReactNode = (
  //   <>
  //     <h3>Start Your Journey</h3>
  //     <h3>Towards A More</h3>
  //     <h3>Active Lifestyle</h3>
  //   </>
  // );

  return (
    <OnBoardingScreen
      btn_texts={["Previous", "Next"]}
      logo_src="/images/on-boarding/WorkOut.png"
      text={["Start Your Journey", "Towards A More","Active Lifestyle"]}
      next_path="/on-boarding/2"
    />
  );
}
