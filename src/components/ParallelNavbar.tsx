import { FunctionComponent } from "react";
//TODO: Add Import for Storybook OnOca component
//TODO: Add Import for Storybook V component

const ParallelNavbar: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-base-white box-border h-16 flex flex-row items-center justify-start py-3 px-4 border-b-[1px] border-solid border-gray-200">
      <div className="self-stretch flex-1 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start">
          <OnOca className="w-[300px] relative" logoType />
        </div>
        <div className="flex flex-row items-center justify-end gap-[16px]">
          <V
            className="w-[66px] relative"
            hierarchy="tertiary"
            label="Button"
          />
          <V
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
