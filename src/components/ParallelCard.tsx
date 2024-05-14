import { FunctionComponent } from "react";
import { Text, Button } from "@cencosud/parallel";
import styles from "./ParallelCard.module.css";

const ParallelCard: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} alt="" src="/featured-icon.svg" />
      <div className={styles.content}>
        <div className={styles.textcontent}>
          <Text className={styles.rectangle} variant="h3" />
          <Text className={styles.rectangle} />
        </div>
        <Button
          className={styles.rectangle2}
          hierarchy="primary"
          label="Button"
        />
      </div>
    </div>
  );
};

export default ParallelCard;
