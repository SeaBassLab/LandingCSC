import { FunctionComponent } from "react";
import { Button, CSC } from "@cencosud/parallel";
import styles from "./ParallelNavbar.module.css";

const ParallelNavbar: FunctionComponent = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.projectLogos}>
          <CSC />
        </div>
        <div className={styles.rectangleParent}>
          <Button
            className={styles.rectangle1}
            hierarchy="tertiary"
            label="Button"
          />
          <Button
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
