import { FunctionComponent } from "react";
import { Text } from "@cencosud/parallel";
import Proyects from "./Proyects";
import DownloadBookSection from "./DownloadBookSection";

const Main: FunctionComponent = () => {
  return (
    <div className="w-[1280px] bg-primary-25 overflow-hidden flex flex-col items-center justify-start py-8 px-28 box-border gap-[40px]">
      <Text className="w-[300px] relative" variant="h1" className="" />
      <Proyects />
      <DownloadBookSection />
    </div>
  );
};

export default Main;
