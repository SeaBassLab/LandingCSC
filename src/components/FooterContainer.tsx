import { FunctionComponent } from "react";
import { CSC, Text } from "@cencosud/parallel";
import styles from "./FooterContainer.module.css";

const FooterContainer: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectLogos}>
        <CSC />
      </div>
      <div className={styles.rectangleWrapper}>
        <Text className={styles.rectangle1} />
      </div>
    </div>
  );
};

export default FooterContainer;
