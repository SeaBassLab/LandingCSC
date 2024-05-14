import { FunctionComponent } from "react";
import { Text, Input, CommentBox, Button } from "@cencosud/parallel";
import styles from "./ContactForm.module.css";

const ContactForm: FunctionComponent = () => {
  return (
    <div className="w-[446.9px] shadow-[0px_3.5px_5.26px_-0.88px_rgba(16,_24,_40,_0.1),_0px_1.8px_3.51px_-1.75px_rgba(16,_24,_40,_0.06)] rounded-[14.02px] bg-base-white flex flex-col items-end justify-start p-[21px] box-border gap-[14px] z-[1]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
        <Text className="w-[300px] relative" variant="h1" className="" />
        <Text className="w-[300px] relative" className="" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
        <Input
          className="w-[314px] relative"
          label="Label"
        />
        <Input
          className="w-[314px] relative"
          label="Label"
        />
        <CommentBox
          className="w-[279px] relative"
          label="Comentario adicional"
          placeholder="Escribe los comentarios adicionales"
        />
      </div>
      <div className="flex flex-row items-start justify-start">
        <Button hierarchy="primary" label="Button" />
      </div>
    </div>
  );
};

export default ContactForm;
