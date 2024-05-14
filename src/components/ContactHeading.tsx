import { FunctionComponent } from "react";
import { Text } from "@cencosud/parallel";
import styles from "./ContactHeading.module.css";

const ContactHeading: FunctionComponent = () => {
  return (
    <div className={styles.headingAndSupportingText}>
      <div className={styles.headingAndIcon}>
        <Text className={styles.rectangle} variant="h1" />
      </div>
      <Text className={styles.rectangle} />
    </div>
  );
};

export default ContactHeading;
