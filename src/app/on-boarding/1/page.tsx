import OnBoardingScreen from "../components/OnBoardingScreen";

export default function OnBoardingHomePage1() {
  const text: React.ReactNode = (
      <h3>
        Start Your Journey <br /> Towards A More <br /> Active Lifestyle
      </h3>
  );

  return (
    <OnBoardingScreen
      btn_texts={["Previous", "Next"]}
      logo_src="/images/on-boarding/WorkOut.png"
      text={text}
      next_path="/on-boarding/2"
    />
  );
}
