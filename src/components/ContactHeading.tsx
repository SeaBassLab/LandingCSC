import { FunctionComponent } from "react";
//TODO: Add Import for Storybook Text component
import styles from "./ContactHeading.module.css";

const ContactHeading: FunctionComponent = () => {
  return (
    <div className={styles.headingAndSupportingText}>
      <div className={styles.headingAndIcon}>
        <Text className={styles.rectangle} variant="h1" className="" />
      </div>
      <Text className={styles.rectangle} className="" />
    </div>
  );
};

export default ContactHeading;
