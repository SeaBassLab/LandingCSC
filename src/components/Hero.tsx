import { FunctionComponent } from "react";
import HeroSectionHeader from "./HeroSectionHeader";
import PartnerSection from "./PartnerSection";

const Hero: FunctionComponent = () => {
  return (
    <div className="bg-base-white overflow-hidden flex flex-col items-center justify-start pt-16 px-28 pb-8 relative gap-[120px]">
      <img
        className="w-[31.45%] absolute !m-[0] h-[67.73%] top-[-19.4%] right-[-15.72%] bottom-[51.67%] left-[84.27%] max-w-full overflow-hidden max-h-full object-contain z-[3]"
        alt=""
        src="/group-2697922@2x.png"
      />
      <img
        className="w-[11.57%] absolute !m-[0] h-[31.77%] top-[58.91%] right-[91.29%] bottom-[9.32%] left-[-2.87%] max-w-full overflow-hidden max-h-full object-contain z-[2]"
        alt=""
        src="/group-2697932@2x.png"
      />
      <HeroSectionHeader />
      <PartnerSection />
    </div>
  );
};

export default Hero;
