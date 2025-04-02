import heroLogo from "../assets/images/Illustratio.png";
const HeroSection = () => {
  return (
    <div className="max-w-[90%] lg:max-w-[70%] mx-auto">
      <div className="md:grid md:grid-cols-2 space-x-3.5 bg-primary-foreground mt-32 items-center">
        <div>
          <h1>Lessons and insights from 8 years</h1>
        </div>
        <div>
          <img src={heroLogo} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
