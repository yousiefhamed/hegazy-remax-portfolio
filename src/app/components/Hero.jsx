import HeroImg from "../utilities/HeroImg";
import HeroInfo from "../utilities/HeroInfo";

const Hero = () => {
  return (
    <div className="w-full max-w-[1950px] mx-auto grid md:grid-cols-2 gap-5 md:px-10 px-5">
      <HeroInfo />
      <HeroImg />
    </div>
  );
};

export default Hero;
