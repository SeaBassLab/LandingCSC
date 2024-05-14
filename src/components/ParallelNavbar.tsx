import { FunctionComponent } from "react";
//TODO: Add Import for Storybook OnOca component
//TODO: Add Import for Storybook V component
import styles from "./ParallelNavbar.module.css";

const ParallelNavbar: FunctionComponent = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.projectLogos}>
          <OnOca className={styles.rectangle} logoType />
        </div>
        <div className={styles.rectangleParent}>
          <V
            className={styles.rectangle1}
            hierarchy="tertiary"
            label="Button"
          />
          <V
            className={styles.rectangle1}
            hierarchy="tertiary"
            label="Button"
          />
        </div>
      </div>
    </div>
  );
};

export default ParallelNavbar;
