import HeroImg from "../utilities/HeroImg";
import HeroInfo from "../utilities/HeroInfo";

const Hero = () => {
  return (
    <div className="w-full grid md:grid-cols-2 gap-5">
      <HeroInfo />
      <HeroImg />
    </div>
  );
};

export default Hero;
