import { FunctionComponent } from "react";
import { Text, Button } from "@cencosud/parallel";
import styles from "./HeroSectionHeader.module.css";

const HeroSectionHeader: FunctionComponent = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.headingAndSupportingText}>
          <Text className={styles.rectangle} variant="h1" />
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

export default HeroSectionHeader;
