import { FunctionComponent } from "react";
import { CSC, Text } from "@cencosud/parallel";

const FooterContainer: FunctionComponent = () => {
  return (

    <div className="self-stretch flex-1 flex flex-row items-center justify-between">
      <div className="w-[300px] flex flex-row items-center justify-start">
        <CSC />
      </div>
      <div className="flex flex-row items-center justify-end">
        <Text className="w-[300px] relative" />
      </div>
    </div>
  );
};

export default FooterContainer;
