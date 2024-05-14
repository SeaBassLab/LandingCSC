import { FunctionComponent } from "react";
import HeroSectionHeader from "./HeroSectionHeader";
import PartnerSection from "./PartnerSection";

const Hero: FunctionComponent = () => {
  return (
    <div className="bg-base-white overflow-hidden flex flex-col items-center justify-start pt-16 px-28 pb-8 relative gap-[120px]">
      <img
        className="w-[25.94%] absolute !m-[0] h-[55.21%] top-[-17.03%] right-[-7.55%] bottom-[61.82%] left-[81.62%] max-w-full overflow-hidden max-h-full object-contain z-[3]"
        alt=""
        src="/group-2697922@2x.png"
      />
      <img
        className="w-[11.47%] absolute !m-[0] h-[31.74%] top-[58.93%] right-[91.19%] bottom-[9.33%] left-[-2.67%] max-w-full overflow-hidden max-h-full object-contain z-[2]"
        alt=""
        src="/group-2697932@2x.png"
      />
      <HeroSectionHeader />
      <PartnerSection />
    </div>
  );
};

export default Hero;
