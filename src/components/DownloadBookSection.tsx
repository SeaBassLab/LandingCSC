import { FunctionComponent } from "react";
import { Button, Text } from "@cencosud/parallel";
import styles from "./DownloadBookSection.module.css";

const DownloadBookSection: FunctionComponent = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headingAndSupportingText}>
            <Text className={styles.rectangle} variant="h1" />
            <Text className={styles.rectangle} />
          </div>
          <Button hierarchy="secondary" label="Button" />
        </div>
      </div>
    </div>
  );
};

export default DownloadBookSection;
