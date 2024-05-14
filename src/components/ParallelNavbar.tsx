import { FunctionComponent } from "react";
import { Button, CSC } from "@cencosud/parallel";

const ParallelNavbar: FunctionComponent = () => {
  return (
    <div className="w-[1280px] bg-base-white box-border h-16 flex flex-row items-center justify-start py-3 px-4 border-b-[1px] border-solid border-gray-200">
      <div className="self-stretch flex-1 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start">
          <CSC />
        </div>
        <div className="flex flex-row items-center justify-end gap-[16px]">
          <Button
            className="w-[66px] relative"
            hierarchy="tertiary"
            label="Button"
          />
          <Button
            className="w-[66px] relative"
            hierarchy="tertiary"
            label="Button"
          />
        </div>
      </div>
    </div>
  );
};

export default ParallelNavbar;
