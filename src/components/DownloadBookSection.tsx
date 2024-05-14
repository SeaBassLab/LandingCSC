import { FunctionComponent } from "react";
import { Button, Text } from "@cencosud/parallel";

const DownloadBookSection: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-center">
      <div className="flex-1 flex flex-row items-center justify-center">
        <div className="flex-1 flex flex-col items-center justify-center gap-[32px]">
          <div className="self-stretch flex flex-col items-center justify-center">
            <Text className="w-[300px] relative" variant="h1" />
            <Text className="w-[300px] relative" />
          </div>
          <Button
            className="w-[66px] relative"
            hierarchy="secondary"
            label="Button"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadBookSection;
