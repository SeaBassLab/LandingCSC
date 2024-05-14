import { FunctionComponent } from "react";
//TODO: Add Import for Storybook Unify component
//TODO: Add Import for Storybook Text component
import styles from "./FooterContainer.module.css";

const FooterContainer: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectLogos}>
        <Unify className={styles.rectangle} logoType />
      </div>
      <div className={styles.rectangleWrapper}>
        <Text className={styles.rectangle1} className="" />
      </div>
    </div>
  );
};

export default FooterContainer;
