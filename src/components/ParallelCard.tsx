import { FunctionComponent } from "react";
import { Text, Button } from "@cencosud/parallel";

const ParallelCard: FunctionComponent = () => {
  return (
    <div className="w-[440px] shadow-[0px_10px_15px_-3px_rgba(16,_24,_40,_0.1),_0px_4px_6px_-2px_rgba(2,_122,_72,_0.03)] rounded-3xl bg-base-white h-[301px] flex flex-col items-start justify-center pt-0 px-6 pb-6 box-border gap-[24px]">
      <img
        className="w-14 relative rounded-9xl h-14"
        alt=""
        src="/featured-icon.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <Text className="w-[300px] relative" variant="h3" className="" />
          <Text className="w-[300px] relative" className="" />
        </div>
        <Button className="w-[66px] relative" hierarchy="primary" label="Button" />
      </div>
    </div>
  );
};

export default ParallelCard;
