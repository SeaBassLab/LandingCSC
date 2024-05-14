import { FunctionComponent } from "react";
import { Text, Button } from "@cencosud/parallel";

const HeroSectionHeader: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-center pt-8 px-0 pb-16 z-[1]">
      <div className="flex-1 flex flex-col items-center justify-center gap-[32px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
          <Text className="w-[300px] relative" variant="h1" />
          <Text className="w-[300px] relative" />
          <div>
            <div>
              <div>
                <Text variant="h1" />
                <Text />
              </div>

              <Button hierarchy="primary" label="Button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHeader;
