import { FunctionComponent } from "react";
//TODO: Add Import for Storybook Text component
//TODO: Add Import for Storybook V component
import styles from "./ParallelCard.module.css";

const ParallelCard: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} alt="" src="/featured-icon.svg" />
      <div className={styles.content}>
        <div className={styles.textcontent}>
          <Text className={styles.rectangle} variant="h3" className="" />
          <Text className={styles.rectangle} className="" />
        </div>
        <V className={styles.rectangle2} hierarchy="primary" label="Button" />
      </div>
    </div>
  );
};

export default ParallelCard;
