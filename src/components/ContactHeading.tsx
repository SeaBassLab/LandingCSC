import { FunctionComponent } from "react";
import { Text } from "@cencosud/parallel";

const ContactHeading: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[8px] z-[0]">
      <div className="w-[427px] flex flex-col items-start justify-start">
        <Text className="w-[300px] relative" variant="h1" />
      </div>
      <Text className="w-[300px] relative" />
    </div>
  );
};

export default ContactHeading;
