import { FunctionComponent } from "react";
//TODO: Add Import for Storybook Text component
import Proyects from "./Proyects";
import DownloadBookSection from "./DownloadBookSection";
import styles from "./Main.module.css";

const Main: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <Text className={styles.rectangle} variant="h1" className="" />
      <Proyects />
      <DownloadBookSection />
    </div>
  );
};

export default Main;
