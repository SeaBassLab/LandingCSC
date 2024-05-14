import { FunctionComponent } from "react";
import ContactHeading from "./ContactHeading";
import ContactForm from "./ContactForm";

const Contact: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-base-white overflow-hidden flex flex-col items-center justify-start pt-0 px-28 pb-8">
      <div className="self-stretch flex flex-row items-center justify-center relative gap-[171px]">
        <ContactHeading />
        <ContactForm />
        <img
          className="w-[96.8px] absolute !m-[0] top-[56px] left-[-139.1px] h-[133px] overflow-hidden shrink-0 object-contain z-[2]"
          alt=""
          src="/frame-269792@2x.png"
        />
        <img
          className="w-[8.67%] absolute !m-[0] h-[27.81%] top-[58.97%] right-[-9.74%] bottom-[13.22%] left-[101.07%] max-w-full overflow-hidden max-h-full z-[3]"
          alt=""
          src="/group-2697931.svg"
        />
      </div>
    </div>
  );
};

export default Contact;
