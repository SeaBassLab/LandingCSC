import { FunctionComponent } from "react";
import FooterContainer from "./FooterContainer";

const Footer: FunctionComponent = () => {
  return (
    <div className="w-[1280px] bg-primary-25 box-border h-16 flex flex-row items-center justify-start py-6 px-4 border-b-[1px] border-solid border-gray-200">
      <FooterContainer />
    </div>
  );
};

export default Footer;
