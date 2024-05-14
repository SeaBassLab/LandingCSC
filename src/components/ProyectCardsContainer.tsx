import { FunctionComponent } from "react";
import ParallelCard from "./ParallelCard";

const ProyectCardsContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-center pt-0 px-0 pb-4 gap-[64px]">
      <ParallelCard />
      <ParallelCard />
      <ParallelCard />
      <ParallelCard />
      <ParallelCard />
      <ParallelCard />
    </div>
  );
};

export default ProyectCardsContainer;
