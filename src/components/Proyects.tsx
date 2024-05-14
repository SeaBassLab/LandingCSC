import { FunctionComponent } from "react";
import { Button } from "@cencosud/parallel";
import ProyectCardsContainer from "./ProyectCardsContainer";

const Proyects: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
      <ProyectCardsContainer />
      <Button className="w-[66px] relative" hierarchy="secondary" label="Button" />
    </div>
  );
};

export default Proyects;
