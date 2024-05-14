import { FunctionComponent } from "react";
import ContactHeading from "./ContactHeading";
import ContactForm from "./ContactForm";

const Contact: FunctionComponent = () => {
  return (
    <div className="w-[1280px] bg-base-white overflow-hidden flex flex-col items-center justify-start pt-0 px-28 pb-8 box-border">
      <div className="self-stretch flex flex-row items-center justify-center relative gap-[171px]">
        <ContactHeading />
        <ContactForm />
        <img
          className="w-[9.63%] absolute !m-[0] h-[27.81%] top-[11.71%] right-[104.01%] bottom-[60.48%] left-[-13.64%] max-w-full overflow-hidden max-h-full object-contain z-[2]"
          alt=""
          src="/group-269792-1@2x.png"
        />
        <img
          className="w-[9.63%] absolute !m-[0] h-[27.81%] top-[58.97%] right-[-13.51%] bottom-[13.22%] left-[103.88%] max-w-full overflow-hidden max-h-full z-[3]"
          alt=""
          src="/group-269793-1.svg"
        />
      </div>
    </div>
  );
};

export default Contact;
