import { FunctionComponent } from "react";
import { Text } from "@cencosud/parallel";
import Proyects from "./Proyects";
import DownloadBookSection from "./DownloadBookSection";
import styles from "./Main.module.css";

const Main: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <Text className={styles.rectangle} variant="h1" />
      <Proyects />
      <DownloadBookSection />
    </div>
  );
};

export default Main;
