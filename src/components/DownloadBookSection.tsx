import { FunctionComponent } from "react";
//TODO: Add Import for Storybook Text component
//TODO: Add Import for Storybook V component
import styles from "./DownloadBookSection.module.css";

const DownloadBookSection: FunctionComponent = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headingAndSupportingText}>
            <Text className={styles.rectangle} variant="h1" className="" />
            <Text className={styles.rectangle} className="" />
          </div>
          <V
            className={styles.rectangle2}
            hierarchy="secondary"
            label="Button"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadBookSection;
