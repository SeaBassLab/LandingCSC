import { FunctionComponent } from "react";
//TODO: Add Import for Storybook Text component
//TODO: Add Import for Storybook V component
import styles from "./HeroSectionHeader.module.css";

const HeroSectionHeader: FunctionComponent = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.headingAndSupportingText}>
          <Text className={styles.rectangle} variant="h1" className="" />
          <Text className={styles.rectangle} className="" />
        </div>
        <V className={styles.rectangle2} hierarchy="primary" label="Button" />
      </div>
    </div>
  );
};

export default HeroSectionHeader;
