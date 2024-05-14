import { FunctionComponent } from "react";
//TODO: Add Import for Storybook V component
import ProyectCardsContainer from "./ProyectCardsContainer";

const Proyects: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
      <ProyectCardsContainer />
      <V className="w-[66px] relative" hierarchy="secondary" label="Button" />
    </div>
  );
};

export default Proyects;
